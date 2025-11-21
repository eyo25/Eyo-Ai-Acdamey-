import React from 'react';
import { Cpu, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'tools',
    title: 'Practical AI Tutorials',
    titleAm: 'የAI ሶፍትዌር አጠቃቀም',
    description: 'Master ChatGPT, Midjourney, GitHub Copilot and more to automate your workflow.',
    descriptionAm: 'ChatGPT, Midjourney እና GitHub Copilot እንዴት በስራዎ እና በዕለት ተዕለት ሕይወትዎ መጠቀም እንደሚችሉ ይማሩ።',
    icon: 'cpu',
    color: 'text-blue-500'
  },
  {
    id: 'theory',
    title: 'Theoretical Deep Dives',
    titleAm: 'የቲዎሪ መርሆዎች ጥልቅ ትንታኔ',
    description: 'Understand the "Brain" of AI. Neural Networks, Deep Learning, and Reinforcement Learning simplified.',
    descriptionAm: 'እንደ Deep Learning እና Neural Networks ያሉ ውስብስብ የሆኑ ፅንሰ ሀሳቦችን በቀላል አቀራረብ እንመረምራለን።',
    icon: 'book',
    color: 'text-purple-500'
  },
  {
    id: 'news',
    title: 'Latest Trends & News',
    titleAm: 'የቴክኖሎጂ ዜናዎች',
    description: 'Weekly updates on global AI breakthroughs and their impact on Ethiopia and Africa.',
    descriptionAm: 'በዓለም ዙሪያ የሚወጡትን የቅርብ ጊዜ የAI ግኝቶች እና ለኢትዮጵያ ያላቸውን ፋይዳ እንገመግማለን።',
    icon: 'globe',
    color: 'text-green-500'
  }
];

const Features: React.FC = () => {
  return (
    <section id="tutorials" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative p-8 rounded-2xl glass-panel hover:bg-slate-900/80 transition-all duration-300 border border-slate-800 hover:border-red-500/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                {feature.icon === 'cpu' && <Cpu size={120} />}
                {feature.icon === 'book' && <BookOpen size={120} />}
                {feature.icon === 'globe' && <Globe size={120} />}
              </div>

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                {feature.icon === 'cpu' && <Cpu size={28} />}
                {feature.icon === 'book' && <BookOpen size={28} />}
                {feature.icon === 'globe' && <Globe size={28} />}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <h4 className="text-lg font-semibold text-slate-400 mb-4 font-serif">{feature.titleAm}</h4>
              
              <p className="text-slate-400 mb-2 text-sm leading-relaxed">
                {feature.description}
              </p>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed font-serif">
                {feature.descriptionAm}
              </p>

              <div className="flex items-center text-red-500 font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                <span>Explore</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
