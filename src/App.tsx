/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  ArrowRight,
  Monitor,
  Camera,
  Layers,
  Zap,
  Globe,
  Linkedin
} from "lucide-react";



const EDUCATION = [
  {
    title: "B.Tech in Computer Science and Engineering",
    period: "2023 - 2026",
    institution: "MEA Engineering College"
  },
  {
    title: "Diploma in Computer Engineering",
    period: "2020 - 2023",
    institution: "MADIN Polytechnic College"
  },
  {
    title: "CMA Foundation",
    period: "2019 - 2020",
    institution: "Bharadwaj Institute"  
  },
];

const SKILLS = [
  "Full Stack Development", "React / Next.js / Vite", "Node.js & Express", 
  "TypeScript / JavaScript", "PostgreSQL / MongoDB", "System Architecture",
  "UI/UX Design (Dev focus)", "Cloud (AWS/GCP)", "Git & CI/CD",
  "API Design (REST/GraphQL)", "Performance Optimization", "Agile Methodologies"
];

const PROJECTS = [
  {
    title: "PREMIUMPULSE",
    tech: "2025 - 2026",
    description: "A insurance cost prediction software"
  },
  {
    title: "FOOD RECIPE AND CALORY CALCULATION",
    tech: "2024 - 2025",
    description: "Calculating recipe calories involves summing the calories of all individual ingredients"
  },
  {
    title: "PORTABLE TRACKING DEVICE",
    tech: "2022 - 2023",
    description: "A compact electronic system designed to determine and monitor the real-time location of people"
  },
  {
    title: "MEDICAL STORE MANAGEMENT SYSTEM",
    tech: "2021 - 2022",
    description: "A computerized application designed to manage and automate the daily operations of a medical store or pharmacy efficiently"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-12 font-sans relative overflow-hidden">
      {/* Fixed Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <img 
          src="/src/assets/images/newpp_canva.jpg" 
          className="w-full h-full object-cover grayscale brightness-[0.4]"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0f0f0f]"></div>
      </motion.div>

      {/* Background Large Text - Editorial Style */}
      <div className="fixed inset-0 pointer-events-none z-0 flex flex-col items-center justify-center select-none overflow-hidden mix-blend-overlay">
        <h1 className="text-[15rem] md:text-[35vw] font-black leading-[0.8] opacity-10 tracking-tighter uppercase mb-[-5vw] text-stroke-white select-none">
          ANSHID
        </h1>
        <h1 className="text-[15rem] md:text-[35vw] font-black leading-[0.8] opacity-10 tracking-tighter uppercase text-stroke-white select-none">
          P
        </h1>
      </div>

      {/* Editorial Vertical Label */}
      <div className="fixed right-4 md:right-12 top-1/2 -translate-y-1/2 pointer-events-none z-10 hidden lg:block">
        <p className="vertical-text grayscale opacity-20 text-sm font-bold tracking-[0.5em] uppercase whitespace-nowrap">
          SOFTWARE ENGINEER • FULL STACK ARCHITECT
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-20">
        
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col gap-6 order-2 md:order-1">
          <header className="mb-12 hidden md:block">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-4">
              MUHAMMED<br />ANSHID P
            </h2>
            <p className="text-neutral-500 font-bold tracking-widest uppercase text-xs">
              Software Engineer
            </p>
          </header>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-neutral-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <h3 className="text-xl font-bold uppercase mb-6 tracking-tight">DEVELOPER PROFILE</h3>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <span className="text-brand-lime text-4xl font-black">4+</span>
                <span className="text-neutral-500 font-bold mb-1 uppercase text-[10px] tracking-widest">Projects.</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-brand-lime font-black text-xl">One</span>
                <span className="text-neutral-500 font-bold uppercase text-[10px] tracking-widest mb-0.5">innovation-driven mindset.</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed mt-6 font-medium">
                I’m a passionate software developer focused on creating efficient, scalable, and user-friendly digital solutions. I enjoy transforming ideas into functional applications with clean design and reliable performance.
              </p>
            </div>
          </motion.div>

          <motion.a 
            href="https://github.com/anshid-p"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className="block bg-neutral-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-3 rounded-2xl">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase">GITHUB</h3>
                <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mt-1">Visit Repository</p>
                <div className="flex items-center gap-2 mt-2 text-brand-lime">
                  <ArrowRight className="w-3 h-3 transform rotate-180" />
                  <span className="text-[10px] font-mono opacity-70">github.com/anshid-p</span>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/muhammed-anshid-p-217921294"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className="block bg-neutral-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-3 rounded-2xl">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase">LINKEDIN</h3>
                <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mt-1">Connect with me</p>
                <div className="flex items-center gap-2 mt-2 text-brand-lime">
                  <ArrowRight className="w-3 h-3 transform rotate-180" />
                  <span className="text-[10px] font-mono opacity-70">linkedin.com/in/anshid-p...</span>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-neutral-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5"
          >
            <h3 className="text-xl font-bold uppercase mb-8 text-brand-lime tracking-tighter">PROJECT HIGHLIGHTS</h3>
            <div className="space-y-4">
              {PROJECTS.slice(0, 2).map((project, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-brand-lime/20 pl-4">
                  <span className="text-white text-xs font-black uppercase tracking-tight">{project.title}</span>
                  <span className="text-neutral-500 text-[9px] uppercase font-bold">{project.tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-neutral-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl"
          >
            <h3 className="text-xl font-bold uppercase mb-6 tracking-tight flex items-center gap-3">
              <span className="w-8 h-[2px] bg-brand-lime"></span>
              EDUCATION
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-neutral-800 group-hover:bg-brand-lime transition-colors duration-300" />
                  <h4 className="text-white text-sm font-black tracking-tight uppercase leading-tight group-hover:text-brand-lime transition-colors">{edu.title}</h4>
                  <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">{edu.institution}</p>
                  <div className="mt-2 text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">{edu.period}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 mt-4 px-4 pb-8">
            <div className="flex items-center gap-4 text-neutral-500 hover:text-white transition-colors group cursor-pointer">
              <Mail className="w-5 h-5 group-hover:text-brand-lime transition-colors" />
              <span className="text-[10px] font-bold lowercase tracking-[0.2em]">anshidmuhd007@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500 hover:text-white transition-colors group cursor-pointer">
              <Phone className="w-5 h-5 group-hover:text-brand-lime transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">+91 9746361483</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-500 hover:text-white transition-colors group cursor-pointer">
              <MapPin className="w-5 h-5 group-hover:text-brand-lime transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Kondotty, Kerala</span>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="md:col-span-4 flex flex-col items-center py-12 relative order-1 md:order-2">
          {/* Mobile Header */}
          <header className="mb-12 text-center md:hidden">
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-none mb-4">
              ANSHID<br />P
            </h2>
            <p className="text-brand-lime font-bold tracking-widest uppercase text-xs">
              Software Engineer
            </p>
          </header>
          
          <div className="relative group">
            {/* Rotating Badge */}
            <div className="absolute -top-16 -right-16 w-48 h-48 animate-spin-slow pointer-events-none z-20 hidden lg:block opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <text className="text-[6px] uppercase font-black tracking-[0.4em] fill-white">
                  <textPath xlinkHref="#circlePath">
                    • SOFTWARE ENGINEER • FULL STACK DEVELOPER • UI ARCHITECT • 
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Profile Image - Reduced Size */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 h-[28rem] md:w-[22rem] md:h-[34rem] overflow-hidden rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10"
            >
              <img 
                src="/src/assets/images/newpp_canva.jpg" 
                alt="Muhammed Anshid P"
                className="w-full h-full object-cover grayscale contrast-110 brightness-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-1.5 bg-brand-lime rounded-full mb-3 shadow-[0_0_15px_rgba(163,230,53,0.4)]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 flex flex-col gap-6 order-3">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-end gap-3"
          >
            <h3 className="text-brand-lime text-xl font-black uppercase mb-4 tracking-tight">SKILLS</h3>
            {SKILLS.map((skill) => (
              <span key={skill} className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors cursor-default text-right w-full flex justify-end">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-neutral-900/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-xl mt-8"
          >
            <h3 className="text-xl font-bold uppercase mb-8 border-b border-white/5 pb-4 tracking-tight">PROJECTS</h3>
            <div className="space-y-8">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="relative pl-6 group">
                  <div className="absolute left-[-2px] top-1.5 w-1.5 h-1.5 rounded-full bg-brand-lime group-hover:scale-150 transition-transform" />
                  <h4 className="text-brand-lime text-[13px] font-black tracking-tight uppercase leading-tight">{project.title}</h4>
                  <p className="text-neutral-500 text-[9px] font-bold mt-1 uppercase tracking-widest">{project.tech}</p>
                  <p className="text-neutral-400 text-[10px] mt-2 leading-relaxed font-medium">{project.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Floating Icons Background */}
      <div className="fixed top-1/4 -left-20 pointer-events-none opacity-[0.03] rotate-12 z-0 scale-150">
        <Monitor className="w-96 h-96" />
      </div>
      <div className="fixed -bottom-20 -right-20 pointer-events-none opacity-[0.03] -rotate-12 z-0 scale-150">
        <Layers className="w-96 h-96" />
      </div>

    </div>
  );
}


