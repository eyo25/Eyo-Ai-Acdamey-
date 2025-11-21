import React from 'react';
import { Youtube, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 rounded-lg">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">EYO AI Academy</span>
          </div>

          <div className="text-slate-400 text-sm text-center md:text-left max-w-md">
            Bridging the gap between Ethiopia and the future of Technology. 
            <br className="hidden md:block"/>
            Empowering the next generation of AI Engineers.
          </div>

          <div className="flex gap-4">
            <a href="https://www.youtube.com/@EyoAIAcademy" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all">
              <Youtube size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@eyoai.com" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Eyo AI Academy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
