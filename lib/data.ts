import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import musicapp from "@/public/musicapp.png";
import tunebridgepreview from "@/public/tunebridgepreview.png";
import { IprojectsData } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socials = {
  github: "https://github.com/CieranNicholas",
  linkedin: "https://www.linkedin.com/in/cieran-nicholas/",
} as const;

export const experiencesData = [
  {
    title: "Coleg y Cymoedd",
    location: "Aberdare, Wales",
    description:
      "Graduated with a Level 3 Extended Diploma in information technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",
  },
  {
    title: "Full Time Personal Carer",
    location: "Aberdare, Wales",
    description:
      "Worked as a full time carer, during this time is when I started studying software development in my free time.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2020",
  },
  {
    title: "Agency Work | Various Companies",
    location: "Bristol, England",
    description:
      "Worked with an agency doing various jobs, waiting tables and server food & drinks at different resturants.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Lead Developer | LS Scripts",
    location: "Remote",
    description:
      "Run a succesful Ecommerce site that sold custom scripts for use with the FiveM framework.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData: IprojectsData[] = [
  {
    title: "Cadence",
    description:
      "Full stack music streaming platform that allows users to upload and listen to music, features stripe subscription intergration.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "Stripe"],
    imageUrl: musicapp,
    liveDemo: "https://cadencestream.vercel.app/",
    github: "https://github.com/CieranNicholas/Fullstack-Music-App",
  },
  {
    title: "Tunebridge",
    description:
      "Web app that allows users to convert Spotify playlists to Youtube playlists, using both the Spotify and Youtube API.",
    tags: ["React", "Next.js", "Oauth2", "Tailwind", "Framer Motion"],
    imageUrl: tunebridgepreview,
    liveDemo: "https://tunebridge.vercel.app/",
    github: "https://github.com/CieranNicholas/spotify-youtube-converter",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "mySQL",
  "Python",
  "c#",
  "mono",
  ".net",
  "c++",
  "Framer Motion",
] as const;
