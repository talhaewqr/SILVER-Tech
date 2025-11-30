import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Socials: React.FC = () => {
  return (
    <section id="socials" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-tech font-bold text-white">
              JOIN THE <span className="text-cyber-green">NETWORK</span>
            </h2>
            <p className="text-gray-400 font-mono">
              Stay updated with the latest vulnerabilities, tutorials, and tool releases. 
              Our community is active and growing. Verify your access.
            </p>
            
            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-cyber-gray border border-gray-800 hover:border-cyber-green hover:bg-cyber-green/5 transition-all duration-300 group rounded-sm"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-gray-400 group-hover:text-cyber-green transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-mono group-hover:text-cyber-green transition-colors">{link.platform}</h3>
                      <p className="text-xs text-gray-500 font-mono">{link.username}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-cyber-green transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-cyber-gray border border-gray-800 p-1 rounded-sm shadow-[0_0_30px_rgba(0,255,65,0.05)]">
            {/* Placeholder for a YouTube video embed or channel trailer */}
            <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/800/450?grayscale')] bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity"></div>
               <div className="relative z-10 text-center p-6">
                 <h3 className="text-2xl font-tech text-white mb-2">LATEST BRIEFING</h3>
                 <p className="text-cyber-green font-mono text-sm mb-4">Target: System Hardening</p>
                 <a href="#" className="inline-block border border-cyber-green text-cyber-green px-6 py-2 font-mono text-sm hover:bg-cyber-green hover:text-black transition-colors">
                   WATCH_NOW
                 </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Socials;