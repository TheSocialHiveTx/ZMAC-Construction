
import React from 'react';
import { Shield, Droplets, Zap, Home, Search, PenTool as Tool } from 'lucide-react';
import { Review, Service } from './types';

export const COMPANY_INFO = {
  name: 'ZMAC Construction',
  phone: '(303) 882-3385',
  email: 'info@zmacconstruction.com',
  address: '2103 S Wadsworth Blvd Suite #103, Lakewood, CO 80227',
  tagline: 'Fast, Reliable Emergency Roof Repair — 24/7 Response',
  hours: '24/7 Emergency Support'
};

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Repair',
    description: 'Immediate response for leaks, storm damage, and structural hazards.',
    icon: <Zap className="w-12 h-12 text-primaryAccent" />
  },
  {
    id: 'residential',
    title: 'Full Replacement',
    description: 'Complete roof overhauls with premium shingles and expert craftsmanship.',
    icon: <Home className="w-12 h-12 text-primaryAccent" />
  },
  {
    id: 'leak-repair',
    title: 'Leak Detection',
    description: 'Advanced moisture detection and precision sealing to stop damage fast.',
    icon: <Droplets className="w-12 h-12 text-primaryAccent" />
  },
  {
    id: 'inspection',
    title: 'Drone Inspections',
    description: 'High-tech damage assessment for accurate insurance claims.',
    icon: <Search className="w-12 h-12 text-primaryAccent" />
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'John Miller',
    rating: 5,
    text: 'ZMAC responded within 2 hours after a massive hail storm. They tarped my roof and helped me through the entire insurance process.',
    date: '2 months ago'
  },
  {
    id: '2',
    author: 'Sarah Jenkins',
    rating: 5,
    text: 'Professional, clean, and fast. The new shingles look amazing. Highly recommend their residential team!',
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Robert Chen',
    rating: 4,
    text: 'Great communication. They found a leak three other companies missed. Price was fair and competitive.',
    date: '3 weeks ago'
  }
];

export const TRUST_BADGES = [
  { name: 'Licensed', icon: <Shield /> },
  { name: 'Insured', icon: <Shield /> },
  { name: 'BBB Accredited', icon: <Shield /> }
];
