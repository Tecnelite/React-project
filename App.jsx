import React from "react";
import { Routes, Route, Link}from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";


import Home from "./pages/Home";
import Services from "./pages/Services";
import GarageProfile from "./pages/GarageProfile";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import About from "./pages/About";
import JoinGarage from "./pages/JoinGarage";


export default function App(){
  return(
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/garage" element={<GarageProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/choose" element={<Booking />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<JoinGarage />} />
        <Route path="*" element={<main className="p-8">Page not found. <Link to="/">Home</Link></main>} />
      </Routes>
      <Footer />
    </div>
  );
}