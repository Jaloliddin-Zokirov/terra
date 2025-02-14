const SuperCar = () => {
  return (
      <div className="flex flex-col md:flex-row mt-8 lg:mt-28">
        <div className="w-full md:w-1/2 h-[269px] filter sepia brightness-125 saturate-150 bg-[url('/assets/bgfilter-car.webp')] bg-cover bg-center" />
        <div className="w-full md:w-1/2 bg-[#343744] p-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 max-w-lg">
            SUPERCAR RENTAL DUBAI
          </h2>
          <p className="text-lg mb-8">Hire the latest supercar</p>
          <button className="group flex items-center gap-2 text-sm lg:text-lg transition-all hover:gap-4 hover:cursor-pointer hover:text-red-500">
            SEE ALL
            <svg className="w-8 h-8 transition-transform group-hover:translate-x-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-white group-hover:fill-red-500 transition-colors" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z" />
              <circle className="stroke-white group-hover:stroke-red-500 transition-colors" cx="16" cy="16" r="15.5" />
            </svg>
          </button>
        </div>
      </div>
  )
}

export default SuperCar
