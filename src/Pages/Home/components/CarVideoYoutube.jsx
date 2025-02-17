import SeeAllBtn from "../../../Components/Buttons/SeeAllBtn";

const CarVideoYoutube = () => {
  return (
    <section className="bg-[#1E1F27] relative text-white py-12 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-3/5 w-full">
        <iframe
          className="w-full aspect-video rounded-lg shadow-xl"
          src="https://www.youtube-nocookie.com/embed/rsHmvxJ86PA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="lg:w-2/5 w-full relative">
        <div className="absolute right-0 opacity-40 w-full md:w-1/2 h-full  bg-[url('/assets/halifa.png')] bg-cover" />
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold mb-6">SPORTS CAR RENTAL DUBAI</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Terra L L C a Car is a Top Luxury Car Rental Dubai based company. We
            offer sports car rental, and supercar rental in Dubai. The best
            luxury car rental process provided by our fleet. We own a diverse
            range of luxury supercar rental and sports car rental Dubai style,
            including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes
            Benz, Porsche, and Range Rover, to name a few. Rent a car with the
            best car rental company in Dubai.
          </p>

          <SeeAllBtn/>
        </div>
      </div>
    </section>
  );
};

export default CarVideoYoutube;
