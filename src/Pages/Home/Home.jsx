import React from "react";
import { SuperCar } from "./_components";
import { LuxuryCar } from "../../Components/LuxuryCar/LuxuryCar";

const Home = () => {
  return (
    <section className="bg-[#111219] relative">
      <SuperCar />
      <LuxuryCar />
    </section>
  );
};

export default Home;
