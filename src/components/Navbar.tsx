import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Add scroll listener to make navbar premium glass-morphic on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine which section is currently active
      const sections = ['home', 'about', 'courses', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-blue/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-brand-blue-light/50'
          : 'bg-brand-blue py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Logo Section */}
          <div className="flex flex-col">
            <a href="#home" className="flex items-center gap-2 group">
              <img 
                src="/logo.jpeg" 
                alt="One Stop Computer Academy Logo" 
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-brand-orange ${
                  activeSection === link.id
                    ? 'text-brand-orange border-b-2 border-brand-orange rounded-none pb-1 font-semibold'
                    : 'text-gray-200 hover:bg-brand-blue-light/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Call to Action Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-block"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-xs px-3 py-2 rounded shadow-md inline-block"
            >
              Contact
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-brand-blue-light/50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-brand-blue-dark border-l border-brand-blue-light shadow-2xl p-6 transition-transform duration-300 transform lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-brand-orange text-white">
              <Terminal size={18} />
            </div>
            <span className="font-display font-extrabold text-white text-md tracking-tight">
              OS ACADEMY
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-md text-gray-300 hover:text-white hover:bg-brand-blue-light/50"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          {/* --- UPDATED LOGO SECTION --- */}
          <div className="pb-1 mb-2 border-b border-brand-blue-light/60">
            <a href="/" onClick={() => setIsOpen(false)} className="inline-block">
              <img 
                src="/logo.jpeg" 
                alt={`${ACADEMY_INFO.logoText} Logo`} 
                className="h-8 w-auto object-contain" 
              />
            </a>
          </div>
          {/* --- END OF LOGO SECTION --- */}

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-brand-orange text-white'
                  : 'text-gray-300 hover:bg-brand-blue-light/50 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
          
        <div className="pt-6">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-xl shadow-md transition-colors block text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}