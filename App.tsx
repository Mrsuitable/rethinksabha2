
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-deep-blue text-brand-platinum font-sans selection:bg-brand-gold selection:text-brand-deep-blue">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <CallToActionSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
