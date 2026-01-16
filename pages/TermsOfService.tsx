import React from 'react';
import { Section } from '../components/Section';
import { Scale, CheckCircle2, UserCheck, AlertCircle, Gavel } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'acceptance', label: '1. Acceptance of Terms' },
    { id: 'eligibility', label: '2. Membership Eligibility' },
    { id: 'ethics', label: '3. Code of Ethics' },
    { id: 'ip', label: '4. Intellectual Property' },
    { id: 'liability', label: '5. Limitation of Liability' },
    { id: 'governing', label: '6. Governing Law' },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
            <Scale className="text-white w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using our services or joining a chapter.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 py-1 text-sm text-slate-400">
             <span>Effective Date: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Sections</h3>
               <div className="flex flex-col space-y-1">
                 {sections.map(section => (
                   <button
                     key={section.id}
                     onClick={() => scrollToSection(section.id)}
                     className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all"
                   >
                     {section.label}
                   </button>
                 ))}
               </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-12">
             <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Welcome to <strong>Build Your Network (BYN)</strong>. By accessing our website or becoming a member of a BYN chapter, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Build Your Network.
                </p>
             </div>

             <div id="acceptance" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">1</span>
                   Acceptance of Terms
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                   <p>
                      By accessing the Site, you acknowledge that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                   </p>
                </div>
             </div>

             <div id="eligibility" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">2</span>
                   Membership Eligibility
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                   <p className="text-slate-600 mb-6">Membership in a BYN Chapter is conditioned upon the following criteria:</p>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "You must be at least 18 years of age.",
                        "You must represent a legitimate business or profession.",
                        "Adhere to the 'One Person Per Category' rule.",
                        "Maintain professional conduct at all times."
                      ].map((item, idx) => (
                         <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <UserCheck size={20} className="text-blue-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700 font-medium">{item}</span>
                         </div>
                      ))}
                   </div>
                   <p className="mt-6 text-sm text-slate-500 italic border-t border-slate-100 pt-4">
                     BYN reserves the right to deny or terminate membership at its sole discretion for conduct detrimental to the organization or its members.
                   </p>
                </div>
             </div>

             <div id="ethics" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">3</span>
                   Code of Ethics
                </h2>
                <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
                   <p className="text-slate-700 font-medium mb-6">All members and visitors agree to abide by the BYN Code of Ethics:</p>
                   <ul className="space-y-4">
                     {[
                       "I will provide the quality of services at the prices that I have quoted.",
                       "I will be truthful with the members and their referrals.",
                       "I will build goodwill and trust among members and their referrals.",
                       "I will take responsibility for following up on the referrals I receive.",
                       "I will display a positive and supportive attitude with BYN members."
                     ].map((item, idx) => (
                       <li key={idx} className="flex gap-4">
                         <div className="flex-shrink-0 mt-1">
                           <CheckCircle2 className="text-green-500 w-5 h-5" />
                         </div>
                         <span className="text-slate-700">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             <div id="ip" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">4</span>
                   Intellectual Property Rights
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-slate-600 leading-relaxed">
                   <p>
                     Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                   </p>
                </div>
             </div>

             <div id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">5</span>
                   Limitation of Liability
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 items-start">
                   <div className="p-3 bg-red-50 text-red-500 rounded-xl hidden sm:block">
                      <AlertCircle size={32} />
                   </div>
                   <p className="text-slate-600 leading-relaxed">
                      In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or participation in BYN meetings, even if we have been advised of the possibility of such damages.
                   </p>
                </div>
             </div>

             <div id="governing" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-sm">6</span>
                   Governing Law
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 items-center">
                   <div className="p-3 bg-slate-50 text-slate-600 rounded-xl hidden sm:block">
                      <Gavel size={32} />
                   </div>
                   <p className="text-slate-600 leading-relaxed">
                      These Terms shall be governed by and defined following the laws of <strong>India</strong>. Build Your Network and yourself irrevocably consent that the courts of <strong>Hyderabad, Telangana</strong> shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};