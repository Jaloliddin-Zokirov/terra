import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SeeAllBtn = () => {
  const { lang } = useSelector((state) => state.lang);
  return (
    <Link
      to={"cars"}
      className="group flex items-center gap-2 text-xl transition-all hover:gap-4 hover:cursor-pointer hover:text-red-500"
    >
      { lang==='eng' ? 'SEE ALL' : 'СМОТРЕТЬ ВСЕ'}
      <svg
        className="w-8 h-8 transition-transform group-hover:translate-x-1"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-white group-hover:fill-red-500 transition-colors"
          d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
        />
        <circle
          className="stroke-white group-hover:stroke-red-500 transition-colors"
          cx="16"
          cy="16"
          r="15.5"
        />
      </svg>
    </Link>
  )
}

export default SeeAllBtn
