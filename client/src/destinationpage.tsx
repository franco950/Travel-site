import { useEffect, useState } from "react";
import {useDestinations,Destination,searchDestinations} from "./data/destinations";
interface DestinationCardProps {
  destination: Destination;
}


function DestinationPage(){
  
  const { destinations, loading, error } = useDestinations();
  if (loading) console.log('Loading destinations...')
  if (error) console.log({error})

  const options=["name","country","city","continent","price","duration"]
  console.log("right b4 new states")
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [answer,setAnswer]=useState("")
  const [query,setQuery]=useState("name")
  
  console.log("right after new states")
  function choose(){
    console.log('choose function works')
    setQuery((prevQuery)=>{let i=(options.indexOf(prevQuery)+1)%options.length;
    return options[i]||"name"})}

    useEffect(() => {
      if (destinations.length > 0) {
        const parameter = `${query}query`;
        setFilteredDestinations(searchDestinations(destinations, { [parameter]: answer }));
      }
    }, [destinations, query, answer]);
  
  const Destinationcards=filteredDestinations.map((destination,index)=>{return <DestinationCard key={index} destination={destination}/>})
  return (
    <>
    <div className="choosebar">search by {query}<button onClick={choose}></button></div>
    <div><input
        type="text"
        placeholder="Search destinations..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      /></div>
    
  <div>{Destinationcards}</div>
  </>)
}

function DestinationCard({destination}:DestinationCardProps){
  
  const gethighlights=(destination.highlights ?? []).map((highlight:string, index:number) => (
    <li key={index}>{highlight}</li>
  ))
    return(
    <>
    <div className="destination-card">
      <h2>{destination.name}</h2>
     
      <p>{destination.text}</p>
      <ul>
        {gethighlights}
      </ul>
        </div>
        </>)
  }
 export default DestinationPage
