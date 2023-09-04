import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import PageNotFound from "./pages/PageNotFound"
// import {Home, About, Contact, Menu} from "./pages";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Menu/>} />
        <Route path="*" element={<About/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
