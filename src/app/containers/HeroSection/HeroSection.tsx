import React from 'react'
import { FlipWords } from "@/components/ui/flip-words";
import bgimg from "./bg_img.png";
//import bgimg from "./bgimg.jpg";
import Image from 'next/image';

export const HeroSection = () => {
    const words = ["Developer", "Designer", "AI Enthusiast", "Data Scientist", "Freelancer"];
  return (
    <div className='relative h-screen flex flex-col md:flex-row overflow-x-hidden overflow-y-hidden justify-between bg-[#eee]'>
        <Image src={bgimg} alt='SJY' className='md:h-screen absolute object-contain duration-1500 ease-in-out right-[-50px] animate-wiggle -bottom-[50px] saturate-150'/>
        
        <div className='z-10 flex flex-col justify-center mx-[20px] md:px-[60px] mt-[10%] md:mt-0 items-start'>
            <div className="text-2xl md:text-4xl font-normal text-neutral-600 text-left">
                Hello, It&apos;s me
                <div className="text-3xl md:text-5xl font-bold text-webpri my-1 md:my-4">Yogesh SJ</div>
                And I&apos;m a<FlipWords words={words} duration={1500} />
            </div>
            <div className='flex gap-4 mt-4 md:mt-8 text-center md:text-left'>
            <a href="http://cooltex.co.in/yogesh/YogeshSJ.pdf" target='__blank'>
                <button className='text-l md:text-xl bg-webpri w-fit border-2 border-webpri text-white rounded px-4 py-1 duration-200 cursor-pointer ease-in-out hover:bg-dwebpri hover:tracking-wide'>
                    My Resume
                </button>
            </a>
            </div>
        </div>
        <div className=''></div>
    </div>
  )
}
