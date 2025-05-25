import React from "react";
import "../../styles/ActivityFeed.css";

export default function ActivityFeed() {
  return (
    <div className="activity">
      <h2>Activity</h2>
      <p>3 appointments on this week</p>
      <div className="chart">
  <div className="bar" style={{ '--final-height': '60%' }}></div>
  <div className="bar" style={{ '--final-height': '80%' }}></div>
  <div className="bar" style={{ '--final-height': '50%' }}></div>
</div>

    </div>
  );
}
