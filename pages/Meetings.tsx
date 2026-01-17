import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Calendar, MapPin, ShieldCheck,
  TrendingUp, BookOpen, Award, GraduationCap, Eye, Repeat, Network, HeartHandshake,
  Camera, Plus, Minus
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

// Minimalist FAQ Item Component
const FaqItem: React.FC<FaqItemProps> = ({ 
  question, 
  answer, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={toggle}
      >
        <span className={`font-bold text-lg transition-colors duration-200 ${isOpen ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-400'}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed text-base pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const Meetings: React.FC = () => {
  const { openModal } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Do I need to be a member to attend a meeting?", 
      a: "No, you can attend up to 2 meetings as a visitor to experience the BYN culture and see if it's a right fit for your business before deciding to join." 
    },
    { 
      q: "Is there a fee to attend as a visitor?", 
      a: "Yes, there is a nominal meeting fee which covers the venue and breakfast charges. This varies slightly by chapter and location." 
    },
    { 
      q: "What should I bring to the meeting?", 
      a: "Bring plenty of business cards (at least 50), a positive attitude, and a 60-second pitch about who you are and what business you are looking for." 
    },
    { 
      q: "How long does a meeting last?", 
      a: "Meetings typically last for 90 minutes to 2 hours, usually starting early morning (e.g., 7:30 AM or 8:00 AM) to not interfere with your regular business day." 
    },
    { 
      q: "Can I visit any chapter?", 
      a: "Yes, you can visit any chapter, provided your business category is not already represented by an existing member in that specific chapter (Category Exclusivity)." 
    }
  ];
  
  return (
    <div className="flex flex-col">
      {/* Hero Section - Matching About Us Style */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6 backdrop-blur-sm">
             <Calendar size={14} /> Next Meeting: Check your local chapter
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Attend a Meeting</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Attend a BYN Business Networking Meet near you and experience the power of real connections. Meet motivated business owners, build trusted relationships, and see how referrals create consistent growth.
          </p>
          <div className="mt-10">
             <Button variant="primary" className="!px-8 !py-4 !text-lg shadow-lg shadow-blue-500/20" onClick={openModal}>
               Find a Meeting Near You
             </Button>
          </div>
        </div>
      </div>

      {/* How it Helps Business Owners */}
      <Section>
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How a Business Networking Platform Helps Business Owners</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Structured networking is the most cost-effective way to scale your business.</p>
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
                { icon: Repeat, title: "Builds Consistency", desc: "Fortnightly or weekly meetings keep you active, focused, and connected to growth opportunities." },
            ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <item.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
         </div>
      </Section>

      {/* What You Get as Visitor */}
      <Section colored>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Get as a Visitor at BYN</h2>
                <div className="space-y-6">
                    {[
                        { title: "Meet High-Energy Business Owners", desc: "Connect with ambitious entrepreneurs who are serious about growth." },
                        { title: "Network with 50+ Owners", desc: "Save months of networking by meeting many decision-makers at once." },
                        { title: "Pitch Your Business with Confidence", desc: "Introduce your business and attract the right connections." },
                        { title: "Gain Business Insights", desc: "Learn from industry experts and successful business owners." },
                        { title: "Understand How BYN Works", desc: "Experience our system and see how referrals are built." },
                        { title: "Explore Membership Benefits", desc: "Discover how BYN can support your long-term business growth." },
                        { title: "Build First-Level Trust", desc: "Start real conversations that lead to real opportunities." },
                        { title: "Complimentary Business Breakfast", desc: "Network comfortably while enjoying a quality breakfast experience." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                             <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <ShieldCheck size={14} />
                                </div>
                             </div>
                             <div>
                                 <h4 className="font-bold text-slate-900">{item.title}</h4>
                                 <p className="text-slate-600 text-sm">{item.desc}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="order-1 lg:order-2 relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Meeting interaction" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
            </div>
        </div>
      </Section>

      {/* Where is next meeting */}
      <Section>
         <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <MapPin className="mx-auto text-blue-400" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold">Where Is the Next Meeting?</h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                   BYN hosts business networking meets regularly at reputed hotels and premium venues, always in locations that are easy and convenient for you to reach.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left border border-white/10">
                    <p className="font-bold text-lg mb-4 text-white">To attend as a visitor:</p>
                    <ol className="space-y-4">
                        <li className="flex gap-4 items-start">
                             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-sm">1</span>
                             <p className="text-slate-200 mt-1">Simply click on the <strong className="text-white">"Get Invited"</strong> button and share your basic details.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-sm">2</span>
                             <p className="text-slate-200 mt-1">Our BYN team will personally contact you, guide you to the nearest chapter.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                             <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-sm">3</span>
                             <p className="text-slate-200 mt-1">We share the exact venue, date, and time of your upcoming meeting—so you can walk in confident.</p>
                        </li>
                    </ol>
                </div>

                <div className="pt-4">
                    <Button variant="white" onClick={openModal} className="!px-8 !py-3">Get Invited Now</Button>
                </div>
            </div>
         </div>
      </Section>

      {/* How It Works Steps */}
      <Section colored>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
           <p className="text-slate-600 mt-4">Your simple 4-step journey to joining the network.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
            {[
                { step: "01", title: "Register Your Interest", desc: "Share your details through our “Get Invited” form." },
                { step: "02", title: "Get Personal Guidance", desc: "Our chapter coordinator connects with you and confirms when and where to attend." },
                { step: "03", title: "Experience BYN", desc: "Attend the meeting, present your business, and build real connections." },
                { step: "04", title: "Become Part of BYN", desc: "If the experience excites you, talk to our leadership team and join as a BYN member." }
            ].map((item, i) => (
                <div key={i} className="text-center group bg-slate-50 p-4">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 text-blue-600 font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300 relative z-10">
                        {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* Recent Meeting Photos */}
      <Section>
        <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Recent Meeting Moments</h2>
            <div className="hidden md:flex items-center gap-2 text-blue-600 font-medium">
                <Camera size={20} /> Captured at our chapters
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1544531696-9348411883aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Networking Breakfast" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold">Networking Breakfast</p>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-48 md:h-64">
                 <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Group Discussion" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-48 md:h-64">
                 <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team Building" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-48 md:h-64">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Business Pitch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl h-48 md:h-64">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Connection" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
        </div>
      </Section>

      {/* Hear from Visitors */}
      <Section colored>
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Hear from Visitors</h2>
            <p className="text-slate-600 mt-2">Real experiences from first-time attendees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
                 { name: "Priya Sharma", role: "Graphic Designer", quote: "I was nervous at first, but the welcome was so warm. I actually got a lead on my very first visit!" },
                 { name: "David Chen", role: "Software Consultant", quote: "The structure is impressive. It's not just chatting; it's focused business. I joined immediately." },
                 { name: "Sarah Jenkins", role: "Event Planner", quote: "The energy in the room at 7 AM is unmatched. It sets a positive tone for the entire week." }
             ].map((t, i) => (
                 <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative hover:shadow-md transition-all">
                     <div className="text-6xl text-blue-100 font-serif absolute top-4 left-6">"</div>
                     <p className="text-slate-700 italic relative z-10 mb-6 leading-relaxed pt-6">{t.quote}</p>
                     <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                         <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                             {t.name[0]}
                         </div>
                         <div>
                             <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                             <p className="text-slate-500 text-xs">{t.role}</p>
                         </div>
                     </div>
                 </div>
             ))}
        </div>
      </Section>

      {/* Modern FAQ Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Questions */}
            <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-3">Frequently Asked <span className="text-blue-600">Questions</span></h2>
                <p className="text-slate-500 mb-10 text-lg">Quick answers to questions you may have.</p>
                
                {/* FAQ List */}
                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            question={faq.q} 
                            answer={faq.a} 
                            isOpen={openFaqIndex === index}
                            toggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side: Image Only */}
            <div className="hidden lg:flex justify-center items-center">
                 <img 
                    src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5215.jpg" 
                    alt="FAQ Illustration" 
                    className="w-full max-w-lg object-contain"
                 />
            </div>
        </div>
      </Section>

      {/* Start Journey CTA */}
      <div className="bg-blue-600 py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your BYN Journey</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Ready to take your business to the next level? It all starts with a single visit.
            </p>
            <Button variant="white" onClick={openModal} className="!px-10 !py-4 !text-lg text-blue-600 hover:bg-slate-100 shadow-xl">
                Request Your Invitation
            </Button>
          </div>
      </div>
    </div>
  );
};