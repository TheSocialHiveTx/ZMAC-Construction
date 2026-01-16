
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'Emergency', value: Page.Emergency },
    { label: 'Residential', value: Page.Residential },
    { label: 'About', value: Page.About },
    { label: 'Reviews', value: Page.Reviews },
  ];

  const handleNavClick = (page: Page) => {
    onPageChange(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex flex-col cursor-pointer group" 
          onClick={() => handleNavClick(Page.Home)}
        >
          <span className="text-black font-black text-3xl leading-none tracking-tighter uppercase">
            ZMAC<span className="text-primaryAccent">.</span>
          </span>
          <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] leading-none mt-1">CONSTRUCTION</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`font-semibold text-xs uppercase tracking-widest transition-all hover:text-black ${
                currentPage === item.value 
                ? 'text-black border-b-2 border-primaryAccent' 
                : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={`tel:${COMPANY_INFO.phone}`}
            className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primaryAccent hover:text-black transition-all flex items-center gap-2"
          >
            <Phone size={14} />
            {COMPANY_INFO.phone}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col pt-24 px-8 space-y-8">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6"><X size={32}/></button>
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-left font-black text-4xl uppercase tracking-tighter ${currentPage === item.value ? 'text-primaryAccent' : 'text-black'}`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full bg-black text-white py-5 rounded-xl font-black text-center text-2xl mt-8"
          >
            {COMPANY_INFO.phone}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
