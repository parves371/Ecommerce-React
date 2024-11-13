// components/TabNav.tsx
import React from "react";

interface TabNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, setActiveTab }) => (
  <ul className="nav nav-tabs text-uppercase">
    <li className="nav-item">
      <a
        className={`nav-link ${activeTab === "Description" ? "active" : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab("Description");
        }}
      >
        Description
      </a>
    </li>
    <li className="nav-item">
      <a
        className={`nav-link ${activeTab === "Additional-info" ? "active" : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab("Additional-info");
        }}
      >
        Additional info
      </a>
    </li>
    <li className="nav-item">
      <a
        className={`nav-link ${activeTab === "Reviews" ? "active" : ""}`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab("Reviews");
        }}
      >
        Reviews (3)
      </a>
    </li>
  </ul>
);

export default TabNav;
