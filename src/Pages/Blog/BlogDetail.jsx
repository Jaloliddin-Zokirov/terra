import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogInfo } from "./data";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { id } = useParams();
  var data = blogInfo.filter((item) => item.id === parseInt(id));
  const { lang } = useSelector((state) => state.lang);

  return (
    <section className="py-6 mx-auto bg-[#1e1f27]">
      <div className="container">
        <p className="text-[#fff9] text-sm font-normal text-center sm:text-left mb-8">
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng"
              ? "Luxory Cars for Dubai"
              : "Роскошные автомобили для Дубая"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/blog">
            {lang === "eng" ? "Blog" : "Blog"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="">
            {lang === "eng"
              ? "Top 5 Reasons to Rent a Car Dubai"
              : "Топ-5 причин арендовать автомобиль в Дубае"}
          </Link>
        </p>
        {data.map((item, index) => (
          <div key={index} className="text-white">
            <h2 className="text-3xl mb-6">
              {lang === "eng" ? item.title : item.titleRu}
            </h2>
            <p className="mb-4">
              {lang === "eng" ? item.top_text : item.top_textRu}
            </p>
            <h5 className="mb-4">
              {lang === "eng" ? item.inbox_title : item.inbox_titleRu}
            </h5>
            <img
              className="w-full sm:h-[350px] md:h-[500px] mb-4"
              src={item.img}
              alt=""
            />
            <p>{lang === "eng" ? item.bottom_text : item.bottom_textRu}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogDetail;
