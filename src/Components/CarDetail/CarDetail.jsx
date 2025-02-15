import React, { useEffect, useState } from "react";
import { axios, Forimage } from "../../Server/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.scss";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { lang } = useSelector((state) => state.lang);
  const [cars, setCars] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/cars")
      .then(({ data }) => setCars(data?.data))
      .catch(console.error);
  }, []);

  const car = cars?.find((el) => el?.id === id);

  return (
    <section>
      <div className="container">
        <div className="flex-col md:flex md:flex-row items-start justify-between">
          <div>
            <h2 className="text-white mb-4 text-[28px] text-center md:text-left md:ml-6 md:text-[50px] font-semibold uppercase">
              {car ? `${car.model.name} (${car.color})` : ""}
            </h2>
            <div className="mb-14">
              <Swiper
                style={{ "--swiper-navigation-color": "#fff" }}
                loop
                spaceBetween={10}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper1"
              >
                {car?.car_images?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="md:w-[550px] md:h-[500px]"
                      src={`${Forimage}/${img?.image?.src}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {car?.car_images?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="md:w-[188px] md:h-[148px]"
                      src={`${Forimage}/${img?.image?.src}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h3 className="text-[28px] text-white font-bold mb-5">
              {lang === "eng" ? "Good to know about" : "Полезная информация"}{" "}
              {car?.model.name} ({car?.color})
            </h3>
            <div className="mb-5">
              <span className="text-[14px] text-[#A1A5A0]">
                {lang === "eng"
                  ? "Kilometrage limit per day"
                  : "Лимит километража в день"}
              </span>
              <p className="text-[20px] text-white font-semibold">
                {car?.max_speed}
                {lang === "eng"
                  ? " KM (Every extra km will be charged 20 AED/km)"
                  : " КМ (За каждый дополнительный километр будет взиматься 20 AED за километр)"}
              </p>
            </div>
            <div>
              <span className="text-[14px] text-[#A1A5A0]">
                {lang === "eng"
                  ? "Car rental deposit amount"
                  : "Сумма залога за аренду автомобиля"}
              </span>
              <p className="text-[20px] text-white font-semibold">
                {lang === "eng"
                  ? "The deposit is refunded within 28 days"
                  : "Залог возвращается в течение 28 дней"}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
