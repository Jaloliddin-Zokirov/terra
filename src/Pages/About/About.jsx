import { Link } from "react-router-dom";
import React from "react";
import BgImage from "../../../public/about_bg-img.png";

const About = () => {
  return (
    <section id="about" className="relative about min-[480px]:py-[50px]">
      <img
        src={BgImage}
        className="hidden min-[992px]:flex w-full h-full absolute opacity-30 top-0"
        alt="image"
      />
      <div className="container relative text-white text-center min-[480px]:text-left py-[25px] min-[480px]:py-[50px] px-2">
        <Link to="/" className="text-[#fff9]">
          Luxury Cars for Rent in Dubai / aboutUs
        </Link>
        <h3 className="text-[26px] min-[480px]:text-[32px] font-semibold my-[15px] min-[480px]:my-[50px]">
          About us
        </h3>
        <h4 className="text-[22px] min-[480px]:text-[30px]">
          Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable
          Journeys in Dubai!
        </h4>
        <p className="text-[#cacaca] text-[19px] p480:mb-[50px] mt-[15px]">
          In a world where every trip is an adventure, Auto Zoom Car Rental Co
          LLC offers you a unique car rental experience in the heart of Dubai.
        </p>
        <h3 className="text-[26px] p480:text-[32px] font-semibold mt-[20px] p480:mt-[50px] mb-[30px]">
          Why Auto Zoom?
        </h3>
        <article className="flex flex-col gap-7">
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              Elegant Car Fleet:
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              e provide you the opportunity to choose from our luxurious car
              fleet – from sleek sedans to powerful SUVs. We have a vehicle to
              match your style and meet your needs.
            </p>
          </div>
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              Transparency and Trust:
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              We value every customer, so our prices are honest and transparent.
              No hidden fees, no unexpected surprises. Trust us, and we will
              make your rental experience straightforward and clear.
            </p>
          </div>
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              Worry-Free Rental:
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              Our goal is to make your journey as comfortable as possible.
              Flexible rental terms, the option to hire with a driver, and a
              wide range of additional services – all for your convenience.
            </p>
          </div>
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              Service at Your Level:
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              Our friendly and professional team is ready to bring your ideas to
              life. We aim not just to provide a car but to create a genuine
              automotive experience for you.
            </p>
          </div>
        </article>
        <h5 className="text-[22px] font-bold mt-[30px] p480:mt-[100px]">
          Our Mission:
        </h5>
        <p className="mt-2 text-[18px]">
          Auto Zoom Car Rental Co LLC is created with one goal – to make every
          journey unforgettable. We strive to offer you not just a car but the
          key to new experiences and adventures.
        </p>
        <h5 className="text-[22px] font-bold mt-[15px]">Contact us:</h5>
        <p className="mt-2 text-[18px]">
          Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in
          touch with us today to start your exciting journey through Dubai in
          our stylish and reliable cars. Allow yourself to savor every moment of
          your trip.
        </p>
      </div>
    </section>
  );
};

export default About;
