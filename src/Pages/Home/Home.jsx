import React from "react";
import { CarVideoYoutube, SuperCar } from "./components";
import { LuxuryCar } from "../../Components/LuxuryCar/LuxuryCar";
import Brands from "../../Components/Brands/Brands";
import Faq from "../Faq/Faq";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <>
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
