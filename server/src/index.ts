import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {myreviews} from "./datasets";
import { PrismaClient as MySQLPrismaClient } from "../prisma/generated/mysql";
import { PrismaClient as MongoDBPrismaClient } from "../prisma/generated/mongodb";


const mysqlPrisma = new MySQLPrismaClient();
const mongodbPrisma = new MongoDBPrismaClient();


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
/*
async function main() {
  try{

    const transport = await mysqlPrisma.transport.createMany({ data: transports})
    console.log(transport)
    const flight=await mysqlPrisma.flight.createMany({ data: flights})
    console.log(flight)
    const rooms=await mysqlPrisma.hotel.createMany({ data: hotels})
    console.log(rooms)
    const newusers = await mysqlPrisma.user.createMany({ data: users})
    console.log(newusers)
  
  } 
  catch (error) {
    console.error("Error in main function:", error);
  } finally {
    await mysqlPrisma.$disconnect();
    
    
  }}*/
//  async function main(){
//   try {
//     const newreviews = await mongodbPrisma.review.createMany({ data: myreviews})
//     console.log(newreviews)
  
//   }catch (error) {
//     console.error("Error in main function:", error);
//   }
//  }
// main()
  /*
  await mysqlPrisma.hotel.deleteMany();
  await mysqlPrisma.flight.deleteMany();
  await mysqlPrisma.transport.deleteMany();
  
  }
main().catch(e => {
  throw e})*/
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + nodets");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/home',async(req,res)=>{
  try{
    const destinations = await mongodbPrisma.destination.findMany();
    const reviews = await mongodbPrisma.review.findMany();
    res.json({destinations,reviews});
    console.log('destinations sent')
  }catch(error){
    console.error("Error in /home",error);
    res.status(500).json({message:"Internal server error"});
  }finally {
    await mongodbPrisma.$disconnect();
  }
});

app.get('/destinations/:id',async(req,res)=>{
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

app.get('/booking',async(req: Request, res: Response)=>{
  try{
    const city=req.headers['city'] as string | undefined;
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
app.post('/order',async(req: Request, res: Response)=>{
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