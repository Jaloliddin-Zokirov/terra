import React from "react";
import { CarVideoYoutube, SuperCar } from "./components";
import { LuxuryCar } from "../../Components/LuxuryCar/LuxuryCar";
import Brands from "../../Components/Brands/Brands";
import Faq from "../Faq/Faq";
import Services from "../../Components/Services/Services";
import { TopLuxury } from "../../Components/TopLuxury/TopLuxury";

const Home = () => {
  return (
    <section className="bg-[#111219] relative">
      <TopLuxury />
      <Brands />
      <Services />
      <LuxuryCar />
      <CarVideoYoutube />
      <SuperCar />
      <Faq />
    </section>
  );
};

export default Home;
