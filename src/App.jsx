// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './HomePage/Home';
import About from './About/About';
import Footer from './Footer/Footer';
import Dashboard from './DashBoard/DashBoard';
import SignUp from './Authentication/SignUp';
import Blog from './Blogs/Blog';
import { PostJobProvider } from './Context/PostJobProvider';

function AppWrapper() {
  const location = useLocation();

  // Route configuration
  const routeConfig = {
    '/': { showNavbar: true, showFooter: true },
    '/about-us': { showNavbar: true, showFooter: true },
    '/dashboard': { showNavbar: false, showFooter: false },
    '/sign-in': { showNavbar: false, showFooter: false }
  };

  const currentRouteConfig = routeConfig[location.pathname] || { showNavbar: true, showFooter: true };

  return (
    <>
      {/* Show Navbar based on current route config */}
      {currentRouteConfig.showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
      
      {/* Show Footer based on current route config */}
      {currentRouteConfig.showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <PostJobProvider>
         <AppWrapper />
    </PostJobProvider>
    </BrowserRouter>
  );
}

export default App;