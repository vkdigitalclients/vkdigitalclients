import React from 'react';
import { Section } from '../components/Section';
import { BookOpen, UserCheck, Mic } from 'lucide-react';

export const NetworkingTips: React.FC = () => {
  const tips = [
    {
      title: "The Art of the 60-Second Pitch",
      desc: "How to clearly communicate your business value in one minute or less.",
      icon: Mic
    },
    {
      title: "Givers Gain Philosophy",
      desc: "Why helping others is the fastest way to help your own business grow.",
      icon: UserCheck
    },
    {
      title: "Effective Follow-ups",
      desc: "Strategies to turn casual meeting introductions into lasting business relationships.",
      icon: BookOpen
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Networking Tips</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Master the skills you need to build a powerful network.
        </p>
      </div>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <tip.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{tip.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{tip.desc}</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">Read Article &rarr;</a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};