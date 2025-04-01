import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";


type UserProfile={
    firstname?:string;
    lastname?:string;
    email?:string;
    phone?:string;
}
async function getprofile(setMessage:React.Dispatch<React.SetStateAction<string>>){
    try{
        const response=await fetch("http://localhost:5000/profile",{
            method: "GET",
            headers: {
              "Content-Type": "application/json", 
            },
            credentials: "include",
        })
        const data=await response.json();
        if (response.status!==200){
            setMessage(data.message||'failed')
            return null
        }
        else {
            setMessage('your profile')
            return data
        }}
        catch(error:any){
            console.error(error)
            setMessage(`error retrieving profile,${error.message}`);return null}
    
}

async function changeprofile(data:UserProfile,
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setProfile:React.Dispatch<React.SetStateAction<UserProfile|null>>
){
    try{
    const response=await fetch("http://localhost:5000/profile",{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
        credentials: "include",
        
    })
    const result=await response.json()
    if (response.status===200){
        setMessage('Success')
        setProfile(result)
    }
    else{
        setMessage(result.message||'failed')
        return null
    }
    }catch(error:any){
        setMessage(`error updating user,${error.message}`)
    }
    
}
async function deleteprofile(
    setIsLoggedin:any,
    setMessage:React.Dispatch<React.SetStateAction<string>>,
    setProfile:React.Dispatch<React.SetStateAction<UserProfile|null>>
){
    try{
        
        console.log('got here')
        
        
        const response=await fetch("http://localhost:5000/profile",{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json", 
            },
            credentials: "include",
        })
        const result=await response.json()
        if (response.status===200){
            setIsLoggedin(false)
            setMessage('profile deleted')
            setProfile(null)
            return
        }
        else{
    
            setMessage(result.message||"error failed")
            return null
        }
    }catch(error:any){
        console.log('inside catch')
        setMessage(`error deleting user,${error.message}`)
    }
}
function handleChange(){
    return
}
function ProfilePage(){
    const {setIsLoggedin}=useAuth()
    const [message,setMessage]=useState('')
    const [isdeleted,handleDelete]=useState(false)
    const [profile,setProfile]=useState<UserProfile|null>(null);
    useEffect(()=>{
        async function fetchprofile(){
            const userdata=await getprofile(setMessage)
            if (userdata){
                setProfile(userdata.myuser)
                console.log(userdata)
            }
        }
        fetchprofile()},[]
    )
    
    return(
    <>
    <Navbar/>
    <>{message}</>
    {profile ? (
        <div>
            
          <p><strong>Firstname:</strong>{profile.firstname}
          <button onClick={()=>handleChange}>change</button></p>
          <p><strong>Lastname:</strong> {profile.lastname}
          <button onClick={()=>handleChange}>change</button></p>
          <p><strong>Email:</strong> {profile.email}
          <button onClick={()=>handleChange}>change</button></p>
          <p><strong>Phone:</strong> {profile.phone}
          <button onClick={()=>handleChange}>change</button></p>
          <button onClick={()=>handleDelete(true)}>delete my account</button>
          {isdeleted&&
          <div className='popup'><div className="popuptext">Are you sure you want to delete your account?,
          <br/> this action is permanent
          <button onClick={()=>{deleteprofile(setIsLoggedin, setMessage,setProfile);handleDelete(false)}}>YES</button>
          <button onClick={()=>handleDelete(false)}>cancel</button></div></div>}
        </div>
      ) : ( <p>Loading profile...</p>
        )}
    

    
    </>)
}
export default ProfilePage