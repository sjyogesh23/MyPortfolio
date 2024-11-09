import React from 'react';
import Image from "next/image";
import img1 from './Seminar_pics/1.jpg';
import img2 from './Seminar_pics/2.jpg';
import img3 from './Seminar_pics/3.jpg';
import img4 from './Seminar_pics/4.jpg';
import img5 from './Seminar_pics/5.jpg';

export const Seminar = () => {
  const seminars = [
    { img: img1, title: 'Web Applications', location: 'IGNITE\'23', date: 'Feb 2023', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: img2, title: 'Cybernaut Workshop', location: 'SRM IST, Rmp', date: 'Jan 2024', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: img3, title: 'Android App Development', location: 'IGNITE\'24', date: 'Jan 2024', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: img4, title: 'Cybernaut Workshop', location: 'MAHER College', date: 'Jan 2024', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { img: img5, title: 'Cybernaut Workshop', location: 'Loyola-ICAM', date: 'Feb 2024', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ];

  return (
    <div className="w-full text-center flex flex-col items-center py-20">
      <div className="w-full text-2xl md:text-5xl font-bold text-webpri mb-8">Seminars</div>
      <div className='w-full grid grid-col-1 md:grid-cols-5 gap-2'>
        {seminars.map((seminar, index) => (
          <div key={index} className='relative group overflow-hidden'>
            <Image
              src={seminar.img}
              alt={`Seminar ${index + 1}`}
              width={500}
              height={500}
              className="object-cover h-[40vh] md:h-[60vh] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="block md:hidden py-2 text-black">
              <div className='text-lg text-left'>{seminar.title}</div>
              <div className='text-sm flex justify-between my-2'><div>{seminar.location}</div><div>{seminar.date}</div></div>
              {/* <div className='text-xs text-justify mb-4'>{seminar.description}</div> */}
            </div>

            <div className="hidden absolute bottom-0 left-0 right-0 bg-gradient-to-b from-[#32006faa] to-[#32006fee] p-4 text-white h-full transition-all duration-500 w-full md:flex flex-col items-left justify-end -translate-x-[110%] group-hover:translate-x-0">
              <div className='text-lg 2xl:text-3xl text-left'>{seminar.title}</div>
              <div className='text-xs 2xl:text-lg flex flex-col 2xl:flex-row text-left 2xl:justify-between my-1 xl:my-2 justify-between text-neutral-100'><div>{seminar.location}</div><div>{seminar.date}</div></div>
              {/* <div className='text-xs 2xl:text-base text-left text-neutral-100 max-h-full overflow-y-auto'>
                {seminar.description}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
