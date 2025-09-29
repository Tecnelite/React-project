import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">FixMyRide 🚗</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/garage">Garage Profile</Link>
      {/*   <Link to="/booking-confirmation">BookingConformation</Link>
       <Link to="/join">Join Garage</Link>
         
         <Link to="choose">booking</Link> */}
      </nav>
    </header>
  );
}
