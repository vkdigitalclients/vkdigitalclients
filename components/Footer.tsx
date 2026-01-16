import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="BYN Logo" 
                className="h-8 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-slate-400 max-w-md">
              Empowering businesses by creating trusted referral-based growth ecosystems. 
              Join India's most effective business networking platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/meetings" className="text-slate-400 hover:text-white transition-colors">Meetings</Link></li>
              <li><Link to="/find-chapter" className="text-slate-400 hover:text-white transition-colors">Find a Chapter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>support@byn.com</li>
              <li>+91 999 999 9999</li>
              <li>Hyderabad, India</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white"><Facebook size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-white"><Instagram size={20}/></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Build Your Network. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};