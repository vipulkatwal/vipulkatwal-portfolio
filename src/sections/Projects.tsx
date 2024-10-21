import Image from "next/image";
import { Calistoga } from 'next/font/google';
import CheckCircleIcon from "../assets/icons/check-circle.svg";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import quickCaptions from '../assets/images/quick-captions.png'
import geminiClone from '../assets/images/gemini-clone.png'
import hireZone from '../assets/images/hire-zone.png'
import zipLink from '../assets/images/url-shortner.png'

const portfolioProjects = [
  {
    tech: "Next.js, React, JavaScript, TailwindCSS, AWS S3",
    title: "Quick Captions",
    results: [
      { title: "Real-time transcription editing and preview." },
      { title: "AWS-powered auto-transcription and sync." },
      { title: "User-friendly caption styling and adjustment." },
    ],
    link: "https://quick-captions.vercel.app",
    image: quickCaptions,
  },
  {
    tech: "React.js, JavaScript, Tailwind CSS, Supabase, Shadcn UI",
    title: "Ziplink",
    results: [
      { title: "Built URL shortener: 95% link reduction." },
      { title: "Added custom links and QR codes." },
      { title: "Implemented real-time analytics dashboard for user." },
    ],
    link: "https://quick-captions.vercel.app",
    image: zipLink,
  },
  {
    tech: "React js, Tailwind CSS, Supabase, Clerk, Shadcn UI",
    title: "Hirezone",
    results: [
      { title: "Built a full-stack job board web app." },
      { title: "Utilized Supabase for data storage." },
      { title: "Live status tracking raised transparency 70%." },
    ],
    link: "https://hirezone.vercel.app",
    image: hireZone,
  },
  {
    tech: "React, HTML, CSS, JavaScript, Gemini API",
    title:"Google Gemini Clone",
    results: [
      { title: "Responsive AI chat app with animations." },
      { title: "Efficient state and async prompt handling." },
      { title: "Real-time conversation capabilities." },
    ],
    link: "https://google-gemini-clone-seven.vercel.app",
    image: geminiClone,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/* Project title */}
                  <h3 className="font-serif text-2xl md:text-4xl">{project.title}</h3>
                  {/* Tech used */}
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text mt-2 mb-4">
                    <span>{project.tech}</span>
                  </div>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4"/>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  {project.image && (
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};