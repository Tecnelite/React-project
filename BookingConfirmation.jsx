import React from "react";
import { useLocation } from "react-router-dom";

export default function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return <p>⚠ No booking details found.</p>;
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <div
        className="card"
        style={{
          display: "inline-block",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h2>✅ Emergency Booking Confirmed!</h2>
        <p>Your emergency service has been successfully booked.</p>

        <div style={{ marginTop: "10px", textAlign: "left" }}>
          <p>
            <strong>📍 Location:</strong> {booking.location}
          </p>
          <p>
            <strong>🏪 Garage:</strong> {booking.garage}
          </p>
          <p>
            <strong>🛠 Service:</strong> {booking.service}
          </p>
          <p>
            <strong>💳 Payment:</strong> {booking.payment}
          </p>
        </div>

        <h3 style={{ marginTop: "20px", color: "green" }}>
          🚗🔧 Mechanic reach soon!
        </h3>
      </div>
    </div>
  );
}