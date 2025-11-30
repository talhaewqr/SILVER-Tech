import React from 'react';
import { TOOLS_DATA } from '../constants';
import { Download, Shield, Cpu, Wifi, Terminal } from 'lucide-react';

const ToolsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'wifi': return <Wifi className="w-8 h-8" />;
      case 'cpu': return <Cpu className="w-8 h-8" />;
      case 'shield': return <Shield className="w-8 h-8" />;
      default: return <Terminal className="w-8 h-8" />;
    }
  };

  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-cyber-dark/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-tech font-bold text-white mb-4">
            <span className="text-cyber-green">#</span> AVAILABLE_PAYLOADS
          </h2>
          <div className="h-1 w-20 bg-cyber-green mx-auto shadow-[0_0_10px_#00ff41]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS_DATA.map((tool) => (
            <div 
              key={tool.id}
              className="group bg-cyber-gray border border-gray-800 hover:border-cyber-green p-6 rounded-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-cyber-green group-hover:scale-110 transition-transform duration-300">
                  {getIcon(tool.icon)}
                </div>
                <span className="text-xs font-mono py-1 px-2 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/30">
                  {tool.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold font-mono text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow font-mono leading-relaxed">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                <span className="text-xs text-gray-500 font-mono">v{tool.version}</span>
                <button className="flex items-center space-x-2 text-cyber-green hover:text-white transition-colors text-sm font-bold font-mono">
                  <Download size={16} />
                  <span>INIT_DOWNLOAD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;