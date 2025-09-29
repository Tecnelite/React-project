import React from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();

  const goToServices = () =>{navigate("/services");}
  const gotoGarageProfile = () =>{navigate("/garage");}
  return (
    <div>
      <section className="hero">
        <h2>Book Trusted Local Mechanics Online 🚗</h2>
        <p>
          Fast bookings, transparent pricing, and trusted local partners — get
          your vehicle back on the road.
        </p>
        <button onClick={goToServices}>Book-Emergency Service</button>
        <button style={{marginLeft:"20px"}} onClick={gotoGarageProfile}>Book-All Service</button>
      </section>

      <h2 style={{ textAlign: "center", margin: "30px 0" }}>Featured Garages</h2>
      <div style={{ textAlign: "center" }}>
        <div className="card">
          <img src="" alt="Ravi Motors" />
          <h3>Ravi Motors</h3>
          <h5>Speed recovery From emergency Service</h5>
          <p>Velacheri,Chennai</p>
          <p>⭐ 4.7</p>
        </div>

        <div className="card">
          <img src="" alt="Sharma Garage" />
          <h3>Sharma Garage</h3>
          <h4>Especially For Emergency Service</h4>
          <p>Thambaram,Chennai</p>
          <p>⭐ 4.4</p>
        </div>
         <div className="card">
          <img src="" alt="Ravi Motors" />
          <h3>Veera Garage</h3>
          <h5>Speed recovery From emergency Service</h5>
          <p>OMR,Chennai</p>
          <p>⭐ 4.8</p>
        </div>
         <div className="card">
          <img src="" alt="Ravi Motors" />
          <h3>Mahesh Works</h3>
          <h5>Speed recovery From emergency Service</h5>
          <p>VadaPalani,Chennai</p>
          <p>⭐ 4.6</p>
        </div>
      </div>
    </div>
  );
}
