'use client';

import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import StarIcon from "../assets/icons/star.svg";
import bookImage from "../assets/images/book-cover.png";
import Image from 'next/image';
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import GithubIcon from "../assets/icons/github.svg";
import GitIcon from "../assets/icons/git.svg";
import MongoDBIcon from "../assets/icons/mongodb.svg";
import BootstrapIcon from "../assets/icons/bootstrap.svg";
import cppIcon from "../assets/icons/cpp.svg";
import TailwindCSSIcon from "../assets/icons/tailwindcss.svg";
import PythonIcon from "../assets/icons/python.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import { TechIcon } from '../components/TechIcon';
import mapImage from '../assets/images/map.png';
import smileMemoji from "../assets/images/memoji-smile.png";
import { CardHeader } from '../components/CardHeader';
import { ToolboxItems } from '../components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolBoxItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "TailwindCSS", iconType: TailwindCSSIcon },
  { title: "Mongodb", iconType: MongoDBIcon },
  { title: "C++", iconType: cppIcon },
  { title: "Bootstrap", iconType: BootstrapIcon },
  { title: "Python", iconType: PythonIcon },
  { title: "MySQL", iconType: MySQLIcon },
  { title: "Git", iconType: GitIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Painting", emoji: '🎨', left: "5%", top: "5%" },
  { title: "Gaming", emoji: '🎮', left: "50%", top: "5%" },
  { title: "Hiking", emoji: '🥾', left: "35%", top: "40%" },
  { title: "Reading", emoji: '📕', left: "10%", top: "35%" },
  { title: "Chess", emoji: '♟️', left: "70%", top: "45%" },
  { title: "Cricket", emoji: '🏏', left: "5%", top: "65%" },
];

const experiences = [
  { company: "Unified Mentor Private Limited", position: "Frontend Developer Intern", duration: "Aug 2024 - Present" },
];

const education = [
  { school: "Himachal Pradesh University", degree: "Bachelor of Computer Applications", duration: "2018 - 2021" },
  { school: "Central University of Haryana", degree: "Master of Computer Applications", duration: "2021 - 2023" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems items={toolBoxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolBoxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" />
            </Card>

            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="lg:col-span-1">
              <CardHeader
                title="Experience"
                description="Explore my professional journey."
                className="px-6 py-4"
              />
              <div className="px-6 py-2 flex-1">
                {experiences.map((exp) => (
                  <div key={exp.company} className="mb-4 flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex-grow mb-2 sm:mb-0">
                      <h4 className="font-medium text-sm sm:text-base">{exp.position}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{exp.company}</p>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader
                title="Education"
                description="Explore my academic background."
                className="px-6 py-4"
              />
              <div className="px-6 py-2 flex-1">
                {education.map((edu) => (
                  <div key={edu.school} className="mb-4 flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex-grow mb-2 sm:mb-0">
                      <h4 className="font-medium text-sm sm:text-base">{edu.degree}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{edu.school}</p>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">

            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.emoji}</span>
                    <span>{hobby.title}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Memoji smile" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};