import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {User,myreviews} from "./datasets";
import { PrismaClient as MySQLPrismaClient } from "../prisma/generated/mysql";
import { PrismaClient as MongoDBPrismaClient } from "../prisma/generated/mongodb";

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

app.post("/register",notAuth, (req: Request, res: Response) => {
  res.send("Hello,this is register page");
});
app.delete("/logout", (req: Request, res: Response, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
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
    res.status(400).json({ error: "Invalid order data" });}
    
    await mysqlPrisma.order.create({data:neworder});
   
    res.json({message:"Order created"});

  }catch(error){
    console.error("Error in /order",error);
    res.status(500).json({message:"Internal server error"});
  }/*finally {
    await mysqlPrisma.$disconnect();}*/
  
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});