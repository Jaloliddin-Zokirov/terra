import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axios, Forimage } from "../../Server/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.scss";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { scrollToTop } from "../../utils";

const Brands = () => {
  const { lang } = useSelector((state) => state.lang);
  const [brands, setBrands] = useState([]);
  const [loadingCheck, setLoading] = useState(false);
  useEffect(() => {
    scrollToTop();
  }, [])

  useEffect(() => {
    const fetchBrands = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/brands");
        setBrands(response?.data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const doubledBrands = brands.concat(brands);

  return (
    <>
      {loadingCheck ? (
        <Loading />
      ) : (
        <section className="py-14">
          <div className="container">
            <h2 className="[@media(min-width:320px)]:text-[20px] [@media(min-width:320px)]:text-center [@media(min-width:480px)]:text-left [@media(min-width:480px)]:text-[30px] [@media(min-width:768px)]:text-[40px] ml-[15px] font-semibold text-white">
              {lang === "eng" ? "BRANDS" : "БРЕНДЫ"}
            </h2>

            <Swiper
              slidesPerView={2}
              breakpoints={{
                480: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
                768: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
                1024: { slidesPerView: 6, grid: { rows: 2, fill: "row" } },
              }}
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Grid, Pagination]}
              className="mySwiper mt-6"
            >
              {doubledBrands?.map((el, index) => {
                return (
                  <SwiperSlide key={index} className="flex h-full">
                    <Link
                      to={"/cars"}
                      className="link flex flex-col justify-center items-center w-full h-full flex-grow"
                    >
                      <img
                        className="imgswiper mx-auto w-[40px] h-[40px]"
                        src={`${Forimage}/${el.image_src}`}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <p className="text-[#7E7E7E] font-bold">{el.title}</p>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default Brands;
