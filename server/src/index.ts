import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {User} from "./datasets";
import { PrismaClient as MySQLPrismaClient } from "../prisma/generated/mysql";
import { PrismaClient as MongoDBPrismaClient } from "../prisma/generated/mongodb";
import { PrismaClientKnownRequestError } from "../prisma/generated/mysql/runtime/library";




const app = express();
const PORT = process.env.PORT || 5001;
const flash=require('express-flash')
const session=require('express-session')
const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const bcrypt=require('bcrypt')

const mysqlPrisma = new MySQLPrismaClient();
const mongodbPrisma = new MongoDBPrismaClient();

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);
app.use(express.json());
app.use(flash())
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false
}))
initialize(passport)
app.use(passport.initialize())
app.use(passport.session())

async function findUserByEmail(email:string){
  return await mysqlPrisma.user.findUnique({where:{email:email} })}
    
    
async function findById(id:number){
    return await mysqlPrisma.user.findUnique({where:{id:id} })}

function initialize(passport:any){

  const authenticate=async (email:string,password:string,done:any)=>{
      const myuser= await findUserByEmail(email)

      if (!myuser ){
          return done(null,false,{message:'no such user'})}
      
          const isPasswordCorrect = await bcrypt.compare(password, myuser.password);

          if (isPasswordCorrect) {
              return done(null, myuser);
          } else {
              return done(null, false, { message: 'Password incorrect' });
          }
  }
    
  passport.use(new LocalStrategy({usernameField:'email'},authenticate))
  passport.serializeUser((user:any,done:any)=>{done(null,user.id)})
  passport.deserializeUser(async(id:number,done:any)=>{
    try {
      const user = await findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }})}
    
function checkAuth(req:Request,res:Response,next:any){
  if (req.isAuthenticated()){return next()}
  
  return res.status(401).json({ message: "Unauthorized. Please log in." }); 
}

function notAuth(req:Request,res:Response,next:any){
  if (req.isAuthenticated()){ 
    return res.status(403).json({ message: "Already logged in." });}
  return next()
}
app.post("/login",notAuth, (req: Request, res: Response,next) => {
  passport.authenticate('local',(err:any, user:User) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ success: true, username: user.firstname }); 
    });
  })(req, res, next);
}
);

app.post("/register",notAuth, async(req: Request, res: Response) => {
  try{
  const formdata=req.body
  const existingUser = await mysqlPrisma.user.findUnique({
    where:{ email: formdata.email },
  });

  if (existingUser) {
     res.status(400).json({ error: "Email already exists. Please log in or use another email." });
     return
  }
  const hashedpassword=await bcrypt.hash(formdata.password,10)
  formdata.password=hashedpassword
  const userdata=await mysqlPrisma.user.create({data:formdata})
  res.status(201).json({message:`success,account created for:${userdata.firstname}`});
   return}
  catch(error){
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
      res.status(400).json({ error: "Email already exists. Please use a different one." });
    return}
    console.error("server error in registration:",error);
     res.status(500).json({message:"Internal server error"});
  }finally {
    await mysqlPrisma.$disconnect();
  }
});
app.delete("/logout", (req: Request, res: Response, next) => {
  
    
    req.session.destroy((err) => {
      if (err) {return `server error, ${err}`}
      res.status(200).json({ message: "Logged out successfully" });});
  });

app.get("/auth-status", (req, res) => {
  res.json({
    isLoggedin: req.isAuthenticated(),
    username: req.isAuthenticated() ? (req.user as User).firstname : null
  });
});
app.get('/home',async(req,res)=>{
  try{
    let username=(req.user as User)?.firstname||'guest'
    
    const destinations = await mongodbPrisma.destination.findMany();
    const reviews = await mongodbPrisma.review.findMany();
   
    res.json({destinations,reviews,username});
    console.log('destinations sent')
  }catch(error){
    console.error("Error in /home",error);
    res.status(500).json({message:"Internal server error"});
  }finally {
    await mongodbPrisma.$disconnect();
  }
});

