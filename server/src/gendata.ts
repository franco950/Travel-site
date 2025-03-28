/*
async function main() {
  try{
    const userlist:User[] = await mysqlPrisma.user.findMany()
    console.log(userlist)
    userlist.forEach(async single => {
      const hashedpassword=await bcrypt.hash(single.password,10)
      const newuser=await mysqlPrisma.user.update({where:{id:single.id},data:{password:hashedpassword}})
      console.log(newuser)
    })
//  async function main(){
//   try {
//     const newreviews = await mongodbPrisma.destination.updateMany({ where:{city:'Denpasar'},data:{city:'Bali'}})
//     console.log(newreviews)
  
//   }catch (error) {
//     console.error("Error in main function:", error);
//   }
//  }
// main()
    
    /*

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
    
    
  }}
  main()
*/
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


