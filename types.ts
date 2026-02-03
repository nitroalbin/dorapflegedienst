
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  openingHours: string;
}
