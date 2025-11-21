import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AITutor from './components/AITutor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-red-500/30 selection:text-red-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AITutor />
      </main>
      <Footer />
    </div>
  );
};

export default App;
