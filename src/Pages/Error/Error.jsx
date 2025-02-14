import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Error = () => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <div className="px-8 py-8 max-w-[1300px] mx-auto">
      <div className="grid text-center md:grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-6">
          <img
            src="https://terra-rentacar.netlify.app/assets/404-D9ajA_tV.png"
            alt=""
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-white text-xl md:text-3xl font-semibold mb-4">
            {lang == "eng"
              ? "Ouch! We can't find this page."
              : "Ой! Мы не можем найти эту страницу."}
          </h1>
          <Link to="/" className="text-red-200 hover:text-red-500">
            {lang == "eng"
              ? "Go back to the main page!"
              : "Вернитесь на главную страницу!"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
