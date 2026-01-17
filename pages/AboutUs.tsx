import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Users, TrendingUp, Globe, Lock, Calendar, Gift, Smartphone, 
  Medal, HeartHandshake, PartyPopper, ShieldCheck, Link, BookOpen, 
  Sprout, Sun, Languages, ArrowRight, CheckCircle2
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const AboutUs: React.FC = () => {
  const { openModal } = useModal();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">About Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are building a trusted ecosystem where entrepreneurs grow together. Learn more about our mission, vision, and the values that drive us.
            </p>
         </div>
      </div>

      {/* 1. Intro Section: Power of Referrals */}
      {/* Note: Image Leftside, & Text Rightside */}
      <Section className="pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl -rotate-2"></div>
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Power of Referrals" 
               className="relative rounded-2xl shadow-xl w-full h-full object-cover aspect-[4/3]"
             />
          </div>
          <div className="space-y-6">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
               The Power of Referrals to Transform Your Business
             </h1>
             <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
               <p>Referrals are not just leads — they come with trust already built in.</p>
               <p>People buy faster and stay longer when they are recommended by someone they trust.</p>
               <p>Referrals shorten the sales cycle and increase conversion rates.</p>
               <p>In a strong network, every referral is meaningful and intentional.</p>
               <p className="font-semibold text-blue-700">That’s why referrals don’t just grow your business — they transform it.</p>
             </div>
             <div className="pt-4">
               <Button variant="primary" onClick={openModal} className="!px-8 !py-3 !text-lg shadow-lg shadow-blue-500/20">
                 Get Invited
               </Button>
             </div>
          </div>
        </div>
      </Section>

      {/* 2. Mission Section */}
      {/* Note: Leftside image, rightside mission content */}
      <Section colored className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-1">
             {/* Decorative elements */}
             <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
             <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
             
             <img 
               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Our Mission" 
               className="relative rounded-2xl shadow-2xl w-full h-full object-cover aspect-[4/3]"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                <p className="font-bold text-slate-900 text-lg">"Connect people with purpose"</p>
             </div>
          </div>
          
          <div className="order-2 space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
               <Globe size={16} /> Our Purpose
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
             <p className="text-lg text-slate-600 leading-relaxed text-justify">
               At <strong>BYN – Build Your Network</strong>, our mission is to help business owners grow faster and stronger through the power of meaningful connections. We exist to create a trusted networking ecosystem where entrepreneurs expand their reach, build reliable relationships, and generate real business opportunities.
             </p>
             <p className="text-lg text-slate-600 leading-relaxed text-justify">
               By bringing the right people together in a structured, supportive environment, we empower our members to collaborate, share quality referrals, develop leadership, and achieve consistent business growth.
             </p>
             <p className="text-xl font-medium text-slate-900 border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
               Our mission is simple: connect people with purpose, so every connection creates value.
             </p>
          </div>
        </div>
      </Section>

      {/* 3. Why Join Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Should You Join BYN?</h2>
          <p className="text-slate-600 text-lg">Unlock the potential of your business with these exclusive benefits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: Globe, 
              title: "Strong Local Community with Global Connectivity", 
              desc: "Grow within your local business community while staying connected to national and global business networks." 
            },
            { 
              icon: TrendingUp, 
              title: "Measurable Business Growth", 
              desc: "Track your progress through referrals, deals closed, and business generated inside BYN." 
            },
            { 
              icon: Languages, 
              title: "Native Language Chapters", 
              desc: "Network comfortably in your own language through region-based and language-specific chapters." 
            },
            { 
              icon: Lock, 
              title: "Category Exclusivity", 
              desc: "Only one business per category in each chapter—no internal competition, only collaboration." 
            },
            { 
              icon: Users, 
              title: "Minimum 50+ Active Members per Chapter", 
              desc: "Every chapter is built with strong participation to ensure maximum business opportunities." 
            },
            { 
              icon: Calendar, 
              title: "24+ Breakfast Business Meets Every Year", 
              desc: "Regular, high-energy breakfast meetings keep you visible and connected all year round." 
            },
            { 
              icon: Gift, 
              title: "Referral Bonus Opportunities", 
              desc: "Get rewarded when you pass successful business referrals to fellow members." 
            },
            { 
              icon: Smartphone, 
              title: "Member-Only Mobile App", 
              desc: "Access referrals, member directory, events, and updates through a dedicated BYN app." 
            },
            { 
              icon: Medal, 
              title: "Leadership & Recognition Opportunities", 
              desc: "Become a leader in your chapter and gain recognition within the business community." 
            },
            { 
              icon: HeartHandshake, 
              title: "Business Growth with Trust & Ethics", 
              desc: "Grow your business in a professional, ethical, and trust-based networking environment." 
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 <item.icon size={24} />
               </div>
               <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
               <p className="text-slate-600 leading-relaxed flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Philosophy Section */}
      <Section colored>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
             <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mb-16 -mr-16"></div>
                <h2 className="text-3xl font-bold mb-6 relative z-10">BYN Philosophy</h2>
                <p className="text-2xl font-light italic leading-relaxed relative z-10 text-blue-100">
                  "We Rise by Lifting Others"
                </p>
                <div className="mt-8 w-16 h-1 bg-blue-500 rounded-full relative z-10"></div>
             </div>
             <div className="lg:col-span-3 p-10 lg:p-12">
                <div className="prose prose-lg text-slate-600">
                   <p className="mb-6">
                     At BYN, we believe that true success is never built alone. It is built through people, relationships, and the willingness to support one another. Our philosophy, <strong>“We Rise by Lifting Others,”</strong> means that when you help someone grow, you grow with them.
                   </p>
                   <p className="mb-6">
                     In business, competition is everywhere—but collaboration creates something greater. When members genuinely support each other, share opportunities, and open doors for others, success multiplies. One person’s growth becomes everyone’s growth.
                   </p>
                   
                   <h4 className="text-lg font-bold text-slate-900 mb-4">Lifting others means:</h4>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                     {[
                       "Referring business without expecting immediate return",
                       "Sharing knowledge and experience",
                       "Encouraging new members",
                       "Celebrating each other’s wins",
                       "Standing together in challenges"
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                         <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>

                   <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                     <p className="font-medium text-slate-900 mb-2">That is the BYN way:</p>
                     <p className="text-blue-700 font-bold text-lg">Support first. Grow together. Rise as one.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 5. Vision Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Vision</h2>
           
           <div className="p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-100 relative">
             <div className="text-5xl font-bold text-blue-100 absolute top-4 left-4 font-serif">"</div>
             <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 relative z-10">
               Our vision is to empower <span className="text-blue-600 font-bold">1 lakh business owners</span> across the world through a powerful network of <span className="text-blue-600 font-bold">2,000 BYN chapters</span> in the next five years. We aim to build a global community where entrepreneurs create meaningful connections, grow through collaboration, and support each other’s success.
             </p>
             <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 relative z-10">
               We envision a future where business owners continuously develop their skills, use the latest technology, and gain access to the right people and opportunities. Through strong networks, smart learning, and modern tools, they don’t just grow their businesses — they scale them.
             </p>
             <p className="text-lg md:text-xl font-medium text-slate-900 relative z-10">
               Above all, our vision is to help entrepreneurs build not only successful businesses, but also confident leadership, financial freedom, and a balanced, happy life.
             </p>
           </div>
        </div>
      </Section>

      {/* 6. We Rise by Lifting Others - Callout */}
      <div className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="max-w-3xl mx-auto relative z-10 text-white space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">We Rise by Lifting Others</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-blue-100">
              At BYN, this is not just a slogan — it is the way we live and grow.<br/>
              When you support another person’s success, you create space for yourself.<br/>
              Every referral, every introduction, every helping hand builds a stronger community.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-blue-100">
              In BYN, no one grows alone. We grow by sharing, by trusting, and by standing for each other.<br/>
              When one business rises, the entire network rises with it.
            </p>
            <p className="text-2xl font-semibold text-white pt-4">
              That is the power of lifting others —<br/>
              <span className="text-blue-400">because when we lift together, we rise together.</span>
            </p>
         </div>
      </div>

      {/* 7. Core Values Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600 text-lg">The foundation of our culture and community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             {
               icon: PartyPopper,
               title: "Celebration of Effort",
               desc: "We honor every step taken and every milestone achieved. When effort is appreciated, people feel seen, motivated, and empowered to give their best. Recognition builds confidence and creates a culture where success grows naturally."
             },
             {
               icon: ShieldCheck,
               title: "Responsibility with Integrity",
               desc: "We stand by our words and actions. Taking responsibility, especially in tough times, builds trust and respect. Integrity makes relationships strong and growth reliable."
             },
             {
               icon: Link,
               title: "Creating Meaningful Connections",
               desc: "True success is built through people. By connecting with honesty and care, we create relationships that bring trust, support, and endless opportunities."
             },
             {
               icon: BookOpen,
               title: "Growth Through Learning",
               desc: "The more you learn, the more you become. Continuous learning shapes your future, strengthens your skills, and prepares you to achieve bigger goals."
             },
             {
               icon: Sprout,
               title: "Honoring Roots, Embracing Change",
               desc: "We respect our values while welcoming new ideas. By blending tradition with innovation, we move forward with strength, creativity, and confidence."
             },
             {
               icon: Sun,
               title: "Power of a Positive Mindset",
               desc: "Your mindset shapes your journey. When you choose positivity, you attract better people, brighter opportunities, and stronger results. Positive thinking leads to powerful outcomes."
             }
           ].map((val, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
               <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                 <val.icon size={28} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{val.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed text-center">{val.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* 8. CTA Section */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Start Your BYN Journey</h2>
           <p className="text-xl text-slate-600 mb-10">
             Join a network that values your growth as much as you do.
           </p>
           <Button variant="primary" onClick={openModal} className="!px-10 !py-4 !text-lg shadow-xl shadow-blue-500/20">
             Get Invited <ArrowRight className="ml-2" size={20} />
           </Button>
        </div>
      </div>
    </div>
  );
};