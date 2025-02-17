import { Link } from "react-router-dom";
import { GrCaretNext } from "react-icons/gr";
import NextImg from "../../../public/assets/next-img.svg";

import TopCar1 from "../../../public/assets/top-car1.png";
import TopCar2 from "../../../public/assets/top-car2.png";
import TopCar3 from "../../../public/assets/top-car3.png";
import TopCar4 from "../../../public/assets/top-car4.png";
import { useSelector } from "react-redux";
import { useState } from "react";

export function TopLuxury() {
  const images = [TopCar1, TopCar2, TopCar3, TopCar4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeImage = (newIndex) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimating(false);
    }, 500); // Adjust duration for smoother effect
  };

  const nextImage = () => {
    changeImage((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

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

        {/* bg-gradient-to-t from-[#343744] via-[#343744] to-transparent */}
      </div>

      <div className="relative  bg-gradient-to-t from-[#343744] via-[#343744] to-transparent">
        <div className="flex flex-col items-center gap-4 p-12     mx-auto mt-[100px]">
          <div className="md:flex block items-center justify-center mx-auto gap-4 w-full">
            <img
              src={images[(currentIndex + images.length - 1) % images.length]}
              alt="previous"
              className={`w-1/4 hidden md:block opacity-50 transition-all duration-500 ${
                animating ? "opacity-30" : ""
              }`}
            />
            <Link
              className={`w-1/2 transition-all duration-500 transform ${
                animating ? "scale-90 opacity-70" : "scale-100"
              } hover:scale-105`}
              to="/cars"
            >
              <img src={images[currentIndex]} alt="current" />
            </Link>
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="next"
              className={`w-1/4 hidden md:block opacity-50 transition-all duration-500 ${
                animating ? "opacity-30" : ""
              }`}
            />
          </div>
          <div className="flex gap-12 md:gap-96">
            <button
              onClick={prevImage}
              className="px-4 py-2 text-gray-600  rotate-180 cursor-pointer hover:scale-120 transition-all duration-300 hover:opacity-45 opacity-70 "
            >
              <img className="md:w-12 w-5 md:h-8 h-3" src={NextImg} alt="img" />
            </button>
            <button
              onClick={nextImage}
              className="px-4 py-2  text-gray-600 cursor-pointer hover:scale-120 transition-all duration-300 hover:opacity-45 opacity-70"
            >
              <img className="md:w-12 w-5 md:h-8 h-3" src={NextImg} alt="img" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
