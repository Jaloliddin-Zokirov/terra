import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogInfo } from "./data";
import { useSelector } from "react-redux";

const Blog = () => {
  const { lang } = useSelector((state) => state.lang);

  return (
    <section className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        <p className="text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">
            {lang === "eng"
              ? "Luxory Cars for Dubai"
              : "Роскошные автомобили для Дубая"}
          </Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to="/blog">
            {lang === "eng" ? "Blog" : "Blog"}
          </Link>
        </p>
        <h3 className="text-white text-4xl text-left p480:text-left p480:text-4xl my-12 font-semibold">
          {lang === "eng" ? "Blog" : "ПОЛЕЗНЫЕ СТАТЬИ"}
        </h3>
        {blogInfo.map((item, index) => (
          <div
            class="blog-con-menu bg-[#272933] flex flex-col gap-14 text-white p-[20px] p768:p-[30px] mb-6"
            key={index}
          >
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-full h-[400px] max-[600px]:h-[300px] md:w-[220px] md:h-[250px]">
                <img
                  class="w-full h-full max-[600px]:h-[300px] md:h-[250px]"
                  width={220}
                  height={250}
                  src={item.img}
                  alt="img"
                />
              </div>
              <div class="info w-[78%] flex flex-col justify-between gap-3 mt-6">
                <h2 class="text-4xl mb-4 p768:mb-[35px] leading-[110%] font-semibold mt-2">
                  {lang === "eng" ? item.title : item.titleRu}
                </h2>
                <p class="text-base sm:text-lg font-serif">
                  {lang === "eng" ? item.text : item.textRu}
                </p>
                <div class="flex items-center justify-between">
                  <span>{lang === "eng" ? item.date : item.dataRu}</span>
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
      </div>
    </section>
  );
};

export default Blog;
