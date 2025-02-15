import React from "react";
import { CarVideoYoutube, SuperCar } from "./components";
import { LuxuryCar } from "../../Components/LuxuryCar/LuxuryCar";
import Brands from "../../Components/Brands/Brands";
import Faq from "../Faq/Faq";
import Services from "../../Components/Services/Services";
import { TopLuxury } from "../../Components/TopLuxury/TopLuxury";

const Home = () => {
  return (
    <>
    <TopLuxury />
      <Brands />
      <Services />
      <LuxuryCar />
      <CarVideoYoutube />
      <SuperCar />
      <Faq />
    </>
  );
};

export default Home;
