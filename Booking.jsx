import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Booking() {
  const locationHook = useLocation();
  const [location, setLocation] = useState("Fetching location...");
  const [manualLocation, setManualLocation] = useState("");
  const [garage, setGarage] = useState("");
  const [service, setService] = useState(locationHook.state?.service || ""); // 👈 comes from Services.jsx
  const [payment, setPayment] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
             ` https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setLocation(data.display_name || "Location not found");
            setManualLocation(data.display_name || "");
          } catch (error) {
            setLocation("Unable to fetch location");
          }
        },
        () => setLocation("Permission denied or unavailable")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!manualLocation || !garage || !service || !payment) {
      alert("⚠ Please fill all fields before confirming!");
      return;
    }

    navigate("/booking-confirmation", {
      state: {
        location: manualLocation ,
        garage,
        service,
        payment,
      },
    });
  };

 

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "red" }}>🚨 Emergency Booking</h2>

      <form onSubmit={handleSubmit}>
        <p><strong>Detected Location:</strong></p>
        <input
          type="text"
          value={manualLocation}
          onChange={(e) => setManualLocation(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <label><strong>Select Garage:</strong></label>
        <select
          value={garage}
          onChange={(e) => setGarage(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        >
          <option value="">-- Select Garage --</option>
          <option value="Ravi Motors - Vadapalani">Ravi Motors - Vadapalani</option>
          <option value="Sharma Garage - Tambaram">Sharma Garage - Tambaram</option>
          <option value="Veera Garage - OMR">Veera Garage - OMR</option>
          <option value="Mahesh Works - Velachery">Mahesh Works - Velachery</option>
        </select>

        <label><strong>Selected Service:</strong></label>
        <input
          type="text"
          value={service}
          readOnly
          style={{ width: "100%", padding: "8px", marginBottom: "15px", backgroundColor: "#f9f9f9" }}
        />

        <label><strong>Payment Method:</strong></label>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        >
          <option value="">-- Select Payment Method --</option>
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}