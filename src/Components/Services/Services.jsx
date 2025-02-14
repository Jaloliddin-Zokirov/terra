import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-[#1E1F27]">
      <div className="px-8 py-8 max-w-[1300px] mx-auto">
        {/* breadcrumb */}
        <p className="block text-[#fff9] text-sm font-normal text-center sm:text-left">
          <Link className="hover:text-blue-500" to="/">Luxury Cars for Rent in Dubai</Link>
          <span> / </span>
          <Link className="hover:text-blue-500" to='/services'>Services</Link>
        </p>
        {/* title */}
        <h3 className="text-white text-4xl text-center sm:text-left sm:text-4xl my-12 font-semibold">
          SERVICES
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
              Ride a buggy in Dubai and have fun
            </h4>
            <p className="text-white text-base sm:text-lg my-4">
              Experience the thrill of a dune buggy tour in Dubai with us. We
              offer free hotel pick-up & drop-off service. Book now
            </p>
            <Link
              to="/services/bug"
              className="flex items-center justify-evenly w-[200px] hover:ml-4 duration-400 ease-out cursor-pointer"
            >
              <p class="text-white font-bold">LEARN MORE</p>
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
            <h4 className="text-white text-xl  sm:text-2xl my-2 font-semibold">
              Photoshoot with luxury car rental Dubai
            </h4>
            <p className="text-white text-text-base sm:text-lg my-4">
              Professional car photoshoot as an additional type of with us
              service at Terra Car Rental
            </p>
            <Link
              to="/services/car"
              className="flex items-center justify-evenly w-[200px] pt-8 hover:ml-4 duration-400 ease-out cursor-pointer"
            >
              <p class="text-white font-bold">LEARN MORE</p>
              <CircleChevronRight className="size-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
