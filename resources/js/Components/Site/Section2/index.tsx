import { Link } from '@inertiajs/react';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';

const Section2 = ({ section2 }: any) => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center my-10 w-full">
        <h1 className="text-4xl">{section2[0]?.name}</h1>
        <p className="text-base">{section2[0]?.description}</p>
      </div>
      <div className="grid md:grid-cols-5 gap-8 my-8">
        {section2[0]?.posts.map((s: any) => (
          <div className="flex flex-col items-start justify-start hover:shadow-lg shadow border-2 border-white">
            <div className="h-52 w-full">
              <img
                src={`/storage/uploads/${s.featured}`}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center p-1">
                <h1 className="text-lg">{s.title}</h1>
              </div>
              <div className="flex items-start justify-start p-1">
                <p className="text-sm t">{s.summary}</p>
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <Link href={route('slug', s.slug)}>
                <div className="h-8 w-6 flex items-center justify-center text-3xl bg-red-um text-white cursor-pointer">
                  <MdChevronRight className="transition-transform hover:translate-x-0.5 motion-reduce:transform-none" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
