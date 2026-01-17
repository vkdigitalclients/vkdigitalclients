import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { 
  Plus, Minus, Search, MessageCircle, Mail, 
  HelpCircle, Users, CreditCard, Calendar, Share2, ArrowRight,
  ShieldCheck, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-xl mb-4 transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white border-blue-200 shadow-md' : 'bg-white border-slate-200 hover:border-blue-300'}`}>
      <button 
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
             {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
           <div className="h-px w-full bg-slate-100 mb-4"></div>
           {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Questions', icon: HelpCircle },
    { id: 'Membership', label: 'Membership', icon: Users },
    { id: 'Meetings', label: 'Meetings & Attendance', icon: Calendar },
    { id: 'Fees', label: 'Fees & Payments', icon: CreditCard },
    { id: 'Referrals', label: 'Referrals & Business', icon: Share2 },
    { id: 'Tech', label: 'App & Technology', icon: Smartphone }
  ];

  const allQuestions = [
    // General
    {
      category: "Membership",
      q: "What are the benefits of joining BYN?",
      a: "BYN offers a structured platform to grow your business through referrals. Benefits include category exclusivity (locking out competition), access to a network of vetted professionals, regular training workshops, and a supportive community dedicated to your growth."
    },
    {
      category: "Membership",
      q: "Can I join if my business category is already taken?",
      a: "No. One of BYN's core strengths is Category Exclusivity. If your specific business category is already represented in a chapter, you cannot join that specific chapter. However, we can help you find another nearby chapter where your category is open, or help you start a new chapter."
    },
    {
      category: "Membership",
      q: "How long is the membership valid?",
      a: "Membership is valid for one year (12 months) from the date of activation. Renewals are subject to the approval of the chapter's Membership Committee based on performance and participation."
    },
    
    // Meetings
    {
      category: "Meetings",
      q: "What is the attendance policy?",
      a: "Consistency is key to trust. Members are expected to attend all weekly meetings. If you cannot attend, you must send a substitute to represent your business. Frequent absences without substitutes may impact your membership status."
    },
    {
      category: "Meetings",
      q: "Can I bring visitors to the meeting?",
      a: "Absolutely! Bringing visitors is highly encouraged. It adds value to the network and expands business opportunities for everyone. Visitors can attend up to 2 meetings before deciding to join."
    },
    {
      category: "Meetings",
      q: "What happens during a meeting?",
      a: "A typical meeting includes open networking, a 60-second introduction by each member, a feature presentation by one member, education slots, and the passing of referrals. Meetings are structured to respect your time and maximize business outcomes."
    },

    // Fees
    {
      category: "Fees",
      q: "Are meeting fees included in the membership?",
      a: "No. The annual membership fee covers administration, technology (app), training, and support. The meeting fee is separate and is paid directly to the chapter to cover the cost of the venue and breakfast/high-tea."
    },
    {
      category: "Fees",
      q: "Is the membership fee refundable?",
      a: "The membership fee is non-refundable and non-transferable. We encourage you to visit a chapter as a guest first to ensure BYN is the right fit for your business."
    },

    // Referrals
    {
      category: "Referrals",
      q: "Is there a minimum number of referrals I need to give?",
      a: "While there is no strict 'quota', the culture of BYN is 'Givers Gain'. Active participation in passing referrals ensures you receive referrals in return. The Membership Committee reviews contribution levels periodically."
    },
    {
      category: "Referrals",
      q: "How do I track the business I receive?",
      a: "BYN provides a mobile app where you can log referrals given and received, track the status of leads, and record the value of business generated (Thank You For Closed Business)."
    },

    // Tech
    {
      category: "Tech",
      q: "How do I access the BYN Mobile App?",
      a: "Once your membership is approved, you will receive login credentials via email. You can download the BYN app from the Google Play Store or Apple App Store and log in to manage your profile and referrals."
    },
    {
      category: "Tech",
      q: "Can I update my business profile on the website?",
      a: "Yes, members can update their profile, business description, and contact details through the member portal or mobile app. These changes reflect in the public directory."
    }
  ];

  const filteredData = allQuestions.filter(item => {
    const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) || item.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Hero Search Section */}
      <div className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
           <p className="text-xl text-slate-300 mb-10">Search our knowledge base or browse categories below.</p>
           
           <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-5 rounded-2xl border-0 ring-1 ring-slate-700 bg-slate-800/80 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 shadow-xl backdrop-blur-sm text-lg transition-all"
                placeholder="Ask a question (e.g., membership fees, attendance...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
        </div>
      </div>

      <Section className="-mt-20 pt-0 relative z-20">
         <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Navigation (Desktop) / Horizontal Chips (Mobile) */}
            <div className="lg:col-span-3 lg:sticky lg:top-24">
               <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 lg:p-4 flex lg:flex-col overflow-x-auto gap-2 hide-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal ${
                        activeCategory === cat.id 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                    >
                      <cat.icon size={20} className={activeCategory === cat.id ? 'text-white' : 'text-slate-400'} />
                      <span className="font-medium text-sm md:text-base">{cat.label}</span>
                    </button>
                  ))}
               </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-8">
               {/* Category Title */}
               <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">{activeCategory === 'All' ? 'All Questions' : activeCategory}</h2>
                  <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {filteredData.length} results
                  </span>
               </div>

               {/* Questions List */}
               <div className="space-y-2">
                 {filteredData.length > 0 ? (
                   filteredData.map((item, index) => (
                     <FaqItem key={index} question={item.q} answer={item.a} />
                   ))
                 ) : (
                   <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                        <HelpCircle size={32} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">No results found</h3>
                      <p className="text-slate-500">Try adjusting your search terms or browse categories.</p>
                      <Button variant="outline" className="mt-6" onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>
                        Clear Search
                      </Button>
                   </div>
                 )}
               </div>

               {/* Still need help CTA */}
               <div className="mt-12 bg-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                  {/* Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                           <MessageCircle size={24} />
                        </div>
                        <span className="font-bold tracking-wide uppercase text-blue-100 text-sm">Support</span>
                     </div>
                     <h3 className="text-3xl font-bold mb-2">Still have questions?</h3>
                     <p className="text-blue-100 max-w-md">
                        Can't find the answer you're looking for? Our team is here to help you.
                     </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
                     <Button variant="white" onClick={() => navigate('/contact')} className="shadow-lg whitespace-nowrap">
                        Contact Support
                     </Button>
                     <Button 
                        variant="outline" 
                        onClick={() => window.location.href = 'mailto:support@byn.com'}
                        className="text-white border-white hover:bg-white/10 whitespace-nowrap"
                     >
                        <Mail className="mr-2" size={18} /> Email Us
                     </Button>
                  </div>
               </div>

            </div>
         </div>
      </Section>
    </div>
  );
};