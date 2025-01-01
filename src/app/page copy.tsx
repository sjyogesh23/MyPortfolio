import { AboutMe } from "./containers/AboutMe/AboutMe";
import { HeroSection } from "./containers/HeroSection/HeroSection";
import { MyProjects } from "./containers/Projects/TabsDemo";
import { MySkills } from "./containers/Skills/MySkills";
import { TimelineDemo } from "./containers/WorkExp/TimelineDemo";
import { Seminar } from "./containers/Seminars/Seminar";
import { Hackathons } from "./containers/Hackathons/Hackathon";
import { Certificate } from "./containers/Certificate/Certificate";
import { ContactMe } from "./containers/ContactMe/ContantMe";

export default function Home() {
  
  return (
    <div className="">
      
      
      <div id="#"><HeroSection/></div>
      <AboutMe/>  
      <div id="Work"><TimelineDemo/></div>
      <div className="min-h-screen mx-[60px] md:px-[60px]">
        
        
      <div id="Skills"><MySkills/></div>
      <div id="Projects"><MyProjects/></div>
      <div id="Seminar"><Seminar/></div>
      <div id="Hackathon"><Hackathons/></div>
      <div id="Certificate"><Certificate/></div>
        
      </div>    
      <div id="Contact"><ContactMe/></div>
    </div>
  );
}
