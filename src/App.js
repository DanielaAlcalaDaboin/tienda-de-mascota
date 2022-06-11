import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Categoria' element={<Categoria />} />

          </Routes>
      </BrowserRouter>  
      
      );
}

export default App;
