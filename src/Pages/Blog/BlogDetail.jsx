import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { blogInfo } from "./data";
import { scrollToTop } from "../../utils";

const BlogDetail = () => {
  const { lang } = useSelector((state) => state.lang);
  const { id } = useParams();
  var data = blogInfo.filter((item) => item.id === parseInt(id));
  useEffect(() => {
    scrollToTop();
  }, [])
  return (
    <div className="bg-[#1E1F27]">
      <div className="max-w-[1300px] mx-auto py-6 p-4">
        {/* breadcrumb */}
        <p className="block text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng"
              ? "Luxury Cars for Rent in Dubai"
              : "Аренда люксовых и спортивных авто"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/blog">
            {lang === "eng" ? "BLOG" : "ПОЛЕЗНЫЕ СТАТЬИ"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng"
              ? "Top 5 Reason to Rent a Car Dubai"
              : "Топ-5 причин арендовать автомобиль в Дубае"}
          </Link>
        </p>

        {data.map((item, index) => (
          <div key={index} className="text-white">
            <h2 className="text-[22px] md:text-[50px] mt-7 md:mt-24 mb-2 md:mb-10 font-semibold text-center">
              {lang === "eng" ? item.title_en : item.title_ru}
            </h2>
            <p className="text-xl font-normal py-2">
              {lang === "eng" ? item.top_text_en : item.top_text_ru}
            </p>
            <h5 className="font-semibold py-3">
              {lang === "eng" ? item.inbox_title_en : item.inbox_title_ru}
            </h5>
            <img className="w-full py-4" src={item.img} alt="" />
            <p> {lang === "eng" ? item.bottom_text_en : item.bottom_text_ru}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
