import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedin: boolean;
  username: string | null;
  checkAuth: () => void;
  logout: () => Promise<void>;
  setIsLoggedin: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  // Fetch auth status ONCE when the app loads
  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth-status", {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setIsLoggedin(data.isLoggedin);
        setUsername(data.username);
      } else {
        setIsLoggedin(false);
        setUsername(null);
      }
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsLoggedin(false);
    }
  };

  useEffect(() => {
    checkAuth(); // Call on mount
  }, []);

  // Logout function (updates global state)
  const logout = async () => {
    try {
      await fetch("http://localhost:5000/logout", {
        method: "DELETE",
        credentials: "include",
      });
      setIsLoggedin(false);
      setUsername(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedin, username, checkAuth, logout,setIsLoggedin}}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
