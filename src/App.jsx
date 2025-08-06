// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './HomePage/Home';
import About from './About/About';
import Footer from './Footer/Footer';
import Dashboard from './DashBoard/DashBoard';

function AppWrapper() {
  const location = useLocation();

  // You can customize this array for more routes where you want to hide the Navbar
  const hideNavbarRoutes = ['/dashboard'];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
      {!shouldHideNavbar && <Footer></Footer>}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
