import React from 'react';
import Image from 'next/image';
import img1 from './1.jpg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';
import img4 from './4.jpeg';

const hackathonsData = [
  {
    title: 'TechSummit',
    location: 'Winner',
    imageUrl: img1,
  },
  {
    title: 'Hackfest',
    location: 'Healthcare Track Winner',
    imageUrl: img2,
  },
  {
    title: 'Paper Presentation',
    location: 'Runner',
    imageUrl: img3,
  },
  {
    title: 'Code-Quest',
    location: 'Runner',
    imageUrl: img4,
  },
];

export const Hackathons = () => {
  return (
    <div className="w-full text-center flex flex-col items-center py-20">
      <div className="w-full text-2xl md:text-5xl font-bold text-webpri mb-8 mt-14">Hackathons</div>
      <div className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {hackathonsData.map((hackathon, index) => (
          <div key={index}>
            <Image
              src={hackathon.imageUrl}
              alt={hackathon.title}
              width={500}
              height={500}
              className="object-cover aspect-video bg-white w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="pt-4 text-black px-1">
              <div className='text-lg 2xl:text-3xl text-left'>{hackathon.title}</div>
              <div className='text-xs 2xl:text-lg flex justify-between my-2 text-neutral-800'>
                <div>{hackathon.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
