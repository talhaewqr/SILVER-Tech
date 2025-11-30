import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing secure connection... Access Granted. Identity Verified.";
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen flex flex-col items-center justify-center pt-16 z-10">
      <div className="text-center px-4 max-w-4xl flex flex-col items-center">
        
        {/* Profile Image Section */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-dimGreen rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-cyber-green bg-black p-1">
             <img 
               src={SITE_CONFIG.profileImage} 
               alt="Profile" 
               className="w-full h-full object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
             />
          </div>
          {/* Scanning line effect */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
            <div className="w-full h-1 bg-cyber-green/50 absolute top-0 animate-[scan_3s_linear_infinite] shadow-[0_0_10px_#00ff41]"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-tech mb-6 text-white tracking-widest uppercase">
          {SITE_CONFIG.heroTitle}
        </h1>
        
        <div className="h-16 md:h-20 flex items-center justify-center">
          <p className="text-lg md:text-2xl font-mono text-cyber-green/80">
            {'>'} {text}<span className="animate-pulse">_</span>
          </p>
        </div>

        <div className={`transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore my personal arsenal of tools, apps, and security resources.
            Everything here is for educational purposes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#tools"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-none border border-cyber-green hover:bg-cyber-green/10 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative font-mono">ACCESS_TOOLS</span>
            </a>
            
            <a 
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-black bg-cyber-green rounded-none hover:bg-white transition-all duration-300"
            >
               <span className="relative font-mono">JOIN_WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-cyber-green/50">
        <ChevronDown size={32} />
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