app.get('/destinations/:id',async(req: Request, res: Response)=>{
  try{
    const destinationid=req.params.id
    const mydestination = await mongodbPrisma.destination.
    findUnique({ where: { id: destinationid },include: { review: true },  });
    res.json({mydestination});
    console.log('description and review sent')
  }catch(error){
    console.error("Error in /destinations",error);
    res.status(500).json({message:"Internal server error"});
  }finally {
    await mongodbPrisma.$disconnect();
  }
});

app.get('/booking/:city',checkAuth,async(req: Request, res: Response)=>{
  try{
    const city=req.params.city
    if (!city || typeof city !== 'string') {
      res.status(400).json({ error: "Invalid city parameter" });}
      
    const [flights, hotels, transportation] = await Promise.all([
      mysqlPrisma.flight.findMany({ where: { destination: city } }),
      mysqlPrisma.hotel.findMany({ where: { city: city } }),
      mysqlPrisma.transport.findMany({ where: { origin: city } })
    ]);
   
    res.json({ flights, hotels, transportation });
  }catch(error){
    console.error("Error in /booking",error);
    res.status(500).json({message:"Internal server error"});
  }/*finally {
    await mysqlPrisma.$disconnect();
  }*/
});
app.post('/order',checkAuth,async(req: Request, res: Response)=>{
  try{
    const neworder = req.body; 
    if (!neworder || typeof neworder !== 'object') {
    res.status(400).json({ error: "Invalid order data" });
    return}
    if (!req.user){res.status(401).json({ error: "please log in to place booking" });
    return}
    const myorder={userid:(req.user as User).id, flightid:neworder.flight.id,
      transportid:neworder.transport.id, hotelid:neworder.hotel.id, destinationid:neworder.destinationid}

    await mysqlPrisma.order.create({data:myorder});
    res.status(201).json({message:"Order created"});
    console.log(myorder)

  }catch(error){
    console.error("Error in /order",error);
    res.status(500).json({message:"Internal server error"});
  }/*finally {
    await mysqlPrisma.$disconnect();}*/
  
});
app.get('/profile',checkAuth,async(req:Request,res:Response)=>{
  try{
    const myuser=await mysqlPrisma.user.findUnique({where:{id:(req.user as User).id},
    select:{firstname:true,lastname:true,email:true,phone:true}})
    console.log(req.user)
    res.status(200).json({myuser})
  }catch(error){
    res.json({message:`server error, ${error}`})
  }})

app.delete('/profile',checkAuth,async(req:Request,res:Response)=>{
  try{
    const myuser=req.user as User
    req.session.destroy((err) => {
    if (err) {
      res.status(500).json({message:`server error, ${err.message}`})}})

    const olduser=await mysqlPrisma.user.findUnique({where:{id:myuser.id},
    select:{firstname:true,lastname:true,email:true,phone:true}})

    if (!olduser) {
      res.status(404).json({ message: "User not found" });}
    else {
    const moveuser=await mysqlPrisma.deletedUser.create({data:olduser})
    if(!moveuser){
      res.status(500).json(`error archiving user`)}
    else{
      await mysqlPrisma.user.delete({where:{id:myuser.id}})
      res.status(200).json({ message: "user deleted successfully" })
    }}
    
  }catch(error:any){
    console.error("Unexpected server error:", error);
    res.json({message:`unexpected server error, ${error.message}`})
  }
})
app.patch('/profile',checkAuth,async(req:Request,res:Response)=>{
  try{
    const myuser=req.user as User
    const newdata=req.body
    const updateprofile=await mysqlPrisma.user.updateMany(
      {where:{id:myuser.id},data:newdata})
      
    if (!updateprofile){
      res.status(500).json('update failed,')}
  }
  catch(error){res.json(`server error,${error}`)}
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});