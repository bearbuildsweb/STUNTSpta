import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0e0e10] text-white border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="text-center mb-3">
          <span className="font-mono text-xs tracking-[0.3em] text-[#AC2E46] uppercase">
            COMMON QUESTIONS
          </span>
        </div>

        {/* Catchy Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm font-light mt-3 max-w-lg mx-auto">
            Got queries about our visual delivery, cameras, scheduling, or customization? We have compiled the essential answers below.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`border rounded-sm transition-all duration-300 ${
                  isOpen
                    ? 'bg-neutral-900 border-[#AC2E46]/30 shadow-lg'
                    : 'bg-neutral-900/30 border-white/5 hover:border-white/10'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 border transition-colors ${
                      isOpen
                        ? 'bg-[#AC2E46]/10 border-[#AC2E46]/20 text-[#AC2E46]'
                        : 'bg-neutral-850 border-white/10 text-zinc-400'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <div className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#AC2E46]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Content Panel with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-0 text-zinc-400 font-light text-sm sm:text-base leading-relaxed pl-14 sm:pl-18 border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
