import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editLang } from "../../Store/Lang/Lang";
import { editSearch } from "../../Store/Search/Search";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
  const { lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal");
    } else {
      document.body.classList.remove("modal");
    }
  }, [modal]);

  return (
    <header>
      <nav className="bg-[linear-gradient(90deg,#111219,#111219,#111219,#25020b,#111219,#111219,#111219)]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex gap-3 md:order-0 lg:w-full lg:max-w-[450px]">
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer"
                onClick={() => dispatch(editLang("eng"))}
              >
                <img
                  src="/flag_eng.png"
                  width={25}
                  height={25}
                  alt="flag eng"
                />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => dispatch(editLang("ru"))}
              >
                <img
                  src="/flag_rus.png"
                  width={25}
                  height={25}
                  alt="flag rus"
                />
              </button>
            </div>

            <button
              onClick={() => setSearchIcon(!searchIcon)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div
              className={`${
                searchIcon
                  ? "w-full absolute top-[15%] left-[50%] -translate-x-[50%] z-30 bg-gradient-to-r from-[#242527] via-[#5B5B5E] to-[#38393D]"
                  : "hidden relative"
              }  rounded-[12px] md:block w-full max-w-[350px] lg:max-w-[350px]'}`}
            >
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-3.5 ps-10 text-sm text-white focus-visible:outline-none focus-visible:ring-0 rounded-[12px] md:bg-gradient-to-r md:from-[#2d2e31] md:to-[#111219]"
                placeholder={lang === "eng" ? "Search..." : "Поиск..."}
                onChange={(evt) => dispatch(editSearch(evt?.target?.value))}
                onKeyDown={(evt) => {
                  if (evt.key === "Enter") {
                    setSearchIcon(false);
                    navigate("/cars");
                  }
                }}
              />
            </div>
          </div>

          <Link
            to="/"
            className="h-[66px] flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/terra_logo.png"
              width={110}
              height={66}
              alt="Flowbite Logo"
            />
          </Link>

          <button
            onClick={() => setModal(!modal)}
            data-collapse-toggle="navbar-search"
            type="button"
            className="z-30 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              modal
                ? "absolute top-0 bottom-0 right-0 z-20 w-70 py-7 px-5 bg-[#111219] shadow-amber-900 shadow"
                : "hidden items-center justify-between w-full md:flex md:w-auto"
            }`}
            id="navbar-search"
          >
            <ul
              className={`${
                modal
                  ? "flex flex-col items-start gap-5"
                  : "flex flex-col items-end gap-3 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
              }`}
            >
              <li
                className={`${
                  modal
                    ? "flex flex-col items-start gap-5"
                    : "flex items-center justify-end flex-wrap gap-5 m-0"
                }`}
              >
                <div>
                  <Link
                    to="cars"
                    className="block text-gray-900 rounded-sm relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-gray-500 hover:after:via-pink-500 hover:after:via-50% hover:after:to-blue-400 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {lang === "eng" ? "CARS" : "АВТОМОБИЛИ"}
                  </Link>
                </div>
                <div>
                  <Link
                    to="brands"
                    className="block text-gray-900 rounded-sm relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-gray-500 hover:after:via-pink-500 hover:after:via-50% hover:after:to-blue-400 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {lang === "eng" ? "BRAND" : "МАРКА"}
                  </Link>
                </div>
                <div>
                  <Link
                    to="services"
                    className="block text-gray-900 rounded-sm relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-gray-500 hover:after:via-pink-500 hover:after:via-50% hover:after:to-blue-400 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {lang === "eng" ? "SERVICES" : "УСЛУГИ"}
                  </Link>
                </div>
                <div>
                  <Link
                    to="about"
                    className="block text-gray-900 rounded-sm relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-gray-500 hover:after:via-pink-500 hover:after:via-50% hover:after:to-blue-400 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {lang === "eng" ? "ABOUT US" : "О НАС"}
                  </Link>
                </div>
                <div>
                  <Link
                    to="contact"
                    className="block text-gray-900 rounded-sm relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-gray-500 hover:after:via-pink-500 hover:after:via-50% hover:after:to-blue-400 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {lang === "eng" ? "CONTACTS" : "КОНТАКТЫ"}
                  </Link>
                </div>
                <div>
                  <Link
                    to="blog"
                    className="block text-gray-900 rounded-sm relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-gray-500 hover:after:via-pink-500 hover:after:via-50% hover:after:to-blue-400 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {lang === "eng" ? "BLOG" : "БЛОГ"}
                  </Link>
                </div>
              </li>
              <li>
                <a className="text-white block" href="tel:+998990000441">
                  +998 (99) 000 04 41
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
