import { Globe } from "react-bootstrap-icons";
import Image from 'next/image';
import img1 from './1.jpg';
import projimg from './projectimg.jpg';
export const Conference = () => {
  return (
    <div className="w-full text-center flex flex-col items-center py-20">
      <div className="w-full text-2xl md:text-5xl font-bold text-webpri mb-8">Conference</div>
      <div className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className="flex flex-col items-center">
          <Image
            src={projimg}
            alt="Paper 1"
            width={500}
            height={500}
            className="object-cover aspect-video bg-white w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <div className="text-left w-full pt-4 px-1">
            <div className="font-semibold text-lg">National Conference on Recent Research in Advanced Computing (NCRRAC 2024)</div>
            <div className="font-light text-base my-2">December 4, 2024</div>
            <div className="text-base">Paper: Automating Online Education: Streamlining Content Creation and Student Engagement (NCRRAC24_184)</div>
            {/* <a className="bg-neutral-800 hover:bg-neutral-600 my-2 cursor-pointer w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm flex gap-2 items-center" href="https://www.seedfoundationofpec.in/" target="_blank">
                <Globe className="size-4" /> Paper
            </a> */}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={img1}
            alt="Paper 1"
            width={500}
            height={500}
            className="object-cover aspect-video bg-white w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <div className="text-left w-full pt-4 px-1">
            <div className="font-semibold text-lg">2nd International Conference on Advances in Artificial Intelligence & Machine Learning in Big Data Processing (AAIMB 2024)</div>
            <div className="font-light text-base my-2">December 12, 2024</div>
            <div className="text-base">Paper: AI-driven system for chronic wound assessment: An automated approach using U-Net architecture for foot ulcers in CKD patients</div>
            {/* <a className="bg-neutral-800 hover:bg-neutral-600 my-2 cursor-pointer w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm flex gap-2 items-center" href="https://www.seedfoundationofpec.in/" target="_blank">
                <Globe className="size-4" /> Paper
            </a> */}
          </div>
        </div>     
      </div>
    </div>
  );
};
