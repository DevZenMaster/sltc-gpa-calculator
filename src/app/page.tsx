import Link from "next/link";
import { ArrowRight, BookOpen, Printer, ShieldCheck, TrendingUp, Zap, Target, Award, Github, GitPullRequest, Code2, Briefcase, Cpu, DraftingCompass, Music, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Gradient Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-200 rounded-full blur-[120px] opacity-20 -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Updated for Batch of 2028
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Master Your Grades. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Plan Your Future.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The unofficial academic strategist for SLTC Faculty of Computing & IT. Track your GPA, predict your degree class, and generate professional transcripts in seconds.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/calculator" 
              className="group px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
            >
              Start Calculating
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="px-8 py-4 bg-white text-slate-700 text-lg font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-slate-400 grayscale opacity-70 text-sm md:text-base">
             <span className="font-bold">Software Engineering</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
             <span className="font-bold">Cyber Security</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
             <span className="font-bold">Data Science</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
             <span className="font-bold">Cloud Computing</span>
             <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
             <span className="font-bold">Information Technology</span>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Beyond Simple Math.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We don&apos;t just add up numbers. We provide strategic insights to help you secure that First Class degree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Strategic Roadmap (Large) */}
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-100 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <Target size={200} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
                  <TrendingUp />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Strategic Academic Roadmap</h3>
                <p className="text-slate-500 max-w-md">
                  Our AI-driven logic analyzes your current standing and tells you exactly what GPA you need to average in remaining semesters to hit &quot;First Class&quot; or &quot;Second Upper&quot;.
                </p>
                
                {/* Visual Mockup inside card */}
                <div className="mt-8 bg-white rounded-xl border border-slate-200 p-4 shadow-sm max-w-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-slate-400">Target: First Class</span>
                    <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-bold">High Effort</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-slate-900">3.85</span>
                    <span className="text-xs text-slate-400 mb-1">Avg. GPA Required</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: PDF Reports */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
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

            {/* Feature 3: Privacy */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                <ShieldCheck />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Privacy Focused</h3>
              <p className="text-slate-500 text-sm">
                No login required. No database. Your grades are processed locally in your browser and never sent to a server.
              </p>
            </div>

            {/* Feature 4: Curriculum */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                <BookOpen />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-loaded Curriculum</h3>
              <p className="text-slate-500 text-sm">
                Don&apos;t type manually. All Core and Elective modules for SE, CS, Data Science, and Cloud Computing are built-in.
              </p>
            </div>

            {/* Feature 5: Real-time */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-shadow md:col-span-1">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                <Zap />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-500 text-sm">
                Built with Next.js 14. Instant interactions, zero lag, and mobile-optimized for calculating on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEGREE LIST --- */}
      <section className="py-20 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
           <div className="mb-8 flex justify-center">
             <div className="p-3 bg-blue-50 rounded-full text-blue-600">
               <Award size={32} />
             </div>
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-8">Supported Programs</h2>
           <div className="flex flex-wrap justify-center gap-3">
             {["BSc Hons Software Engineering", "BSc Hons Cloud Computing", "BSc Hons Cyber Security", "BSc Hons Data Science", "Bachelor of Information Technology"].map((degree) => (
               <span key={degree} className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium shadow-sm hover:border-blue-300 transition-colors">
                 {degree}
               </span>
             ))}
           </div>
        </div>
      </section>

      {/* --- COMING SOON / ROADMAP (NEW) --- */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200 border-dashed">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-5 h-5" /> Coming Soon
            </h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Faculty of Engineering", icon: <DraftingCompass className="w-6 h-6" /> },
              { name: "Faculty of Technology", icon: <Cpu className="w-6 h-6" /> },
              { name: "Business School", icon: <Briefcase className="w-6 h-6" /> },
              { name: "School of Music", icon: <Music className="w-6 h-6" /> }
            ].map((faculty) => (
              <div key={faculty.name} className="group p-6 rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col items-center text-center opacity-70 hover:opacity-100">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mb-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {faculty.icon}
                </div>
                <h4 className="font-bold text-slate-700 text-sm mb-2">{faculty.name}</h4>
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                  In Development
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPEN SOURCE / CONTRIBUTE --- */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              <GitPullRequest className="w-3 h-3" />
              Contributions Welcome
           </div>
           
           <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
             Built for Students.<br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
               Improved by You.
             </span>
           </h2>
           
           <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
             Found a calculation error? Want to add a new degree module? 
             This project is 100% open-source. Fork the repo, make your changes, and submit a PR to help your batchmates.
           </p>

           {/* --- DEVELOPER CREDIT BADGE --- */}
           <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="text-slate-400">Created & Maintained by</span>
              <Link href="https://www.ruwansanjeewa.com" target="_blank" className="font-bold text-white hover:text-blue-400 transition-colors">
                Ruwan Sanjeewa
              </Link>
           </div>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
               href="https://github.com/DevZenMaster/sltc-gpa-calculator" 
               target="_blank"
               className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
             >
               <Github className="w-5 h-5" />
               Star on GitHub
             </Link>
             <Link 
               href="https://github.com/DevZenMaster/sltc-gpa-calculator/issues" 
               target="_blank"
               className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
             >
               Report a Bug
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}