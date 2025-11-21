import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
          <Sparkles className="text-yellow-400 w-4 h-4" />
          <span className="text-slate-300 text-sm font-medium">The #1 AI Community in Ethiopia</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Master the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
            Artificial Intelligence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Learn ChatGPT, Midjourney, and Deep Learning concepts in <span className="text-white font-semibold">Amharic & English</span>. 
          Join the Eyo AI Academy revolution.
        </p>
        
        <p className="mt-2 text-base text-slate-500 font-serif font-thin animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          በዘመናዊው የቴክኖሎጂ ዓለም ውስጥ ወደፊት ለመራመድ ይቀላቀሉ።
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#tutorials"
            className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-lg shadow-red-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Play fill="currentColor" size={20} />
            Start Learning
          </a>
          <a 
            href="#ask-ai"
            className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-lg border border-slate-700 transition-all hover:scale-105"
          >
            Ask Eyo AI
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-slate-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
