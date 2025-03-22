import DestinationPage from "./destinationpage"
import DescriptionPage from "./descriptionpage"
import BookingPage from "./bookingpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return(<>
  <Router>
      <Routes>
        <Route path="/" element={<DestinationPage />} />
        <Route path="/destinations/:id" element={<DescriptionPage />} />
        <Route path="/booking/:id/:city" element={<BookingPage />} />
      </Routes>
    </Router>
    
  
  </>)
}
export default App