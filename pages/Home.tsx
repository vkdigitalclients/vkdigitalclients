import React, { useRef } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { TESTIMONIALS, IMPACT_STATS } from '../constants';
import { 
  TrendingUp, Users, ShieldCheck, BookOpen, Calendar,
  Award, ChevronLeft, ChevronRight, Globe, Lock, Gift, Smartphone, 
  HeartHandshake, Medal, ArrowRight, Network, GraduationCap, Eye, Repeat, Languages,
  Clock, Target, Zap
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { openModal } = useModal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      {/* Attractive Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/60"></div>
        
        {/* Decorative Floating Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-8 backdrop-blur-md shadow-lg shadow-blue-900/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                India’s First Result-Oriented Networking Platform
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Grow Your Business Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Trusted Referrals</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-blue-600 pl-6 bg-gradient-to-r from-blue-900/20 to-transparent py-2">
                Join a community of ambitious entrepreneurs. Build meaningful connections, share qualified referrals, and scale your business with trust and transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="!px-8 !py-4 !text-lg shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform" onClick={openModal}>
                  Get Invited
                </Button>
                <Link to="/about-us">
                  <Button variant="outline" className="!px-8 !py-4 !text-lg text-white border-slate-600 hover:bg-slate-800/50 hover:text-white hover:border-blue-500 backdrop-blur-sm transition-all">
                    Learn More
                  </Button>
                </Link>
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
          
          {/* Mobile Stats Row */}
          <div className="lg:hidden mt-16 pt-8 border-t border-slate-800">
             <div className="flex justify-between items-center text-center">
                 <div>
                    <div className="text-2xl font-bold text-white">2000+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Members</div>
                 </div>
                 <div className="w-px h-10 bg-slate-800"></div>
                 <div>
                    <div className="text-2xl font-bold text-white">₹100Cr+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Business</div>
                 </div>
                 <div className="w-px h-10 bg-slate-800"></div>
                 <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Verified</div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-100 rounded-3xl rotate-2"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Mission - Connecting People" 
               className="relative rounded-2xl shadow-xl w-full h-full object-cover min-h-[400px]" 
             />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              At <strong>BYN – Build Your Network</strong>, our mission is to help business owners grow faster and stronger through the power of meaningful connections. We exist to create a trusted networking ecosystem where entrepreneurs expand their reach, build reliable relationships, and generate real business opportunities. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              By bringing the right people together in a structured, supportive environment, we empower our members to collaborate, share quality referrals, develop leadership, and achieve consistent business growth.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
               <p className="font-bold text-slate-900">Our mission is simple: connect people with purpose, so every connection creates value.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* How it Helps Section */}
      <Section colored>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How a Business Networking Platform Helps Business Owners</h2>
          <p className="text-slate-600 text-lg">Real benefits for real growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
             <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                   <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* Strategic Shift Section - Visual Break */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Chasing Leads. Start Attracting Business.</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Most business owners rely on "accidental referrals". BYN replaces luck with a predictable, structured system designed for results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
               <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                 <Clock size={28} />
               </div>
               <h3 className="text-xl font-bold mb-3">Save Time</h3>
               <p className="text-blue-50 leading-relaxed">Stop attending random events. Meet 50+ decision makers in one room, every time, efficiently.</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform md:-translate-y-4">
               <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                 <Target size={28} />
               </div>
               <h3 className="text-xl font-bold mb-3">Targeted Growth</h3>
               <p className="text-blue-50 leading-relaxed">Don't just collect cards. Build relationships with people who are actively looking to refer you to their clients.</p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
               <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                 <Zap size={28} />
               </div>
               <h3 className="text-xl font-bold mb-3">High Energy</h3>
               <p className="text-blue-50 leading-relaxed">Start your day with motivation, learning, and business opportunities before your competition wakes up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BYN Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Should You Join BYN?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Unique advantages that set us apart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Strong Local Community with Global Connectivity", desc: "Grow within your local business community while staying connected to national and global business networks." },
            { icon: TrendingUp, title: "Measurable Business Growth", desc: "Track your progress through referrals, deals closed, and business generated inside BYN." },
            { icon: Languages, title: "Native Language Chapters", desc: "Network comfortably in your own language through region-based and language-specific chapters." },
            { icon: Lock, title: "Category Exclusivity", desc: "Only one business per category in each chapter—no internal competition, only collaboration." },
            { icon: Users, title: "Minimum 50+ Active Members per Chapter", desc: "Every chapter is built with strong participation to ensure maximum business opportunities." },
            { icon: Calendar, title: "24+ Breakfast Business Meets Every Year", desc: "Regular, high-energy breakfast meetings keep you visible and connected all year round." },
            { icon: Gift, title: "Referral Bonus Opportunities", desc: "Get rewarded when you pass successful business referrals to fellow members." },
            { icon: Smartphone, title: "Member-Only Mobile App", desc: "Access referrals, member directory, events, and updates through a dedicated BYN app." },
            { icon: Medal, title: "Leadership & Recognition Opportunities", desc: "Become a leader in your chapter and gain recognition within the business community." },
            { icon: ShieldCheck, title: "Business Growth with Trust & Ethics", desc: "Grow your business in a professional, ethical, and trust-based networking environment." },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
              <div className="flex items-start gap-4 mb-4">
                 <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
                    <item.icon size={20} />
                 </div>
                 <h3 className="font-bold text-slate-900 pt-2">{item.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-14">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 Steps to Success */}
      <Section colored>
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">3 Steps to Success</h2>
           <p className="text-lg text-slate-600 max-w-3xl mx-auto">
             Get invited to a BYN Business Networking Meet and Witness the Power of Referrals in Action
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-blue-200 -z-10 w-2/3 mx-auto"></div>
           
           {[
             { title: "Attend a BYN Meeting", desc: "Experience the power of BYN Network.", step: 1 },
             { title: "Meet The Members", desc: "Learn how they can help you to grow your business.", step: 2 },
             { title: "Join BYN", desc: "Become a BYN Chapter Member to Access all benefits.", step: 3 }
           ].map((step, i) => (
             <div key={i} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 md:bg-transparent md:shadow-none md:border-none">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg ring-4 ring-blue-100">
                   {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
             </div>
           ))}
        </div>
        
        <div className="mt-12 text-center">
           <Button variant="primary" onClick={openModal} className="!px-10">Get Invited Now</Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-white">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Hear from BYN Members</h2>
           <p className="text-slate-600">See what our community members have to say.</p>
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
                className="flex overflow-x-auto gap-8 snap-x pb-8 hide-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="min-w-[320px] md:min-w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col snap-center">
                    <div className="flex items-center gap-4 mb-6">
                        <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                        <div>
                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                        <p className="text-slate-500 text-sm">{t.designation}, {t.company}</p>
                        </div>
                    </div>
                    <div className="mb-4 flex text-yellow-400">
                       {[...Array(5)].map((_, i) => (
                         <Award key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "" : "text-slate-300"} />
                       ))}
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
      </Section>

      {/* Impact Stats Section (Replaces Contact Form) */}
      <Section colored>
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-slate-600 text-lg">Making a real difference in the business ecosystem.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMPACT_STATS.map((stat, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-5 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0">
                     <stat.icon size={28} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{stat.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{stat.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </Section>

      {/* Start Your BYN Journey */}
      <section className="bg-white py-24 px-4 text-center relative overflow-hidden border-t border-slate-100">
        
        <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Start Your BYN Journey</h2>
           <p className="text-xl text-slate-600 mb-10">
             Want to build a powerful network and grow your business? Get started now.
           </p>
           <Button variant="primary" onClick={openModal} className="!px-12 !py-4 !text-lg !font-bold shadow-xl hover:scale-105 transition-transform">
             GET INVITED
           </Button>
        </div>
      </section>
    </div>
  );
};