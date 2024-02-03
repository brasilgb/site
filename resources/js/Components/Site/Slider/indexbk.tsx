import React, { useEffect, useState } from 'react';
import 'animate.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Slider = ({ slides }: any) => {
  const [page, setPage] = useState<number>(1);
  const [trans, setTrans] = useState<number>(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage(prev => (prev + 1 >= 3 ? 1 : prev + 1));
      setTrans(page);
    }, 8000);
    return () => clearInterval(int);
  }, []);

  const handlePrevPage = () => {
    setPage(prev => (prev - 1 >= 3 ? 1 : prev - 1));
    setTrans(page);
  };

  const handleNextPage = () => {
    setPage(prev => (prev + 1 >= 3 ? 1 : prev + 1));
    setTrans(page);
  };

  return (
    <section className="relative h-[540px] w-full flex flex-col items-center justify-center">
      <div
        className={`flex transition ease-in-out duration-500 z-10`}
        style={{ transform: `translateX(-${page * 100}%)` }}
      >
        {slides.map((slide: any) => (
          <>
            <img
              className={`w-full h-full object-cover object-center`}
              sizes="100vh"
              alt="Imagem"
              src={`/storage/uploads/${slide.featured}`}
            />
            <div className="absolute bottom-[50%] left-[20%] w-full h-full">
              <h1 className="text-4xl text-white">{slide.titulo}</h1>
              <p className="text-lg text-white">{slide.summary}</p>
            </div>
          </>
        ))}
      </div>
      {/* Left Arrow */}
      <div className={`z-10 absolute left-4 text-2xl`}>
        <span
          className={`inline-block transition-transform hover:-translate-x-1
        motion-reduce:transform-none cursor-pointer ${
          page === 1
            ? 'text-white text-opacity-10'
            : 'text-white hover:text-red-500'
        }`}
        >
          <button disabled={page === 1 ? true : false} onClick={handlePrevPage}>
            <FaChevronLeft />
          </button>
        </span>
      </div>
      {/* Right Arrow */}
      <div className="z-10 absolute right-4 text-2xl">
        <span
          className="inline-block transition-transform hover:translate-x-1
        motion-reduce:transform-none cursor-pointer text-white hover:text-red-500"
        >
          <button onClick={handleNextPage}>
            <FaChevronRight />
          </button>
        </span>
      </div>
    </section>
  );
};

export default Slider;
