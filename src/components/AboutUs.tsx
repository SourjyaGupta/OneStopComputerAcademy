import { BookOpen, Award, Users, Target, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Beautiful Graphical Accents / Stat Panel */}
          <div className="lg:col-span-5 space-y-6 relative">
            
            {/* Visual background decorative blob */}
            <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-brand-blue/5 rounded-full blur-2xl" />

            {/* Visual highlight cards representing real education */}
            <div className="relative space-y-4">
              
              <div className="bg-brand-blue-light/5 border border-brand-blue-light/10 rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-blue">Foundational Quality</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Building robust computer science and logic-building concepts starting from the absolute basics.
                  </p>
                </div>
              </div>

              <div className="bg-brand-orange/5 border border-brand-orange/10 rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-orange-dark">Career Oriented</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Connecting school curricula, college semesters, and industry-oriented practical project skills seamlessly.
                  </p>
                </div>
              </div>

              <div className="bg-brand-blue-light/5 border border-brand-blue-light/10 rounded-2xl p-6 shadow-sm flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-blue">Active Academic Support</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We cover and track boards, school curriculum, college chapters, and diploma syllabus guidelines thoroughly.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Primary About Us Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                Empowering Students Since Inception
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
              About One Stop Computer Academy
            </h2>

            <div className="h-1.5 w-20 bg-brand-orange rounded-full" />

            <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                At <strong className="text-brand-blue font-semibold">One Stop Computer Academy</strong>, we believe education is the foundation of success. We provide practical computer education, academic support, and industry-oriented technical training for students from school, college, and diploma backgrounds.
              </p>
              <p>
                Our mission is to make quality computer education accessible and career-focused while helping students build strong technical foundations.
              </p>
            </div>

            {/* Quick check highlights to support the story */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 size={18} className="text-brand-orange" />
                <span className="text-sm font-medium">Practical Coding Labs</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 size={18} className="text-brand-orange" />
                <span className="text-sm font-medium">Syllabus-Aligned Learning</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 size={18} className="text-brand-orange" />
                <span className="text-sm font-medium">Regular Doubt Clearance</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 size={18} className="text-brand-orange" />
                <span className="text-sm font-medium">Hands-On Development Projects</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
