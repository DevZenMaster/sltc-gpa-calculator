import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import { Calculator, BookOpen, Shield, Zap, GraduationCap, Layout, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Updated for Batch 2028 Handbook
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Academic Journey</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The dedicated GPA calculator for the <strong>Faculty of Computing & IT</strong> at SLTC. 
            Effortlessly track your semester, yearly, and final GPA with our pre-loaded curriculum data.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculator" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Start Calculating
            </Link>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section id="features" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why use this calculator?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Built specifically for SLTC students, eliminating the hassle of manual calculations and spreadsheet errors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6" />}
              title="Pre-loaded Curriculum"
              description="Don't waste time typing module names. All Core and Elective modules for SE, Cloud, Cyber, DS, and Applied IT are built-in."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Real-time Analytics"
              description="See your GPA update instantly. Our dashboard tracks Semester GPA, Yearly GPA, and your Final Degree GPA simultaneously."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="100% Private"
              description="All calculations happen right in your browser. No personal academic data is ever sent to a server or stored."
            />
          </div>
        </div>
      </section>

      {/* 3. SUPPORTED DEGREES SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Supported Degree Programs</h2>
              <p className="text-lg text-slate-600 mb-8">
                We support the full 4-year curriculum (Semesters 1-8) for the following degrees under the Faculty of Computing and IT.
              </p>
              <ul className="space-y-4">
                {[
                  "BSc Hons in Software Engineering",
                  "Degree in Applied Information Technology",
                  "BSc Hons in Cloud Computing",
                  "BSc Hons in Cyber Security",
                  "BSc Hons in Data Science",
                  
                ].map((degree, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                    {degree}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats / Visuals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 transform md:translate-y-8 shadow-sm">
                <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                <div className="text-4xl font-black text-slate-900 mb-1">4.00</div>
                <div className="text-sm text-slate-500 font-medium">Max GPA Scale</div>
              </div>
              <div className="bg-blue-600 p-6 rounded-2xl shadow-xl shadow-blue-200">
                <Layout className="w-10 h-10 text-white/80 mb-4" />
                <div className="text-4xl font-black text-white mb-1">8</div>
                <div className="text-sm text-blue-100 font-medium">Semesters Included</div>
              </div>
              <div className="col-span-2 bg-slate-900 p-6 rounded-2xl shadow-lg text-white mt-4 md:mt-0">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="font-mono text-sm opacity-80">
                  &gt; Select Degree... <br/>
                  &gt; Load Modules... <br/>
                  &gt; Calculate GPA... <br/>
                  <span className="text-emerald-400">&gt; Done!</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}