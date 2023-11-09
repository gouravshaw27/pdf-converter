import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route,  } from 'react-router-dom'
import Login from "./pages/login";
import Convert from "./pages/Convert"




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Convert/>}/>
          <Route path="/login" element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
