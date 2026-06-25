import { Phone, Mail, MapPin, Terminal, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-white pt-16 pb-8 border-t border-brand-blue-light/50 relative overflow-hidden">
      
      {/* Background ambient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-brand-orange/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1 - Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-brand-orange text-white">
                <Terminal size={18} />
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                ONE STOP COMPUTER ACADEMY
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering school, college, and diploma students in Newtown, Kolkata with professional computer training, personal mentorship, and core concept clarity.
            </p>

            {/* Social Icons placeholders requested */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">
                Social Profiles Placeholders
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={ACADEMY_INFO.social.facebook}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center relative group"
                  title="Facebook Link"
                >
                  <Facebook size={18} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Facebook Placeholder
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href={ACADEMY_INFO.social.instagram}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center relative group"
                  title="Instagram Link"
                >
                  <Instagram size={18} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Instagram Placeholder
                  </span>
                </a>

                {/* YouTube */}
                <a
                  href={ACADEMY_INFO.social.youtube}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center relative group"
                  title="YouTube Link"
                >
                  <Youtube size={18} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    YouTube Placeholder
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={ACADEMY_INFO.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all flex items-center justify-center relative group"
                  title="WhatsApp Link"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.432 2.519 1.22 3.511l-.85 3.1 3.18-.834a5.727 5.727 0 002.218.423c3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.7-5.768-5.7zm3.391 8.167c-.147.414-.73.754-1.012.802-.275.048-.619.076-1.02-.054-.236-.076-.554-.183-.934-.349a4.876 4.876 0 01-1.928-1.7c-.244-.326-.414-.707-.414-1.121 0-.964.845-1.137.953-1.137.076 0 .151.004.218.008.068.004.155-.027.243.185.094.227.322.784.351.841.028.057.047.123.01.198-.038.076-.057.123-.113.189-.057.066-.113.113-.16.17-.057.056-.113.123-.047.236.066.113.293.481.628.779.43.383.794.505.907.561.113.056.179.047.245-.028.066-.076.283-.33.358-.443.076-.113.151-.094.254-.057.104.038.66.311.774.368.113.056.189.085.217.132.028.047.028.274-.119.688z" />
                  </svg>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    WhatsApp Chat
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Academy Quick Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-brand-orange font-extrabold">
              Academy Contacts
            </h4>
            <div className="space-y-3.5 text-sm text-gray-400">
              <a href={`tel:${ACADEMY_INFO.contact.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={14} className="text-brand-orange" />
                <span>+91 {ACADEMY_INFO.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${ACADEMY_INFO.contact.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors break-all">
                <Mail size={14} className="text-brand-orange" />
                <span>{ACADEMY_INFO.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Campus Address Block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-brand-orange font-extrabold">
              Campus Address
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
              <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-1" />
              <span>
                DD-202, Street-295, Newtown,<br />
                Action Area-1, Kolkata - 700156
              </span>
            </div>
          </div>

        </div>

        {/* Footer bottom metadata copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} One Stop Computer Academy. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <Sparkles size={12} className="text-brand-orange animate-pulse" />
            <span>Designed with complete customizable code modules</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
