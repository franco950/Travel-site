import DestinationPage from "./destinationpage"
import DescriptionPage from "./descriptionpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return(<>
  <Router>
      <Routes>
        <Route path="/" element={<DestinationPage />} />
        <Route path="/destinations/:id" element={<DescriptionPage />} />
      </Routes>
    </Router>
    
  
  </>)
}
export default App