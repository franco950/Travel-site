import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getBooking } from "./data/booking";

function BookingPage(){
    const { city,id } = useParams(); 
    if (!id ||!city) {console.log("id error in booking page");return} 
    const {flights, hotels, transportation, loading, error }=getBooking(city)
    if (loading){console.log("bookingdata loading")}
    if (error){console.log(error)}
    const myflights=flights.map((flight)=>{return <><p>{flight.airline}</p>
    <p>{flight.class}</p>
    <p>{flight.price}</p></>})
    const myhotels=hotels.map((hotel)=>{return <><p>{hotel.name}</p>
    <p>{hotel.beds}</p></>})
    const mytransport=transportation.map((transport)=>{return <><p>{transport.mode}</p>
    <p>{transport.price}</p></>})
 
    return(
    <>
    <Link to={`/destinations/${id}`} ><button>go back</button></Link>
    <h1>{city}</h1>
    <h2>Airlines</h2>
    <>{myflights}</>
    <h2>Hotels</h2>
    <>{myhotels}</>
    <h2>transport</h2>
    <>{mytransport}</>
    
    </>)
}
export default BookingPage
