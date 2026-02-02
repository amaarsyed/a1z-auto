import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
