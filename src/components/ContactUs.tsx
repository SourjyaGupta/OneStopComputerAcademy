import { Phone, Mail, MapPin, MessageSquare, Smartphone } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-brand-gray/40 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
            Connect With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue mt-3 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1.5 w-20 bg-brand-orange rounded-full mx-auto mt-4" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
            Have questions about fees, batch timings, or syllabus guidelines? Reach out directly via a quick WhatsApp chat or email.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          
          {/* Contact Details Card */}
          <div className="bg-brand-blue-dark text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden border border-white/10">
            {/* Decorative mesh */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl" />
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-3 text-center sm:text-left">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  Academy Contact Info
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are conveniently located in Newtown, Kolkata. Contact us anytime for admissions and inquiries.
                </p>
              </div>

              {/* Information Rows */}
              <div className="space-y-6">
                
                {/* Phone row 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-orange flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-bold">
                      WhatsApp Line 1
                    </h4>
                    <p className="text-lg font-bold font-display mt-1 hover:text-brand-orange transition-colors">
                      <a href={`tel:${ACADEMY_INFO.contact.phone}`}>
                        {ACADEMY_INFO.contact.phoneDisplay}
                      </a>
                    </p>
                    <span className="text-xs text-gray-400">Available from 9:00 AM - 8:00 PM</span>
                  </div>
                </div>

                {/* Phone row 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-orange flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-bold">
                      WhatsApp Line 2
                    </h4>
                    <p className="text-lg font-bold font-display mt-1 hover:text-brand-orange transition-colors">
                      <a href={`tel:${ACADEMY_INFO.contact.phone2}`}>
                        {ACADEMY_INFO.contact.phoneDisplay2}
                      </a>
                    </p>
                    <span className="text-xs text-gray-400">Available from 9:00 AM - 8:00 PM</span>
                  </div>
                </div>

                {/* Email row */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-orange flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="break-all">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-bold">
                      Email Address
                    </h4>
                    <p className="text-base sm:text-md font-bold font-display mt-1 hover:text-brand-orange transition-colors">
                      <a href={`mailto:${ACADEMY_INFO.contact.email}`}>
                        {ACADEMY_INFO.contact.email}
                      </a>
                    </p>
                    <span className="text-xs text-gray-400">Response within 24 hours</span>
                  </div>
                </div>

                {/* Address row */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-brand-orange flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono font-bold">
                      Campus Address
                    </h4>
                    <p className="text-sm font-medium text-gray-200 mt-1.5 leading-relaxed">
                      {ACADEMY_INFO.contact.address}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10 mt-8 relative z-10">

              <a
                href={ACADEMY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-600/15 hover:bg-emerald-600 border border-emerald-500/25 hover:border-emerald-500 transition-all text-center text-xs gap-2 font-bold text-emerald-400 hover:text-white"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Desk 1</span>
              </a>

              <a
                href={ACADEMY_INFO.contact.whatsappUrl2}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-600/15 hover:bg-emerald-600 border border-emerald-500/25 hover:border-emerald-500 transition-all text-center text-xs gap-2 font-bold text-emerald-400 hover:text-white"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Desk 2</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

