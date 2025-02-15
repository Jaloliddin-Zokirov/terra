import { useSelector } from "react-redux";
import SeeAllBtn from "../../../Components/Buttons/SeeAllBtn";

const SuperCar = () => {
  const { lang } = useSelector((state) => state.lang);
  return (
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[269px] filter sepia brightness-125 saturate-150 bg-[url('/assets/bgfilter-car.webp')] bg-cover bg-center" />
        <div className="w-full md:w-1/2 bg-[#343744] p-8 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 max-w-lg">
            {lang === 'eng' ?'SUPERCAR RENTAL DUBAI' : 'АРЕНДА СУПЕРКАРОВ В ДУБАЕ'}
          </h2>
          <p className="text-lg mb-8">{lang === 'eng' ? 'Hire the latest supercar' : 'Возьмите напрокат новейший суперкар'}</p>
          <SeeAllBtn />
        </div>
      </section>
  )
}

export default SuperCar
