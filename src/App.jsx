import React, {useRef, useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main";
import Footer from "./components/Footer.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryPage from "./Pages/CategoryPage.jsx"
import ProductDetail from "./Pages/ProductDetail.jsx"
import ProductGroup from "./Pages/ProductGroups.jsx";

import ScrollToTop from "./components/Scrollto.jsx";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") ?? "light";
  });


  
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const isDark = theme === "dark";
  
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const homeRef = useRef(null);
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  

  function scrollToSection(ref) {
    ref.current.scrollIntoView({behavior: "smooth"})
  }

  return (
<div className="min-h-screen  flex flex-col transition-colors duration-300">
      <Router>
      <ScrollToTop/>
      <Routes>
        <Route
        path="/"
        element={
      
    <>
    <Sidebar
    onHomeClick={() => scrollToSection(homeRef)}
    onProductClick={() => scrollToSection(productRef)}
    onAboutClick={() => scrollToSection(aboutRef)}
    onContactClick={() => scrollToSection(contactRef)}
    theme={theme}
    setTheme={setTheme}/>
    <header refs={{homeRef}}>
    <Header/>
    </header>
    <Main refs = {{ productRef, aboutRef}}/>
    <footer ref = {contactRef}>
    <Footer/>
    </footer>
    </>}/>
    <Route path="/Login" element={<Login theme={theme}/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/category" element={<ProtectedRoute><CategoryPage /></ProtectedRoute>} />
    <Route path="/product-groups/:categoryId" element={<ProtectedRoute><ProductGroup /></ProtectedRoute>} />
    <Route path="/product-details/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
    
    </Routes>
    </Router>
    

    </div>
  )
}

export default App
