import { useSelector } from "react-redux";
import LuxurCar1 from "../../../public/luxury_left.png";
import LuxurCar2 from "../../../public/luxury_right.png";
import { useEffect } from "react";
import { scrollToTop } from "../../utils";

export const LuxuryCar = () => {
  const { lang } = useSelector((state) => state.lang);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <section
      id="luxurycar"
      className="relative py-[25px] md:py-[70px] z-[1] bg-[#272933]"
    >
      <div className="container p-[15px]      relative z-[1]">
        <p className=" text-[28px] md:text-[40px] text-white font-semibold">
          {" "}
          {lang === "eng"
            ? "LUXURY CAR RENTAL IN EMIRATES"
            : "ПРОКАТ АВТОМОБИЛЕЙ В ЭМИРАТАХ"}
        </p>
        <p className="mt-[15px] text-white leading-[30px]">
          {lang === "eng"
            ? "Are you ready to feel the adrenaline rush and unleash your inner speed demon? Look no further than Terra luxury car rental Dubai, the city where dreams become reality. In this ultimate guide to sports car rental Dubai, we will take you on a thrilling journey through the world of luxury and supercar rental Dubai. Imagine cruising down the iconic Sheikh Zayed Road in a sleek and powerful sports car rental Dubai style, turning heads and leaving everyone in awe of your style. Whether you are a car enthusiast or simply looking to"
            : "Дубай – крупнейший город в Персидском заливе, который славится своими роскошными магазинами, ультрасовременной архитектурой и ночными клубами. Сюда приезжают по разным причинам: деловое мероприятие, отпуск, шопинг, свадьба или посещение спортивных и других мероприятий. Чтобы получить максимум удовольствия от путешествия, а также иметь возможность с комфортом посетить все интересующие места и решить насущные проблемы, практичнее всего воспользоваться услугой аренды автомобиля от нашей компании Terra Car Rental. С нами Вы можете посетить не только основные"}
        </p>
        <p className=" text-[28px] mt-[30px] md:text-[40px] text-white font-semibold">
          {" "}
          {lang === "eng"
            ? "What are the requirements to rent a luxury car in Dubai?"
            : "Как арендовать машину?"}
        </p>
        <p className="mt-[15px] text-white leading-[30px]">
          {lang === "eng"
            ? "To rent a car Dubai, it's enough to have a valid driving license and enough funds. & you'll need to show your foreign passport and prove that you have come of age and have driving experience.The age limit and the requirements for the license depend on where you're from. Visitors from Europe, the UK, the US and the Middle East can drive with their national licenses. People from other parts of the world need an international license. The age limit for the driver might vary from 21 to 25 years. Please get in touch with us before placing an order to discuss your individual situation.Cars in the UAE have steering wheels on the left side. Drivers stick to the right side of the road.If needed, you can add a second driver to your rental contract. The requirements for this person will be the same as for the first driver. If you let someone who isn't mentioned in your rental contract take a place behind the wheel, you can get a fine.The duration of a premium car rental in Dubai can vary from one day to several weeks. Discounts are common for luxury car rental Dubai monthly car rental plan. Use this chance to have fun, increase your high social status and please your dearest and nearest!Please avoid smoking inside the rented vehicle."
            : "Дубай - просто создан для автомобилистов и скоростных машин! Для аренды автомобиля необходимо зайти на наш сайт, выбрать подходящую модель и указать нужную дату и время. В обговоренные сроки авто будет ожидать Вас у места вашего пребывания, будь то аэропорт, гостиница или офис. Мы предлагаем своим клиентам исключительно премиальные машины разных категорий, чтобы вы могли взять в аренду ту модель, которая будет идеально соответствовать вашим предпочтениям и целям."}
        </p>
      </div>
      <img
        className="absolute object-contain h-full  top-0 right-0  hidden sm:block opacity-35 md:opacity-65"
        src={LuxurCar1}
        alt="img"
      />
      <img
        className="absolute object-contain h-full top-0 left-0 hidden sm:block opacity-35 md:opacity-65"
        src={LuxurCar2}
        alt="img"
      />
    </section>
  );
};
