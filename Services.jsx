import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const handleBook = (serviceName) => {
    navigate("/Booking", { state: { service: serviceName } });
  };

  return (
    <div className="services-page">
      <h2 className="services-title">🚨 Emergency Services</h2>

      <div className="services-container">
        {/* Engine Seas */}
        <div className="service-card">
          <h3 className="service-name">Engine Seas</h3>
          <p className="service-desc">
            Book your Emergency Engine Seas service
          </p>
          <button
            className="book-btn"
            onClick={() => handleBook("Engine Seas")}
          >
            Book Now
          </button>
        </div>

        {/* Tire Puncher */}
        <div className="service-card">
          <h3 className="service-name">Tire Puncher</h3>
          <p className="service-desc">
            Get your tires puncher service immediately
          </p>
          <button
            className="book-btn"
            onClick={() => handleBook("Tire Puncher")}
          >
            Book Now
          </button>
        </div>

        {/* Break Down Service */}
        <div className="service-card">
          <h3 className="service-name">Break Down Service</h3>
          <p className="service-desc">Full check-up for your car or bike</p>
          <button
            className="book-btn"
            onClick={() => handleBook("Break Down Service")}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}