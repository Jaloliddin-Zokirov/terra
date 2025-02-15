import { Link } from "react-router-dom";
import { GrCaretNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import TopCar1 from "../../../public/assets/top-car1.png";
import TopCar2 from "../../../public/assets/top-car2.png";
import TopCar3 from "../../../public/assets/top-car3.png";
import TopCar4 from "../../../public/assets/top-car4.png";
import { useSelector } from "react-redux";

export function TopLuxury() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <section id="hero">
      <div className="container">
        <article className="text-white text-center flex flex-col gap-2 px-[10px] relative z-0">
          <h1 className="mx-auto text-[24px] relative z-[1] tracking-[5px] mt-[25px] min-[992px]:mt-[100px] leading-[50px] font-[Merriweather-Regular] font-semibold max-w-[840px] md:text-[34px]">
            {lang === "eng"
              ? "TOP LUXURY CAR RENTAL EMIRATES"
              : "АРЕНДА АВТО В ЭМИРАТАХ"}
            <br />№<span className="font-mono">1</span>
          </h1>
          <h3 className="text-[#ffffff] relative z-[1]">
            {lang === "eng"
              ? " Best sports car & supercar rental Emirates, Exclusive offers on luxury car rental Emirates Cheap price"
              : "Аренда авто в Эмиратах с оплатой в RUB или криптовалютой"}
          </h3>
          <Link
            to="/cars"
            className="hover:text-rose-600 transition-all transform-fill ease-in flex items-center text-[12px] mx-auto max-w-[400px] gap-2 relative z-[1] min-[992px]:text-[16px] mt-[15px]"
          >
            <p>
              {lang === "eng"
                ? "RENT A CAR EMIRATES CATALOG"
                : "АРЕНДА МАШИНЫ В ЭМИРАТАХ КАТАЛОГ"}
            </p>
            <GrCaretNext fill="#ffff" />
          </Link>
        </article>
      </div>

      <div className="relative bg-gradient-to-t from-[#343744] via-[#343744] to-transparent">
        <Swiper
          watchSlidesProgress={true}
          loop={true}
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper mt-[100px]"
        >
          <SwiperSlide>
            <Link to="/cars">
              <img className="img w-full h-full" src={TopCar1} alt="img" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/cars">
              <img className="img w-full h-full" src={TopCar2} alt="img" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/cars">
              <img className="img w-full h-full" src={TopCar3} alt="img" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/cars">
              <img className="img w-full h-full" src={TopCar4} alt="img" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
