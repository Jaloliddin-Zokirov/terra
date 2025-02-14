import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogInfo } from "./data";

const BlogDetail = () => {
  const { id } = useParams();
  var data = blogInfo.filter((item) => item.id === parseInt(id));
  console.log(data);
  return (
    <div className="bg-[#1E1F27]">
      <div className="max-w-[1300px] mx-auto py-6 p-4">
        {/* breadcrumb */}
        <p className="block text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">
            Luxury Cars for Rent in Dubai
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/blog">
            Blog
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/">
            Top 5 Reason to Rent a Car Dubai
          </Link>
        </p>

        {data.map((item, index) => (
          <div key={index} className="text-white">
            <h2 className="text-[22px] md:text-[50px] mt-7 md:mt-24 mb-2 md:mb-10 font-semibold text-center">
              {item.title}
            </h2>
            <p className="text-xl font-normal py-2">{item.top_text}</p>
            <h5 className="font-semibold py-3">{item.inbox_title}</h5>
            <img className="w-full py-4" src={item.img} alt="" />
            <p>{item.bottom_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
