import React from "react";
import  '../styles/Header.css'
import { Search, Bell, Plus,UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Healthcare.</div>
      <div className="searchBar">
        <Search size={18} />
        <input type="text" placeholder="Search..."  />
      </div>
      <div className="icons">
        <Bell size={20} />
        <button className="addButton">
          <Plus size={20} />
        </button>
        <div className="userProfile">
        
          <div className="userProfile">
       <UserCircle size={30} />
          </div>
          <span>Dr. John Doe</span>
        </div>
      </div>
    </header>
  );
}
