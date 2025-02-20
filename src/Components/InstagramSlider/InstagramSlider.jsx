import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { insSlider } from "./data";

const InstagramSlider = () => {
  const { lang } = useSelector((state) => state.lang);
  return (
    <div className="max-w-[1300px] mx-auto py-6 p-4">
      <h3 className="sm:text-2xl md:text-3xl font-semibold text-white py-10">
        {lang === "eng"
          ? " FOLLOW US ON INSTAGRAM"
          : "ПОДПИСЫВАЙТЕСЬ НА НАС В ИНСТАГРАМ"}
      </h3>
      <Swiper
        className="cursor-pointer"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {insSlider.map((item, index) => (
          <SwiperSlide key={index} className="text-center lg:w-full h-full">
            <img src={item.img} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-16 mt-12">
        <div className="blog-1">
          <h3 className="sm:text-3xl md:text-4xl text-white font-semibold">
            {lang === "eng" ? "LOCATION" : "ЛОКАЦИЯ"}
          </h3>
          <div className="links-location flex flex-col gap-3 mt-[15px]">
            <a
              href="/avto"
              className="block text-[16px] leading-[120%] mt-[5px] text-[#fff9]"
            >
              weqw
            </a>
            <a
              href="/avto"
              className="block text-[16px] leading-[120%] mt-[5px] text-[#fff9]"
            >
              Surxandaryo
            </a>
            <a
              href="/avto"
              className="block text-[16px] leading-[120%] mt-[5px] text-[#fff9]"
            >
              Parij
            </a>
          </div>
        </div>
        <div className="blog-1">
          <h3 className="sm:text-3xl md:text-4xl text-white font-semibold">
            {lang === "eng" ? "CITY" : "ГОРОД"}
          </h3>
          <div className="links-location flex flex-col gap-3 mt-[15px]">
            <a
              href="/avto"
              className="block text-[16px] leading-[120%] mt-[5px] text-[#fff9]"
            >
              kanada
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSlider;
