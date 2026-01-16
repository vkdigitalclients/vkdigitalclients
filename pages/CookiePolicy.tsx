import React from 'react';
import { Section } from '../components/Section';
import { Cookie, Settings, BarChart3, Megaphone, Info } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
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

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-amber-500/20">
            <Cookie className="text-amber-400 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Cookie Policy</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Transparency about how we use cookies to improve your experience.
          </p>
          <div className="mt-8 text-sm text-slate-400">
             Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
             <div className="sticky top-28 space-y-2">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">On this page</h3>
               <nav className="flex flex-col space-y-1">
                 {[
                   { id: 'what-are-cookies', label: '1. What are cookies?' },
                   { id: 'why-use', label: '2. Why do we use them?' },
                   { id: 'types', label: '3. Types of Cookies' },
                   { id: 'control', label: '4. Your Controls' },
                   { id: 'updates', label: '5. Updates' }
                 ].map(item => (
                   <button 
                     key={item.id}
                     onClick={() => scrollToSection(item.id)}
                     className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all"
                   >
                     {item.label}
                   </button>
                 ))}
               </nav>
             </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-12">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
               <div className="mt-1 flex-shrink-0">
                  <Info className="text-blue-500" size={24} />
               </div>
               <p className="text-lg text-slate-700 leading-relaxed">
                  This Cookie Policy explains how Build Your Network ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
               </p>
            </div>

            <div id="what-are-cookies" className="scroll-mt-28">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What are cookies?</h2>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-slate-600 leading-relaxed">
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. 
                  </p>
                  <p className="mt-4">
                    Cookies set by the website owner (in this case, Build Your Network) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies".
                  </p>
               </div>
            </div>

            <div id="why-use" className="scroll-mt-28">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Why do we use cookies?</h2>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-slate-600 leading-relaxed">
                  <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.</p>
               </div>
            </div>

            <div id="types" className="scroll-mt-28">
               <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Types of Cookies We Use</h2>
               <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-blue-500 border-x border-b border-slate-100">
                     <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                        <Settings size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">Essential Cookies</h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                       Strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                     </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-green-500 border-x border-b border-slate-100">
                     <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                        <BarChart3 size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">Analytics Cookies</h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                       Collect information that is used in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                     </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-purple-500 border-x border-b border-slate-100 md:col-span-2">
                     <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                        <Megaphone size={24} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">Advertising Cookies</h3>
                     <p className="text-sm text-slate-600 leading-relaxed">
                       Used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and selecting advertisements based on your interests.
                     </p>
                  </div>
               </div>
            </div>

            <div id="control" className="scroll-mt-28">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How can I control cookies?</h2>
               <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
                  <p className="text-slate-700 mb-4">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your browser preferences.
                  </p>
                  <p className="text-slate-700">
                    You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features or services may not function properly without cookies.
                  </p>
               </div>
            </div>

            <div id="updates" className="scroll-mt-28">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Updates to this Policy</h2>
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-slate-600">
                  <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
               </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};