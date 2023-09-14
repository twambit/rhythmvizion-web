import React from "react";
import { Header } from "./component/Header";
import {Dashboards} from "./component/Dashboard/Dashboards"
import {DashboardsNav} from "./component/Dashboard/Dashboard_Nav"
import { Footer } from "./component/Footer";

export const Dashboard = () => {
  return (
    <div className="body-wrap">
      <Header />
      <DashboardsNav/>
      <Dashboards/>
      <Footer />
    </div>
  );
};