import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Matching About Us Style */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help you build your network.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                    <p className="text-slate-600 mb-8">Reach out to our support team for any queries regarding membership, chapters, or events.</p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Phone</h4>
                            <p className="text-slate-600">+91 999 999 9999</p>
                            <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Email</h4>
                            <p className="text-slate-600">support@byn.com</p>
                            <p className="text-slate-500 text-sm">We reply within 24 hours.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Office</h4>
                            <p className="text-slate-600">Hitech City, Hyderabad<br/>Telangana, India - 500081</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2">
                     <ContactForm />
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};