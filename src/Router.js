import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage.jsx";
import ServicesPage from "./pages/Services/ServicesPage.jsx";
import Contact from "./pages/Contact/ContactPage.jsx";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    );
}