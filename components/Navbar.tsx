import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useModal } from '../context/ModalContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path 
    ? "text-blue-600 font-semibold" 
    : "text-slate-600 hover:text-blue-600 font-medium";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Meetings', path: '/meetings' },
    { name: 'Find Chapter', path: '/find-chapter' },
    { name: 'Sponsorships', path: '/sponsorships' },
    { name: 'Feedbacks', path: '/feedbacks' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/50' : 'bg-white border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="BYN Logo" 
                className="h-10 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`${isActive(link.path)} transition-colors relative group`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Button variant="primary" className="!px-5 !py-2.5 !text-sm ml-4" onClick={openModal}>Get Invited</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl absolute w-full left-0 top-20">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={toggleMenu} 
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
               <Button fullWidth onClick={() => { toggleMenu(); openModal(); }}>Get Invited</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};