import React from "react";
import "../../styles/HealthStatusCards.css";
import { healthIndicators } from "../../data/healthStatus";

export default function HealthStatusCards() {
  const cards = healthIndicators.filter((h) => h.label !== "Healthy Leg");

  return (
    <div className="cards">
      {cards.map(({ id, label, status, color }) => (
        <div key={id} className="card">
          <div
            className="statusIndicator"
            style={{ backgroundColor: color }}
          />
          <div>
            <h3 className="title">{label}</h3>
            <p className="status">
              {status === "healthy" ? "Healthy" : "Needs Attention"}
            </p>
            <p className="date">Last update: 24 Oct 2021</p>
          </div>
        </div>
      ))}
    </div>
  );
}
