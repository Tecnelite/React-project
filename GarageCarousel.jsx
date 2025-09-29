import React from "react";
import { Link } from "react-router-dom";

export default function GarageCarousel({ items }) {
  return (
    <div className="flex overflow-x-auto gap-4 pb-2">
      {items.map((g) => (
        <div
          key={g.id}
          className="min-w-[250px] bg-white shadow rounded overflow-hidden"
        >
          <img src={g.img} className="h-40 w-full object-cover" alt={g.name} />
          <div className="p-3">
            <div className="font-semibold">{g.name}</div>
            <div className="text-sm text-slate-500">{g.location}</div>
            <div className="text-sm">★ {g.rating}</div>
            <Link
              to={`/garage/${g.id}`}
              className="mt-2 inline-block bg-sky-600 text-white px-3 py-1 rounded text-sm"
            >
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
