import { MessageSquare, ArrowRight, Monitor, Sparkles, Code2, GraduationCap } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0a1424] via-[#0d223f] to-[#111926] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-white/5">
      
      {/* Premium Decorative background grid and ambient lighting glow fields */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* Live Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/35 text-brand-orange text-xs sm:text-sm font-semibold tracking-wide font-display shadow-inner">
              <Sparkles size={14} className="animate-spin text-brand-orange" style={{ animationDuration: '3s' }} />
              <span>Kolkata's Premier Computer Science Academy</span>
            </div>

            {/* Main Catchy Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
                Build Your Foundation in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-300">Computer Science</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {ACADEMY_INFO.subheading}
              </p>
            </div>

            {/* WhatsApp Buttons Grid */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs uppercase font-mono font-bold tracking-widest text-gray-400">
                Inquire & Discuss Batches directly on WhatsApp:
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.me/918272905444"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-sm font-display tracking-wide"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.43 1.97 13.96 1.93 11.996 1.93c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.46 3.39 1.331 4.861L2.43 20.871l4.217-1.105z" />
                  </svg>
                  <span>Counselling Line 1</span>
                </a>

                <a
                  href="https://wa.me/919123056549"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-sm font-display tracking-wide"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.43 1.97 13.96 1.93 11.996 1.93c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.46 3.39 1.331 4.861L2.43 20.871l4.217-1.105z" />
                  </svg>
                  <span>Counselling Line 2</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Image showing real building */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backglow panel decoration */}
              <div className="absolute inset-0 bg-brand-orange rounded-3xl rotate-3 scale-102 opacity-25 blur-lg transition-transform hover:rotate-2 duration-500" />
              
              {/* Main Container */}
              <div className="relative bg-brand-blue-dark border-2 border-white/10 rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] shadow-2xl flex flex-col items-center justify-center text-center group transition-all duration-300">
                
                {/* Real exterior image of the building */}
                <img
                  src="/input_file_0.png"
                  alt="One Stop Computer Academy building exterior"
                  className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Captions Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 text-left">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange font-bold bg-brand-orange/25 px-2.5 py-1 rounded border border-brand-orange/45 inline-block mb-1.5">
                    Physical Newtown Campus
                  </span>
                  <h4 className="text-white font-display font-bold text-base sm:text-lg">
                    Our Modern Learning Center
                  </h4>
                  <p className="text-gray-300 text-xs mt-1.5">
                    DD-202, Street-295, Action Area-1, Kolkata
                  </p>
                </div>

              </div>

              {/* Small abstract UI accents */}
              <div className="absolute -bottom-6 -left-6 bg-[#0e1f37] border border-white/10 p-3.5 rounded-2xl hidden sm:flex items-center gap-3 shadow-2xl max-w-[210px] z-20">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs font-display">Newtown, Kolkata</h4>
                  <p className="text-[10px] text-gray-400">Classrooms & IT Labs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
