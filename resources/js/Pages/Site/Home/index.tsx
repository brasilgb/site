import Produtos from '@/Components/Site/Produtos';
import Section2 from '@/Components/Site/Section2';
import Section3 from '@/Components/Site/Section3';
import Slider from '@/Components/Site/Slider';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';

const Home = ({ sections, categories }: any) => {
  const sliders = categories
    .filter((s: any) => s.id === sections.section1)
    .map((category: any) => category);
  const section2 = categories
    .filter((s: any) => s.id === sections.section2)
    .map((category: any) => category);
  const section3 = categories
    .filter((s: any) => s.id === sections.section3)
    .map((category: any) => category);
  const produtos = categories
    .filter((s: any) => s.id === sections.section4)
    .map((category: any) => category);

  return (
    <GuestLayout>
      <Slider slides={sliders[0]?.posts} />
      <Section2 section2={section2} />
      <Section3 section3={section3[0]?.posts} />
      <Produtos produtos={produtos} />
    </GuestLayout>
  );
};

export default Home;
