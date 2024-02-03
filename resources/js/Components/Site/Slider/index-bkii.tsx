'use client';
import React, { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type Props = {};

const Slider = (props: Props) => {
  const slides = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
      mobileUrl:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
      title: 'Welcome!',
      subtitle: 'Take a look at this super slider',
      buttonLink:
        'https://medium.com/@antonvaits/create-a-responsive-image-slider-with-smooth-transitions-using-react-and-css-44c95bbff30a',
      buttonText: 'Go to post',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      mobileUrl:
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Welcome!',
      subtitle: 'Take a look at this super slider',
      buttonLink:
        'https://medium.com/@antonvaits/create-a-responsive-image-slider-with-smooth-transitions-using-react-and-css-44c95bbff30a',
      buttonText: 'Go to post',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
      mobileUrl:
        'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
      title: 'Welcome!',
      subtitle: 'Take a look at this super slider',
      buttonLink:
        'https://medium.com/@antonvaits/create-a-responsive-image-slider-with-smooth-transitions-using-react-and-css-44c95bbff30a',
      buttonText: 'Go to post',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      mobileUrl:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Welcome!',
      subtitle: 'Take a look at this super slider',
      buttonLink:
        'https://medium.com/@antonvaits/create-a-responsive-image-slider-with-smooth-transitions-using-react-and-css-44c95bbff30a',
      buttonText: 'Go to post',
    },
  ];

  const widthWind = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  console.log(widthWind);

  const refCaroucel = useRef(null);
  const next = () => {
    refCaroucel.current.scrollLeft += widthWind;
  };

  const previous = () => {
    refCaroucel.current.scrollLeft -= widthWind;
  };

  useEffect(() => {
    let move = widthWind;
    setInterval(() => {
      if (move >= 1200) {
        refCaroucel.current.scrollLeft -= move;
        move = widthWind;
      } else {
        refCaroucel.current.scrollLeft += move;
        move += widthWind - 500;
      }
    }, 1000);
  }, []);

  return (
    <section className={`relative h-[550px] -top-1 bg-slate-500 w-full`}>
      <div
        className="h-full absolute flex overflow-x-hidden scroll-smooth"
        ref={refCaroucel}
      >
        {slides.map((img: any) => (
          <img
            src={img.url}
            alt={img.title}
            style={{ width: widthWind }}
            className={` object-cover object-center`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <div className="z-10 absolute left-4 text-2xl bottom-1/2">
        <span className="cursor-pointer text-white hover:text-red-500">
          <button onClick={previous}>
            <FaChevronLeft />
          </button>
        </span>
      </div>

      {/* Right Arrow */}
      <div className="z-10 absolute right-4 text-2xl bottom-1/2">
        <span className="cursor-pointer text-white hover:text-red-500">
          <button onClick={next}>
            <FaChevronRight />
          </button>
        </span>
      </div>
    </section>
  );
};

export default Slider;
