import React from "react";
import { Header } from "./component/Header";
import { Logins } from "./component/Login/Logins";
import { Footer } from "./component/Footer";

export const Login = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Logins/>
      <Footer />
    </div>
  );
};
