import React from "react";
import { CarVideoYoutube, SuperCar } from "./components";
import { LuxuryCar } from "../../Components/LuxuryCar/LuxuryCar";
import Brands from "../../Components/Brands/Brands";
import Faq from "../Faq/Faq";
import Services from "../../Components/Services/Services";
import { TopLuxury } from "../../Components/TopLuxury/TopLuxury";
import CarCardHomePage from "../CarCardHomePage/CarCardHomePage";
import InstagramSlider from "../../Components/InstagramSlider/InstagramSlider";

const Home = () => {
  return (
    <>
      <TopLuxury />
      <Brands />
      <CarCardHomePage />
      <Services />
      <LuxuryCar />
      <CarVideoYoutube />
      <SuperCar />
      <Faq />
      <InstagramSlider />
    </>
  );
};

export default Home;
