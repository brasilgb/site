'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Caroucel = ({ slides }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides?.length > 6 ? 6 : slides?.length,
    slidesToScroll: 3,
  };
  return (
    <div className="container mx-auto my-10 p-8">
      <div className="m-auto">
        <Slider {...settings}>
          {slides?.map((slide: any) => (
            <div key={slides.id}>
              <div className="flex items-center justify-center my-4 p-4 w-full h-full shadow bg-gray-50 border-2 border-white">
                <img
                  src={`/storage/uploads/${slide.featured}`}
                  alt=""
                  className="h-12"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Caroucel;
