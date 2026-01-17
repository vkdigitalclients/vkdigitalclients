import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check, Star, Users, Zap, ShieldCheck } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Membership: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Become a Member</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Unlock exclusive access to a network of driven professionals and result-oriented growth opportunities.
          </p>
          <div className="mt-8">
            <Button variant="primary" onClick={openModal} className="!px-8 !py-4">Apply Now</Button>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Membership Benefits</h2>
          <p className="text-slate-600">Why thousands of entrepreneurs choose BYN.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Exclusive Access", desc: "Connect with vetted business owners and decision makers." },
            { icon: Zap, title: "Accelerated Growth", desc: "Structured referral system designed to generate leads." },
            { icon: ShieldCheck, title: "Category Exclusivity", desc: "Lock out your competition in your local chapter." }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section colored>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Standard Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard Membership</h3>
            <p className="text-slate-500 mb-6">Perfect for small businesses & solopreneurs.</p>
            <div className="text-4xl font-bold text-blue-600 mb-6">₹25,000<span className="text-lg text-slate-400 font-normal">/year</span></div>
            <ul className="space-y-4 mb-8">
              {[
                "Access to 1 Chapter",
                "Weekly Breakfast Meetings",
                "Mobile App Access",
                "Basic Member Directory Listing",
                "Regional Training Events"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="text-green-500" size={20} />
                  <span className="text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" fullWidth onClick={openModal}>Inquire Now</Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl border border-slate-800 relative transform md:scale-105">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Premium Membership</h3>
            <p className="text-slate-400 mb-6">For established businesses looking to scale.</p>
            <div className="text-4xl font-bold text-white mb-6">₹40,000<span className="text-lg text-slate-500 font-normal">/year</span></div>
            <ul className="space-y-4 mb-8">
              {[
                "Access to Global Chapters",
                "Priority Member Directory Listing",
                "Feature in Monthly Newsletter",
                "Exclusive Leadership Training",
                "Guest Passes (5 per year)",
                "All Standard Benefits"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-slate-200">{feat}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" fullWidth onClick={openModal}>Apply for Premium</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};