import React from 'react';
import { Section } from '../components/Section';
import { Shield, Lock, Eye, Share2, Mail, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Height of sticky header
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
    { id: 'collection', label: '1. Information We Collect' },
    { id: 'usage', label: '2. Use of Your Information' },
    { id: 'disclosure', label: '3. Disclosure of Info' },
    { id: 'security', label: '4. Security' },
    { id: 'contact', label: '5. Contact Us' },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Enhanced Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-blue-500/20">
            <Shield className="text-blue-400 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
          <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-slate-700 text-sm text-slate-300">
             <span>Last Updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Table of Contents</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button 
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Intro Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
               <p className="text-lg text-slate-700 leading-relaxed">
                 At <strong>Build Your Network (BYN)</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or participate in our networking events. By accessing our services, you consent to the data practices described in this statement.
               </p>
            </div>

            {/* Section 1 */}
            <div id="collection" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-6">
                <p className="text-slate-600">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-2">Personal Data</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information that you voluntarily give to us when you register.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-2">Derivative Data</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and pages viewed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="usage" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <Eye size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">2. Use of Your Information</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <p className="mb-6 text-slate-600">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use collected information to:</p>
                <ul className="grid md:grid-cols-1 gap-3">
                  {[
                    "Coordinate networking meetings and chapter assignments.",
                    "Send you email newsletters, meeting invites, and business communications.",
                    "Facilitate business referrals between members.",
                    "Compile anonymous statistical data for internal analysis.",
                    "Prevent fraudulent transactions and monitor against theft."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div id="disclosure" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <Share2 size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">3. Disclosure of Your Information</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-slate-600 space-y-4">
                <p>We may share information we have collected about you in certain situations:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <strong className="block text-slate-900">By Law or to Protect Rights</strong>
                    <span className="text-sm">If we believe the release of information is necessary to respond to legal process, to investigate potential violations, or to protect the rights, property, and safety of others.</span>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <strong className="block text-slate-900">Business Transfers</strong>
                    <span className="text-sm">We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition.</span>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <strong className="block text-slate-900">Other Users</strong>
                    <span className="text-sm">If you interact with other users of the Site or participate in our offline meetings, other users may see your name, profile photo, and business details.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="security" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">4. Security of Your Information</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-slate-600">
                <p className="leading-relaxed">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="contact" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">5. Contact Us</h2>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-lg text-white">
                <p className="mb-6 text-slate-300">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Mailing Address</p>
                      <p className="font-medium">Hitech City, Hyderabad, Telangana, India - 500081</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email Support</p>
                      <a href="mailto:support@byn.com" className="font-medium text-blue-400 hover:text-blue-300">support@byn.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};