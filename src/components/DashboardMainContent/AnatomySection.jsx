import React from "react";
import "../../styles/AnatomySection.css"
import body from '../../assets/body.png'
import { healthIndicators } from "../../data/healthStatus";

export default function AnatomySection() {
  return (
    <div className="anatomy">
      <img
        src={body}
        alt="Anatomical Illustration"
        className="anatomyImage"
      />
      {healthIndicators.map(({ id, label, color, position }) => (
        <div
          key={id}
          className="indicator"
          style={{ top: position.top, left: position.left, borderColor: color }}
        >
          <span className="dot" style={{ backgroundColor: color }}></span>
          <span className="label">{label}</span>
        </div>
      ))}
    </div>
  );
}
