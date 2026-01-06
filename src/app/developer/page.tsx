"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { 
  Github, Globe, Code2, Terminal, Cpu, ArrowRight, 
  ExternalLink, Linkedin, Sparkles, Binary, ShieldCheck 
} from "lucide-react";

export default function DeveloperPage() {
  const skills = [
    { name: "AWS", level: "80%" },
    { name: "TypeScript", level: "95%" },
    { name: "Next.js 16", level: "90%" },
    { name: "React 19", level: "95%" },
    { name: "Node.js", level: "85%" },
    { name: "Nest.js", level: "80%" },
    { name: "Tailwind CSS", level: "98%" },
    { name: "Cybersecurity", level: "75%" },
  ];

  return (
    <div className="bg-white dark:bg-[#030303] min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 pb-24 transition-colors duration-500">
      
      {/* --- HERO PROFILE: SPECTRUM EDITION --- */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-slate-100 dark:border-white/5">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Avatar with Animated Border */}
          <div className="relative group">
            <div className="w-48 h-48 rounded-[3rem] border-2 border-slate-100 dark:border-white/10 p-2 group-hover:border-blue-500/50 transition-all duration-700 group-hover:rotate-3">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-slate-100 dark:bg-white/5">
                 <Image
                   src="/profile-pic.png"
                   alt="Ruwan Sanjeewa"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-700"
                   priority
                 />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-2xl shadow-xl shadow-blue-500/30">
              <ShieldCheck size={20} />
            </div>
          </div>

          <div className="text-center md:text-left space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
               <Terminal className="w-3 h-3 text-blue-600" />
               Architect @DevZenMaster
             </div>
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-none uppercase italic">
               Ruwan <span className="text-blue-600">Sanjeewa.</span>
             </h1>
             <p className="text-xl text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed italic">
               Full Stack Developer & Cybersecurity Enthusiast at SLTC Research University. 
               Engineering digital solutions for the next generation.
             </p>
             
             <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
               {[
                 { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/DevZenMaster", color: "bg-slate-900" },
                 { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/ruwansanjeewa", color: "bg-[#0077b5]" },
                 { icon: <Globe size={18} />, label: "Portfolio", href: "https://ruwansanjeewa.com", color: "bg-blue-600" }
               ].map((social) => (
                 <Link 
                   key={social.label}
                   href={social.href} 
                   target="_blank"
                   className={`flex items-center gap-3 px-6 py-3 ${social.color} text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/10`}
                 >
                   {social.icon}
                   {social.label}
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- CONTENT BLOCK --- */}
          <div className="lg:col-span-7 space-y-16">
            
            <section className="space-y-8">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] flex items-center gap-3">
                <div className="w-8 h-[2px] bg-blue-600" />
                The Mission
              </h2>
              <div className="text-2xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight italic">
                &quot;The SLTC GPA Intelligence Hub was born from a simple need: to turn academic uncertainty into strategic clarity.&quot;
              </div>
              <div className="space-y-6 text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-lg">
                <p>
                  I noticed my batchmates struggling with manual calculations and outdated spreadsheets. I built this engine to provide every student with a 
                  <span className="text-slate-900 dark:text-white font-bold"> high-precision academic roadmap.</span>
                </p>
                <p>
                  By leveraging <strong>Next.js 16.1.1</strong> and <strong>React 19</strong>, I ensured that every interaction is instantaneous, secure, and privacy-focused.
                </p>
              </div>
            </section>

            {/* Featured Box */}
            <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative overflow-hidden group transition-all">
              <Binary className="absolute -right-8 -bottom-8 w-40 h-40 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700" />
              <h4 className="font-black text-slate-900 dark:text-white text-xl uppercase tracking-tighter mb-4 italic">Core Philosophy</h4>
              <p className="text-slate-500 dark:text-slate-400 text-base font-medium leading-relaxed">
                I believe in building software that doesn't just work, but <strong>inspires</strong>. Whether it's a GPA calculator or a cybersecurity audit tool, the focus is always on user empowerment and technical excellence.
              </p>
            </div>
          </div>

          {/* --- SIDEBAR: TECH SPECTRUM --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-white dark:bg-white/[0.03] p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-10 flex items-center gap-3">
                <Sparkles size={14} /> Intelligence Stack
              </h3>
              
              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black uppercase tracking-widest">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                        style={{ width: skill.level }} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-slate-100 dark:border-white/5 space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Other Ecosystems</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "TekLab", desc: "Build. Test. Secure.", link: "#" },
                    { name: "Luminous Salon", desc: "High-end commercial UI.", link: "#" }
                  ].map((project) => (
                    <Link key={project.name} href={project.link} className="group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="font-black uppercase tracking-tighter text-sm italic">{project.name}</span>
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all text-blue-600" />
                      </div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{project.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="mt-32 p-16 rounded-[4rem] bg-slate-900 dark:bg-blue-600 text-center text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Let&apos;s Build the <br /> <span className="text-blue-400 dark:text-slate-900">Next Great Thing.</span></h2>
              <p className="text-blue-100/60 max-w-xl mx-auto font-medium text-lg italic">
                Open for collaborations in Full Stack Development, AI integration, and Secure Systems.
              </p>
              <div className="pt-6">
                <Link 
                  href="https://github.com/DevZenMaster" 
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl"
                >
                  Contact Architect
                  <ArrowRight size={18} />
                </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}