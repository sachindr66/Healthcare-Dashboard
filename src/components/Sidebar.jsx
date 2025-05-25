import React from "react";
import  "../styles/Sidebar.css";
import { navigationLinks } from "../data/NavigationLinks";
import * as Icons from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="heading">General</h3>
      <nav className="nav">
        {navigationLinks.map(({ id, label, icon }) => {
          const IconComponent = Icons[icon];
          return (
            <a href="#" key={id} className="navLink" data-label={label}>
              <IconComponent size={28} className="icon" />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
