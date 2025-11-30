import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const TerminalChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: 'GhostShell v1.0.3 initialized. Awaiting queries regarding security protocols.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(history, userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Error: Link unstable. Retry.',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="terminal" className="py-16 px-4 relative z-10 flex justify-center">
      <div className={`w-full max-w-4xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'} border border-cyber-green/40 bg-black/90 rounded-sm shadow-[0_0_30px_rgba(0,255,65,0.1)] overflow-hidden flex flex-col`}>
        
        {/* Terminal Header */}
        <div className="bg-cyber-gray border-b border-cyber-green/20 p-2 flex items-center justify-between select-none">
          <div className="flex items-center space-x-2 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="ml-4 font-mono text-xs text-cyber-green/70">root@cyberforge:~# ./ghost_shell</span>
          </div>
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white p-1"
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
        </div>

        {/* Chat Area */}
        {!isMinimized && (
          <>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-sm ${
                    msg.role === 'user' 
                      ? 'bg-cyber-green/10 border border-cyber-green/30 text-cyber-text' 
                      : 'bg-transparent text-cyber-green'
                  }`}>
                    <span className="block text-[10px] opacity-50 mb-1">
                      {msg.role === 'user' ? 'YOU' : 'GHOST_SHELL'} :: {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-transparent p-3 text-cyber-green flex items-center space-x-2">
                     <Loader2 className="animate-spin w-4 h-4" />
                     <span>Processing data stream...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-cyber-gray border-t border-cyber-green/20">
              <div className="flex items-center space-x-2 bg-black border border-gray-700 rounded-sm px-3 py-2 focus-within:border-cyber-green transition-colors">
                <span className="text-cyber-green font-bold">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter command or query..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600 text-sm"
                  autoComplete="off"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="text-cyber-green hover:text-white disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TerminalChat;