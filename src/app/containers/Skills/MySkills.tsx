import React from 'react'
import IconCloud from "@/components/magicui/icon-cloud";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "express",
  "amazonaws",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "python",
  "c",
  "mysql",
  "sql",
  "kotlin",
  "tensorflow",
  "opencv",
  "pandas",
  "numpy",
  "keras"
];

export const MySkills = () => {
  return (
    <div className="py-20 w-full h-fit text-center flex flex-col relative">
      <div className="text-2xl md:text-5xl font-bold text-webpri mb-8">Skills</div>
      <div className='md:mt-16 grid grid-cols-4 gap-y-8 gap-x-2 '>
        <Accordion type="single" defaultValue='item-1' collapsible className="'grid grid-cols-2 md:grid-cols-3 col-span-4 md:col-span-3 gap-y-8 gap-x-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Web Development</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["React","Tailwind CSS","Next","Mongo DB","Angular","Javascript","Typescript","AWS"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>App Development</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["XML","Java","Firebase","React Native","Flutter","Kotlin"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>AIML</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["NLP","SkLearn","Tensorflow","Keras","OpenCV","Pandas","NumPy","Data Analytics","Data Virtualization","Tableau"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Programming Languages</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Python","Java","C++","C","OOPS","Data Structure"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Designing</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["UI","UX","Figma","After Effects","Adobe Illustrator"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Softwares</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Git","Git-hub","Visual Studio","Android Studios","Apache NetBeans"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Knowledge</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Data Structure","Operating Systems","Computer Networks","OOPS","UI/UX Design","Data Mining","Data Analysis","Machine Learning","Deep Learning","NLP","Artificial Intelligence"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Soft Skills</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Leadership","Scrum Master","Team Management"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
        </Accordion>
        
        <div className="mobilehiddenclass md:grid w-full items-center opacity-70 duration-200 cursor-pointer ease-in-out hover:opacity-100 overflow-hidden">
            <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      {/* <div className='md:mt-16 gap-y-8 gap-x-2 '>
        <Accordion type="single" defaultValue='item-1' collapsible className="gap-y-8 gap-x-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Web Development</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["React","Tailwind CSS","Next","Mongo DB","Angular","Javascript","Typescript","AWS"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>App Development</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["XML","Java","Firebase","React Native","Flutter","Kotlin"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>AIML</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["NLP","SkLearn","Tensorflow","Keras","PyTorch","OpenCV","Pandas","NumPy","Matplotlib","Seaborn","Data Analytics","Data Virtualization","Tableau"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Programming Languages</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Python","Java","C++","C","Javascript","OOPS","Data Structure"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Designing</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["UI","UX","Figma","After Effects","Adobe Illustrator"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Softwares</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Git","Git-hub","Visual Studio","Android Studios","Apache NetBeans"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Knowledge</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Data Structure","Operating Systems","Computer Networks","OOPS","Data Mining","Data Analysis","Data Science","Machine Learning","Deep Learning","NLP","Artificial Intelligence","UI/UX Design"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger className='text-lg md:text-xl font-semibold mb-2'>Soft Skills</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex gap-2 flex-wrap">
                            {["Leadership","Scrum Master","Team Management","Communication","Critical thinking","Problem-solving","Adaptability","Multitasking","Attention to detail","Collaboration","Agile Development"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-sm px-2 py-1 rounded-sm"
                            >
                                {tag}
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
        </Accordion>
        
        <div className="hidden md:grid w-full items-center opacity-70 duration-200 cursor-pointer ease-in-out hover:opacity-100 overflow-hidden">
            <IconCloud iconSlugs={slugs} />
        </div>
      </div> */}
    </div>
  )
}
