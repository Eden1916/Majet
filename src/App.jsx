import React, {useRef, useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main";
import Footer from "./components/Footer.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryPage from "./my category/CategoryPage.jsx"
import ProductDetail from "./product/ProductDetail.jsx"
/*import Vegetable from "./Pages/Vegetable.jsx"
import Grain from "./Pages/Grain.jsx"
*/
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
    <Route path="/Dashboard" element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>}/>
    <Route path="/Login" element={<Login theme={theme}/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/category/:category" element={<CategoryPage />} />
    <Route path="/product/:slug" element={<ProductDetail />} />
    <Route /*path="/Fruit" element={<Fruit/>}*//>
    <Route /*path="/BananaPage" element={<BananaPage*//>
    <Route /*path="/Vegetable" element={<Vegetable/>}*//>
    <Route /*path="/Grain" element={<Grain/>}*//>
    </Routes>
    </Router>
    

    </div>
  )
}

export default App
