import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ShieldCheck, TrendingUp, Users, Target, Heart } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
             <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
             <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Team working together" 
                className="w-full h-full object-cover opacity-20"
             />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">About BYN</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Redefining business networking through trust, transparency, and structured growth.
          </p>
        </div>
      </section>

      {/* Our Story / Intro */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                    <p>
                        Build Your Network (BYN) is India’s first result-oriented business networking platform. We believe that relationships are the currency of business, and our platform is designed to mint them effectively.
                    </p>
                    <p>
                        Unlike traditional networking where interactions can be casual and unstructured, BYN provides a professional framework. We focus on "Givers Gain" — the idea that by helping others grow their business, you inevitably grow your own.
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl -rotate-2"></div>
                <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Professionals shaking hands" 
                    className="relative rounded-2xl shadow-lg w-full"
                />
            </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section colored>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mb-6">
                    <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                    To help members increase their business through a structured, positive, and professional referral marketing program that enables them to develop long-term, meaningful relationships with quality business professionals.
                </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg mb-6">
                    <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                     Empower businesses by creating trusted referral-based growth ecosystems where entrepreneurs can thrive through collaboration rather than competition.
                </p>
            </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
              <p className="text-slate-600">The pillars that define our community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { title: "Trust", icon: ShieldCheck, desc: "Building relationships starts with reliability and integrity." },
                  { title: "Transparency", icon: Users, desc: "Open communication and clear processes for all members." },
                  { title: "Growth", icon: TrendingUp, desc: "Measurable results that impact your bottom line." }
              ].map((val, idx) => (
                  <div key={idx} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                          <val.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                      <p className="text-slate-500">{val.desc}</p>
                  </div>
              ))}
          </div>
      </Section>
      
      {/* CTA */}
       <Section colored className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Join the Movement</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Be part of a community that celebrates your success.
            </p>
            <Button variant="primary" onClick={() => window.location.href = '/#get-invited'}>
                Get Invited
            </Button>
       </Section>
    </div>
  );
};