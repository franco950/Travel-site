import { useParams } from "react-router-dom";
import {  useState } from "react";
import { Link } from 'react-router-dom';
import { BookingCart } from "./data/booking";


async function makeorder(orderData:BookingCart,
    setMessage:React.Dispatch<React.SetStateAction<string>>){
    try{
    const response=await fetch("http://localhost:5000/order",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(orderData),
        credentials: "include",
    });
    const data=await response.json();
    if (response.status==400){
        setMessage('fa1led to place order, please try booking again')
    }
    else if(response.status!==201){
        setMessage('error placing order')
        throw new Error(data.message || "order request failed")
    }
    else if (response.status==201){
        localStorage.removeItem("cart");
        setMessage(`'success! order placed.`)
        
    }}
    catch(error){setMessage(`error sending request,${error}`)}
}

function OrderPage(){
    const[message, setMessage]=useState('')
    const { city,id } = useParams(); 
    const cartData = localStorage.getItem("cart")
    let cart: BookingCart | null = null;
    if (cartData) {
        try {
            cart = JSON.parse(cartData);
        } catch (error) {
            console.error("Error parsing cart data:", error);
        }
    }
    
    function order(){
        if (cart){
        return makeorder(cart,setMessage)}
    }
    function getbuttons(){
    if (cart){return<> <Link to={`/booking/${id}/${city}`} ><button>change booking</button></Link>
    <button onClick={order}>confirm order</button></>}
    else{ return<><Link to={`/`} ><button>home</button></Link></>}}
    return(<>
    <>{message}</>
    <>{cart && <p>Destination ID: {cart.destinationid}</p>}</>
    <>{getbuttons()}</>
    </>
)
}
export default OrderPage