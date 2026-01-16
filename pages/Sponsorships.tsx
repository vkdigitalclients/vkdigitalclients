import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Megaphone, TrendingUp, Users, Award, Target } from 'lucide-react';

export const Sponsorships: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner for Growth</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Showcase your brand to thousands of business owners and decision-makers across our network.
          </p>
        </div>
      </div>

      <Section>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Sponsor BYN?</h2>
           <p className="text-slate-600 max-w-2xl mx-auto">Get unparalleled access to a community of entrepreneurs, innovators, and market leaders.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
                { icon: Megaphone, title: "Brand Visibility", desc: "Feature your logo and messaging at our high-energy weekly meetings and events." },
                { icon: Users, title: "Direct Access", desc: "Engage directly with business owners who are looking for new solutions and partnerships." },
                { icon: TrendingUp, title: "Lead Generation", desc: "Generate qualified leads through our structured referral ecosystem." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Ready to elevate your brand?</h2>
                <p className="text-blue-100 mb-8 text-lg">
                    We offer tailored sponsorship packages to suit your business goals and budget. From event titles to digital presence, we have it all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="white" onClick={() => window.location.href = '/contact'}>Contact Sponsorship Team</Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10">Download Media Kit</Button>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};