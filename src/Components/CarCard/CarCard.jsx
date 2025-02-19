import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Forimage } from "../../Server/Api";
import "./styles.css";
import { scrollToTop } from "../../utils";

const CarCard = ({ cars }) => {
  const [click, setClick] = useState(null);
  useEffect(() => {
    scrollToTop();
  }, [click]);
  return (
    <div className="allproductsCon flex flex-wrap gap-4 justify-center xl:justify-start p-1">
      {cars?.map((el) => {
        const mainImage = el?.car_images?.find((img) => img.is_main)?.image
          ?.src;
        return (
          <Link
            to={`/cars/${el.id}`}
            key={el.id}
            onClick={() => setClick(el.id)}
            className="router-link-active router-link-exact-active"
          >
            <div className="card min-h-[450px] p768:w-[300px] py-[30px] px-[15px] flex flex-col justify-between rounded-2xl aos-init aos-animate border border-gray-400">
              {mainImage && (
                <img
                  className="mt-[25px] w-[265px] mx-auto"
                  src={`${Forimage}/${mainImage}`}
                  alt={el?.model?.name || "Car image"}
                />
              )}
              <div className="card__article flex flex-col gap-2">
                <h3 className="text-white text-[19px] font-mono ml-[5px]">
                  {el?.brand?.title} {el?.model?.name}
                </h3>
                <div className="liniya bg-white w-full h-[1px]"></div>
                <h5 className="text-white font-semibold text-[18px]">
                  AED {el?.price_in_aed}
                  <span className="text-[#9e9a9a] text-[16px]">
                    / $ {el?.price_in_usd}
                  </span>
                </h5>
                <p className="mt-[15px] text-[#9e9a9a]">per day</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CarCard;
