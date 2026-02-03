
"use client";

import React from 'react';
import { CONTACT, ICONS } from '@/constants';

const ContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:bottom-auto md:top-24 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-end">
        <div className="pointer-events-auto bg-brand shadow-2xl rounded-t-2xl md:rounded-2xl px-8 py-4 flex items-center gap-5 text-white border border-white/10 backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="hidden lg:block text-left border-r border-white/20 pr-5">
            <p className="text-[10px] uppercase tracking-widest font-black text-brand-accent/60 leading-none mb-1">
              Dringender Bedarf?
            </p>
            <p className="text-xs font-bold text-white leading-none">
              Wir beraten Sie sofort.
            </p>
          </div>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-3 hover:text-brand-accent transition-all transform active:scale-95"
          >
            <div className="bg-white/10 p-2 rounded-full">
              <ICONS.Phone className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter">{CONTACT.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
