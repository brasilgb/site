import React from 'react';
import Caroucel from '../Caroucel';

const Section3 = ({ section3 }: any) => {
  return (
    <section className="w-full bg-gray-200">
      <Caroucel slides={section3} />
    </section>
  );
};

export default Section3;
