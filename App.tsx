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
          </Route>
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
};

export default App;