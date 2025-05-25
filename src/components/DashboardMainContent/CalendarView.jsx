import React from "react";
import "../../styles/CalendarView.css";
import { calendarMonth, calendarAppointments, detailedAppointments } from "../../data/calendarAppointments";

export default function CalendarView() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const renderAppointments = (day) => {
    const dayAppts = calendarAppointments.find((c) => c.day === day);
    if (!dayAppts) return null;
    return (
      <div className="appointments">
        {dayAppts.times.map((time, idx) => (
          <span key={idx} className="appointmentTime">
            {time}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar">
      <h2>{calendarMonth}</h2>
      <div className="weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="weekday">
            {d}
          </div>
        ))}
      </div>
      <div className="daysGrid">
        {days.map((day) => (
          <div key={day} className="day">
            <div className="dayNumber">{day}</div>
            {renderAppointments(day)}
          </div>
        ))}
      </div>

      <div className="detailedAppointments">
        {detailedAppointments.map(({ id, title, time, background,color,name }) => (
          <div
            key={id}
            className="appointmentCard"
            style={{ background: background, color: color }}
          >
            <div className="titles">{title}</div>
            <div className="time">{time}</div>
            <div className="time">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
