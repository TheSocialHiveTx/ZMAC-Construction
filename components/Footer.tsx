
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-black/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
           <div className="flex flex-col">
            <span className="text-black font-black text-4xl leading-none tracking-tighter uppercase">
              ZMAC<span className="text-primaryAccent">.</span>
            </span>
            <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] mt-1">CONSTRUCTION</span>
          </div>
          <p className="text-gray-400 text-sm font-medium leading-relaxed">
            Elevating the standard of roofing in Lakewood through elite craftsmanship and instant response.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-softGray rounded-full hover:bg-black hover:text-white transition-all"><Facebook size={18} /></a>
            <a href="#" className="p-3 bg-softGray rounded-full hover:bg-black hover:text-white transition-all"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-black">Company</h3>
          <ul className="space-y-4">
            <li><button onClick={() => onPageChange(Page.Home)} className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">Home</button></li>
            <li><button onClick={() => onPageChange(Page.Emergency)} className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">Emergency</button></li>
            <li><button onClick={() => onPageChange(Page.Residential)} className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">Residential</button></li>
            <li><button onClick={() => onPageChange(Page.About)} className="text-gray-400 hover:text-black transition-colors text-sm font-bold uppercase tracking-widest">About</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-black">Contact</h3>
          <ul className="space-y-6">
            <li className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Phone</p>
              <p className="font-black text-xl">{COMPANY_INFO.phone}</p>
            </li>
            <li className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Office</p>
              <p className="font-bold text-sm text-gray-500 leading-relaxed">{COMPANY_INFO.address}</p>
            </li>
          </ul>
        </div>

        <div className="bg-black p-8 rounded-3xl text-white">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-primaryAccent">Always Active</h3>
          <p className="font-medium text-gray-400 text-sm italic mb-6">"We respond while others are still checking their calendar."</p>
          <div className="h-1 bg-primaryAccent w-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
        <p>© {new Date().getFullYear()} ZMAC Construction Inc.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
