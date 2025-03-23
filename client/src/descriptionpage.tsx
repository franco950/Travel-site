// import React,{ useEffect, useState } from "react";
import {getSingleDestination} from "./data/destinations";
import { clearstorage } from "./data/booking";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


function DescriptionPage(){
    const { id } = useParams(); 
    if (!id) {console.log("id error in descriptionpage function");return} 

    const {destination,loading,error}=getSingleDestination(id)
    if (!destination) {console.log("id error in descriptionpage function");return};

    if (loading){console.log('loading description page....')}
    if (error){console.log(error)}
    return (<>

    <Link to={"/"} ><button>go back</button></Link>
    <Link to={`/booking/${id}/${destination.city}`}><button onClick={()=>clearstorage(id)}>Book now</button></Link>
    <>{destination.text}</>
    </>)
}
export default DescriptionPage