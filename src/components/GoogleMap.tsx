import { useState } from 'react';
import { MapPin, Sparkles, Navigation } from 'lucide-react';
import { ACADEMY_INFO } from '../data';

export default function GoogleMap() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Wrapper */}
        <div className="bg-brand-gray/50 border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side text instructions */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full">
                <MapPin size={12} />
                <span>Kolkata Campus Location</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold text-brand-blue tracking-tight">
                Our Physical Location
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are situated at <strong className="text-brand-blue">DD-202, Street-295, Newtown, Kolkata – 700156 (Action Area-1)</strong>. You can navigate directly using Google Maps.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/6mEDEbaRCZyRDLJ18?g_st=awb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold text-sm py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-brand-blue/20 hover:-translate-y-0.5"
                >
                  <Navigation size={14} className="transform rotate-45 text-brand-orange" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right side - The Live Google Map Embed */}
            <div className="lg:col-span-8 relative">
              <div className="relative aspect-[16/9] w-full bg-slate-100 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <iframe
                  src="https://maps.google.com/maps?q=One%20Stop%20Computer%20Academy%2C%20DD-202%2C%20Street-295%2C%20Newtown%2C%20Kolkata%20700156&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One Stop Computer Academy Google Map Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
