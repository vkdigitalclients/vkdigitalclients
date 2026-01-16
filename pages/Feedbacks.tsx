import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { TESTIMONIALS } from '../constants';
import { Star, MessageSquare, Send } from 'lucide-react';

export const Feedbacks: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '', rating: 5 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your feedback!");
        setForm({ name: '', email: '', message: '', rating: 5 });
    };

  return (
    <div className="flex flex-col">
      <div className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Member Feedbacks</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See what our community has to say about their journey with BYN.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                 {[...Array(5)].map((_, i) => (
                   <Star 
                     key={i} 
                     size={18} 
                     fill={i < t.rating ? "currentColor" : "none"} 
                     className={i < t.rating ? "text-yellow-400" : "text-slate-200"}
                   />
                 ))}
              </div>
              <p className="text-slate-700 mb-8 italic flex-grow text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.designation}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-blue-600 p-8 text-white text-center">
                <MessageSquare className="mx-auto mb-4" size={32} />
                <h2 className="text-2xl font-bold">Share Your Experience</h2>
                <p className="text-blue-100 mt-2">We value your input to make BYN even better.</p>
            </div>
            <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                            <input 
                                type="text" 
                                required
                                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={form.name}
                                onChange={e => setForm({...form, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                required
                                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={form.email}
                                onChange={e => setForm({...form, email: e.target.value})}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Rating</label>
                        <div className="flex gap-2">
                            {[1,2,3,4,5].map((star) => (
                                <button 
                                    key={star}
                                    type="button"
                                    onClick={() => setForm({...form, rating: star})}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star 
                                        size={28} 
                                        fill={star <= form.rating ? "#FACC15" : "none"} 
                                        className={star <= form.rating ? "text-yellow-400" : "text-slate-300"}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Your Feedback</label>
                        <textarea 
                            rows={4}
                            required
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={form.message}
                            onChange={e => setForm({...form, message: e.target.value})}
                        ></textarea>
                    </div>
                    <Button type="submit" variant="primary" fullWidth className="flex justify-center items-center gap-2">
                        Submit Feedback <Send size={18} />
                    </Button>
                </form>
            </div>
        </div>
      </Section>
    </div>
  );
};