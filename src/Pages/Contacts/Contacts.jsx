import React, { useEffect } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BgImage from "../../../public/contact_bg-img.jpg";
import { scrollToTop } from "../../utils";

const Contacts = () => {
  const { lang } = useSelector((state) => state.lang);
  useEffect(() => {
    scrollToTop();
  }, [])
  return (
    <section className="relative contact-page py-14">
      <img
        className="imgCoverAbout hidden object-cover min-[992px]:flex w-full h-full absolute opacity-15 top-0"
        src={BgImage}
        alt="img"
      />

      <div className="container relative  px-4 text-white">
        <Link to="/" className="text-[14px] text-[#fff9]">
          {lang === "eng"
            ? " Luxury Cars for Rent in Dubai / Contacts"
            : "Аренда люксовых и спортивных авто / Контакты"}
        </Link>
        <h3 className="text-[22px] text-center min-[480px]:text-left min-[480px]:text-[36px] py-[10px] md:py-[40px] font-semibold">
          {lang === "eng" ? "Have Any Question?" : "НАШИ КОНТАКТЫ"}
        </h3>
        <p className="text-[#fff9] text-center min-[480px]:text-left mb-[10px] md:mb-[90px]">
          {lang === "eng" ? "We well be glad to help" : "Будем рады помочь"}
        </p>
        <h4 className="text-[26px] ml-[45px] font-bold">
          {lang === "eng" ? "Head Office" : "Главный офис"}
        </h4>
        <div className="contact__links flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-7">
            <GoLocation fill="#c9c6c6" />
            <p className="text-[18px] font-semibold">
              {lang === "eng"
                ? " Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates"
                : "Спортивный комплекс Elite 3, Дубай 26W8 24J, Объединенные Арабские Эмираты"}
            </p>
          </div>
          <Link className="flex items-center gap-7" to="#">
            <BsTelephone fill="#c9c6c6" />
            <p className="text-[18px] font-semibold">+998 90 000 00 00</p>
          </Link>
          <div className="flex items-center gap-7">
            <AiTwotoneMail fill="#c9c6c6" />
            <p className="text-[18px] font-semibold">terra-rentacar.mail.ru</p>
          </div>
        </div>
        <div className="linearC my-[30px]"></div>
        <div className="contact__maps w-full rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7229.364749795036!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2s!4v1703261946327!5m2!1sen!2s"
            className="contact_maps-map w-full rounded-2xl"
            width="900"
            height="500"
            title="map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
