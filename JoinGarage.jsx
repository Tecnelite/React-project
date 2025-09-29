import React from "react";

export default function JoinGarage() {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Join FixMyRide as a Garage Partner</h2>
      <p style={{ marginBottom: "20px" }}>
        Expand your business by reaching thousands of new customers online.
      </p>

      <div className="card" style={{ display: "inline-block", textAlign: "left" }}>
        <form>
          <label>Garage Name</label>
          <input type="text" placeholder="Enter garage name" required />

          <label>Location</label>
          <input type="text" placeholder="City / Area" required />

          <label>Contact Number</label>
          <input type="text" placeholder="Phone number" required />

          <button type="submit" style={{ marginTop: "15px" }}>Submit</button>
        </form>
      </div>
    </div>
  );
}
