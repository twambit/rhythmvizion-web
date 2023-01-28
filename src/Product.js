import React from "react";
import { Header } from "./component/Header";
import { Products } from "./component/Product/Products";
import { Footer } from "./component/Footer";

export const Product = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Products/>
      <Footer />
    </div>
  );
};
