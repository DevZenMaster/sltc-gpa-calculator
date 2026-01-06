import Link from "next/link";
import Image from "next/image"; 
import { Github, Globe, Code2, Terminal, Cpu, ArrowRight, ExternalLink, Linkedin } from "lucide-react";

export default function DeveloperPage() {
  // Your Skill List
  const skills = [
    "AWS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Tailwind CSS",
    "Flutter",
    "WordPress",
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-20">
      
      {/* --- HERO PROFILE --- */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* Avatar / Image with Photo */}
          <div className="relative group">
            <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 bg-slate-100">
               <Image
                 src="/profile-pic.png"
                 alt="Ruwan Sanjeewa"
                 width={160}
                 height={160}
                 className="object-cover"
                 priority
               />
            </div>
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-[40px] opacity-20 -z-0 translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 rounded-full blur-[40px] opacity-20 -z-0 -translate-x-4 translate-y-4"></div>
          </div>

          <div className="text-center md:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
               <Terminal className="w-3 h-3" />
               DevZenMaster
             </div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-2">
               Ruwan Sanjeewa
             </h1>
             <p className="text-lg text-slate-500 max-w-lg leading-relaxed mb-6">
               Student at SLTC Research University. Full Stack Developer & Cybersecurity Enthusiast. 
               Building tools to make student life easier.
             </p>
             
             <div className="flex flex-wrap justify-center md:justify-start gap-3">
               <Link 
                 href="https://github.com/DevZenMaster" 
                 target="_blank"
                 className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-all text-sm"
               >
                 <Github className="w-4 h-4" />
                 GitHub
               </Link>

               {/* LinkedIn Button Added Here */}
               <Link 
                 href="https://www.linkedin.com/in/ruwansanjeewa/" 
                 target="_blank"
                 className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-lg font-bold hover:bg-[#006396] transition-all text-sm"
               >
                 <Linkedin className="w-4 h-4" />
                 LinkedIn
               </Link>

               <Link 
                 href="https://www.ruwansanjeewa.com" 
                 target="_blank"
                 className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-all text-sm"
               >
                 <Globe className="w-4 h-4" />
                 Website
               </Link>
             </div>
          </div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* --- ABOUT SECTION --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="text-blue-600" />
              The Mission
            </h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>
                I created the <strong>SLTC GPA Calculator</strong> because I noticed many students struggled to manually calculate their grades or predict exactly what they needed for a First Class.
              </p>
              <p>
                What started as a simple script has grown into a full academic strategist tool. My goal is to combine <strong>clean design</strong> with <strong>powerful logic</strong> to help my batchmates succeed.
              </p>
            </div>
            
            {/* General Interest Box */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-lg mb-2">Technologist at Heart</h4>
              <p className="text-slate-600 text-sm">
                Passionate about Open Source, Cybersecurity, and building scalable web applications. Always looking for the next problem to solve.
              </p>
            </div>
          </div>

          {/* Tech Stack Side Panel */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-slate-400" />
              Tech Stack
            </h3>
            
            {/* Updated Skill List */}
            <div className="flex flex-wrap gap-2">
              {skills.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2 text-sm">Other Projects</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="group block">
                    <div className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors flex items-center gap-1">
                      TekLab <ExternalLink className="w-3 h-3 opacity-50" />
                    </div>
                    <div className="text-xs text-slate-400">Build. Test. Secure.</div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="group block">
                    <div className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors flex items-center gap-1">
                      Luminous Salon <ExternalLink className="w-3 h-3 opacity-50" />
                    </div>
                    <div className="text-xs text-slate-400">The beginning of an Era.</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- CONTACT BANNER --- */}
        <div className="bg-slate-900 rounded-2xl p-10 text-center text-white">
           <h2 className="text-2xl font-bold mb-4">Have an idea?</h2>
           <p className="text-slate-400 mb-8 max-w-lg mx-auto">
             I&apos;m always open to collaborating on new projects, especially involving AI or Web Development.
           </p>
           <Link 
             href="https://github.com/DevZenMaster" 
             target="_blank"
             className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors"
           >
             Contact via GitHub
             <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </div>
  );
}