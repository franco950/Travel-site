import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import {hotels,destinations,flights,transports,users,reviews} from "./datasets";
import { PrismaClient as MySQLPrismaClient } from "../prisma/generated/mysql";
import { PrismaClient as MongoDBPrismaClient } from "../prisma/generated/mongodb";


const mysqlPrisma = new MySQLPrismaClient();
const mongodbPrisma = new MongoDBPrismaClient();


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + nodets");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
async function main(){
  try{/*
  const user=await mysqlPrisma.user.createMany({ data: users})
  console.log(user)
  const transport = await mysqlPrisma.transport.createMany({ data: transports})
  console.log(transport)
  const flight=await mysqlPrisma.flight.createMany({ data: flights})
  console.log(flight)
  const rooms=await mysqlPrisma.hotel.createMany({ data: hotels})
  console.log(rooms)
   const destination=await mongodbPrisma.destination.createMany({ data: destinations})
  console.log(destination)
  const review= await mongodbPrisma.review.createMany({ data: reviews})
  console.log(review)*/
} 
catch (error) {
  console.error("Error in main function:", error);
} finally {
  await mysqlPrisma.$disconnect();
  await mongodbPrisma.$disconnect();
}}

async function getflights(){}
async function gettransport(){}
async function getrooms(){}
async function getreviews(){}

main();