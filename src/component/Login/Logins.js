import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Logins = () => {
  const navigate = useNavigate();

  useEffect(() => {

    var loginuser = sessionStorage.getItem("loginuser");
    if (!(loginuser == null)) {
      navigate("../dashboard");
    }
  }, []);
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password
    };
    axios.post("http://localhost:5000/auth/api/login", userData).then((response) => {
      if (response.data.loggedIn==true) {
        sessionStorage.setItem("loginuser", response.data.userid);
        navigate("../dashboard");
      }
      else {
        alert("Wrong username & password");
      }
    })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
        alert("Wrong username & password");
      });

    //   const data = qs.stringify({
    //     username,
    //     password,
    //   });
    //   const response = await axios.post(
    //     "http://localhost:5000/auth/api/login", data);
    //   // const response = await fetch("", {
    //   //   method: "POST",
    //   //   headers: {
    //   //     "Content-Type": "application/json",
    //   //   },
    //   //   body: JSON.stringify(formData),
    //   // });
    // if (response.ok) {
    //   // Redirect or show a success message
    //   alert("Working Fine!");
    // } else {
    //   // Handle login error
    //   alert("Wrong Password!");
    // }

  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="logincontainer">
          <div className="login-box">
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" autoFocus name="username" value={data.username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={data.password} onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
};
