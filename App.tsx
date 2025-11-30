import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import TerminalChat from './components/TerminalChat';
import Socials from './components/Socials';
import MatrixRain from './components/MatrixRain';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-cyber-text relative overflow-x-hidden selection:bg-cyber-green selection:text-black">
      
      {/* Background Effect */}
      <MatrixRain />
      
      {/* Overlay to ensure text readability over canvas */}
      <div className="fixed inset-0 bg-gradient-to-b from-cyber-black/80 via-cyber-black/60 to-cyber-black/90 pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        <div className="relative">
            {/* Separator Line */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent"></div>
            <ToolsGrid />
        </div>

        <div className="relative">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent"></div>
            <TerminalChat />
        </div>

        <div className="relative">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent"></div>
            <Socials />
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href={SITE_CONFIG.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-full shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all hover:scale-105 border border-green-400 group"
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span className="font-mono font-bold hidden group-hover:block transition-all duration-300">
          JOIN CHANNEL
        </span>
      </a>

      <footer className="relative z-10 bg-cyber-black border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-mono text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.siteName}. All systems operational.
          </p>
          <p className="text-xs text-gray-700 mt-2 font-mono">
            DISCLAIMER: All tools provided are for educational and authorized testing purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
