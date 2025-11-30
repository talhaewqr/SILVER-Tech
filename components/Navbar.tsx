import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cyber-black/90 border-b border-cyber-green/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-cyber-green animate-pulse-fast" />
            <span className="ml-2 text-xl font-bold font-tech tracking-wider text-white uppercase">
              {SITE_CONFIG.siteName}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-cyber-green text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono">/home</a>
              <a href="#tools" className="hover:text-cyber-green text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono">/tools</a>
              <a href="#terminal" className="hover:text-cyber-green text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono">/terminal</a>
              <a href="#socials" className="hover:text-cyber-green text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono">/connect</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyber-green hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-dark border-b border-cyber-green/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium font-mono">/home</a>
            <a href="#tools" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium font-mono">/tools</a>
            <a href="#terminal" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium font-mono">/terminal</a>
            <a href="#socials" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium font-mono">/connect</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
