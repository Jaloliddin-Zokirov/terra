import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import InstagramSlider from "./components/InstagramSlider";
import { blogInfo } from "./data";

const Blog = () => {
  return (
    <div className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        <a
          href="/"
          className="text-left text-[#fff9] text-sm font-normal p480:text-left"
        >
          Luxury Cars for Rent in Dubai / Services
        </a>
        <h3 className="text-white text-4xl text-left p480:text-left p480:text-4xl my-12 font-semibold">
          Blog
        </h3>
        {blogInfo.map((item, index) => (
          <div
            class="blog-con-menu bg-[#272933] flex flex-col gap-14 text-white p-[20px] p768:p-[30px] mb-6"
            key={index}
          >
            <div class="flex items-center gap-8">
              <div>
                <img class="size-92" src={item.img} alt="img" />
              </div>
              <div class="info flex flex-col justify-between gap-3 mt-6 p768:mt-0">
                <h2 class="text-4xl mb-4 p768:mb-[35px] leading-[110%] font-semibold mt-2">
                  {item.title}
                </h2>
                <p class="text-base py- p480:text-lg font-serif">{item.text}</p>
                <div class="flex items-center justify-between">
                  <span>{item.date}</span>
                  <Link
                    to={`/blog/${item.id}`}
                    class="transform hover:scale-110"
                  >
                    <CircleChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <InstagramSlider />
      </div>
    </div>
  );
};

export default Blog;
