import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Users, TrendingUp, Globe, Lock, Calendar, Gift, Smartphone, 
  Medal, PartyPopper, ShieldCheck, Link, BookOpen, 
  Sprout, Sun, Languages, CheckCircle2
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const AboutUs: React.FC = () => {
  const { openModal } = useModal();
  
  return (
    <div className="flex flex-col">
      
      {/* SECTION 1 - THE POWER OF REFERRALS */}
      <Section className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-full min-h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Power of Referrals" 
               className="rounded-2xl shadow-xl w-full h-full object-cover"
             />
          </div>
          <div className="flex flex-col justify-center h-full">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
               The Power of Referrals<br/>
               to Transform Your Business
             </h1>
             <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
               <p>Referrals are not just leads — they come with trust already built in.</p>
               <p>People buy faster and stay longer when they are recommended by someone they trust.</p>
               <p>Referrals shorten the sales cycle and increase conversion rates.</p>
               <p>In a strong network, every referral is meaningful and intentional.</p>
               <p className="font-semibold text-blue-700">That’s why referrals don’t just grow your business — they transform it.</p>
             </div>
             <div className="flex justify-end">
               <Button variant="primary" onClick={openModal} className="!px-8 !py-3 !text-lg shadow-lg shadow-blue-500/20">
                 Get Invited
               </Button>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 2 - OUR MISSION */}
      <Section colored className="py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 space-y-6">
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
          
          <div className="relative order-2 h-full min-h-[300px]">
             <img 
               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
               alt="Our Mission" 
               className="rounded-2xl shadow-2xl w-full h-full object-cover"
             />
          </div>
        </div>
      </Section>

      {/* SECTION 3 - WHY BYN */}
      <Section className="py-12 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Should You Join BYN?</h2>
          <p className="text-slate-600 text-lg">Unlock the potential of your business with these exclusive benefits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all duration-300">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0 mt-1">
                 <item.icon size={20} />
               </div>
               <div>
                   <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 4 - BYN PHILOSOPHY */}
      <Section colored className="py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
             <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mb-16 -mr-16"></div>
                <h2 className="text-4xl font-bold mb-6 relative z-10 leading-tight">We Rise<br/>By Lifting Others</h2>
                <div className="mt-8 w-16 h-1 bg-blue-500 rounded-full relative z-10"></div>
             </div>
             <div className="lg:col-span-3 p-10 lg:p-12">
                <div className="prose prose-lg text-slate-600">
                   <p className="mb-6">
                     At BYN, we believe that true success is never built alone. It is built through people, relationships, and the willingness to support one another. Our philosophy, <strong>“We Rise by Lifting Others,”</strong> means that when you help someone grow, you grow with them.
                   </p>
                   
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-0">
                     {[
                       "Referring Business to the Members",
                       "Sharing knowledge and experience",
                       "Encouraging new members",
                       "Celebrating each other’s wins",
                       "Standing together in challenges",
                       "Collaborating for Mutual Benefits"
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                         <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* SECTION 5 - WE RISE BY LIFTING OTHERS (VISUAL) */}
      <div className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-30 bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/80"></div>
         
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
         </div>
      </div>

      {/* SECTION 6 - MEET OUR FOUNDER */}
      <Section className="py-16 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Our Founder</h2>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Prasad T</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-4">
                      A visionary leader with a passion for connecting people, Prasad established BYN with a single goal: to make business networking effective, transparent, and results-driven.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      With over a decade of experience in business development and community building, he understands that the true capital of any business is its network. His vision drives BYN to be more than just a platform—it's a growth engine for entrepreneurs.
                  </p>
              </div>
              <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2"></div>
                  <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                      alt="Founder" 
                      className="relative rounded-2xl shadow-xl w-full h-full object-cover aspect-[4/5]"
                  />
              </div>
          </div>
      </Section>

      {/* SECTION 7 - VISION 2030 */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vision 2030</h2>
                  <p className="text-xl text-blue-100 leading-relaxed mb-6">
                      Founder’s Vision is to empower <strong>1 lakh business owners</strong> across the world through a powerful network of <strong>2,000 BYN chapters</strong>. We aim to build a global community where entrepreneurs create meaningful connections, grow through collaboration, and support each other’s success.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                      We envision a future where business owners continuously develop their skills, use the latest technology, and gain access to the right people and opportunities. Through strong networks, smart learning, and modern tools, they don’t just grow their businesses — they scale them.
                  </p>
              </div>
          </div>
      </div>

      {/* SECTION 8 - OUR CORE VALUES */}
      <Section className="py-12 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600 text-lg">The foundation of our culture and community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             {
               icon: PartyPopper,
               title: "Celebration of Effort",
               desc: "We honor every step taken and every milestone achieved."
             },
             {
               icon: ShieldCheck,
               title: "Responsibility with Integrity",
               desc: "We stand by our words and actions. Integrity makes relationships strong."
             },
             {
               icon: Link,
               title: "Creating Meaningful Connections",
               desc: "True success is built through people connecting with honesty and care."
             },
             {
               icon: BookOpen,
               title: "Growth Through Learning",
               desc: "Continuous learning shapes your future and strengthens your skills."
             },
             {
               icon: Sprout,
               title: "Honoring Roots, Embracing Change",
               desc: "We respect our values while welcoming new ideas and innovation."
             },
             {
               icon: Sun,
               title: "Power of a Positive Mindset",
               desc: "Choose positivity to attract better people and brighter opportunities."
             }
           ].map((val, i) => (
             <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300">
               <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm">
                     <val.icon size={20} />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* SECTION 9 - START YOUR BYN JOURNEY (3 STEPS) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your BYN Journey</h2>
             <p className="text-lg text-blue-100 max-w-3xl mx-auto">
               Get invited to a BYN Business Networking Meet and Witness the Power of Referrals in Action
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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

    </div>
  );
};