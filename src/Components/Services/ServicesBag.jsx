import React from "react";
import { serviceBug } from "./data";

const ServicesBag = () => {
  return (
    <div className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        <p className="text-left text-[#fff9] text-sm font-normal p480:text-left">
          Luxury Cars for Rent in Dubai/ <a href="/">Services</a>/ Ride a buggy
          in Dubai and have fun
        </p>
        <h3 className="text-white text-4xl text-left p480:text-left p480:text-4xl my-12 font-semibold">
          Ride a buggy in Dubai and have fun
        </h3>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-[#1E1F27] p-4">
            <img
              src="https://terra-rentacar.netlify.app/assets/uslug-sport-1-DxYPOXOJ.jpg"
              alt=""
            />
            <h1 className="text-white font-normal py-4">BASIC</h1>
            <div className="flex items-center gap-4">
              <p className="border border-solid text-lg border-[#11d198] py-1 px-5 rounded-lg text-white">
                1000
              </p>
              <p className="text-white">one person</p>
            </div>
            <p className="text-white mt-6">
              Dune buggies in Dubai Book your ride on the most exciting
              adventure activity to hit the desert and later pamper your self to
              a traditional Arabian hospitality.
            </p>
            <h1 className="text-white font-semibold text-2xl my-6">
              Package Inclusions:
            </h1>
            {serviceBug.map((item, index) => (
              <div class="flex items-center gap-5 mt-[15px]" key={index}>
                <img src={item.img} />
                <p class="text-white text-[18px] font-semibold">{item.title}</p>
              </div>
            ))}
            <a href="tel:+998990000441">
              <button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] cursor-pointer rounded-2xl">
                BOOK NOW
              </button>
            </a>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-[#1E1F27] p-4">
            <img
              src="https://terra-rentacar.netlify.app/assets/uslug-sport-2-D-WBhbOk.jpg"
              alt=""
            />
            <h1 className="text-white font-normal py-4">BASIC</h1>
            <div className="flex items-center gap-4">
              <p className="border border-solid text-lg border-[#11d198] py-1 px-5 rounded-lg text-white">
                2000
              </p>
              <p className="text-white">two person</p>
            </div>
            <p className="text-white mt-6">
              Dune buggies in Dubai Book your ride on the most exciting
              adventure activity to hit the desert and later pamper your self to
              a traditional Arabian hospitality.
            </p>
            <h1 className="text-white font-semibold text-2xl my-6">
              Package Inclusions:
            </h1>
            {serviceBug.map((item, index) => (
              <div class="flex items-center gap-5 mt-[15px]" key={index}>
                <img src={item.img} />
                <p class="text-white text-[18px] font-semibold">{item.title}</p>
              </div>
            ))}
            <a href="tel:+998990000441">
              <button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] cursor-pointer rounded-2xl">
                BOOK NOW
              </button>
            </a>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-[#1E1F27] p-4">
            <img
              src="https://terra-rentacar.netlify.app/assets/uslug-sport-3-DyPjBdp1.jpg"
              alt=""
            />
            <h1 className="text-white font-normal py-4">BASIC</h1>
            <div className="flex items-center gap-4">
              <p className="border border-solid text-lg border-[#11d198] py-1 px-5 rounded-lg text-white">
                3000
              </p>
              <p className="text-white">three person</p>
            </div>
            <p className="text-white mt-6">
              Dune buggies in Dubai Book your ride on the most exciting
              adventure activity to hit the desert and later pamper your self to
              a traditional Arabian hospitality.
            </p>
            <h1 className="text-white font-semibold text-2xl my-6">
              Package Inclusions:
            </h1>
            {serviceBug.map((item, index) => (
              <div class="flex items-center gap-5 mt-[15px]" key={index}>
                <img src={item.img} />
                <p class="text-white text-[18px] font-semibold">{item.title}</p>
              </div>
            ))}
            <a href="tel:+998990000441">
              <button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] cursor-pointer rounded-2xl">
                BOOK NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBag;
