import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90"></div>
        
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6 backdrop-blur-sm">
             <MessageSquare size={14} /> We'd love to hear from you
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Let's Start a <span className="text-blue-400">Conversation</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about membership, chapters, or events? We're here to help you build your network.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-slate-50 relative z-20 -mt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* Left Side: Contact Info */}
              <div className="lg:col-span-2 bg-slate-900 text-white p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10"></div>
                {/* Decor */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mb-16 -mr-16"></div>

                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Fill up the form and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a href="tel:+919999999999" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Phone</p>
                        <p className="font-medium hover:text-blue-400 transition-colors">+91 999 999 9999</p>
                      </div>
                    </a>

                    <a href="mailto:support@byn.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Email</p>
                        <p className="font-medium hover:text-blue-400 transition-colors">support@byn.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">Head Office</p>
                        <p className="font-medium">Hitech City, Hyderabad<br/>Telangana, India - 500081</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links or Hours */}
                   <div className="pt-8 border-t border-white/10">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Clock size={16} className="text-blue-400"/> Business Hours
                      </h4>
                      <p className="text-slate-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-300 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                   </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lg:col-span-3 p-10 lg:p-12">
                 <div className="max-w-lg">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                    <p className="text-slate-600 mb-8">Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.</p>
                    <ContactForm />
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4632734182447!2d78.3754238!3d17.4436526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688eb5c58c253d!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0, filter: 'grayscale(100%)'}} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="BYN Office Location"
        ></iframe>
        {/* Overlay card on map (optional, strictly visual) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
           <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white flex items-center gap-2 animate-bounce">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="font-bold text-slate-900 text-sm">We are here</span>
           </div>
        </div>
      </section>

      {/* Quick Links / CTA */}
      <Section className="bg-white">
        <div className="text-center">
           <h2 className="text-2xl font-bold text-slate-900 mb-6">Other ways to connect</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
                 <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MessageSquare size={20} />
                 </div>
                 <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">Support Chat</p>
                    <p className="text-xs text-slate-500">Chat with our team</p>
                 </div>
                 <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 ml-2" />
              </a>
              
              <a href="#/find-chapter" className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group">
                 <div className="p-2 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <MapPin size={20} />
                 </div>
                 <div className="text-left">
                    <p className="text-sm font-bold text-slate-900">Find a Chapter</p>
                    <p className="text-xs text-slate-500">Visit a meeting near you</p>
                 </div>
                 <ArrowRight size={16} className="text-slate-300 group-hover:text-purple-500 ml-2" />
              </a>
           </div>
        </div>
      </Section>
    </div>
  );
};