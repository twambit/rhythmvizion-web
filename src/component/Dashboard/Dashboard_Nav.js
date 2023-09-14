import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export const DashboardsNav = () => {
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <nav className="navigation">
            <a href="/" className="brand-name">
              <b>Dashboard</b>
            </a>
            <button
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              {/* icon from heroicons.com */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }
            >
              <ul>
                <li>
                  <Link to="../dashboard">Home</Link>
                </li>
                <li>
                  <Link to="../customerList">Customer</Link>
                </li>
                <li>
                  <button onClick={() => {
                    if (window.confirm('Are you certain you want to log out?')) {
                      sessionStorage.removeItem("loginuser");
                      navigate("../login")
                    }
                  }}>Logout</button>
                </li>
              </ul>
            </div>
            {/* <div className="btnclass">
              <a href="#" className="btn btn-header">
                Subscribe Now
              </a>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};
