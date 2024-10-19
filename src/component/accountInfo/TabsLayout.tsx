"use client";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import TrackOrders from "./TrackOrders";
import Address from "./Address";
import AccountDetails from "./AccountDetails";
import Logout from "./Logout";

const TabsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Orders />;
      case "track-orders":
        return <TrackOrders />;
      case "address":
        return <Address />;
      case "account-details":
        return <AccountDetails />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              Home
            </a>
            <span></span> Pages
            <span></span> Account
          </div>
        </div>
      </div>
      <section className="pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-md-4">
                  <div className="dashboard-menu">
                    <ul className="nav flex-column" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "dashboard" ? "active" : ""
                          }`}
                          id="dashboard-tab"
                          data-bs-toggle="tab"
                          href="#dashboard"
                          role="tab"
                          aria-controls="dashboard"
                          aria-selected={activeTab === "dashboard"}
                          onClick={() => setActiveTab("dashboard")}
                        >
                          <i className="fi-rs-settings-sliders mr-10"></i>
                          Dashboard
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "orders" ? "active" : ""
                          }`}
                          id="orders-tab"
                          data-bs-toggle="tab"
                          href="#orders"
                          role="tab"
                          aria-controls="orders"
                          aria-selected={activeTab === "orders"}
                          onClick={() => setActiveTab("orders")}
                        >
                          <i className="fi-rs-shopping-bag mr-10"></i>Orders
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "track-orders" ? "active" : ""
                          }`}
                          id="track-orders-tab"
                          data-bs-toggle="tab"
                          href="#track-orders"
                          role="tab"
                          aria-controls="track-orders"
                          aria-selected={activeTab === "track-orders"}
                          onClick={() => setActiveTab("track-orders")}
                        >
                          <i className="fi-rs-shopping-cart-check mr-10"></i>
                          Track Your Order
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "address" ? "active" : ""
                          }`}
                          id="address-tab"
                          data-bs-toggle="tab"
                          href="#address"
                          role="tab"
                          aria-controls="address"
                          aria-selected={activeTab === "address"}
                          onClick={() => setActiveTab("address")}
                        >
                          <i className="fi-rs-marker mr-10"></i>My Address
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeTab === "account-details" ? "active" : ""
                          }`}
                          id="account-details-tab"
                          data-bs-toggle="tab"
                          href="#account-details"
                          role="tab"
                          aria-controls="account-details"
                          aria-selected={activeTab === "account-details"}
                          onClick={() => setActiveTab("account-details")}
                        >
                          <i className="fi-rs-user mr-10"></i>Account Details
                        </a>
                      </li>

                      <Logout />
                    </ul>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="tab-content dashboard-content">
                    {renderTabContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TabsLayout;
