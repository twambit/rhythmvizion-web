import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../Header";
import { DashboardsNav } from "../../Dashboard/Dashboard_Nav"
import { Footer } from "../../Footer";
import { Link } from "react-router-dom";

export const CustomerActions = () => {
  const location = useLocation();
  //the data here will be an object since an object was
  const datapara = location.state;
  const navigate = useNavigate();
  var loginuser = sessionStorage.getItem("loginuser");

  const [updata, setUpData] = useState([]);
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    notes: ""
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
      name: data.name,
      number: data.number,
      email: data.email,
      notes: data.notes,
      user_id: loginuser
    };
    axios.post("http://localhost:5000/api/customers", userData).then((response) => {
      navigate("../../customerlist");
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
        alert("Some Error Occured!");
      });
  };
  /* Update Data */

  useEffect(() => {
    if (datapara.id != null && datapara.actionname === "Update") {
      const urlpluspara = "http://localhost:5000/api/customers/" + datapara.id;
      axios.get(urlpluspara).then(response => response.data)
        .then(json => setUpData(json))
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
          alert("Some Error Occured!");
        });
      console.log(data);
    }
  }, []);
 
  const updateState = (index) => (e) => {
    const newArray = updata.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setUpData(newArray);
  };
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const userData = {
      name: updata[0].name,
      number: updata[0].number,
      email: updata[0].email,
      notes: updata[0].notes
    };
    const urlpluspara = "http://localhost:5000/api/customers/" + datapara.id;
    axios.put(urlpluspara, userData).then((response) => {
      navigate("../../customerlist");
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
        alert("Some Error Occured!");
      });
  };



  return (
    <>
      <Header />
      <DashboardsNav />
      <div className="logincontainer">
        <div className="login-box">
          <div className="cards">
            <div className="card textleft verticalcenter">
              <Link to="../../customerlist"> Back</Link>
            </div>
            <div className="card">
              <h1 className="p-0 m-0">{datapara.actionname} Customer</h1>
              <label hidden>{datapara.id}</label>
            </div>
          </div>
          {datapara.action ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" autoFocus name="name" maxLength="255" value={data.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="number">Phone Number</label>
                <input type="text" id="number" name="number" maxLength="15" value={data.number} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" maxLength="255" value={data.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <input id="notes" name="notes" maxLength="5000" value={data.notes} onChange={handleChange} />
              </div>
              <button type="submit">{datapara.actionname}</button>
            </form>
          ) : (
            <div>
              {updata && updata.length > 0 && updata.map((updatas, index) => (
                <form onSubmit={handleSubmitUpdate}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" autoFocus name="name" maxLength="255" value={updatas.name} onChange={updateState(index)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <input type="text" id="number" name="number" maxLength="15" value={updatas.number} onChange={updateState(index)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" maxLength="255" value={updatas.email} onChange={updateState(index)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input id="notes" name="notes" maxLength="5000" value={updatas.notes} onChange={updateState(index)} />
                  </div>
                  <button type="submit">{datapara.actionname}</button>
                </form>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
