import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route,  } from 'react-router-dom'
import Login from "./pages/login";
import Compress from "./pages/Compress";
import Split from "./pages/Split";
import Contact from "./pages/Contact";
import Convert from "./pages/Convert";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Convert" element={<Convert/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Compress" element={<Compress/>}/>
          <Route path="/Split" element={<Split/>}/>
          <Route path="/Contact" element={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
