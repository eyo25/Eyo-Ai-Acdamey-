import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Theory', href: '#theory' },
    { name: 'Ask Eyo AI', href: '#ask-ai' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg shadow-red-900/20 group-hover:shadow-red-500/30 transition-all duration-300">
              <span className="text-white font-bold text-xl">E</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight">EYO AI</span>
                <span className="text-slate-400 text-xs tracking-widest uppercase">Academy</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://www.youtube.com/@EyoAIAcademy" 
                target="_blank" 
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2"
              >
                <Youtube size={18} />
                <span>Subscribe</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
                href="https://www.youtube.com/@EyoAIAcademy" 
                target="_blank" 
                rel="noreferrer"
                className="text-red-400 hover:text-red-300 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              >
                <Youtube size={18} />
                Subscribe on YouTube
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
