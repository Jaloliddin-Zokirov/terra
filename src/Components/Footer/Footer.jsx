import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axios } from "../../Server/Api";
import Loading from "../Loading/Loading";

const Footer = () => {
  const { lang } = useSelector((state) => state.lang);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/categories");
        setCategories(response?.data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <footer className="relative bg-[#111219] z-10">
      <img
        className="absolute z-[-1px] right-0 bottom-0 opacity-45"
        src="/McLaren_footer.png"
        width={800}
        height={477}
        alt="McLaren backround image"
      />
      <div className="relative z-10 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="text-start mb-6 md:mb-0">
            <Link to="/" className="block mb-5 mx-auto">
              <img
                src="/terra_logo.png"
                width={110}
                height={66}
                className="w-[110] h-[66] mx-auto md:mx-0"
                alt="Terra Logo"
              />
            </Link>
            <p className="text-center mb-5 md:text-start text-[30px] text-white max-w-[256px] font-bold leading-[100%] mx-auto">
              {" "}
              {lang === "eng"
                ? "LUXURY CAR RENTAL IN EMIRATES"
                : "ПРОКАТ АВТОМОБИЛЕЙ В ЭМИРАТАХ"}
            </p>
            <p className="text-center md:text-start text-[18px] max-w-[256px] text-[#fff9] mx-auto">
              {lang === "eng"
                ? "Rent sports and luxury cars directly without intermediaries. Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure"
                : "Аренда спортивных и лакшери авто напрямую без посредников. Аренда авто Дубай с Auto Zoom Car Rental это безопастность и удовольствие от вождения."}
            </p>
          </div>
          <div className="w-[65%] flex flex-col items-center grid-cols-1 [@media(min-width:640px)]:grid [@media(min-width:640px)]:items-start gap-8 sm:gap-6 sm:grid-cols-3 mx-auto md:mr-0">
            <div className="flex flex-col items-center md:block">
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang === "eng" ? "CARS" : "МАШИНЫ"}
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {categories?.slice(0, 3).map((el) => {
                  return (
                    <li className="mb-4" key={el.id}>
                      <Link to="cars" className="hover:underline">
                        {lang === "eng" ? el.name_en : el.name_ru}
                      </Link>
                    </li>
                  );
                })}
                <li className="mb-4">
                  <Link to="cars" className="hover:underline">
                    {lang === "eng" ? "More..." : "Более..."}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:block">
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang === "eng" ? "BLOG" : "БЛОГ"}
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4"></li>
              </ul>
            </div>
            <div>
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang === "eng" ? "SERVICES" : "УСЛУГИ"}
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4"></li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:block">
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang === "eng" ? "CONTACTS" : "КОНТАКТЫ"}
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col items-center md:block">
                <li className="mb-2">
                  <p className="text-center md:text-start">
                    {lang === "eng"
                      ? "Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates"
                      : "Спортивный центр Elite 3, Дубай 26W8 24J, Объединенные Арабские Эмираты"}
                  </p>
                </li>
                <li className="mb-2">
                  <a href="tel:+998990000441" className="hover:underline ">
                    +998 99 000 04 41
                  </a>
                </li>
                <li>
                  <p>
                    {lang === "eng" ? "Working hours" : "Режим работы"}: 24/7
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:block">
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang === "eng" ? "ABOUT US" : "О НАС"}
              </p>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="about" className="hover:underline ">
                    {lang === "eng" ? "Our Team" : "Наша команда"}
                  </Link>
                </li>
                <li>
                  <a href="/faq" className="hover:underline ">
                    {lang === "eng" ? "FAQ" : "Часто задаваемые вопросы"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:block">
              <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {lang === "eng" ? "Follow Us" : "Подписывайтесь на нас"}
              </p>
              <ul className="flex items-center gap-3 text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <FaInstagram size={24} />
                </li>
                <li>
                  <FaFacebook size={22} />
                </li>
                <li>
                  <FaYoutube size={24} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[80%] ml-auto">
          <hr className="my-6 border-red-900 sm:mx-auto dark:border-red-900 lg:my-8" />
        </div>

        <div className="flex flex-col [@media(min-width:646px)]:flex-row [@media(min-width:646px)]:justify-between items-center gap-5 justify-center">
          <a
            className="transition duration-500 text-center text-white rounded-[15px] px-[30px] py-[25px] border border-solid border-white p768:mx-0 hover:bg-[#A70720] hover:border-[#A70720]"
            href="+998990000441"
          >
            {lang === "eng" ? "GET BEST OFFER" : "ЗВОНИТЕ"}
          </a>
          <span className="text-sm text-gray-500 sm:text-start dark:text-gray-400">
            © 2024 Terra Car Rental. <br />{" "}
            {lang === "eng"
              ? "United Arab Emirates."
              : "Объединенные Арабские Эмираты."}
          </span>
          <Link
            className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            to={"condition"}
          >
            {lang === "eng" ? "Terms and Conditions" : "Условия и положения"}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
