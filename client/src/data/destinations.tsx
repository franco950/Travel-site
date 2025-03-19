
export type Destination={
  
    name:string,
    images:string[],
    country:string,
    city:string,
    continent:string,
    text:string,
    price:number,
    duration:string
    highlights:string[],

  }
  let destinations:Destination[]=[]
  destinations.push({name:"Nairobi",images:[".client/src/assets/nairobi-wildlife.jpg"],country:"Kenya",city:"Nairobi",continent:"Africa",text:"some text",price:1000,duration:"2 days",highlights:["a","b","c"]},
    {name:"Nairobi",images:[".client/src/assets/HD-Wildlife-Image.jpg"],country:"Kenya",city:"Nairobi",continent:"Africa",text:"some text",
      price:2000,duration:"3 days",highlights:["a","f","r"]}
  )

export {destinations}