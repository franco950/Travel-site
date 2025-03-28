import { Link,useNavigate } from 'react-router-dom';
 import React,{ useState } from "react";
 import { useAuth } from "./context/AuthContext";
 import { Navigate } from 'react-router-dom';

type Loginform={
    email:String
    password:String}

async function login(formData:Loginform,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    setIsLoggedin: (value: boolean) => void  ,
    navigate: (path: string) => void){
   
    
    if (!formData.email || !formData.password){
        setMessage('Error: Enter a valid username and password');
      return;}
    try{
    const response=await fetch("http://localhost:5000/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
        credentials: "include",
    
    })
    console.log(response)
    const data = await response.json();
    if (response.status === 403) {
        //  already authenticated, redirect to home
        
        
        navigate("/");
        alert('you are already logged in!')}
       
    else if (!response.ok) { 
        throw new Error(data.message || "Login failed")};
    
    setIsLoggedin(true);
    setMessage(`Welcome, ${data.username || "User"}!`)
    navigate('/');
        }
    catch(error:any) {
        console.error("Error logging in:", error);
        setMessage(error.message || "Error logging in. Check username and password.");}
    
     }

function LoginPage(){
    
    const [formData, setFormData]=useState({email:'',password:''})
    const [message, setMessage] = useState<string>("")
    const navigate = useNavigate();
    const { isLoggedin, setIsLoggedin } = useAuth();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });}
    
    if (isLoggedin){return  <Navigate to="/" />;}
    const handleLogin = async () => {
        await login(formData, setMessage, setIsLoggedin, navigate);
      };
    return(<>
    <p>{message}</p>
    <label >email</label>
    <input type='email'name="email" value={formData.email}onChange={handleChange}></input>
    <label>password</label>
    <input type="password" name='password'value={formData.password}onChange={handleChange}></input>
    <button type='submit' onClick={handleLogin}>login</button>
    <Link to={`/register`} ><button>sign up</button></Link>
    </>)
}

export default LoginPage