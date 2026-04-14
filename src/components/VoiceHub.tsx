import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  X, 
  Activity, 
  Volume2, 
  Sparkles, 
  Loader2,
  MessageSquare,
  History,
  Settings
} from 'lucide-react';
import { getVoiceAssistantResponse } from '@/src/services/geminiService';
import { cn } from '@/src/lib/utils';
import ReactMarkdown from 'react-markdown';

interface VoiceHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceHub({ isOpen, onClose }: VoiceHubProps) {
  const [isListening, setIsListening] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [response, setResponse] = React.useState<string | null>(null);
  const [history, setHistory] = React.useState<{q: string, a: string}[]>([]);

  const handleListen = () => {
    setIsListening(true);
    // Simulate voice recording
    setTimeout(() => {
      setIsListening(false);
      setQuery("What's the best organic fertilizer for cotton in the monsoon season?");
    }, 2000);
  };

  const handleSend = async () => {
    if (!query) return;
    setIsProcessing(true);
    setResponse(null);
    
    try {
      const res = await getVoiceAssistantResponse(query);
      setResponse(res);
      setHistory(prev => [{ q: query, a: res }, ...prev]);
    } catch (error) {
      console.error(error);
      setResponse("I'm sorry, I couldn't process that. Please try again.");
    } finally {
      setIsProcessing(false);
      setQuery('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={onClose} />
          
          {/* Hub Container */}
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-surface rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh] max-h-[800px] border border-outline"
          >
            {/* Left Sidebar (History & Settings) */}
            <div className="hidden md:flex w-64 bg-surface-container-low border-r border-outline flex-col p-6">
              <div className="flex items-center gap-2 text-primary font-bold mb-8 uppercase tracking-widest text-xs">
                <Sparkles className="w-5 h-5" />
                <span>Voice Hub</span>
              </div>
              
              <div className="flex-1 space-y-6 overflow-y-auto no-scrollbar">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                    <History className="w-3 h-3" />
                    Recent Queries
                  </h4>
                  <div className="space-y-2">
                    {history.length > 0 ? history.map((h, i) => (
                      <button key={i} className="w-full text-left p-3 rounded-xl hover:bg-surface-container-lowest transition-colors text-xs font-medium truncate text-on-surface-variant">
                        {h.q}
                      </button>
                    )) : (
                      <p className="text-[10px] text-on-surface-variant italic px-3">No history yet</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-outline">
                <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                  <Settings className="w-4 h-4" />
                  Voice Settings
                </button>
              </div>
            </div>

            {/* Main Interaction Area */}
            <div className="flex-1 flex flex-col relative bg-surface-container-lowest">
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b border-outline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-serif italic text-primary">Shakti Assistant</h3>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Online • Multilingual</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Conversation Area */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
                {!response && !isProcessing && !query && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
                    <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center text-primary">
                      <MessageSquare className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-serif italic text-primary">How can I help you today?</h4>
                      <p className="text-sm max-w-xs mt-2 text-on-surface-variant">Ask about crop diseases, market prices, or weather forecasts in your local dialect.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['Best fertilizer for wheat?', 'Current price of onions?', 'Weather for tomorrow?'].map(q => (
                        <button key={q} onClick={() => setQuery(q)} className="px-4 py-2 bg-surface-container-low rounded-full text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all border border-outline">
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isProcessing && (
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-on-primary" />
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl rounded-tl-none flex items-center gap-3 border border-outline">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span className="text-sm font-medium italic text-on-surface-variant">Shakti is thinking...</span>
                    </div>
                  </div>
                )}

                {response && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-on-primary" />
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-xl rounded-tl-none max-w-[90%] border border-outline">
                      <div className="prose prose-sm prose-stone max-w-none text-on-surface-variant">
                        <ReactMarkdown>{response}</ReactMarkdown>
                      </div>
                      <div className="mt-6 flex gap-2">
                        <button className="p-2 bg-surface-container-lowest rounded-lg shadow-sm hover:shadow-md transition-all text-primary border border-outline">
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 bg-primary text-on-primary rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                          Apply to Dashboard
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-8 bg-surface-container-low border-t border-outline">
                <div className="relative flex items-center gap-4">
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type or use voice..."
                      className="w-full bg-surface-container-lowest border border-outline rounded-full px-6 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-on-surface"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={!query || isProcessing}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary text-on-primary rounded-full disabled:opacity-50 transition-all shadow-sm"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleListen}
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-md",
                      isListening ? "bg-error text-white animate-pulse scale-110" : "bg-primary text-on-primary hover:scale-105"
                    )}
                  >
                    {isListening ? <Activity className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                  </button>
                </div>
                {isListening && (
                  <p className="text-center text-[10px] font-bold text-error mt-4 animate-bounce uppercase tracking-widest">Listening to your voice...</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
