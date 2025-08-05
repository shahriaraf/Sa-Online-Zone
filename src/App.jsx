// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './HomePage/Home';
import About from './About/About';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
