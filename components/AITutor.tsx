import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Hello! I am Eyo AI. Ask me anything about Artificial Intelligence, Coding, or our recent tutorials! \n\nሰላም! እኔ Eyo AI ነኝ። ስለ አርቴፊሻል ኢንተለጀንስ፣ ኮዲንግ ወይም ስለ ትምህርቶቻችን ማንኛውንም ጥያቄ መጠየቅ ትችላለህ።',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || status === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setStatus(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMsg]);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Sorry, I'm having trouble connecting to the AI brain right now. Please try again later. \n\nይቅርታ፣ አሁን ከAI ጋር መገናኘት አልቻልኩም። እባክዎ ትንሽ ቆይተው ይሞክሩ።",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
      setStatus(LoadingState.ERROR);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ask-ai" className="py-24 bg-slate-900 relative">
       {/* Decorative Background */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Text Side */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-red-600/10 border border-red-600/20">
                <Sparkles className="text-red-500" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Ask Eyo AI</h2>
            </div>
            <p className="text-slate-400 mb-6">
              Stuck on a concept? Want to know how to start with Python or Midjourney?
              Our custom trained AI assistant is here to help you in Amharic and English.
            </p>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <h4 className="text-white font-semibold mb-2">Try asking:</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="cursor-pointer hover:text-red-400 transition-colors" onClick={() => setInputValue("What is Deep Learning?")}>• What is Deep Learning?</li>
                <li className="cursor-pointer hover:text-red-400 transition-colors" onClick={() => setInputValue("Explain ChatGPT in Amharic")}>• Explain ChatGPT in Amharic</li>
                <li className="cursor-pointer hover:text-red-400 transition-colors" onClick={() => setInputValue("How do I start coding?")}>• How do I start coding?</li>
              </ul>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="w-full md:w-2/3 h-[600px] glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/50 border border-slate-800">
            {/* Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-slate-300 font-medium text-sm">Eyo AI (Powered by Gemini)</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-red-600'}`}>
                      {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'bg-slate-700 text-white rounded-tr-none' 
                        : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {status === LoadingState.LOADING && (
                <div className="flex justify-start">
                   <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-red-600">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex items-center gap-2">
                       <Loader2 size={16} className="animate-spin text-red-500" />
                       <span className="text-slate-400 text-xs">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900/50 border-t border-slate-800">
              <div className="relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here... (English or Amharic)"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-4 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none h-14"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || status === LoadingState.LOADING}
                  className="absolute right-2 top-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITutor;
