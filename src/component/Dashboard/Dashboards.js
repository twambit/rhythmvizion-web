import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export const Dashboards = () => {

  const navigate = useNavigate();

  useEffect(() => {

    var loginuser = sessionStorage.getItem("loginuser");
    if (loginuser == null) {
      navigate("../");
    }
  }, []);
  return (
    <>
      <div className="logincontainer">
        <div className="Dashboard-box">
          <h1> Dashboard Content</h1>
          {/* <button onClick={() => {
            sessionStorage.removeItem("loginuser");
            navigate("../")
          }}>
            Logout
          </button> */}
        </div>
      </div>
    </>
  );
};
