import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route,  } from 'react-router-dom'
import Login from "./pages/login";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<home/>}/>
          <Route path="/login" element={<Login/>}/>
       </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
