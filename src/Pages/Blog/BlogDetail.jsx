import React from "react";
import { useParams } from "react-router-dom";
import { blogInfo } from "./data";

const BlogDetail = () => {
  const { id } = useParams();
  var data = blogInfo.filter((item) => item.id === parseInt(id));
  console.log(data);
  return (
    <div className='max-w-[1300px] mx-auto'>
      {data.map((item, index) => (
        <div key={index} className="text-white">
          <h2>{item.title}</h2>
          <p>{item.top_text}</p>
          <h5>{item.inbox_title}</h5>
          <img className="w-full" src={item.img} alt="" />
          <p>{item.bottom_text}</p>
        </div>
      ))}      
    </div>
  );
};

export default BlogDetail;
