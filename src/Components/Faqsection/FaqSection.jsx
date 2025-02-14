import "./faqsection.scss";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";

export const FaqSection = () => {
  const { lang } = useSelector((state) => state.lang);
  const [open, setOpen] = useState(null);
  const handleOpen = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <section id="faqSection" className="faqsection">
      <div className=" mx-auto px-12 faq__inner  py-16   ">
        <h3 className="text-[32px] font-semibold text-white text-center">
          {lang === "eng" ? "FAQ" : "Часто задаваемые вопросы"}
        </h3>

        <div className="faq__info1 p-4 mx-auto flex flex-col items-center max-w-[900px] w-full">
          <div className="info1__title w-full flex flex-col gap-4 justify-center relative">
            <div
              onClick={() => handleOpen(1)}
              className="flex cursor-pointer mx-auto items-center"
            >
              <div className="rightbtn animate-bounce rotate-180   ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
              <p className="text-[20px] sm:text-[24px] text-center mx-[10px]   text-white">
                {lang === "eng"
                  ? "What is the minimum age requirements to rent a car in Dubai ?"
                  : "Какой минимальный возраст для аренды автомобиля?"}
              </p>

              <div className="animate-bounce  ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
            </div>
            {open === 1 ? (
              <div className="info1__text absolute top-[calc(100%)]  z-[2] bg-[#272933] p-4 rounded-md ">
                <p className="text-[18px] text-white">
                  {lang === "eng"
                    ? " Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/arementioned as additional driver."
                    : "Минимальный возраст для аренды автомобилей — 25 лет. Водители моложе 25 лет должны иметь стаж вождения более 2 лет."}
                </p>
              </div>
            ) : (
              ""
            )}
            {open === 1 ? (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-[0] mt-[15px] bg-gray-500"></div>
            ) : (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-full mt-[15px] bg-gray-500"></div>
            )}
          </div>
        </div>

        <div className="faq__info2 p-4 mx-auto  flex flex-col items-center max-w-[900px] w-full">
          <div className="info1__title w-full flex flex-col gap-4 items-center justify-center relative">
            <div
              onClick={() => handleOpen(2)}
              className="flex cursor-pointer mx-auto items-center"
            >
              <div className="rightbtn animate-bounce rotate-180   ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
              <p className="text-[20px] sm:text-[24px]  text-center mx-[10px]   text-white">
                {lang === "eng"
                  ? "What do you need for a luxury car rental in Dubai ?"
                  : "Какие документы нужны для аренды автомобиля?"}
              </p>

              <div className="animate-bounce  ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
            </div>
            {open === 2 ? (
              <div className="info1__text absolute top-[calc(100%)]  z-[2] bg-[#272933] p-4 rounded-md ">
                <p className="text-[18px] text-white">
                  {lang === "eng"
                    ? "Drivers shall be required to have a valid driver's license and  Passport copy."
                    : "Паспорт, водительское удостоверение – обратите внимание, что мы принимаем только оригиналы данных документов."}
                </p>
              </div>
            ) : (
              ""
            )}
            {open === 2 ? (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-[0] mt-[15px] bg-gray-500"></div>
            ) : (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-full mt-[15px] bg-gray-500"></div>
            )}
          </div>
        </div>

        <div className="faq__info3 p-4 mx-auto flex flex-col items-center max-w-[900px] w-full">
          <div className="info1__title w-full flex flex-col gap-4 justify-center relative">
            <div
              onClick={() => handleOpen(3)}
              className="flex cursor-pointer mx-auto items-center"
            >
              <div className="rightbtn animate-bounce rotate-180   ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
              <p className="text-[20px] sm:text-[24px] text-center mx-[10px]   text-white">
                {lang === "eng"
                  ? "How much is the Insurance limit on luxury car rental Dubai?"
                  : "Сколько стоит страховой лимит при аренде автомобилей класса люкс в Дубае?"}
              </p>

              <div className="animate-bounce  ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
            </div>
            {open === 3 ? (
              <div className="info1__text absolute top-[calc(100%)]  z-[2] bg-[#272933] p-4 rounded-md ">
                <p className="text-[18px] text-white">
                  {lang === "eng"
                    ? "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for  Excess Luxury Cars. 7000-10000 AED for Sports Cars."
                    : "Включает в себя полную страховку транспортного средства. 3000–5000 дирхамов ОАЭ за автомобили повышенной комфортности. 7000-10000 дирхамов ОАЭ за спортивные автомобили."}
                </p>
              </div>
            ) : (
              ""
            )}
            {open === 3 ? (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-[0] mt-[15px] bg-gray-500"></div>
            ) : (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-full mt-[15px] bg-gray-500"></div>
            )}
          </div>
        </div>

        <div className="faq__info4 p-4 mx-auto flex flex-col items-center max-w-[900px] w-full">
          <div className="info1__title w-full flex flex-col gap-4 justify-center relative">
            <div
              onClick={() => handleOpen(4)}
              className="flex cursor-pointer mx-auto items-center"
            >
              <div className="rightbtn animate-bounce rotate-180   ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
              <p className="text-[20px] sm:text-[24px] text-center mx-[10px]   text-white">
                {lang === "eng"
                  ? "What are the driving licenses that can be used in Arab countries ?"
                  : "Какие водительские права можно использовать в арабских странах?"}
              </p>

              <div className="animate-bounce  ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
            </div>
            {open === 4 ? (
              <div className="info1__text absolute top-[calc(100%)]   z-[2] bg-[#272933] p-4 rounded-md ">
                <p className="text-[18px] text-white">
                  {lang === "eng"
                    ? "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom ofSaudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6.Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10.Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon,15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania."
                    : "Местные водительские права для граждан ОАЭ. Международные водительские права, выданные следующими странами: 1. Королевство Саудовская Аравия, 2. Египет, 3. Бахрейн, 4. Иордания, 5. Кувейт, 6. Тунис, 7. Султанат Оман, 8. Алжир, 9. Катар, 10. Марокко, 11. Судан, 12. Сомали, 13. Палестина, 14. Ливан, 15. Ливия, 16. Сирия, 17. Йемен, 18. Ирак, 19. Джибути, 20. Коморские Острова, 21. Мавритания."}
                </p>
              </div>
            ) : (
              ""
            )}
            {open === 4 ? (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-[0] mt-[15px] bg-gray-500"></div>
            ) : (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-full mt-[15px] bg-gray-500"></div>
            )}
          </div>
        </div>

        <div className="faq__info5 p-4 mx-auto flex flex-col items-center max-w-[900px] w-full">
          <div className="info1__title w-full flex flex-col gap-4 justify-center relative">
            <div
              onClick={() => handleOpen(5)}
              className="flex cursor-pointer mx-auto items-center"
            >
              <div className="rightbtn animate-bounce rotate-180   ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
              <p className="text-[20px] sm:text-[24px] text-center mx-[10px]   text-white">
                {lang === "eng"
                  ? " Can anyone else drive the car i rent?"
                  : "Может ли кто-нибудь еще управлять автомобилем, который я арендую?"}
              </p>

              <div className="animate-bounce  ">
                <RiArrowLeftDoubleFill fill="#c9c6c6" />
              </div>
            </div>
            {open === 5 ? (
              <div className="info1__text absolute top-[calc(100%)]   bg-[#272933] p-4 rounded-md ">
                <p className="text-[18px] text-white">
                  {lang === "eng"
                    ? "The contract prescribes two drivers, but at the time offilling out the contract, you must provide a driver's licenseand passport."
                    : "В договоре прописываются два водителя, но на момент оформления договора необходимо предоставить водительское удостоверение и паспорт."}
                </p>
              </div>
            ) : (
              ""
            )}
            {open === 5 ? (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-[0] mt-[15px] bg-gray-500"></div>
            ) : (
              <div className="info1__liner mx-auto h-[1px] transition-all ease-in duration-500 w-full mt-[15px] bg-gray-500"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
