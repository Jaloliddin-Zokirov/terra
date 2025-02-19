import { useEffect, useState } from "react";

const Loading = () => {
  const totalDots = 20;
  const [activeIndex, setActiveIndex] = useState(0);
  const imageSize = 200;
  const radius = imageSize / 1.7;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalDots);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-50 inset-0 w-full h-full flex items-center justify-center bg-black">
      <div className="pl relative w-full h-full flex items-center justify-center">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            className={`pl__dot absolute w-4 h-4 rounded-full transition-all duration-300 ${
              i === activeIndex ||
              (i + 1) % totalDots === activeIndex ||
              (i + 2) % totalDots === activeIndex
                ? "bg-red-500 scale-125"
                : "bg-red-900 opacity-50"
            }`}
            style={{
              transform: `rotate(${
                (i * 360) / totalDots
              }deg) translateY(-${radius}px)`,
            }}
          />
        ))}
        <div className="pl__text absolute flex items-center justify-center">
          <img
            className="logoLoading"
            style={{ width: `${imageSize}px` }}
            src="https://terra-rentacar.netlify.app/assets/logoTerra5-2akSFrzj.png"
            alt="TERRA rent a car"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
