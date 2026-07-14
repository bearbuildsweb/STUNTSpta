import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

// Custom image path from generated assets
const HERO_BG_IMAGE = '/src/assets/images/hero_potrait.png';

export default function Hero() {
  const scrollToQuestionnaire = () => {
    const element = document.getElementById('questionnaire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#0b0b0c] text-white pt-16 sm:pt-24 overflow-hidden"
    >
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="STUNTS Creative Photography & Videography Studio Background"
          className="w-full h-full object-cover object-center scale-x-[-1.05] scale-y-[1.05] animate-subtle-zoom brightness-75 contrast-100"
          referrerPolicy="no-referrer"
        />
        {/* Minimal light gradient on the left and bottom just to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-black/10"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center pt-8 sm:pt-16 pb-12">
        <div className="max-w-3xl">
          {/* Subtle Label with Icon */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#AC2E46]" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-300 uppercase">
              Fully Equipped Creative Space
            </span>
          </div>

          {/* Majestic Hero Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] uppercase">
            Professional{' '}
            <span className="text-[#AC2E46] relative inline-block">
              Photography
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#AC2E46]/30 rounded-full"></span>
            </span>{' '}
            & Videography
          </h1>

          {/* Light Introduction Body Text - Encapsulated in an edgy modern card on mobile, reset on larger viewports */}
          <div className="bg-neutral-950/80 border border-[#AC2E46]/25 p-5 rounded-none backdrop-blur-sm shadow-xl mb-8 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#AC2E46] sm:bg-transparent sm:border-0 sm:p-0 sm:backdrop-blur-none sm:shadow-none sm:mb-10 sm:before:hidden max-w-2xl">
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              From portraits and commercial shoots to podcasts and studio rentals.
            </p>
          </div>

          {/* Buttons CTA Grid */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs tracking-widest px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer uppercase shrink-0"
            >
              Explore Our Work
            </button>
            
            {/* Mobile-only rounded/oval grunge CTA */}
            <button
              onClick={scrollToQuestionnaire}
              className="group relative inline-flex sm:hidden items-center justify-center text-[#AC2E46] hover:text-white font-mono font-bold text-xs tracking-widest px-10 py-5 transition-all duration-300 transform active:scale-95 cursor-pointer uppercase shrink-0"
            >
              {/* Hand-drawn brush-stroke sketch oval SVG background */}
              <span className="absolute inset-0 -m-1.5 pointer-events-none">
                <svg
                  className="w-full h-full text-[#AC2E46]/70 group-hover:text-[#AC2E46] transition-colors duration-300"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* First imperfect oval path */}
                  <path
                    d="M 12,30 C 12,12 55,5 100,5 C 145,5 188,12 188,30 C 188,48 145,55 100,55 C 55,55 12,48 12,30 Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                  {/* Second rough overlapping sketch line */}
                  <path
                    d="M 8,28 C 8,10 52,7 102,7 C 152,7 192,10 192,28 C 192,46 152,53 102,53 C 52,53 8,46 8,28 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray="3,3"
                    className="opacity-70"
                  />
                </svg>
              </span>
              <span className="relative z-10 flex items-center gap-2">
                Book Your Session
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Tablet & Desktop regular solid CTA */}
            <button
              onClick={scrollToQuestionnaire}
              className="group hidden sm:inline-flex items-center justify-center gap-2 bg-[#AC2E46] hover:bg-[#8B1E32] text-white font-mono font-bold text-xs tracking-widest px-8 py-4 rounded-sm transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#AC2E46]/15 cursor-pointer uppercase shrink-0"
            >
              Book Your Session
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
