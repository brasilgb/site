import React, { useEffect, useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Slider = ({ slides }: any) => {
  let [current, setCurrent] = useState<any>(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    let int = setInterval(() => {
      if (current === 0) {
        setCurrent(slides.length - 1);
      } else {
        setCurrent(current - 1);
      }
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 8000);
    return () => clearInterval(int);
  }, [current]);

  return (
    <div className="overflow-hidden relative md:h-[600px] md:w-full flex flex-col">
      <div
        className={`flex transition ease-in-out duration-500 z-10`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides?.map((s: any) => (
          <img
            src={`/storage/uploads/${s.featured}`}
            alt={s.title}
            className={`object-cover object-center`}
          />
        ))}
      </div>

      <div className="absolute w-full bottom-10 z-20 flex flex-col items-center justify-center bg-blue-quatro bg-opacity-40 py-8">
        {slides?.map(
          (s: any, i: number) =>
            current === i && (
              <>
                <h1 className="text-4xl font-semibold text-white uppercase">
                  {s.title}
                </h1>
                <p className="text-lg font-medium text-white uppercase">
                  {s.summary}
                </p>
                <button className="flex items-center justify-center rounded-md border border-white shadow-md mt-4 px-6 py-2 font-roboto font-medium text-base text-gray-50 transition-colors">
                  Acessar
                </button>
              </>
            )
        )}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex z-10 text-gray-100 px-0 text-2xl">
        <button
          onClick={previousSlide}
          className="bg-red-um bg-opacity-30 py-4 px-2"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-red-um bg-opacity-30 py-4 px-2"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-10 w-full">
        {slides?.map((s: any, i: number) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={'circle' + i}
            className={`rounded-md cursor-pointer w-10 h-1 z-10 ${
              i === current ? 'bg-white' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
