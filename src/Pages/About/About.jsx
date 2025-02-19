import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import BgImage from "../../../public/about_bg-img.png";
import { useSelector } from "react-redux";
import { scrollToTop } from "../../utils";

const About = () => {
  const { lang } = useSelector((state) => state.lang);
  useEffect(() => {
    scrollToTop();
  }, [])
  return (
    <section id="about" className="relative about min-[480px]:py-[50px]">
      <img
        src={BgImage}
        className="hidden min-[992px]:flex w-full h-full absolute opacity-30 top-0"
        alt="image"
      />
      <div className="container relative text-white text-center min-[480px]:text-left py-[25px] min-[480px]:py-[50px] px-2">
        <Link to="/" className="text-[#fff9]">
          {lang === "eng"
            ? "Luxury Cars for Rent in Dubai / aboutUs"
            : "Аренда люксовых и спортивных авто / О нас"}
        </Link>
        <h3 className="text-[26px] min-[480px]:text-[32px] font-semibold my-[15px] min-[480px]:my-[50px]">
          {lang === "eng" ? " About us" : "О НАС"}
        </h3>
        <h4 className="text-[22px] min-[480px]:text-[30px]">
          {lang === "eng"
            ? "Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable Journeys in Dubai!"
            : "Добро пожаловать в Auto Zoom Car Rental Co LLC – Ваш партнер в незабываемых путешествиях по Дубаю!"}
        </h4>
        <p className="text-[#cacaca] text-[19px] p480:mb-[50px] mt-[15px]">
          {lang === "eng"
            ? "In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai."
            : "В мире, где каждая поездка становится приключением, Auto Zoom Car Rental Co LLC предлагает вам уникальный опыт аренды автомобилей в самом сердце Дубая."}
        </p>
        <h3 className="text-[26px] p480:text-[32px] font-semibold mt-[20px] p480:mt-[50px] mb-[30px]">
          {lang === "eng" ? " Why Auto Zoom?" : "Почему Auto Zoom?"}
        </h3>
        <article className="flex flex-col gap-7">
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              {lang === "eng"
                ? "Elegant Car Fleet:"
                : "Элегантный Парк Автомобилей:"}
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              {lang === "eng"
                ? "e provide you the opportunity to choose from our luxurious car  fleet – from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs."
                : "Мы предлагаем вам возможность выбора из нашего роскошного парка автомобилей – от элегантных седанов до мощных внедорожников. У нас есть автомобиль, соответствующий вашему стилю и вашигм потребностям."}
            </p>
          </div>
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              {lang === "eng"
                ? "Transparency and Trust:"
                : "Беззаботная Аренда:"}
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              {lang === "eng"
                ? "We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will  make your rental experience straightforward and clear."
                : "Наша цель – сделать вашу поездку максимально удобной. Гибкие условия аренды, возможность заказа с водителем и широкий спектр дополнительных услуг – все это для вашего комфорта."}
            </p>
          </div>
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              {lang === "eng"
                ? " Worry-Free Rental:"
                : "Прозрачность и Доверие:"}
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              {lang === "eng"
                ? "Our goal is to make your journey as comfortable as possible. Flexible rental terms, the option to hire with a driver, and a wide range of additional services – all for your convenience."
                : "Мы ценим каждого клиента, поэтому наши цены честны и прозрачны. Без скрытых платежей, без неожиданных сюрпризов. Доверьтесь нам, и мы сделаем ваш опыт аренды простым и ясным."}
            </p>
          </div>
          <div className="txt-con leading-[30px]">
            <h3 className="text-[22px] font-bold inline-block mr-[5px]">
              {lang === "eng"
                ? "Service at Your Level:"
                : "Сервис на Вашем Уровне:"}
            </h3>
            <p className="inline text-[#d8d8d8] text-[18px] font-normal">
              {lang === "eng"
                ? " Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you."
                : "Наша дружелюбная и профессиональная команда готова воплотить ваши идеи в реальность. Мы стремимся не просто предоставить автомобиль, а создать для вас настоящий автомобильный опыт."}
            </p>
          </div>
        </article>
        <h5 className="text-[22px] font-bold mt-[30px] p480:mt-[100px]">
          {lang === "eng" ? "Our Mission:" : "Наша Миссия:"}
        </h5>
        <p className="mt-2 text-[18px]">
          {lang === "eng"
            ? "Auto Zoom Car Rental Co LLC is created with one goal – to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures."
            : "Auto Zoom Car Rental Co LLC создана с одной целью – сделать каждую поездку незабываемой. Мы стремимся предоставить вам не просто автомобиль, а ключ к новым впечатлениям и приключениям."}
        </p>
        <h5 className="text-[22px] font-bold mt-[15px]">
          {lang === "eng" ? " Contact us:" : "Обратитесь к Нам:"}
        </h5>
        <p className="mt-2 text-[18px]">
          {lang === "eng"
            ? "Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get i  touch with us today to start your exciting journey through Dubai i  our stylish and reliable cars. Allow yourself to savor every moment o  your trip."
            : "Доверьтесь профессионалам – доверьтесь Auto Zoom Car Rental Co LLC. Свяжитесь с нами сегодня, чтобы начать ваше увлекательное путешествие по Дубаю наших стильных и надежных автомобилях. Позвольте себе наслаждаться каждым моментом вашего путешествия."}
        </p>
      </div>
    </section>
  );
};

export default About;
