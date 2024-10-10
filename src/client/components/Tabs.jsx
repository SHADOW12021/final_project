import React from 'react';
import '../index.css';
import '../App.css';// To ensure importing the correct CSS file



const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="tabs-container"> {/* Ensure the class name matches exactly */}
      <ul className="tabs">
        <li 
          className={`tab-item ${activeTab === 'myApplications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('myApplications')}
        >
          My Applications
        </li>
        <li 
          className={`tab-item ${activeTab === 'communityApplications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('communityApplications')}
        >
          Community
        </li>
        <li 
          className={`tab-item ${activeTab === 'stats' ? 'active' : ''}`} 
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </li>
      </ul>
      </div>
    );
  };
  
  export default Tabs;
