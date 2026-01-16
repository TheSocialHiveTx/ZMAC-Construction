
// Fix: Import React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum Page {
  Home = 'Home',
  Emergency = 'Emergency',
  Residential = 'Residential',
  About = 'About',
  Reviews = 'Reviews',
  Contact = 'Contact'
}