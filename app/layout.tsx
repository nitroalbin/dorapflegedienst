
import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ContactBar from '@/components/ContactBar';

export const metadata: Metadata = {
  title: 'Ambulanter Pflegedienst Dora GmbH | Pflege mit Herz in Offenbach/Frankfurt am Main',
  description: 'Ihr ambulanter Pflegedienst für kompetente und herzliche Pflege in den eigenen vier Wänden. Dora GmbH – Vertrauen und Menschlichkeit in Offenbach/Frankfurt am Main.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <a href="#main-content" className="skip-link">Zum Hauptinhalt springen</a>
        <Header />
        <ContactBar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
