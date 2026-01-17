import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Heart, GraduationCap, Users, Lightbulb, Globe, ArrowRight, TrendingUp } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const BYNFoundation: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30 mb-6">
                <Heart size={14} fill="currentColor" /> Empowering the Next Gen
            </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">BYN Foundation</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nurturing the spirit of entrepreneurship in underrepresented communities. We believe access to a strong business network is a right, not a privilege.
          </p>
        </div>
      </div>

      {/* Mission & Stats */}
      <Section className="relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
           <p className="text-lg text-slate-600 leading-relaxed">
             The BYN Foundation uses the power of networking to bridge the gap between ambition and opportunity. We are dedicated to providing business mentorship, skills training, and networking platforms to students, women entrepreneurs, and small business owners in rural India.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
                { number: "2,000+", label: "Students Mentored", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
                { number: "500+", label: "Women Entrepreneurs Supported", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
                { number: "₹1 Cr+", label: "Micro-Grants Disbursed", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" }
            ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <stat.icon size={32} />
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                </div>
            ))}
        </div>
      </Section>

      {/* Initiatives - Alternating Sections */}
      <div className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              
              {/* Initiative 1: Student Entrepreneurship */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                      <div className="absolute -inset-4 bg-blue-200 rounded-3xl -rotate-2"></div>
                      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="Student Entrepreneurship" className="relative rounded-2xl shadow-xl w-full" />
                  </div>
                  <div>
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                          <GraduationCap size={24} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Student Entrepreneurship</h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                          We run "Future Founders" clubs in colleges to teach the art of networking, pitching, and business strategy. BYN members volunteer as mentors to guide students from ideation to execution.
                      </p>
                      <ul className="space-y-3 mb-8">
                          {['Campus Startup Incubators', 'Networking Skills Workshops', 'Internships with BYN Member Companies'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              {/* Initiative 2: Women Empowerment */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                          <Users size={24} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Women in Business</h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                          We believe that financially independent women build stronger societies. The Foundation provides special grants, networking access, and digital literacy training to women starting home-based businesses or SMEs.
                      </p>
                      <ul className="space-y-3 mb-8">
                          {['Micro-Enterprise Grants', 'Digital Marketing Training', 'Women-Only Networking Circles'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                  <div className="w-2 h-2 rounded-full bg-purple-500"></div> {item}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="relative order-1 lg:order-2">
                      <div className="absolute -inset-4 bg-purple-200 rounded-3xl rotate-2"></div>
                      <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="Women in Business" className="relative rounded-2xl shadow-xl w-full" />
                  </div>
              </div>

               {/* Initiative 3: Rural Rise */}
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                      <div className="absolute -inset-4 bg-green-200 rounded-3xl -rotate-2"></div>
                      <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="Rural Business" className="relative rounded-2xl shadow-xl w-full" />
                  </div>
                  <div>
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                          <Lightbulb size={24} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Rural Rise Program</h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                          Connecting rural artisans and micro-entrepreneurs to urban markets. We help them modernize their business practices, access fair trade networks, and leverage technology for growth.
                      </p>
                      <ul className="space-y-3 mb-8">
                          {['Market Access Programs', 'Financial Literacy Camps', 'Technology Adoption Support'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                  <div className="w-2 h-2 rounded-full bg-green-500"></div> {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

          </div>
      </div>

      {/* Quote Section */}
      <Section className="bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
              <Globe className="w-16 h-16 text-blue-500 mx-auto mb-8 opacity-80" />
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8 text-blue-50">
                  "If you want to go fast, go alone. If you want to go far, go together."
              </blockquote>
              <cite className="not-italic font-bold text-lg text-blue-400">— African Proverb</cite>
          </div>
      </Section>

      {/* CTA Section */}
      <div className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Become a Mentor</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                  Share your business expertise with the next generation. Join the BYN Foundation as a mentor or donor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" onClick={openModal} className="!px-10 !py-4 shadow-xl shadow-blue-500/20">
                      Apply as Mentor
                  </Button>
                  <Button variant="outline" onClick={openModal} className="!px-10 !py-4">
                      Partner for CSR
                  </Button>
              </div>
          </div>
      </div>
    </div>
  );
};