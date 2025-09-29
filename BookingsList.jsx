import React from "react";
import { GARAGES } from "../data/garages";
import { SERVICES } from "../data/services";

export default function BookingsList() {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  if (!bookings.length) {
    return <div>No bookings yet.</div>;
  }

  return (
    <div className="space-y-3">
      {bookings.map((b) => {
        const garage = GARAGES.find((g) => g.id === b.garageId);
        const service = SERVICES.find((s) => s.id === b.serviceId);
        return (
          <div key={b.id} className="border p-3 rounded bg-white">
            <div className="font-semibold">{garage?.name}</div>
            <div>{service?.title}</div>
            <div>
              {b.date} at {b.time}
            </div>
          </div>
        );
      })}
    </div>
  );
}
