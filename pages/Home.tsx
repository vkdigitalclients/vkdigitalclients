import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { IMPACT_STATS, TESTIMONIALS } from '../constants';
import { CheckCircle, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Build Your Network,<br />
              <span className="text-blue-300">Grow Your Business.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              India’s first result-oriented business networking platform built on Trust, Transparency & Real Growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" onClick={() => document.getElementById('get-invited')?.scrollIntoView({ behavior: 'smooth'})}>
                Get Invited
              </Button>
              <Link to="/meetings">
                 <Button variant="outline" className="text-white border-white hover:bg-white/10 w-full sm:w-auto">
                   How It Works
                 </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Our Vision</div>
            <h2 className="text-3xl font-bold text-slate-900">Structured Growth Through Trusted Relationships</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The vision of BYN is to help members increase their business through a structured, positive, and professional referral marketing program that enables them to develop long-term, meaningful relationships with quality business professionals.
            </p>
            <div className="pt-4 border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
              <p className="text-slate-600">Empower businesses by creating trusted referral-based growth ecosystems.</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="Networking meeting" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* Our Impact Grid */}
      <Section colored>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Together, we are redefining India’s business networks with purpose, pride, and partnership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{stat.title}</h3>
              <p className="text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Power of Referrals Stat */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-800 rounded-full mb-6">
                <TrendingUp className="text-blue-300 mr-2" />
                <span className="font-semibold text-blue-100">The Data Speaks</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">87%</h2>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
                of small business owners get new business through referrals.
            </p>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Stop cold calling and start building relationships. Experience the power of structured referral networking in action.
            </p>
        </div>
      </section>

      {/* Why Join - Checklist Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-10">Why Join BYN?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                {[
                  "Structured Business Referrals",
                  "Digital Referral Platform",
                  "Marketplace for Your Business",
                  "Get Featured on Social Channels",
                  "Confirmed Weekly Meetings",
                  "Visitor-Friendly Access"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={24} />
                    <span className="text-slate-700 text-lg leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/find-chapter">
                    <Button variant="secondary" className="gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-100">
                        Find a Chapter <ArrowRight size={20} />
                    </Button>
                </Link>
              </div>
           </div>
           
           {/* Simple Stepper for "How BYN Works" */}
           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
             <h3 className="text-2xl font-bold text-slate-900 mb-6">How BYN Works</h3>
             <div className="space-y-6">
               {[
                 { step: 1, title: "Attend a Meeting", desc: "Experience the energy firsthand." },
                 { step: 2, title: "Meet Members", desc: "Network with quality professionals." },
                 { step: 3, title: "Join BYN", desc: "Lock out your competition." },
                 { step: 4, title: "Promote & Prosper", desc: "Share referrals and grow together." }
               ].map((s) => (
                 <div key={s.step} className="flex gap-4">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                     {s.step}
                   </div>
                   <div>
                     <h4 className="text-lg font-semibold text-slate-900">{s.title}</h4>
                     <p className="text-slate-500 text-sm">{s.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section colored>
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Member Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                 {[...Array(5)].map((_, i) => (
                   <Star 
                     key={i} 
                     size={16} 
                     fill={i < t.rating ? "currentColor" : "none"} 
                     className={i < t.rating ? "text-yellow-400" : "text-slate-300"}
                   />
                 ))}
              </div>
              <p className="text-slate-600 mb-6 italic flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.designation}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA / Contact Form */}
      <Section className="bg-blue-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Don't let another week of potential referrals go to waste. Join a meeting near you and see the difference.
              </p>
              <ul className="space-y-3 mb-8 text-blue-50">
                <li className="flex items-center gap-2"><CheckCircle size={18} /> High-energy meetings</li>
                <li className="flex items-center gap-2"><CheckCircle size={18} /> Exclusive business category</li>
                <li className="flex items-center gap-2"><CheckCircle size={18} /> Structured agenda</li>
              </ul>
           </div>
           <div>
             <ContactForm />
           </div>
        </div>
      </Section>
    </div>
  );
};