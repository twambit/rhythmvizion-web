import { useNavigate,useLocation  } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Pagination from '../../../Pagination';


let PageSize = 10;
export const CustomerLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    var loginuser = sessionStorage.getItem("loginuser");
    if (loginuser == null) {
      navigate("../");

    }
    setLoading(true);
    
    axios.get("http://localhost:5000/api/customers").then(response => response.data)
      .then(json => setTableData(json))
      .finally(() => {
        setLoading(false)
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
  }, []);
  const routeChange = () => {
    let path = `/CustomerActions`;
    navigate(path,{
      state: {
        actionname:"Insert",
        action:true
      }
    });
  }
function routeChangeedit(updid){
    let path = `/CustomerActions`;
    navigate(path,{
      state: {
        actionname:"Update",
        action:false,
        id:updid
      }
    });
  }
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * PageSize;
    const endIndex = startIndex + PageSize;
    return tableData.slice(startIndex, endIndex);
  };
  // let currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return tableData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  return (

    <>
      <div className="logincontainer">
        <div className="Dashboard-box">
          <div className="cards m-3">
            <div className="card">
              <h1 className="p-0 m-0 textleft"> View Customer </h1>
            </div>
            <div className="card"></div>
            <div className="card textright">
              <button onClick={routeChange} className="w-50"> New Customer</button>
            </div>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <><table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getPaginatedData().map(cust => (
                  <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>{cust.name}</td>
                    <td>{cust.number}</td>
                    <td>{cust.email}</td>
                    <td><button className="btn-sm" type="button" onClick={()=> routeChangeedit(cust.id)}>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table><Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={tableData.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)} /></>
          )}

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
