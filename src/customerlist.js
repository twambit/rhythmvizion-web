import React from "react";
import { Header } from "./component/Header";
import {CustomerLists} from "./component/Dashboard/Customer/CustomerLists"
import {DashboardsNav} from "./component/Dashboard/Dashboard_Nav"
import { Footer } from "./component/Footer";

export const CustomerList = () => {
  return (
    <div className="body-wrap">
      <Header />
      <DashboardsNav/>
      <CustomerLists/>
      <Footer />
    </div>
  );
};