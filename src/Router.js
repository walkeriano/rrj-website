import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage.jsx";
import ServicesPage from "./pages/Services/ServicesPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import FreeInspectionPage from "./pages/FreeInspectionPage/FreeInspectionPage.jsx";
import FinancyPage from "./pages/FinancyPage/FinancyPage.jsx";
import InsurancePage from "./pages/InsurancePage/InsurancePage.jsx";
import EmergencyPage from "./pages/EmergencyPage/EmergencyPage.jsx";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Services" element={<ServicesPage/>}/>
            <Route path="/Contact" element={<ContactPage/>}/>
            <Route path="/free-inspection" element={<FreeInspectionPage/>}/>
            <Route path="/financing-service" element={<FinancyPage/>}/>
            <Route path="/insurance-claims-service" element={<InsurancePage/>}/>
            <Route path="/emergency-services" element={<EmergencyPage/>}/>
        </Routes>
    );
}