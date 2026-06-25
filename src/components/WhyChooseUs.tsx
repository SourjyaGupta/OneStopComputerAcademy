import { CheckCircle2, Sparkles, Trophy, Lightbulb, Users2, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data';

export default function WhyChooseUs() {
  
  // Custom icons to map to reasons to make it visually distinctive
  const getFeatureIcon = (index: number) => {
    const props = { size: 24, className: "text-brand-orange" };
    switch (index) {
      case 0: return <CheckCircle2 {...props} />; // Practical Training
      case 1: return <Users2 {...props} />;       // Small Batch Size
      case 2: return <Trophy {...props} />;      // Career Guidance
      case 3: return <Lightbulb {...props} />;    // Student-Friendly Learning
      case 4: return <ShieldCheck {...props} />;  // Academic Support
      case 5: return <CheckCircle2 {...props} />; // Affordable Fees
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
            Our Key Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue mt-3 tracking-tight">
            Why Choose One Stop Computer Academy?
          </h2>
          <div className="h-1.5 w-20 bg-brand-orange rounded-full mx-auto mt-4" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
            We are dedicated to building a learner-centric environment where technical education is simplified, accessible, and structured around your goals.
          </p>
        </div>

        {/* Feature Cards Grid with checkmark indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group bg-brand-gray/40 border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-brand-orange/30 hover:translate-y-[-4px]"
            >
              <div className="flex flex-col h-full justify-between space-y-4">
                
                <div className="space-y-3">
                  {/* Icon & Indicator Bar */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-white rounded-xl shadow-sm group-hover:bg-brand-orange/10 transition-colors">
                      {getFeatureIcon(index)}
                    </div>
                    {/* Visual Check Indicator requested: "✅" */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold font-mono">
                      ✓
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="h-1 w-8 bg-brand-blue/10 group-hover:bg-brand-orange rounded-full transition-colors mt-2" />

              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue-dark to-brand-blue text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-brand-blue-light/50 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Trophy size={280} />
          </div>
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              Ready to invest in your technical foundation?
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Our batches fill up quickly due to small class size limitations (ensuring student attention is undivided). Contact our counseling desk today to reserve a slot.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="https://wa.me/918272905444" 
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-colors inline-block flex items-center gap-1.5 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.43 1.97 13.96 1.93 11.996 1.93c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.46 3.39 1.331 4.861L2.43 20.871l4.217-1.105z" />
                </svg>
                <span>WhatsApp Inquiry</span>
              </a>
              <div className="text-xs sm:text-sm text-gray-300 font-mono flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span>WhatsApp 1: +91 8272905444</span>
                <span className="hidden sm:inline">|</span>
                <span>WhatsApp 2: +91 9123056549</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
