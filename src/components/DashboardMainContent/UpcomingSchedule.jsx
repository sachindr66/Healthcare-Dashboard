import React from "react";
import "../../styles/UpcomingSchedule.css";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import { upcomingAppointments } from "../../data/upcomingAppointments";

export default function UpcomingSchedule() {
  return (
    <div className="upcoming">
      <h2>The Upcoming Schedule</h2>
      {upcomingAppointments.map(({ id, dayLabel, appointments }) => (
        <div key={id} className="daySection">
          <h3>{dayLabel}</h3>
          <div className="appointment">
            {appointments.map(({ id, title, time, icon }) => (
              <SimpleAppointmentCard
                key={id}
                title={title}
                time={time}
                iconName={icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
