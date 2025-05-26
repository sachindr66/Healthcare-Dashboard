import React, { useState } from "react";
import "../styles/Sidebar.css";
import { navigationLinks } from "../data/NavigationLinks";
import * as Icons from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button
        className="menuToggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icons.Menu size={24} />
      </button>

       <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>

      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <h3 className="heading">General</h3>
        <nav className="nav">
          {navigationLinks.map(({ id, label, icon }) => {
            const IconComponent = Icons[icon];
            return (
              <a
                href="#"
                key={id}
                className={`navLink ${label === "Dashboard" ? "active" : ""}`}
                data-label={label}
                onClick={() => setIsOpen(false)} 
              >
                <IconComponent size={28} className="icon" />
                <span>{label}</span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
