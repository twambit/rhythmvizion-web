import React from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'


export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showlogin, setlogin] = useState(true);
  const [showloginuser, setloginuser] = useState(false);

  const hash = window.location.hash;

  useEffect(() => {

    var loginuser = sessionStorage.getItem("loginuser");
    if (!(loginuser == null)) {
      setlogin(false);
      setloginuser(true);
    }
    else{
      setlogin(true);
      setloginuser(false);
    }
  }, []);

  useEffect(() => {
    switch (hash) {
      case "#feature":
        scrollToTestDiv()
        break;
        case "#conatct-us":
          scrollToTestContact()
        break;
    }
  }, [hash]);
  function scrollToTestDiv() {
    const feature = document.getElementById("feature");
    feature.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToTestContact() {
    const feature = document.getElementById("conatct-us");
    feature.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <nav className="navigation">
            <a href="/" className="brand-name">
              <img
                src={"/images/RythmLogoWhite.png"}
                alt="logo"
              />
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="../Product">Product</Link>
                </li>
                <li>
                  <Link to="/#feature" onClick={scrollToTestDiv}>Features</Link>
                  {/* <a onClick={scrollToTestDiv}>Features</a> */}
                </li>
                <li>
                  <Link to="/#conatct-us" onClick={scrollToTestContact}>Contact</Link>
                </li>
                {showlogin ? (
                <li className="header_login_btn">
                  <Link  to="../Login">Login</Link>
                </li>
                ) : null}
                {showloginuser ? (
                <li className="header_login_btn">
                  <Link  to="../dashboard">Dashboard</Link>
                </li>
                ) : null}
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
