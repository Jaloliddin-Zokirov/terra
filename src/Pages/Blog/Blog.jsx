import { CircleChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import InstagramSlider from "./components/InstagramSlider";
import { blogInfo } from "./data";

const Blog = () => {
  return (
    <div className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        {/* breadcrumb */}
        <p className="block text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">
            Luxury Cars for Rent in Dubai
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/">
            BLOG
          </Link>
        </p>
        {/* title */}
        <h3 className="text-white text-2xl md:text-4xl text-center sm:text-left sm:text-4xl my-12 font-semibold">
          BLOG
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
                  {item.title}
                </h2>
                <p className="text-sm md:text-lg font-serif">
                  {item.text}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span>{item.date}</span>
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
        <InstagramSlider/>
      </div>
    </div>
  );
};

export default Blog;
