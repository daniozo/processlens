import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Market } from './components/Market';
import { Pricing } from './components/Pricing';
import { Projections } from './components/Projections';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Pricing />
        <Projections />
      </main>
      <Footer />
    </div>
  );
};

export default App;