import {Destination,destinations} from "./data/destinations"
interface DestinationCardProps {
    destination: Destination;
  }
function DestinationPage(){
    const DestinationPage=destinations.map((destination,index)=>{return <DestinationCard key={index} destination={destination}/>})
    return (<div>{DestinationPage}</div>)

}

function DestinationCard({destination}:DestinationCardProps){
    return(
    <>
    <div className="destination-card">
      <div className="image-container">< img src={destination.images[0]} alt="destination images"></img> </div>
      <p>{destination.name}</p>
      <p>{destination.text}</p>
      <ul>
        {destination.highlights.map((highlight:string, index:number) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
        </div>
        </>)
  }
 export default DestinationPage
