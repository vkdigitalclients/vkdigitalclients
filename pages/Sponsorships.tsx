import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Megaphone, TrendingUp, Users, HeartHandshake, ShieldCheck, 
  MonitorPlay, Landmark, Smartphone, Building2, Umbrella, 
  Briefcase, Globe, Laptop, Truck, Utensils, Car, ArrowRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

export const Sponsorships: React.FC = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section - Matching About Us Style */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 mb-6">
                <TrendingUp size={14} /> Partner for Growth
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Boost Your Brand with BYN – <span className="text-blue-400">Grow Together</span>
            </h1>
            <div className="space-y-6 text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              <p>
                At BYN, we believe growth is stronger when it is shared. Our sponsorship program is designed to create a win-win partnership between brands and business owners. By sponsoring BYN, you don’t just promote your brand—you become part of a movement that empowers entrepreneurs across India.
              </p>
            </div>
            <div className="pt-10">
              <Button variant="primary" onClick={() => navigate('/contact')} className="!px-8 !py-4 !text-lg shadow-lg shadow-blue-500/20">
                Become a Sponsor <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
         </div>
      </div>

      {/* Why Sponsor BYN Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Sponsor BYN?</h2>
           <p className="text-slate-600 max-w-2xl mx-auto text-lg">
             Partnering with us means positioning your brand at the center of business innovation and networking.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { 
                  icon: Users, 
                  title: "Direct Access to Business Decision-Makers", 
                  desc: "Connect with active entrepreneurs, founders, and business owners who make real buying decisions." 
                },
                { 
                  icon: Megaphone, 
                  title: "Strong Brand Visibility", 
                  desc: "Get your brand featured across meetings, events, expos, parties, stage mentions, AV’s, banners, Standees, flyers, videos, emails, whatsapp, digital platforms, and social media." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Trust Through Community Association", 
                  desc: "Being associated with BYN builds credibility, goodwill, and trust for your brand." 
                },
                { 
                  icon: MonitorPlay, 
                  title: "High-Impact Video & Social Media Promotions", 
                  desc: "Get featured through podcasts, Instagram Reels, and YouTube Shorts, and enjoy boosted promotions across all major social media platforms—giving your brand massive visibility with today’s digital-first business audience." 
                },
                { 
                  icon: HeartHandshake, 
                  title: "Meaningful Business Relationships", 
                  desc: "Build long-term partnerships, not just short-term promotions." 
                },
                { 
                  icon: TrendingUp, 
                  title: "Support Entrepreneurial Growth", 
                  desc: "Position your brand as one that supports, empowers, and grows with entrepreneurs." 
                }
            ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* Ideal For Section */}
      <Section colored>
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ideal For</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Industries that gain maximum leverage from our sponsorship ecosystem.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Landmark, title: "Banks & Financial Institutions", desc: "Business loans, SME finance, working capital solutions." },
              { icon: Smartphone, title: "FinTech & Payment Solutions", desc: "Digital payments, POS machines, accounting apps." },
              { icon: Building2, title: "Real Estate & Property Developers", desc: "Commercial and residential projects, land developers." },
              { icon: Umbrella, title: "Insurance Companies & Brokers", desc: "Life, health, motor, and business insurance." },
              { icon: Briefcase, title: "Co-Working & Office Space Providers", desc: "Shared offices, business hubs, meeting spaces." },
              { icon: Globe, title: "Digital Marketing & Advertising Agencies", desc: "Branding, social media, performance marketing." },
              { icon: Laptop, title: "IT & Software Companies", desc: "CRM, ERP, business tools, SaaS platforms." },
              { icon: Truck, title: "Logistics & Courier Services", desc: "Domestic and international shipping solutions." },
              { icon: Utensils, title: "Hospitality & Event Venues", desc: "Hotels, banquet halls, resorts, event spaces." },
              { icon: Car, title: "Automobile & Mobility Brands", desc: "Cars, bikes, commercial vehicles, EV companies." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center flex flex-col items-center h-full">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <item.icon size={24} />
                 </div>
                 <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                 <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
         </div>

         <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Ready to elevate your brand?</h2>
                <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                    We offer tailored sponsorship packages to suit your business goals and budget. From event titles to digital presence, we have it all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="white" onClick={() => navigate('/contact')} className="!px-8">Contact Sponsorship Team</Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10 !px-8">Download Media Kit</Button>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};