import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function GarageProfile() {
  const location = useLocation();
  const selectedService = location.state?.serviceName || "All Service Include";

  // Local states for date & form visibility
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(null);

  const handleSubmit = (e, garageName) => {
    e.preventDefault();

    if (!date) {
      alert("⚠ Please select a date before submitting!");
      return;
    }

    // Show popup confirmation
    alert(`
      ✅ Booking Confirmed!\n\nGarage: ${garageName}\nService: ${selectedService}\nDate: ${date}\n\n🚗 Mechanic will call you soon!
    `);
  };

  return (
    <div className="garage-profile">
      <h2 className="garage-title">Garage Profile</h2>

      {/* Garage 1 */}
      <div className="garage-card">
        <h3>Rai Motors</h3>
        <p>
          <strong>Location:</strong> Vadapalani
        </p>
        <p className="garage-rating">⭐ Rating: 4.7/5</p>

        <h4>Available Services:</h4>
        <ul>
          <li>Oil Change - $300</li>
          <li>Tire Replacement - $1000</li>
          <li>General Service - $1500</li>
        </ul>

        <p className="garage-price">All Service Include - $2500</p>

        {!showForm ? (
          <button onClick={() => setShowForm("Rai Motors")}>
            Book Appointment
          </button>
        ) : showForm === "Rai Motors" ? (
          <form onSubmit={(e) => handleSubmit(e, "Rai Motors")}>
            <label>
              Select Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
        ) : null}
      </div>

      {/* Garage 2 */}
      <div className="garage-card">
        <h3>Maari Car Works</h3>
        <p>
          <strong>Location:</strong> Velachery
        </p>
        <p className="garage-rating">⭐ Rating: 4.5/5</p>

        <h4>Available Services:</h4>
        <ul>
          <li>Oil Change - $300</li>
          <li>Wheel Alignment - $1000</li>
          <li>General Service - $1200</li>
        </ul>

        <p className="garage-price">All Service Include - $2800</p>

        {!showForm ? (
          <button onClick={() => setShowForm("Maari Car Works")}>
            Book Appointment
          </button>
        ) : showForm === "Maari Car Works" ? (
          <form onSubmit={(e) => handleSubmit(e, "Maari Car Works")}>
            <label>
              Select Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
        ) : null}
      </div>

      {/* Garage 3 */}
      <div className="garage-card">
        <h3>Cars Doctor</h3>
        <p>
          <strong>Location:</strong> Adyar
        </p>
        <p className="garage-rating">⭐ Rating: 4.3/5</p>

        <h4>Available Services:</h4>
        <ul>
          <li>Oil Change - $300</li>
          <li>Tire Replacement with Wheel Alignment - $2100</li>
          <li>General Service - $1200</li>
        </ul>

        <p className="garage-price">All Service Include - $3500</p>

        {!showForm ? (
          <button onClick={() => setShowForm("Cars Doctor")}>
            Book Appointment
          </button>
        ) : showForm === "Cars Doctor" ? (
          <form onSubmit={(e) => handleSubmit(e, "Cars Doctor")}>
            <label>
              Select Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
        ) : null}
      </div>
    </div>
  );
}