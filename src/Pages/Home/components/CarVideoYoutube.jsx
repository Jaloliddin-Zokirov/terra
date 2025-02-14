const CarVideoYoutube = () => {
  return (
    <div className="bg-[#1E1F27] relative text-white py-12 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">

      <div className="lg:w-3/5 w-full">
        <iframe
          className="w-full aspect-video rounded-lg shadow-xl"
          src="https://www.youtube.com/embed/rsHmvxJ86PA"
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
            Terra L L C a Car is a Top Luxury Car Rental Dubai based company. We offer sports car rental, and supercar rental in Dubai. The best luxury car rental process provided by our fleet. We own a diverse range of luxury supercar rental and sports car rental Dubai style, including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car with the best car rental company in Dubai.
          </p>
        
          <button className="group flex items-center gap-2 text-xl transition-all hover:gap-4 hover:cursor-pointer hover:text-red-500">
            SEE ALL
            <svg className="w-8 h-8 transition-transform group-hover:translate-x-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-white group-hover:fill-red-500 transition-colors" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z" />
              <circle className="stroke-white group-hover:stroke-red-500 transition-colors" cx="16" cy="16" r="15.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarVideoYoutube