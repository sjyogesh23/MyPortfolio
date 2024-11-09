import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Globe } from "react-bootstrap-icons";
export function TimelineDemo() {
  const data = [
    {
      title: "Cybernaut Edu-Tech LLP",
      subtitle:"UI/UX Designer (Internship)",
      date:"Sep 2023 - Mar 2024",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Developed engaging social media content and created comprehensive study materials for workshops, enhancing
              participants' learning experiences and driving engagement.
              </li>
              <li>
              Served as a tutor for two batches, providing guidance and support in UI/UX design principles; graded final
              projects and conducted a hands-on workshop in collaboration with the presidents of three colleges: Loyola
              ICAM, Maher College, and SRM IST, Ramapuram.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Skills</div>
            <div className="flex gap-2 flex-wrap">
            {["UI/UX Design","Figma","Tutoring"].map((tag, index) => (
              <div
                key={index}
                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm"
              >
                {tag}
              </div>
            ))}            
            </div>
          </div>
        </div>
      ),
    },{
      title: "Seed Foundation of PEC",
      subtitle:"Full Stack Development (Freelance)",
      date:"Dec 2023 - Jan 2024",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Spearheaded React JS and AWS projects at Seed Foundation, implementing Agile methodology for a significant
              online presence.
              </li>
              <li>
              Spearheaded the development of the official website, achieving a 30% improvement in user engagement and a
              25% reduction in bounce rate.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Skills</div>
            <div className="flex gap-2 flex-wrap">
            {["React JS","AWS","Tailwind CSS","Leadership","Scrum meeting","Agile project development","Team Management"].map((tag, index) => (
              <div
                key={index}
                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm"
              >
                {tag}
              </div>
            ))}            
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Link</div>
            <div className="flex gap-2 flex-wrap">
              <a className="bg-neutral-800 hover:bg-neutral-600 cursor-pointer w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm flex gap-2 items-center" href="https://www.seedfoundationofpec.in/" target="_blank">
                <Globe className="size-4" /> Website
              </a>         
            </div>
          </div>
        </div>
      ),
    },{
      title: "MIT London",
      subtitle:"Research Work (Internship)",
      date:"Oct 2023 - Dec 2023",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Granted a UK Design Patent for an AI-powered footwear system, featuring adaptive support, real-time activity
              tracking, and personalized comfort through advanced AI integration.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Skills</div>
            <div className="flex gap-2 flex-wrap">
            {["React JS","AWS","Tailwind CSS","Leadership","Scrum meeting","Agile project development","Team Management"].map((tag, index) => (
              <div
                key={index}
                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm"
              >
                {tag}
              </div>
            ))}            
            </div>
          </div>
          
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Link</div>
            <div className="flex gap-2 flex-wrap">
              <a className="bg-neutral-800 hover:bg-neutral-600 cursor-pointer w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm flex gap-2 items-center" href="https://www.registered-design.service.gov.uk/find/6369634" target="_blank">
                <Globe className="size-4" /> Website - Number: 6369634
              </a>         
            </div>
          </div>
        </div>
      ),
    },{
      title: "Shiash Info Solutions Private Limited",
      subtitle:"Java Developer (Internship)",
      date:"Mar 2022 - May 2022",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Acquired hands-on experience in Java programming during internship, proficient in handling classes and inference
              using Apache NetBeans.
              </li>
              <li>
              Received valuable instruction in fundamentals of Angular JS towards culmination of internship, broadening skill
              set.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Skills</div>
            <div className="flex gap-2 flex-wrap">
            {["Java","SQL","Angular","Apache NetBeans"].map((tag, index) => (
              <div
                key={index}
                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm"
              >
                {tag}
              </div>
            ))}            
            </div>
          </div>
        </div>
      ),
    },{
      title: "Cybernaut Edu-Tech LLP",
      subtitle:"Project Team Lead (Part-Time)",
      date:"May 2022 - Oct 2022",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
                Excelled in C++ programmer internship, demonstrating proficiency and enhancing skills over ten months of
                collaborative development.
              </li>
              <li>
                Promoted to Project Team Lead, leading and collaborating on projects like the Hospital Management System,
                while furthering leadership and team management abilities.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Skills</div>
            <div className="flex gap-2 flex-wrap">
            {["C++","Python"].map((tag, index) => (
              <div
                key={index}
                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm"
              >
                {tag}
              </div>
            ))}
            </div>
          </div>
        </div>
      ),
    },{
      title: "Cybernaut Edu-Tech LLP",
      subtitle:"C++ Programmer (Internship)",
      date:"Jan 2022 - Oct 2022",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Contributed to the design and implementation of key components in C++, focusing on code efficiency, readability, and performance improvements while following industry best practices.
              </li>
              <li>
              Assisted in identifying and fixing bugs using debugging tools, and created unit tests to ensure code quality and reliability, contributing to a smoother and more stable project development process.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Skills</div>
            <div className="flex gap-2 flex-wrap">
            {["C++","Python"].map((tag, index) => (
              <div
                key={index}
                className="bg-neutral-800 hover:bg-neutral-600 cursor-default w-fit text-white text-xs md:text-sm px-2 py-1 rounded-sm"
              >
                {tag}
              </div>
            ))}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full py-20 text-center flex flex-col items-center">
        <div className="text-2xl md:text-5xl font-bold text-webpri">Work Experience</div>
        <Timeline data={data} />
    </div>
  );
}
