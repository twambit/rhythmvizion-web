import React from "react";
import { Header } from "./Header";
import { Hero } from "./Heroheader";
import { Feature } from "./Feature";
import { Contactus } from "./Contactus";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="body-wrap">
      <Header />
      <Hero />
      <Feature />
      <Contactus />
      <Footer />
    </div>
  );
};
