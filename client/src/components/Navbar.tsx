import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedin, logout } = useAuth();
 

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedin ? (
        <>
        <button onClick={logout}>Logout</button>
        <Link to="/profile"><button>profile</button></Link></>
        
      ) : (
        <Link to="/login"><button>Login</button></Link>
      )}
    </nav>
  );
}
