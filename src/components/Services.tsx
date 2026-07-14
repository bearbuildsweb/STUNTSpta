import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import SERVICES_IMAGE from '../assets/images/services_potrait.png';

export default function Services() {
  const scrollToAndSelectService = (serviceTitle: string) => {
    // Dispatch custom event or interact directly
    const element = document.getElementById('questionnaire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // We will define a global custom state listener or simply update an input value
      const selectEl = document.getElementById('questionnaire-service') as HTMLSelectElement;
      if (selectEl) {
        selectEl.value = serviceTitle;
        // Trigger synthetic change event to update state in the React component
        const event = new Event('change', { bubbles: true });
        selectEl.dispatchEvent(event);
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0e0e10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Label */}
        <div className="text-center md:text-left mb-3">
          <span className="font-mono text-xs tracking-[0.3em] text-[#AC2E46] uppercase">
            WHAT WE DO
          </span>
        </div>

        {/* Catchy Subtitle */}
        <div className="text-center md:text-left mb-16 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Choose the service that fits your project. We&apos;ll take care of the rest.
          </h2>
        </div>

        {/* Responsive Grid Split: Cards Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Service Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => {
              // Dynamically pick the right Icon component from Lucide
              const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

              return (
                <div
                  key={service.id}
                  className={`bg-neutral-900/40 border border-white/5 hover:border-[#AC2E46]/30 hover:bg-neutral-900/80 p-8 rounded-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl group ${
                    index === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Icon Box with delicate styling */}
                    <div className="w-12 h-12 rounded-sm bg-neutral-850 border border-white/10 flex items-center justify-center text-[#AC2E46] mb-6 group-hover:bg-[#AC2E46] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#AC2E46] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Dynamic Action Trigger */}
                  <button
                    onClick={() => scrollToAndSelectService(service.title)}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#AC2E46] hover:text-white transition-colors uppercase font-medium cursor-pointer self-start"
                  >
                    {service.linkText}
                    <Icons.ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Beautiful Photography/Videography Showcase Box with Play Button */}
          <div className="lg:col-span-5 relative group rounded-sm overflow-hidden shadow-2xl min-h-[350px] lg:min-h-full">
            <img
              src={SERVICES_IMAGE}
              alt="STUNTS Behind-the-scenes premium camera setup"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 contrast-105"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

            {/* Pulsing Aesthetic Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Outer pulsing ring */}
                <span className="absolute inline-flex h-20 w-20 rounded-full bg-[#AC2E46]/20 animate-ping"></span>
                {/* Inner button */}
                <a
                  href="https://www.tiktok.com/@stunts_photography?_r=1&_t=ZS-97yPgLZYjmy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#AC2E46] text-white shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer"
                  aria-label="Play Reel"
                >
                  <Icons.Play className="w-6 h-6 fill-white ml-1" />
                </a>
              </div>
            </div>

            {/* Card Content Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12">
              <span className="font-mono text-[10px] tracking-widest text-[#AC2E46] uppercase block mb-1">
                LATEST SHOWREEL
              </span>
              <p className="font-display text-lg font-bold text-white uppercase tracking-tight">
                STUNTS Production Showreel &apos;26
              </p>
              <p className="text-zinc-300 text-xs mt-1.5 font-light leading-relaxed mb-4">
                See our latest productions and discover the quality, creativity, and professionalism behind every project.
              </p>
              <a 
                href="https://www.tiktok.com/@stunts_photography?_r=1&_t=ZS-97yPgLZYjmy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest text-white hover:text-[#AC2E46] transition-colors uppercase cursor-pointer"
              >
                ▶ Watch on TikTok
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
