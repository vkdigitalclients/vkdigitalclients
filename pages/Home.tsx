import React, { useRef } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { TESTIMONIALS } from '../constants';
import { 
  TrendingUp, Users, ShieldCheck, Zap, 
  Lightbulb, BookOpen, UserPlus, Calendar,
  Award, Target, ChevronLeft, ChevronRight
} from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { useModal } from '../context/ModalContext';

export const Home: React.FC = () => {
  const { openModal } = useModal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400; // Approximate card width + gap
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl">
            India’s First Ever<br />
            <span className="text-blue-400">Result Oriented</span><br />
            Business Networking Platform
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button variant="primary" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white border-none" onClick={openModal}>
              Get Invited
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Mission - Connecting People" 
               className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white font-bold text-xl">Connecting People With Purpose</div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-l-8 border-blue-600 pl-6">Our Mission</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-4">
              <p>
                At <strong>BYN – Build Your Network</strong>, our mission is to help business owners grow faster and stronger through the power of meaningful connections.
              </p>
              <p>
                We exist to create a trusted networking ecosystem where entrepreneurs expand their reach, build reliable relationships, and generate real business opportunities. By bringing the right people together in a structured, supportive environment, we empower our members to collaborate, share quality referrals, develop leadership, and achieve consistent business growth.
              </p>
              <p className="font-medium text-slate-900 bg-blue-50 p-4 rounded-r-xl border-l-4 border-blue-600">
                Our mission is simple: connect people with purpose, so every connection creates value.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Helps Section */}
      <Section colored>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How a Business Networking Platform Helps Business Owners</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: UserPlus, 
              title: "Expands Your Network Faster", 
              desc: "Connect with multiple business owners in a single platform and grow your professional circle in months instead of years." 
            },
            { 
              icon: ShieldCheck, 
              title: "Builds Strong & Trusted Relationships", 
              desc: "Regular interactions help create trust-based relationships that turn into long-term business partnerships." 
            },
            { 
              icon: Zap, 
              title: "Gives You Quality Business Referrals", 
              desc: "Members pass genuine, verified leads that are more likely to convert into real business." 
            },
            { 
              icon: Lightbulb, 
              title: "Improves Your Business Knowledge", 
              desc: "Learn from the experiences, mistakes, and success stories of other entrepreneurs." 
            },
            { 
              icon: Users, 
              title: "Develops Your Leadership Skills", 
              desc: "Get opportunities to lead meetings, host events, and manage teams within the network." 
            },
            { 
              icon: BookOpen, 
              title: "Provides Continuous Learning", 
              desc: "Training sessions, workshops, and presentations keep you updated with business and market trends." 
            },
            { 
              icon: Award, 
              title: "Creates Business Visibility", 
              desc: "Regular introductions and presentations help more people remember and recommend your business." 
            },
            { 
              icon: Calendar, 
              title: "Builds Consistency Through Regular Meetings", 
              desc: "Fortnightly or weekly meetings keep you active, focused, and connected to growth opportunities." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Join BYN Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Should You Join BYN?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Unlocking potential through structured collaboration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
          {[
            { title: "Strong Local Community with Global Connectivity", desc: "Grow within your local business community while staying connected to national and global business networks." },
            { title: "Measurable Business Growth", desc: "Track your progress through referrals, deals closed, and business generated inside BYN." },
            { title: "Native Language Chapters", desc: "Network comfortably in your own language through region-based and language-specific chapters." },
            { title: "Category Exclusivity", desc: "Only one business per category in each chapter—no internal competition, only collaboration." },
            { title: "Minimum 50+ Active Members per Chapter", desc: "Every chapter is built with strong participation to ensure maximum business opportunities." },
            { title: "24+ Breakfast Business Meets Every Year", desc: "Regular, high-energy breakfast meetings keep you visible and connected all year round." },
            { title: "Referral Bonus Opportunities", desc: "Get rewarded when you pass successful business referrals to fellow members." },
            { title: "Member-Only Mobile App", desc: "Access referrals, member directory, events, and updates through a dedicated BYN app." },
            { title: "Leadership & Recognition Opportunities", desc: "Become a leader in your chapter and gain recognition within the business community." },
            { title: "Business Growth with Trust & Ethics", desc: "Grow your business in a professional, ethical, and trust-based networking environment." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all duration-300"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 Steps to Success - Blue Section */}
      <section className="bg-blue-700 text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">3 Steps to Success</h2>
          <p className="text-xl text-blue-100 mb-16 max-w-3xl mx-auto font-light">
            Get invited to a BYN Business Networking Meet and Witness the Power of Referrals in Action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-400/50"></div>

             <div className="flex flex-col items-center group relative z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-700 text-4xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Attend a BYN Meeting</h3>
                <p className="text-blue-100 max-w-xs mx-auto">and Experience the power of BYN Network.</p>
             </div>
             <div className="flex flex-col items-center group relative z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-700 text-4xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">Meet The Members</h3>
                <p className="text-blue-100 max-w-xs mx-auto">and learn how they can help you to grow your business.</p>
             </div>
             <div className="flex flex-col items-center group relative z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-700 text-4xl font-bold mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Join BYN</h3>
                <p className="text-blue-100 max-w-xs mx-auto">to become a BYN Chapter Member to Access all benefits.</p>
             </div>
          </div>

          <button 
             onClick={openModal}
             className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-lg transition-all transform hover:-translate-y-1 shadow-md uppercase tracking-wider"
          >
             Get Invited
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <Section colored>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white bg-blue-600 inline-block px-8 py-3 rounded-md shadow-lg mb-6">Hear from BYN Members</h2>
        </div>
        
        <div className="relative px-4 md:px-12">
            {/* Left Scroll Button */}
            <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-xl border border-slate-100 text-slate-400 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Scroll Container */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-8 snap-x pb-8 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Internal CSS for webkit scrollbar hiding */}
                <style>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col snap-center hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-6">
                        <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" />
                        <div>
                        <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                        <p className="text-slate-500 text-sm">{t.designation}</p>
                        <p className="text-blue-600 text-sm font-medium">{t.company}</p>
                        </div>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed flex-grow text-lg">"{t.quote}"</p>
                    </div>
                ))}
            </div>

            {/* Right Scroll Button */}
            <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-xl border border-slate-100 text-slate-400 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
                aria-label="Next testimonial"
            >
                <ChevronRight size={28} />
            </button>
        </div>
      </Section>

      {/* Start Your Journey CTA */}
      <Section>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden transform transition-all hover:scale-[1.01]">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your BYN Journey</h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light">
                   Want to build a powerful network and grow your business? Get started now.
                </p>
                <button 
                  onClick={openModal}
                  className="bg-white text-blue-700 px-12 py-5 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-lg transition-all shadow-xl uppercase tracking-widest"
                >
                  Get Invited
                </button>
             </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <div id="get-invited" className="bg-slate-50 py-20 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-4">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Request Your Invitation</h2>
                <p className="text-slate-600">Take the first step towards transforming your business today.</p>
             </div>
             <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 p-6 md:p-8">
               <ContactForm />
             </div>
         </div>
      </div>
    </div>
  );
};