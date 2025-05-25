import React from "react";
import "../../styles/SimpleAppointmentCard.css";
import * as Icons from "lucide-react";

export default function SimpleAppointmentCard({ title, time, iconName }) {
  const IconComponent = Icons[iconName];
  return (
    <div className="card">
      <div className="icon">
        {IconComponent ? <IconComponent size={20} /> : null}
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
}

