"use client";
import { useEffect, useState } from 'react';
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import { Globe, CodeSlash } from 'react-bootstrap-icons';
import { realtimeDb, ref, get } from '../../../lib/firebase';
import { Riple } from 'react-loading-indicators';
import projimg from './projectimg.jpg';
export function MyProjects() {
  const [projects, setProjects] = useState<any>({});
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsRef = ref(realtimeDb, 'Projects');
        const snapshot = await get(projectsRef);

        if (snapshot.exists()) {
          setProjects(snapshot.val()); // Set all projects dynamically
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Dynamically generate tabs from the projects object
  const tabs = Object.keys(projects).map((category) => ({
    title: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize first letter
    value: category,
    content: (
      <div className="w-full overflow-hidden relative h-[80vh] rounded-b-xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-100 to-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects[category].map((project: any, index: number) => (
            <div
              key={index}
              className="flex flex-col text-left md:p-4 rounded-md duration-200 ease-in-out hover:scale-105"
            >
              <Image
                src={project.url || projimg}
                alt={project.Title}
                width={500}
                height={500}
                className="rounded-lg object-contain aspect-video w-full bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <div className="flex justify-between my-2 md:my-4 items-end">
                <h5 className="text-lg md:text-xl font-semibold text-black">
                  {project.Title}
                </h5>
                <h5 className="text-sm md:text-base font-semibold text-neutral-800">
                  {project.domain}
                </h5>
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.Links && Object.keys(project.Links).map((linkKey, index) => (
                  <a
                    key={index}
                    href={project.Links[linkKey].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-600 cursor-pointer w-fit text-white text-sm px-2 py-1 rounded-sm"
                  >
                    {linkKey === "Preview" ? <Globe /> : <CodeSlash />}
                    {linkKey}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  }));

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="text-2xl md:text-5xl font-bold text-webpri mb-10">Projects</div>
        <Riple color="#32006F" size="medium" text="Loading..." textColor="#32006F55" />        
      </div>
    );
  }

  return (
    <div className="text-center flex flex-col py-20">
      <div className="text-2xl md:text-5xl font-bold text-webpri mb-14">Projects</div>
      <div className="h-screen [perspective:1000px] relative flex flex-col max-w-8xl mx-auto w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}