import React from "react";
import { Link } from "react-router-dom";
import { serviceBug, serviceBugCards } from "./data";
import { useSelector } from "react-redux";

const ServicesBag = () => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <section className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        {/* breadcrumbs */}
        <p className="text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng"
              ? "Luxury Cars for Rent in Dubai"
              : "Аренда люксовых и спортивных авто"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/services">
            {lang === "eng" ? "Services" : "Услуги"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/services/bag">
            {lang === "eng"
              ? "Ride a buggy in Dubai and have fun"
              : "Покатайтесь на багги в Дубае и получите удовольствие"}
          </Link>
        </p>
        {/* title */}
        <h3 className="text-white font-semibold text-center sm:text-left text-2xl sm:text-3xl my-12">
          {lang === "eng"
            ? "Ride a buggy in Dubai and have fun"
            : "Покатайтесь на багги в Дубае и получите удовольствие"}
        </h3>
        {/* service - bug - cards */}
        <div className="grid grid-cols-12 gap-8 bg-[linear-gradient(62.37deg, rgba(255, 255, 255, 0.21) -7.76%, rgba(0, 0, 0, 0.06) 41.78%, rgba(80, 80, 80, 0.05) 102.46%)]">
          {serviceBugCards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E1F27] p-4 col-span-12 sm:col-span-6 md:col-span-4"
            >
              <img src={item.image} alt="image" />
              <h1 className="text-white font-normal py-4">
                {lang === "eng" ? "BASIC" : "ОСНОВНОЙ"}
              </h1>
              <div className="flex items-center gap-4">
                <p className="border border-solid text-lg border-[#11d198] py-1 px-5 rounded-lg text-white">
                  {item.count}
                </p>
                <p className="text-white">
                  {lang === "eng" ? item.person : item.personRu}
                </p>
              </div>
              <p className="text-white mt-6">
                {lang === "eng"
                  ? "Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality."
                  : "Багги в Дубае. Забронируйте поездку на самую захватывающую приключенческую активность, проходящую по пустыне, и затем наслаждайтесь традиционным арабским гостеприимством."}
              </p>
              <h1 className="text-white font-semibold text-2xl my-6">
                {lang === "eng" ? "Package Inclusions:" : "Включено в пакет:"}
              </h1>
              {serviceBug.map((item, index) => (
                <div class="flex items-center gap-5 mt-[15px]" key={index}>
                  <img src={item.img} alt={item.title} />
                  <p class="text-white text-[18px] font-semibold">
                    {lang === "eng" ? item.title : item.titleRu}
                  </p>
                </div>
              ))}
              <a href="tel:+998990000441">
                <button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] cursor-pointer rounded-2xl">
                  {lang === "eng" ? "BOOK NOW" : "ЗАБРОНИРОВАТЬ СЕЙЧАС"}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBag;
