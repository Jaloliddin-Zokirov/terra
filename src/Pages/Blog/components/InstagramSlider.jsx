import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const InstagramSlider = () => {
  return (
    <div>
      <h3 className="sm:text-2xl md:text-3xl font-semibold text-white py-10">
        FOLLOW US ON INSTAGRAM
      </h3>
      <Swiper slidesPerView={6} spaceBetween={15} className="cursor-pointer">
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/1T-D45PTDEI.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/2T-B1mJGEs-.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/3T-BkJVRiBs.webp"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/4T-BGQV6HlH.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/5T-BISrHmDi.jpg"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/6T-Bs7OhdEn.webp"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/7T-DB-zL0r0.webp"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/8T-Dve_QKXj.webp"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/9T-BtgLeMAz.webp"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://terra-rentacar.netlify.app/assets/10T-C3d3mJb9.webp"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-16 mt-12">
        <div className="blog-1">
          <h3 className="sm:text-3xl md:text-4xl text-white font-semibold">
            LOCATION
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
        <div class="blog-1">
          <h3 className="sm:text-3xl md:text-4xl text-white font-semibold">
            CITY
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
