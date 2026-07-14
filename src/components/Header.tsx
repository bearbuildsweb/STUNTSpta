import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b0c]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Camera className="w-6 h-6 text-[#AC2E46] transition-transform duration-300 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-widest text-lg text-white leading-none flex items-baseline gap-1">
                STUNTS <span className="text-[#AC2E46] text-xs font-mono lowercase">pta</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500 mt-0.5 uppercase">
                Photo & Video
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Services'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-mono text-xs tracking-widest text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('questionnaire')}
              className="bg-[#AC2E46] hover:bg-[#8B1E32] text-white font-mono font-bold text-xs tracking-widest px-5 py-2.5 rounded-sm transition-all duration-300 transform active:scale-95 shadow-md shadow-[#AC2E46]/10 cursor-pointer"
            >
              BOOK YOUR SESSION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-[#0e0e10] border-b border-white/5 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-4 space-y-4 flex flex-col items-stretch">
          {['Services'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-mono text-left text-sm tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5 transition-colors uppercase cursor-pointer"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('questionnaire')}
            className="w-full bg-[#AC2E46] hover:bg-[#8B1E32] text-white font-mono font-bold text-xs tracking-widest py-3 text-center rounded-sm transition-colors cursor-pointer"
          >
            BOOK YOUR SESSION
          </button>
        </div>
      </div>
    </header>
  );
}
