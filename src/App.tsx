import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MissionValues from './components/MissionValues';
import Founders from './components/Founders';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <MissionValues />
        <Founders />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
