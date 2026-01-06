import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, BookOpen, Printer, ShieldCheck, TrendingUp, Zap, Target, Award, Github, GitPullRequest, Code2, Briefcase, Cpu, DraftingCompass, Music, Clock, Terminal, Globe 
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
      
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradient Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-200 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-20 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge emphasizing Unofficial Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-red-700 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Unofficial Academic Strategist • Based on SLTC Curriculum
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Master Your Grades. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 italic font-black">
              Architect Your Future.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            The definitive <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500/30">unofficial</span> GPA Intelligence Engine for SLTC students. Forecast degree classes and generate professional academic statements with precision.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/calculator" 
              className="group px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-3 active:scale-95"
            >
              Launch GPA Intelligence
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="px-10 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-lg font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95"
            >
              Learn More
            </Link>
          </div>

          {/* Grayscale Faculty List */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-400 dark:text-slate-500 grayscale opacity-70 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
             <span className="hover:text-blue-600 transition-colors cursor-default">Engineering</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
             <span className="hover:text-blue-600 transition-colors cursor-default">Computing</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
             <span className="hover:text-blue-600 transition-colors cursor-default">Technology</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
             <span className="hover:text-blue-600 transition-colors cursor-default">Business</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
             <span className="hover:text-blue-600 transition-colors cursor-default">Science</span>
          </div>
        </div>
      </section>
      
      {/* --- BENTO GRID FEATURES --- */}
      <section id="features" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Beyond Simple Math.</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              We don&apos;t just add up numbers. We provide strategic insights to help you secure that First Class degree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500 text-slate-900 dark:text-white">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600 dark:text-blue-400">
                  <TrendingUp />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Strategic Academic Roadmap</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                  Our AI-driven logic analyzes your current standing and tells you exactly what GPA you need to average in remaining semesters to hit &quot;First Class&quot; or &quot;Second Upper&quot;.
                </p>
                
                <div className="mt-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 shadow-sm max-w-sm rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500">Target: First Class</span>
                    <span className="text-[10px] bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full font-bold">High Effort</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">3.85</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 mb-1">Avg. GPA Required</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-blue-950 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 bg-blue-600 w-40 h-40 rounded-full blur-[50px] opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10">
                  <Printer />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant PDF Transcripts</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Generate beautiful, official-style academic reports with a single click. Perfect for internships or tracking progress.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">100% Privacy Focused</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                No login required. No database. Your grades are processed locally in your browser and never sent to a server.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                <BookOpen />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pre-loaded Curriculum</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Don&apos;t type manually. All Core and Elective modules for SE, CS, Data Science, and Cloud Computing are built-in.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 text-orange-600 shadow-sm">
                <Zap className="fill-orange-600/10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tighter italic">Ultra-Responsive</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Powered by <strong className="text-orange-600 font-black">Next.js 16.1.1</strong>. Optimized with React 19 for instant interactions, zero lag, and a seamless mobile-first experience.
              </p>
            </div>
          </div>
        </div>
      </section>    


      {/* --- FACULTY SECTION --- */}
      <section className="py-16 px-6 bg-white dark:bg-[#030303] border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12"> {/* Reduced mb-16 to mb-12 for tighter spacing */}
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter uppercase italic leading-tight">
              Unified Academic <span className="text-blue-600">Intelligence.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium text-sm italic leading-relaxed">
              Strategic GPA tracking optimized for every honours path across the university.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FacultySpectrumCard title="Engineering" icon={<DraftingCompass />} theme="blue" desc="Civil, Mechanical, and Electronic disciplines." />
            <FacultySpectrumCard title="Computing & IT" icon={<Cpu />} theme="indigo" desc="SE, Cybersecurity, Data Science, and Cloud." />
            <FacultySpectrumCard title="Business" icon={<Briefcase />} theme="emerald" desc="HRM, Marketing, and Accounting tracks." />
            <FacultySpectrumCard title="Technology" icon={<Cpu />} theme="orange" desc="Agricultural, Environmental, and B.Tech." />
            <FacultySpectrumCard title="Science" icon={<BookOpen />} theme="rose" desc="Textile, Fashion, and Biosystems Engineering." />
            <FacultySpectrumCard title="School of Music" icon={<Music />} theme="violet" desc="Professional degree pathways in Music." />
          </div>
        </div>
      </section>


     {/* --- BEHIND THE CODE --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 dark:bg-slate-900/50 border border-slate-800 shadow-2xl group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 p-10 md:p-16">
              <div className="flex-1 text-center md:text-left space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
                  <Code2 className="w-3 h-3" />
                  The Architect
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  Crafted with Passion. <br />
                  <span className="text-slate-400">Built for Students.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                  This isn&apos;t just a calculator. It&apos;s an open-source passion project designed to simplify academic life at SLTC. Meet the developer behind the logic.
                </p>
                <div className="pt-4">
                  <Link href="/developer" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg group/btn">
                    Meet DevZenMaster <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-auto flex justify-center">
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl w-full max-w-[280px] transform hover:scale-105 transition-transform duration-500 shadow-xl">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-16 h-16 relative">
                       <Image src="/profile-pic.png" alt="Ruwan Sanjeewa" width={64} height={64} className="rounded-full object-cover shadow-lg border-2 border-slate-700" />
                       <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800 z-10"></div>
                     </div>
                     <div>
                       <h4 className="text-white font-bold text-lg leading-tight">Ruwan Sanjeewa</h4>
                       <div className="text-blue-400 text-[10px] font-mono uppercase tracking-wider bg-blue-900/30 px-2 py-0.5 rounded inline-block mt-1">@DevZenMaster</div>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center gap-3 text-xs font-medium text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/50">
                       <Terminal className="w-4 h-4 text-slate-500" />
                       <span>Full Stack Developer</span>
                     </div>
                     <div className="flex items-center gap-3 text-xs font-medium text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/50">
                       <Globe className="w-4 h-4 text-emerald-500" />
                       <span>Open Source Contributor</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OPEN SOURCE SECTION --- */}
      <section className="py-24 px-6 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              <GitPullRequest className="w-3 h-3" /> Contributions Welcome
           </div>
           <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
             Built for Students.<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Improved by You.</span>
           </h2>
           <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
             Found a calculation error? Want to add a new degree module? This project is 100% open-source. Fork the repo and help your batchmates.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="https://github.com/DevZenMaster/sltc-gpa-calculator" target="_blank" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
               <Github className="w-5 h-5" /> Star on GitHub
             </Link>
             <Link href="https://github.com/DevZenMaster/sltc-gpa-calculator/issues" target="_blank" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
               Report a Bug
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
  

// --- FACULTY CARD COMPONENT ---
function FacultySpectrumCard({ title, icon, desc, theme }: { title: string; icon: React.ReactNode; desc: string; theme: string }) {
  const themes: { [key: string]: any } = {
    blue: { bg: "hover:bg-blue-50/50 dark:hover:bg-blue-900/10", border: "hover:border-blue-500/50", icon: "text-blue-600", shadow: "hover:shadow-blue-500/20", bar: "bg-blue-500" },
    indigo: { bg: "hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10", border: "hover:border-indigo-500/50", icon: "text-indigo-600", shadow: "hover:shadow-indigo-500/20", bar: "bg-indigo-500" },
    emerald: { bg: "hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10", border: "hover:border-emerald-500/50", icon: "text-emerald-600", shadow: "hover:shadow-emerald-500/20", bar: "bg-emerald-500" },
    orange: { bg: "hover:bg-orange-50/50 dark:hover:bg-orange-900/10", border: "hover:border-orange-500/50", icon: "text-orange-600", shadow: "hover:shadow-orange-500/20", bar: "bg-orange-500" },
    rose: { bg: "hover:bg-rose-50/50 dark:hover:bg-rose-900/10", border: "hover:border-rose-500/50", icon: "text-rose-600", shadow: "hover:shadow-rose-500/20", bar: "bg-rose-500" },
    violet: { bg: "hover:bg-violet-50/50 dark:hover:bg-violet-900/10", border: "hover:border-violet-500/50", icon: "text-violet-600", shadow: "hover:shadow-violet-500/20", bar: "bg-violet-500" },
  };

  const active = themes[theme] || themes.blue;

  return (
    <div className={`group p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 ${active.bg} ${active.border} ${active.shadow} shadow-xl shadow-slate-200/50 dark:shadow-none`}>
      
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-slate-50 dark:bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${active.icon}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      
      <h3 className="text-2xl font-black mb-2 uppercase tracking-tight leading-snug transition-all duration-500 text-slate-900 dark:text-white group-hover:text-blue-600">
        {title}
      </h3>
      
      <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-snug mb-6">
        {desc}
      </p>
      
      <div className="flex items-center gap-3">
        <div className={`h-1 w-10 rounded-full transition-all duration-700 group-hover:w-full ${active.bar}`} />
        <ArrowRight size={16} className={`opacity-0 -translate-x-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 ${active.icon}`} />
      </div>
    </div>
  );
}
