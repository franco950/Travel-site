import DestinationPage from "./destinationpage"
import { AuthProvider} from  "./context/AuthContext"
import DescriptionPage from "./descriptionpage"
import ProtectedRoute from "./components/ProtectedRoute";
import BookingPage from "./bookingpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./loginpage";
import RegistrationPage from "./registrationpage";
import OrderPage from "./orderpage"
import ProfilePage from "./profilepage";
import './profilepage.css'

function App(){
  return(<>
  <AuthProvider>
  <Router>
      <Routes>
        <Route path="/" element={<DestinationPage />} />
        <Route path="/destinations/:id" element={<DescriptionPage />} />
        <Route path="/booking/:id/:city" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/order/:id/:city" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      </Routes>
    </Router>
    </AuthProvider>
    
  
  </>)
}
export default App