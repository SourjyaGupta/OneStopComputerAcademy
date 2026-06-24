import { useState } from 'react';
import { 
  Terminal, FileCode, Cpu, Layers, HardDrive, Database, 
  Workflow, Globe, Layout, Palette, Network, BookOpen, 
  ChevronRight, ArrowRight, Clock, Star, Tag, X, Sparkles, GraduationCap,
  FileText
} from 'lucide-react';
import { COURSES, Course } from '../data';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Extract all unique categories
  const categories = ['All', 'Programming', 'Computer Science Core', 'Development', 'Networking'];

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(course => course.category === selectedCategory);

  // Map icon strings to Lucide components
  const getCourseIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case 'Terminal': return <Terminal {...props} className={`${props.className} text-rose-500`} />;
      case 'FileCode': return <FileCode {...props} className={`${props.className} text-emerald-500`} />;
      case 'Cpu': return <Cpu {...props} className={`${props.className} text-indigo-500`} />;
      case 'Layers': return <Layers {...props} className={`${props.className} text-amber-500`} />;
      case 'HardDrive': return <HardDrive {...props} className={`${props.className} text-cyan-500`} />;
      case 'Database': return <Database {...props} className={`${props.className} text-teal-500`} />;
      case 'Workflow': return <Workflow {...props} className={`${props.className} text-purple-500`} />;
      case 'Globe': return <Globe {...props} className={`${props.className} text-blue-500`} />;
      case 'Layout': return <Layout {...props} className={`${props.className} text-fuchsia-500`} />;
      case 'Palette': return <Palette {...props} className={`${props.className} text-pink-500`} />;
      case 'Network': return <Network {...props} className={`${props.className} text-violet-500`} />;
      case 'FileText': return <FileText {...props} className={`${props.className} text-blue-600`} />;
      default: return <BookOpen {...props} className={`${props.className} text-brand-blue`} />;
    }
  };

  const handleInquireClick = (courseName: string) => {
    const text = encodeURIComponent(`Hi! I am interested in inquiring about the "${courseName}" course at One Stop Computer Academy.`);
    window.open(`https://wa.me/918272905444?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="courses" className="py-20 bg-brand-gray/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
            Our Syllabi
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue mt-3 tracking-tight">
            Comprehensive Courses Offered
          </h2>
          <div className="h-1.5 w-20 bg-brand-orange rounded-full mx-auto mt-4" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Choose from our highly specialized programming paths, core computer science subjects, modern development training, or networking tracks customized for academic excellence and industry preparedness.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20 scale-102'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-blue/30 hover:text-brand-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-brand-blue/20 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Bar with Icon and Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-brand-gray rounded-xl group-hover:bg-brand-blue/5 transition-colors">
                    {getCourseIcon(course.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-mono bg-brand-gray text-gray-500 px-2 py-1 rounded-md">
                    {course.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                  {course.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>

              </div>

              {/* Action Buttons inside Card */}
              <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-gray-50/80">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="flex items-center gap-1.5 text-brand-blue hover:text-brand-orange text-xs sm:text-sm font-semibold transition-colors group/btn cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} className="transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleInquireClick(course.name)}
                  className="bg-brand-orange/10 hover:bg-brand-orange hover:text-white text-brand-orange font-semibold text-xs px-3.5 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic empty state just in case */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-inner">
            <BookOpen className="mx-auto text-gray-400 mb-2" size={32} />
            <p className="text-gray-500 font-medium">No courses found in this category.</p>
          </div>
        )}

      </div>

      {/* Course Details Modal (Triggered by 'Learn More') */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-gray-100 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Colored Top Banner */}
            <div className="bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white p-6 relative">
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange bg-brand-orange/20 px-2 py-0.5 rounded border border-brand-orange/30">
                  {selectedCourse.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight pr-8">
                {selectedCourse.name}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-brand-orange">
                  Course Overview
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Syllabi/Course Features Bullet Points */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-brand-orange">
                  Syllabus Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedCourse.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-xs font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action area */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    const name = selectedCourse.name;
                    setSelectedCourse(null);
                    handleInquireClick(name);
                  }}
                  className="w-full sm:w-auto flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-6 rounded-xl text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-full sm:w-auto bg-brand-gray hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl text-center transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
