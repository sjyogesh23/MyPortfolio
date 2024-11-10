import React from "react";
import { Timeline } from "@/components/ui/timeline";
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
              Guided junior interns and collaborated with a developer team to provide UI designs for 3 company products,
              enhancing user experience and functionality.
              </li>
              <li>
              Tutored 3 batches of 150+ students, graded final projects, and conducted a hands-on UI/UX Design workshop
              in collaboration with the presidents of 3 colleges: SRM IST, Ramapuram, Loyola ICAM, Maher College.
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
              Led a team to develop the official SEED Foundation website using React and AWS, following Agile processes,
              with regular scrum meetings and effective client communication throughout the project lifecycle.
              </li>
              <li>
              Successfully deployed the product, documented the development process, and conducted a knowledge transfer
              session, providing valuable guidance to students seeking expertise in computer science.
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
      title: "MIT Square London",
      subtitle:"Research Work (Internship)",
      date:"Oct 2023 - Dec 2023",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Collaborated with Dr. Habib Ghanbarpourasl from Turkey, to design an AI-powered self-charging shoe using
              piezoelectric sensors, offering a push to walk faster.
              </li>
              <li>
              The innovative shoe design received UK Design Patent (No. 6369634) for its unique self-charging functionality
              and comfort-enhancing features.
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
      date:"Aug 2022 - Nov 2022",
      content: (
        <div>
          <div className="mb-4">
            <div className="text-sm md:text-xl mb-2 font-semibold">Description</div>
            <ul className="text-xs md:text-lg text-neutral-800 list-disc">
              <li>
              Developed and optimized backend functionality using Java SE, Angular, Spring Boot, and SQL, while resolving
              30+ bugs to enhance system performance.
              </li>
              <li>
              Identified and fixed critical issues in the codebase, improving application stability and reducing errors by 25%.
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
              Led a team of C++ interns to develop a fully functional C++-based inventory management system, resolving
              issues related to data consistency and streamlining the integration of OOPS concepts into real-world applications.
              </li>
              <li>
              Directed the development of a C++-based inventory management system, automating key processes and reducing manual errors by 30% and concluded with technical documentation for seamless client implementation.
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
