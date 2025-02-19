import { CircleChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils";

const Services = () => {
  const { lang } = useSelector((state) => state.lang);
  useEffect(() => {
    scrollToTop();
  }, []);
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
          <Link className="hover:text-blue-500" to="/services">
            {lang === "eng" ? "Services" : "Услуги"}
          </Link>
        </p>
        {/* title */}
        <h3 className="text-white text-4xl text-center sm:text-left sm:text-4xl my-12 font-semibold">
          {lang === "eng" ? "SERVICES" : "УСЛУГИ"}
        </h3>
        {/* services cards */}
        <div className="grid grid-cols-12 gap-y-12 gap-x-0 sm:gap-12">
          {/* card - bug */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="w-full"
              src="https://terra-rentacar.netlify.app/assets/uslug-1-Dm8nxdJt.jpg"
              alt=""
            />
            <h4 className="text-white text-xl  sm:text-2xl my-2 font-semibold">
              {lang === "eng"
                ? "Ride a buggy in Dubai and have fun"
                : "Покатайтесь на багги в Дубае и получите удовольствие"}
            </h4>
            <p className="text-white text-base sm:text-lg my-4">
              {lang === "eng"
                ? "Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now"
                : "Почувствуйте азарт дюнного тура на багги в Дубае с нами. Мы предлагаем бесплатный трансфер от и до отеля. Бронируйте сейчас"}
            </p>
            <Link
              to="/services/bug"
              className="flex items-center justify-evenly w-[200px] hover:ml-4 duration-400 ease-out cursor-pointer"
            >
              <p className="text-white font-bold">
                {lang === "eng" ? "LEARN MORE" : "УСЛУГИ"}
              </p>
              <CircleChevronRight className="size-8 text-white" />
            </Link>
          </div>
          {/* card - car */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <img
              className="w-full"
              src="https://terra-rentacar.netlify.app/assets/uslug-2-LkBjqsZl.jpg"
              alt=""
            />
            <h4 className="text-white text-xl sm:text-2xl my-2 font-semibold">
              {lang === "eng"
                ? " Photoshoot with luxury car rental Dubai"
                : "Фотосессия с арендой роскошного автомобиля в Дубае"}
            </h4>
            <p className="text-white text-text-base sm:text-lg my-3">
              {lang === "eng"
                ? "Professional car photoshoot as an additional luxury in car without type of service at Terra Car Rental"
                : "Профессиональная фотосессия автомобиля как дополнительный вид услуг в Terra Car Rental"}
            </p>
            <Link
              to="/services/car"
              className="flex items-center justify-evenly w-[200px] hover:ml-4 pt-1 duration-400 ease-out cursor-pointer"
            >
              <p className="text-white font-bold">
                {lang === "eng" ? "LEARN MORE" : "УСЛУГИ"}
              </p>
              <CircleChevronRight className="size-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
