import React, { useState,useMemo } from "react";
import {useDestinations,Destination,searchDestinations} from "./data/destinations";
interface DestinationCardProps {
  destination: Destination;
}

function DestinationPage(){
  const { destinations, loading, error } = useDestinations();
  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p>{error}</p>
  const options=["name","country","city","continent","price","duration"]
  const [query,setQuery]=useState("name")
  function choose(){
    console.log('choose function works')
    setQuery((prevQuery)=>{let i=((options.indexOf(prevQuery)+1)%options.length);
    return options[i]||"name"})}
  const parameter = `${query}query`; 
  const [answer,setAnswer]=useState("")
  const filteredDestinations = useMemo(() => {
    if (!answer) return destinations;
    return searchDestinations(destinations, { namequery:'paris' });
  }, [destinations, parameter, answer]);
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
