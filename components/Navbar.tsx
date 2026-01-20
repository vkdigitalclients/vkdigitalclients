import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { useModal } from '../context/ModalContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Active link style - Keeping white for all, with underline for active
  const isActive = (path: string) => location.pathname === path 
    ? "text-white font-bold" 
    : "text-blue-100 hover:text-white font-medium";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Meetings', path: '/meetings' },
    { name: 'Sponsorships', path: '/sponsorships' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-blue-600 border-b border-blue-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                <Logo variant="white" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`${isActive(link.path)} transition-colors relative group py-2`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
              <Button variant="white" className="!px-5 !py-2.5 !text-sm ml-4 !font-bold !text-blue-600" onClick={openModal}>Get Invited</Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                <Menu size={28} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (Drawer) */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
          onClick={toggleMenu}
        ></div>

        {/* Sidebar Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
             <span className="font-bold text-lg text-slate-900">Menu</span>
             <button 
               onClick={toggleMenu} 
               className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
             >
               <X size={24} />
             </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={toggleMenu} 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                {link.name}
                {location.pathname === link.path && <ChevronRight size={16} />}
              </Link>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/50">
             <Button fullWidth onClick={() => { toggleMenu(); openModal(); }} className="shadow-lg shadow-blue-500/20">
               Get Invited
             </Button>
          </div>
        </div>
      </div>
    </>
  );
};