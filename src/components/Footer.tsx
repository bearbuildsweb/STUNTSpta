import React from 'react';
import { Camera, Mail, MessageCircle, MapPin, Instagram, Video } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-100 text-neutral-800 border-t border-zinc-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-200">
          
          {/* Brand/About Block */}
          <div className="md:col-span-4 space-y-6 text-right md:text-left flex flex-col items-end md:items-start">
            <div className="flex items-center gap-2 cursor-pointer flex-row-reverse md:flex-row" onClick={() => scrollToSection('hero')}>
              <Camera className="w-6 h-6 text-[#8B1E32]" />
              <div className="flex flex-col text-right md:text-left">
                <span className="font-display font-bold tracking-widest text-lg text-neutral-900 leading-none">
                  STUNTS<span className="text-[#8B1E32] text-xs font-mono lowercase ml-0.5">pta</span>
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#8B1E32] mt-0.5 uppercase font-semibold">
                  Photo & Video
                </span>
              </div>
            </div>
            
            <p className="text-zinc-600 text-xs font-light leading-relaxed max-w-sm">
              Whether you&apos;re capturing a milestone, promoting your brand, or producing your next project, we&apos;re here to deliver professional results from start to finish.
            </p>

            <div className="space-y-3 font-mono text-[11px] text-zinc-650 flex flex-col items-end md:items-start w-full">
              <div className="flex items-center gap-3 flex-row-reverse md:flex-row">
                <Mail className="w-3.5 h-3.5 text-[#8B1E32]" />
                <a href="mailto:stuntsphotostudio@gmail.com" className="hover:text-[#8B1E32] transition-colors">
                  stuntsphotostudio@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 flex-row-reverse md:flex-row">
                <MessageCircle className="w-3.5 h-3.5 text-[#8B1E32]" />
                <a 
                  href="https://wa.me/27645153586" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#8B1E32] transition-colors"
                >
                  064 515 3586
                </a>
              </div>
              <div className="flex items-center gap-3 flex-row-reverse md:flex-row">
                <MapPin className="w-3.5 h-3.5 text-[#8B1E32]" />
                <span className="text-zinc-500">
                  Somewhere in Pretoria
                </span>
              </div>
            </div>
          </div>

          {/* Follow Us / Social Links */}
          <div className="md:col-span-3 md:col-start-10 space-y-4 text-right md:text-left flex flex-col items-end md:items-start">
            <h4 className="font-mono text-xs tracking-widest text-[#8B1E32] uppercase font-bold">
              Let&apos;s Connect
            </h4>
            <p className="text-zinc-600 text-xs font-light leading-relaxed">
              See our latest productions on Instagram and TikTok, or reach out directly on WhatsApp.
            </p>
            <div className="flex gap-3 justify-end md:justify-start">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/stunts_photography_pretoria?igsh=bXQzZnZ1dHN4cjVi', label: 'Instagram' },
                { icon: Video, href: 'https://www.tiktok.com/@stunts_photography?_r=1&_t=ZS-97yPgLZYjmy', label: 'TikTok' },
                { icon: MessageCircle, href: 'https://wa.me/27645153586', label: 'WhatsApp' }
              ].map((social, index) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-zinc-200 hover:bg-[#AC2E46] text-zinc-600 hover:text-white rounded-sm border border-zinc-300/40 hover:border-transparent flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 font-mono text-[10px] tracking-widest">
            © {new Date().getFullYear()} STUNTSpta. ALL RIGHTS RESERVED.
          </p>
          <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            • Every frame matters.
          </div>
        </div>

      </div>
    </footer>
  );
}
