
"use client";

import React from 'react';
import { CONTACT, ICONS } from '@/constants';

const StickyContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:bottom-auto md:top-[80px] pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="pointer-events-auto bg-brand shadow-2xl rounded-t-xl md:rounded-b-xl md:rounded-t-none px-6 py-3 flex items-center gap-4 text-white animate-bounce-subtle">
          <div className="hidden sm:block text-xs uppercase tracking-widest font-bold text-brand-accent/60">
            24h Notfall-Service
          </div>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-3 hover:text-brand-accent transition-colors"
          >
            <ICONS.Phone className="w-5 h-5 fill-current" />
            <span className="text-lg font-bold tracking-tight">{CONTACT.phone}</span>
          </a>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default StickyContactBar;
