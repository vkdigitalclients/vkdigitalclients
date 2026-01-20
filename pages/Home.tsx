import React, { useRef, useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { TESTIMONIALS } from '../constants';
import { 
  TrendingUp, Users, ShieldCheck, BookOpen, Calendar,
  Award, ChevronLeft, ChevronRight, Globe, Lock, Gift, Smartphone, 
  HeartHandshake, Medal, Eye, Repeat, Languages,
  Clock, Target, Zap, Network, GraduationCap
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { openModal } = useModal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Rotating Text Logic
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ["Network", "Referrals", "Revenue", "Business"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400; 
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
      {/* SECTION 1 - HERO */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[500px] flex items-center">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-none flex items-baseline gap-3 whitespace-nowrap">
                <span className="text-white">Build Your</span>
                <div className="relative h-[1.1em] w-[220px] sm:w-[300px] md:w-[380px] overflow-hidden flex items-baseline">
                   {/* Invisible placeholder for correct baseline alignment */}
                   <span className="opacity-0 select-none">Referrals</span>
                   
                   {/* Animated Words */}
                   {rotatingTexts.map((text, i) => (
                      <span
                        key={i}
                        className={`absolute left-0 font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 bg-clip-text text-transparent transition-all duration-700 ease-in-out ${
                          i === textIndex 
                            ? "top-0 opacity-100 transform-none" 
                            : i === (textIndex - 1 + rotatingTexts.length) % rotatingTexts.length 
                              ? "top-full opacity-0" // Slide down out
                              : "-top-full opacity-0" // Waiting above
                        }`}
                      >
                        {text}
                      </span>
                   ))}
                </div>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl border-l-4 border-blue-600 pl-6 bg-gradient-to-r from-blue-900/20 to-transparent py-2">
                Join a community of ambitious entrepreneurs. Build meaningful connections, share qualified referrals, and scale your business with trust and transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button variant="primary" className="!px-8 !py-4 !text-lg shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform" onClick={openModal}>
                  Get Invited
                </Button>
              </div>
            </div>

            {/* Right Content - Floating Stats Cards (Desktop) */}
            <div className="hidden lg:flex flex-col gap-6 items-end justify-center relative perspective-1000">
               {/* Background Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-2xl transform scale-75"></div>

               {/* Card 1 */}
               <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl w-72 transform hover:-translate-x-2 transition-transform duration-300 shadow-2xl group">
                  <div className="flex items-center gap-4">
                     <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Users size={28} />
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-white">2000+</div>
                        <div className="text-sm text-slate-400">Active Members</div>
                     </div>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl w-72 mr-12 transform hover:-translate-x-2 transition-transform duration-300 shadow-2xl group">
                  <div className="flex items-center gap-4">
                     <div className="p-3 rounded-xl bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <TrendingUp size={28} />
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-white">₹100Cr+</div>
                        <div className="text-sm text-slate-400">Business Generated</div>
                     </div>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl w-72 transform hover:-translate-x-2 transition-transform duration-300 shadow-2xl group">
                  <div className="flex items-center gap-4">
                     <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <ShieldCheck size={28} />
                     </div>
                     <div>
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-sm text-slate-400">Verified Professionals</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - OUR MISSION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-2"></div>
              {/* Networking related photo */}
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Networking Event" 
                className="relative rounded-2xl shadow-xl w-full h-full object-cover min-h-[350px]" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                At <strong>BYN</strong>, our mission is to help business owners grow faster and stronger through the power of meaningful connections. We exist to create a trusted networking ecosystem where entrepreneurs expand their reach, build reliable relationships, and generate real business opportunities. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                By bringing the right people together in a structured, supportive environment, we empower our members to collaborate, share quality referrals, develop leadership, and achieve consistent business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW BUSINESS NETWORKING HELPS YOU */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How Business Networking Helps You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Network, title: "Expands Your Network Faster", desc: "Connect with multiple business owners in a single platform and grow your professional circle in months instead of years." },
              { icon: HeartHandshake, title: "Builds Strong & Trusted Relationships", desc: "Regular interactions help create trust-based relationships that turn into long-term business partnerships." },
              { icon: TrendingUp, title: "Gives You Quality Business Referrals", desc: "Members pass genuine, verified leads that are more likely to convert into real business." },
              { icon: BookOpen, title: "Improves Your Business Knowledge", desc: "Learn from the experiences, mistakes, and success stories of other entrepreneurs." },
              { icon: Award, title: "Develops Your Leadership Skills", desc: "Get opportunities to lead meetings, host events, and manage teams within the network." },
              { icon: GraduationCap, title: "Provides Continuous Learning", desc: "Training sessions, workshops, and presentations keep you updated with business and market trends." },
              { icon: Eye, title: "Creates Business Visibility", desc: "Regular introductions and presentations help more people remember and recommend your business." },
              { icon: Repeat, title: "Builds Consistency Through Regular Meetings", desc: "Fortnightly or weekly meetings keep you active, focused, and connected to growth opportunities." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 leading-tight">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - STOP CHASING, START ATTRACTING */}
      <section className="py-12 bg-blue-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">STOP CHASING, START ATTRACTING.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-start gap-4">
               <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                 <Clock size={24} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">Save Time</h3>
                  <p className="text-blue-50 text-sm leading-relaxed">Stop attending random events. Meet 50+ decision makers in one room, every time, efficiently.</p>
               </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-start gap-4 transform md:-translate-y-4">
               <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                 <Target size={24} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">Targeted Growth</h3>
                  <p className="text-blue-50 text-sm leading-relaxed">Don't just collect cards. Build relationships with people who are actively looking to refer you.</p>
               </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-start gap-4">
               <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                 <Zap size={24} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">High Energy</h3>
                  <p className="text-blue-50 text-sm leading-relaxed">Start your day with motivation, learning, and business opportunities before your competition wakes up.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHY BYN */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why BYN</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Strong Local Community with Global Connectivity", desc: "Grow within your local business community while staying connected to national and global business networks." },
              { icon: TrendingUp, title: "Measurable Business Growth", desc: "Track your progress through referrals, deals closed, and business generated inside BYN." },
              { icon: Languages, title: "Native Language Chapters", desc: "Network comfortably in your own language through region-based and language-specific chapters." },
              { icon: Lock, title: "Category Exclusivity", desc: "Only one business per category in each chapter—no internal competition, only collaboration." },
              { icon: Users, title: "Minimum 50+ Active Members per Chapter", desc: "Every chapter is built with strong participation to ensure maximum business opportunities." },
              { icon: Calendar, title: "24+ Breakfast Business Meets Every Year", desc: "Regular, high-energy breakfast meetings keep you visible and connected all year round." },
              { icon: Gift, title: "Referral Bonus Opportunities", desc: "Get rewarded when you pass successful business referrals to fellow members." },
              // Removed 8th item (Mobile App)
              { icon: Medal, title: "Leadership & Recognition Opportunities", desc: "Become a leader in your chapter and gain recognition within the business community." },
              { icon: ShieldCheck, title: "Business Growth with Trust & Ethics", desc: "Grow your business in a professional, ethical, and trust-based networking environment." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 flex items-start gap-4 h-full group">
                 <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                    <item.icon size={20} />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - FEATURE HIGHLIGHT (3 STEPS) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">3 Steps to Success</h2>
             <p className="text-lg text-blue-100 max-w-3xl mx-auto">
               Get invited to a BYN Business Networking Meet and Witness the Power of Referrals in Action
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-blue-400 -z-10 w-2/3 mx-auto"></div>
             
             {[
               { title: "Attend a BYN Meeting", desc: "Experience the power of BYN Network.", step: 1 },
               { title: "Meet The Members", desc: "Learn how they can help you to grow your business.", step: 2 },
               { title: "Join BYN", desc: "Become a BYN Chapter Member to Access all benefits.", step: 3 }
             ].map((step, i) => (
               <div key={i} className="flex flex-col items-center text-center p-6 bg-blue-700/50 rounded-2xl backdrop-blur-sm border border-blue-500">
                  <div className="w-20 h-20 rounded-full bg-white text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                     {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-blue-100 text-sm">{step.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button variant="white" onClick={openModal} className="!px-10 !text-blue-600 !font-bold">Get Invited Now</Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 - REVIEWS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-slate-900">Hear from BYN Members</h2>
          </div>
          
          <div className="relative px-4 md:px-12">
              <button 
                  onClick={() => scroll('left')}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-500 hover:text-blue-600 transition-all"
              >
                  <ChevronLeft size={24} />
              </button>

              <div 
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto gap-8 snap-x pb-4 hide-scrollbar scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                  {TESTIMONIALS.map((t) => (
                      <div key={t.id} className="min-w-[320px] md:min-w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col snap-center">
                      <div className="flex items-center gap-4 mb-4">
                          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                          <div>
                          <h4 className="font-bold text-slate-900">{t.name}</h4>
                          <p className="text-slate-500 text-sm">{t.designation}, {t.company}</p>
                          </div>
                      </div>
                      <p className="text-slate-700 italic leading-relaxed flex-grow">"{t.quote}"</p>
                      </div>
                  ))}
              </div>

              <button 
                  onClick={() => scroll('right')}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-500 hover:text-blue-600 transition-all"
              >
                  <ChevronRight size={24} />
              </button>
          </div>
        </div>
      </section>

      {/* SECTION 8 - START YOUR BYN JOURNEY */}
      <section className="bg-blue-600 py-24 px-4 text-center relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="relative z-10 max-w-3xl mx-auto text-white">
           <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your BYN Journey</h2>
           <p className="text-xl text-blue-100 mb-10">
             Want to build a powerful network and grow your business? Get started now.
           </p>
           <Button variant="white" onClick={openModal} className="!px-12 !py-4 !text-lg !font-bold shadow-xl hover:scale-105 transition-transform !text-blue-600">
             GET INVITED
           </Button>
        </div>
      </section>
    </div>
  );
};