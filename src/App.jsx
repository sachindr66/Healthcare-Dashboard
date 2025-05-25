import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

const App = () => {
  return (
    <div className="app-container">
        <Header/>
      <div className="main-content">
        <Sidebar />
        <DashboardMainContent/>
      </div>
    </div>
  );
};

export default App;
