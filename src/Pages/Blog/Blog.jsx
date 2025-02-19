import { CircleChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InstagramSlider from "../../Components/InstagramSlider/InstagramSlider";
import { blogInfo } from "./data";
import { scrollToTop } from "../../utils";

const Blog = () => {
  const { lang } = useSelector((state) => state.lang);
  useEffect(() => {
    scrollToTop();
  }, [])
  return (
    <div className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        {/* breadcrumb */}
        <p className="block text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng"
              ? "Luxury Cars for Rent in Dubai"
              : "Аренда люксовых и спортивных авто"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng" ? "BLOG" : "ПОЛЕЗНЫЕ СТАТЬИ"}
          </Link>
        </p>
        {/* title */}
        <h3 className="text-white text-2xl md:text-4xl text-center sm:text-left sm:text-4xl my-12 font-semibold">
          {lang === "eng" ? "BLOG" : "ПОЛЕЗНЫЕ СТАТЬИ"}
        </h3>
        {blogInfo.map((item, index) => (
          <div
            className="blog-con-menu bg-[#272933] flex flex-col gap-14 text-white p-[20px] p768:p-[30px] mb-6"
            key={index}
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4">
                <img className="" src={item.img} alt="img" />
              </div>
              <div className="col-span-12 lg:col-span-8">
                <h2 className="text-2xl lg:text-4xl mb-6 font-semibold">
                  {lang === "eng" ? item.title_en : item.title_ru}
                </h2>
                <p className="text-sm md:text-lg font-serif">
                  {lang === "eng" ? item.text_en : item.text_ru}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span>{lang === "eng" ? item.date_en : item.date_ru}</span>
                  <Link
                    to={`/blog/${item.id}`}
                    className="transform hover:scale-110"
                  >
                    <CircleChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
