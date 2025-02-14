import React from "react";
import { SuperCar } from "./_components";
import { LuxuryCar } from "../../Components/LuxuryCar/LuxuryCar";
import Brands from "../../Components/Brands/Brands";

const Home = () => {
  return (
    <section className="bg-[#111219] relative">
      <Brands />
      <SuperCar />
      <LuxuryCar />
    </section>
  );
};

export default Home;
