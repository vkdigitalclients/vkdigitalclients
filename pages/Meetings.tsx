import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Plus, Minus, Play,
  TrendingUp, BookOpen, Award, GraduationCap, Eye, Repeat, Network, HeartHandshake,
  ShieldCheck, ArrowRight, UserCheck, Briefcase, Users, Lightbulb
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
      {/* SECTION 1 - ATTEND A MEETING */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden min-h-[500px] flex items-center">
        {/* U-Shape Conference Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-30 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left relative z-10 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Attend a Meeting</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            Attend a BYN Business Networking Meet near you and experience the power of real connections. Meet motivated business owners, build trusted relationships, and see how referrals create consistent growth.
          </p>
          <div>
             <Button variant="primary" className="!px-10 !py-4 !text-lg shadow-lg shadow-blue-500/20" onClick={openModal}>
               Get Invited
             </Button>
          </div>
        </div>
      </div>

      {/* SECTION 2 - HOW IT HELPS (Compact Style) */}
      <Section className="py-12 bg-white">
         <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Business Networking Helps You</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Structured networking is the most cost-effective way to scale your business.</p>
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
                { icon: Repeat, title: "Builds Consistency", desc: "Fortnightly or weekly meetings keep you active, focused, and connected to growth opportunities." },
            ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                        <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
         </div>
      </Section>

      {/* SECTION 3 - WHAT YOU GET AS VISITOR */}
      <Section colored className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Get as a Visitor at BYN</h2>
                <div className="space-y-4">
                    {[
                        { title: "Meet High-Energy Business Owners", desc: "Connect with ambitious entrepreneurs who are serious about growth." },
                        { title: "Network with 50+ Owners", desc: "Save months of networking by meeting many decision-makers at once." },
                        { title: "Pitch Your Business with Confidence", desc: "Introduce your business and attract the right connections." },
                        { title: "Gain Business Insights", desc: "Learn from industry experts and successful business owners." },
                        { title: "Understand How BYN Works", desc: "Experience our system and see how referrals are built." },
                        { title: "Explore Membership Benefits", desc: "Discover how BYN can support your long-term business growth." },
                        // Removed 7th point
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
            <div className="order-1 lg:order-2 relative h-[600px]">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
                {/* Vertical Meeting Image */}
                <img 
                    src="https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Meeting interaction" 
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
            </div>
        </div>
      </Section>

      {/* SECTION 4 - WHO CAN ATTEND (NEW) */}
      <Section className="py-12 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Can Attend?</h2>
          <p className="text-slate-600">BYN meetings are open to driven professionals looking to expand their reach.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: "Business Owners or Entrepreneurs", icon: Briefcase },
             { label: "Partners & Directors", icon: Users },
             { label: "Consultants & Professionals", icon: UserCheck },
             { label: "Key Decision Makers", icon: Lightbulb }
           ].map((item, i) => (
             <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex flex-col items-center text-center hover:bg-blue-50 hover:border-blue-200 transition-all group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-500 mb-4 shadow-sm group-hover:text-blue-600 group-hover:scale-110 transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900">{item.label}</h3>
             </div>
           ))}
        </div>
      </Section>

      {/* SECTION 5 - BYN PHILOSOPHY (Replaced Where is next meeting) */}
      <Section colored className="py-16">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">BYN Philosophy</h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
               <p>
                 At BYN, we operate on a simple yet powerful philosophy: <strong>We Rise by Lifting Others.</strong> We believe that the most effective way to grow your own business is by helping others grow theirs first. When you focus on creating value for your network—whether through referrals, knowledge, or support—that value inevitably flows back to you multiplied.
               </p>
               <p>
                 Our meetings are not just about exchanging business cards; they are about building high-trust relationships. We cultivate an environment of abundance where collaboration replaces competition. By bringing together positive, growth-minded professionals, we create a collective force that empowers every single member to achieve more than they ever could alone.
               </p>
            </div>
         </div>
      </Section>

      {/* SECTION 6 - HOW IT WORKS (Connected Steps) */}
      <Section className="py-16 bg-white">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-2">How It Works</h2>
           <h3 className="text-xl text-blue-600 font-medium">4 Simple Steps to Start Your BYN Journey</h3>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-slate-200 -z-10"></div>
            
            {[
                { step: "1", title: "Register Interest", desc: "Share your details via 'Get Invited'." },
                { step: "2", title: "Get Guided", desc: "Coordinator confirms your slot." },
                { step: "3", title: "Experience BYN", desc: "Attend & present your business." },
                { step: "4", title: "Join & Grow", desc: "Become a member & scale." }
            ].map((item, i, arr) => (
                <div key={i} className="flex flex-col items-center w-full md:w-1/4 group">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 text-blue-600 font-bold text-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-all duration-300 relative z-10">
                        {item.step}
                    </div>
                    <div className="text-center px-2">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    {/* Mobile Arrow */}
                    {i < arr.length - 1 && (
                      <div className="md:hidden mt-6 text-slate-300">
                        <ArrowRight size={24} className="rotate-90" />
                      </div>
                    )}
                </div>
            ))}
        </div>
      </Section>

      {/* SECTION 7 - RECENT MEETING MOMENTS (8 Landscape Photos) */}
      <Section colored className="py-12">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Recent Meeting Moments</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1544531696-9348411883aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Group Photo" },
              { src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Self Introductions" },
              { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Feature Presentation" },
              { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Education Slot" },
              { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Networking at Tea" },
              { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Dinner Networking" },
              { src: "https://images.unsplash.com/photo-1515169067750-d51a73b50ac8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Awards & Recognition" },
              { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", label: "Open Networking" }
            ].map((img, i) => (
               <div key={i} className="relative group overflow-hidden rounded-lg aspect-video shadow-sm">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                     <span className="text-white font-medium text-sm">{img.label}</span>
                  </div>
               </div>
            ))}
        </div>
      </Section>

      {/* SECTION 8 - HEAR FROM VISITORS (Video Testimonials) */}
      <Section className="py-12 bg-white">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Hear from Visitors</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x">
             {[
                 { thumb: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", name: "Visitor Experience 1" },
                 { thumb: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", name: "Visitor Experience 2" },
                 { thumb: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", name: "Visitor Experience 3" }
             ].map((vid, i) => (
                 <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-video bg-slate-100 rounded-xl relative group overflow-hidden cursor-pointer shadow-md snap-center flex-shrink-0">
                     <img src={vid.thumb} alt={vid.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                           <Play fill="white" className="text-white ml-1" size={32} />
                        </div>
                     </div>
                     <div className="absolute bottom-4 left-4 text-white font-bold text-shadow">{vid.name}</div>
                 </div>
             ))}
        </div>
      </Section>

      {/* SECTION 9 - FAQ (Full Width) */}
      <Section colored className="py-12">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h2>
                <p className="text-slate-500">Everything you need to know about visiting BYN.</p>
            </div>
            <div className="space-y-2">
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
      </Section>

      {/* SECTION 10 - CTA */}
      <div className="bg-blue-600 py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The BYN Meet?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                Ready to take your business to the next level?<br/>
                It all starts with a single visit/meet.
            </p>
            <Button variant="white" onClick={openModal} className="!px-12 !py-4 !text-lg !font-bold text-blue-600 hover:bg-slate-100 shadow-xl">
                Get Invited
            </Button>
          </div>
      </div>
    </div>
  );
};