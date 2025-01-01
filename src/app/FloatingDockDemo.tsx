"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { House, SuitcaseLg, Tools, CodeSlash, Easel, Trophy, Award, Envelope } from "react-bootstrap-icons";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-neutral-500" />
      ),
      href: "#",
    },

    {
      title: "Work Experience",
      icon: (
        <SuitcaseLg className="h-full w-full text-neutral-500" />
      ),
      href: "#Work",
    },
    {
      title: "Skills",
      icon: (
        <Tools className="h-full w-full text-neutral-500" />
      ),
      href: "#Skills",
    },
    {
      title: "Projects",
      icon: (
        <CodeSlash className="h-full w-full text-neutral-500" />
      ),
      href: "#Projects",
    },

    {
      title: "Seminars",
      icon: (
        <Easel className="h-full w-full text-neutral-500" />
      ),
      href: "#Seminar",
    },
    {
      title: "Hackathons",
      icon: (
        <Trophy className="h-full w-full text-neutral-500" />
      ),
      href: "#Hackathon",
    },
    {
      title: "Certificates",
      icon: (
        <Award className="h-full w-full text-neutral-500" />
      ),
      href: "#Certificate",
    },
    {
      title: "Contact Me",
      icon: (
        <Envelope className="h-full w-full text-neutral-500" />
      ),
      href: "#Contact",
    },
  ];
  return (
    <div className="flex z-100 items-end justify-center h-fit w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
