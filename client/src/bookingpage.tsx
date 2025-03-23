import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getBooking,Flight,Transport,Hotel,BookingCart,clearstorage } from "./data/booking";
import { useState } from "react";


function BookingPage(){
    const { city,id } = useParams(); 
    if (!id ||!city) {console.log("id error in booking page");return} 
    clearstorage(id)//if user changed destinations the saved booking data will clear
    const {flights, hotels, transportation, loading, error }=getBooking(city)
    let [savedflight, setFlight] = useState<Flight>()
    let [savedhotel, setHotel ] = useState<Hotel>()
    let [savedtransport, setTransport ] = useState<Transport>()
    
    function chooseflight(id:Flight['id']){
        const selected:Flight|undefined=flights.find((flight:Flight)=>{if (flight.id==id){return true}})
            if(selected){setFlight(selected)}
            else{console.log('error in flight selection')}}

    function choosehotel(id:Hotel['id']){
        const selected:Hotel|undefined= hotels.find((hotel:Hotel)=>{if (hotel.id==id){return true}})
            if (selected){setHotel(selected)}
            else{console.log('error in hotel selection')}}

    function chooseTransport(id:Transport['id']){
        const selected=transportation.find((transport:Transport)=>{if(transport.id==id){return true}})
            if (selected){setTransport(selected)}
            else{console.log('error in transport selection')}}

    if (loading){console.log("bookingdata loading")}
    if (error){console.log(error)}

    const myflights=flights.map((flight:Flight)=>{return <div key={flight.id}>
        <button onClick={() => chooseflight(flight.id)}>
            <p>{flight.airline}</p>
            <p>{flight.class}</p>
            <p>{flight.price}</p>
        </button></div>})

    const myhotels=hotels.map((hotel:Hotel)=>{return <div key={hotel.id} >
        <button onClick={()=>choosehotel(hotel.id)}>
            <p>{hotel.name}</p>
            <p>{hotel.beds}</p>
        </button></div>})

    const mytransport=transportation.map((transport:Transport)=>{return <div key={transport.id}>
        <button onClick={()=>chooseTransport(transport.id)}>
            <p>{transport.mode}</p>
            <p>{transport.price}</p>
        </button></div>})
    const cartData = localStorage.getItem("cart") || "{}"; 
    let cart: BookingCart = JSON.parse(cartData);
    
    function getTopbar(savedflight:Flight|undefined,savedhotel:Hotel|undefined,savedtransport:Transport|undefined){
        let topbar=<div>select flight, hotel, and transport</div>
        if (savedflight && savedtransport && savedhotel&&id){
            cart={flight:savedflight,hotel:savedhotel,transport:savedtransport, destinationid:id}
            localStorage.setItem('cart', JSON.stringify(cart));

            topbar=<div>selected flight:{savedflight.airline} price:{savedflight.price},
                selected hotel:{savedhotel.name} price {savedhotel.price}, 
                selected transport:{savedtransport.mode} price{savedtransport.price} 
                total:{savedflight.price+savedhotel.price+savedtransport.price} 
                <button>confirm booking</button></div>
        }
        else if (cart.flight&&cart.hotel&&cart.transport){
            setFlight(cart.flight)
            setHotel(cart.hotel)
            setTransport(cart.transport)
        } 
        return topbar}
    
    const menu=getTopbar(savedflight,savedhotel,savedtransport)
    
    return(
    <>
    {menu}
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
