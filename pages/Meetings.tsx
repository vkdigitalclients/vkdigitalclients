import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Coffee, Mic, Users, Zap, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export const Meetings: React.FC = () => {
  const { openModal } = useModal();
  
  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Experience a Meeting</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            High-energy weekly meetings designed to pass referrals and close business.
          </p>
        </div>
      </div>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">What You Get as a Visitor</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: "High Energy", desc: "Start your day with positivity and drive." },
            { icon: Users, title: "Network", desc: "Meet 50+ local business owners instantly." },
            { icon: Mic, title: "Pitch", desc: "60 seconds to showcase your business." },
            { icon: Coffee, title: "Breakfast", desc: "Enjoy breakfast while you network." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-shadow">
               <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <item.icon size={28} />
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
               <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section colored className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Business Meeting" 
                className="rounded-2xl shadow-xl w-full"
             />
           </div>
           <div>
             <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Attend</h2>
             <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-900">Get Invited</h4>
                      <p className="text-slate-600 mt-1">Fill out the form on our website. It takes less than a minute.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-900">Confirmation</h4>
                      <p className="text-slate-600 mt-1">Our Chapter Coordinator will call you with venue details, date, and time.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-900">Attend & Connect</h4>
                      <p className="text-slate-600 mt-1">Bring your business cards and prepare a 60-second introduction.</p>
                   </div>
                </div>
             </div>
             <div className="mt-10">
                <Button variant="primary" onClick={openModal}>Get Invited Now</Button>
             </div>
           </div>
        </div>
      </Section>

      <Section>
         <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Where is the next meeting?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
               BYN hosts weekly business networking meetings conducted at reputed hotels, always at a convenient nearby location to ensure maximum attendance and comfort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-slate-500 mb-8">
               <span className="flex items-center gap-1"><Calendar size={16}/> Weekly Slots</span>
               <span className="flex items-center gap-1"><MapPin size={16}/> Premium Venues</span>
            </div>
            <Link to="/find-chapter">
                <Button variant="outline">Find Nearest Location</Button>
            </Link>
         </div>
      </Section>
    </div>
  );
};