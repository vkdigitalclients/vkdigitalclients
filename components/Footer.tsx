import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Intro */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo variant="white" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Build Your Network (BYN) is India’s first result-oriented business networking platform. 
              We empower entrepreneurs to grow through trusted, structured, and transparent referral ecosystems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20}/></a>
            </div>
          </div>
          
          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/feedbacks" className="text-slate-400 hover:text-white transition-colors text-sm">Feedbacks</Link></li>
              <li><Link to="/membership" className="text-slate-400 hover:text-white transition-colors text-sm">Membership</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link to="/byn-foundation" className="text-slate-400 hover:text-white transition-colors text-sm">BYN Foundation</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/meetings" className="text-slate-400 hover:text-white transition-colors text-sm">Meetings</Link></li>
              <li><Link to="/find-chapter" className="text-slate-400 hover:text-white transition-colors text-sm">Find a Chapter</Link></li>
              <li><Link to="/start-chapter" className="text-slate-400 hover:text-white transition-colors text-sm">Start a Chapter</Link></li>
              <li><Link to="/events" className="text-slate-400 hover:text-white transition-colors text-sm">Events</Link></li>
              <li><Link to="/sponsorships" className="text-slate-400 hover:text-white transition-colors text-sm">Sponsorship</Link></li>
              <li><Link to="/networking-tips" className="text-slate-400 hover:text-white transition-colors text-sm">Networking Tips</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Hitech City, Hyderabad,<br/>Telangana, India - 500081</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <a href="tel:+919999999999" className="text-slate-400 hover:text-white transition-colors text-sm">+91 999 999 9999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:support@byn.com" className="text-slate-400 hover:text-white transition-colors text-sm">support@byn.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Build Your Network. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-slate-500">
             <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};