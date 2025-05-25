import React from "react";

import "../../styles/DashboardMainContent.css"
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

export default function DashboardMainContent() {
  return (
    <main className="main">
      <DashboardOverview/>
      <div className="grid">
        <section className="leftColumn">
          <div className="leftchild">
          <AnatomySection />
          <HealthStatusCards />
          </div>
          <ActivityFeed />
        </section>
        <section className="rightColumn">
          <CalendarView />
          <UpcomingSchedule />
        </section>
      </div>
    </main>
  );
}

