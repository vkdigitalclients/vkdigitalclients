import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Meetings } from './pages/Meetings';
import { FindChapter } from './pages/FindChapter';
import { AboutUs } from './pages/AboutUs';
import { Sponsorships } from './pages/Sponsorships';
import { Feedbacks } from './pages/Feedbacks';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { Membership } from './pages/Membership';
import { FAQ } from './pages/FAQ';
import { Careers } from './pages/Careers';
import { BYNFoundation } from './pages/BYNFoundation';
import { StartChapter } from './pages/StartChapter';
import { Events } from './pages/Events';
import { NetworkingTips } from './pages/NetworkingTips';
import { ModalProvider } from './context/ModalContext';
import { GetInvitedModal } from './components/GetInvitedModal';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <GetInvitedModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ModalProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="sponsorships" element={<Sponsorships />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="contact" element={<Contact />} />
            <Route path="find-chapter" element={<FindChapter />} />
            
            {/* New Pages */}
            <Route path="membership" element={<Membership />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="careers" element={<Careers />} />
            <Route path="byn-foundation" element={<BYNFoundation />} />
            <Route path="start-chapter" element={<StartChapter />} />
            <Route path="events" element={<Events />} />
            <Route path="networking-tips" element={<NetworkingTips />} />
            
            {/* Legal Pages */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
          </Route>
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
};

export default App;