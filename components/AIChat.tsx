
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, X, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; content: string }[]>([
    { role: 'bot', content: 'What\'s happening with your roof? I\'ll help assess the urgency.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are ZMAC AI. Assess roofing emergencies. 
          If serious, tell them to call (303) 882-3385. 
          Be ultra-minimalist, fast, and helpful.`
        }
      });
      setMessages(prev => [...prev, { role: 'bot', content: response.text || "Direct help: (303) 882-3385." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "Error. Call (303) 882-3385." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 bg-black text-white px-6 py-4 rounded-full shadow-2xl z-40 hover:bg-primaryAccent hover:text-black transition-all flex items-center gap-3 group"
      >
        <MessageSquare size={20} />
        <span className="text-xs font-black uppercase tracking-widest overflow-hidden max-w-0 group-hover:max-w-xs transition-all">Chat AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-10 w-80 sm:w-96 bg-white rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.1)] z-50 flex flex-col overflow-hidden border border-black/5 animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-black p-6 flex justify-between items-center">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primaryAccent rounded-full"><Bot size={16} className="text-black" /></div>
              <span className="font-black uppercase tracking-widest text-xs">ZMAC AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white"><X size={20} /></button>
          </div>

          <div ref={scrollRef} className="h-80 overflow-y-auto p-6 space-y-6 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-xs font-bold leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-black text-white rounded-tr-none' 
                  : 'bg-softGray text-black rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[10px] font-black animate-pulse uppercase tracking-widest">Processing...</div>}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-4 bg-white border-t border-black/5 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ASK ANYTHING..."
              className="flex-1 bg-softGray rounded-xl px-4 py-3 text-xs font-bold focus:ring-2 focus:ring-black outline-none"
            />
            <button type="submit" className="bg-black text-primaryAccent p-3 rounded-xl hover:scale-105 transition-transform"><Send size={16} /></button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;
