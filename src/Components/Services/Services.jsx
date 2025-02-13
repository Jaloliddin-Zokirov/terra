import { CircleChevronRight } from "lucide-react";

const Services = () => {
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
          SERVICES
        </h3>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <img
              src="https://terra-rentacar.netlify.app/assets/uslug-1-Dm8nxdJt.jpg"
              alt=""
            />
            <h4 className="text-white  text-3xl my-2 font-semibold">
              Ride a buggy in Dubai and have fun
            </h4>
            <p className="text-white text-lg  my-4">
              Experience the thrill of a dune buggy tour in Dubai with us. We
              offer free hotel pick-up & drop-off service. Book now
            </p>
            <a
              href="services/bag"
              className="flex items-center justify-evenly w-[200px] hover:ml-4 duration-400 ease-out cursor-pointer"
            >
              <p class="text-white font-bold">LEARN MORE</p>
              <CircleChevronRight className="size-8 text-white" />
            </a>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <img
              src="https://terra-rentacar.netlify.app/assets/uslug-2-LkBjqsZl.jpg"
              alt=""
            />
            <h4 className="text-white text-3xl my-2 font-semibold">
              Photoshoot with luxury car rental Dubai
            </h4>
            <p className="text-white text-lg my-4">
              Professional car photoshoot as an additional type of with us
              service at Terra Car Rental
            </p>
            <a
              href="services/car"
              className="flex items-center justify-evenly w-[200px] pt-8 hover:ml-4 duration-400 ease-out cursor-pointer"
            >
              <p class="text-white font-bold">LEARN MORE</p>
              <CircleChevronRight className="size-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
