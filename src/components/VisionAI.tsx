import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CloudUpload, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ShieldCheck, 
  MessageSquare, 
  Download,
  Lightbulb,
  Phone,
  Map as MapIcon,
  Loader2,
  Sparkles
} from 'lucide-react';
import { analyzeCropImage } from '@/src/services/geminiService';
import { cn } from '@/src/lib/utils';

export default function VisionAI() {
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [result, setResult] = React.useState<any>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      setPreview(base64);
      setIsAnalyzing(true);
      setResult(null);
      
      const analysis = await analyzeCropImage(base64);
      setResult(analysis);
      setIsAnalyzing(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      {/* Hero Header */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary bg-secondary-container px-3 py-1 rounded-full mb-3 inline-block">Crop Health Module</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-serif italic">
              Vision AI <br />Diagnostic Center
            </h1>
          </motion.div>
          <p className="text-on-surface-variant max-w-md font-serif text-lg italic">
            "Harnessing convolutional neural networks to identify crop distress before it spreads to the harvest."
          </p>
        </div>
      </section>

      {/* Main Interactive Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Upload & Diagnostics (Left Col) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Upload Area */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-lowest p-12 transition-all hover:bg-surface-container-low border border-outline shadow-sm">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
            />
            <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
              <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                {isAnalyzing ? (
                  <Loader2 className="w-10 h-10 animate-spin" />
                ) : (
                  <CloudUpload className="w-10 h-10" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest text-primary">Ready for Scan</h3>
                <p className="text-on-surface-variant text-lg">Drag and drop or click to upload a photo of the affected leaf</p>
              </div>
              <button className="px-8 py-3 bg-primary text-on-primary rounded-full font-bold text-sm hover:opacity-90 transition-all active:scale-95 uppercase tracking-widest">
                Select From Gallery
              </button>
            </div>
            {preview && (
              <div className="absolute inset-0 z-0 opacity-20">
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Processing Visualization */}
          <AnimatePresence>
            {isAnalyzing && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-surface-container-highest rounded-3xl p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-bold uppercase tracking-tighter text-sm">CNN Model Processing</span>
                  </div>
                  <span className="text-primary font-bold">Analyzing...</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Localized Support Section */}
          <section className="mt-12">
            <div className="bg-primary rounded-xl p-10 text-on-primary flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-md">
              <div className="flex-1 relative z-10">
                <h2 className="text-3xl font-bold mb-4 font-serif italic">Localized Support</h2>
                <p className="text-on-primary/80 mb-8 max-w-lg text-lg">
                  We've located 3 Agriculture Extension Officers and 14 certified organic suppliers within 15km of your farm. Get direct help now.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-secondary text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:opacity-90 transition-transform">
                    View Local Map
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2 uppercase tracking-widest text-[10px]">
                    <Phone className="w-4 h-4" />
                    Call Extension Officer
                  </button>
                </div>
              </div>
              <div className="w-48 h-48 bg-surface rounded-full flex items-center justify-center p-2 relative z-10 shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-highest">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-2TUryXXgnXAnHB5KRvIFulxnaxBhqsg-4HL6vkNCUAwPNVfpdoGBo53fjkwWzHP76r0xyBaSpT-3PeChWJAAN5zYfs3bcBlD59xwr7ttRNIx2t4WtZn0uX8S3cpicz9fFoQM8A3bBqDWEqCwp0ZmLRG2KZignyi_KtO3LkgPyNa7wY3UbARmvqZ7zyV92_r0wLauACj2O5mQ3H-_F8TcPLlewoE1B8CT_HabReK8vWgUfQcYR1bB9Cc74sQsF13sOQQHawfdVZ8" 
                    alt="Extension Officer"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-secondary w-10 h-10 rounded-full border-4 border-primary flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Diagnosis & Results (Right Col) */}
        <div className="lg:col-span-5 space-y-8">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div 
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className={cn(
                    "px-4 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest",
                    result.threatLevel === 'high' ? "bg-error text-white" : "bg-secondary text-white"
                  )}>
                    {result.threatLevel} Threat
                  </span>
                  <div className="flex items-center gap-1 text-primary">
                    <ShieldCheck className="w-4 h-4 fill-current" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{(result.confidence * 100).toFixed(1)}% Confidence</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-primary font-serif italic">{result.diagnosis}</h2>
                <p className="text-on-surface-variant font-sans mb-6 leading-relaxed">
                  {result.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline">
                    <div className="w-12 h-12 rounded-xl bg-white overflow-hidden shrink-0 border border-outline">
                      {preview && <img src={preview} alt="Sample" className="w-full h-full object-cover" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase block tracking-widest">Visual Match</span>
                      <span className="text-sm font-medium">Reference Database A-09</span>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2 text-primary">
                  <Info className="w-4 h-4" />
                  Organic Treatment Protocol
                </h4>
                <ul className="space-y-4 mb-8">
                  {result.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full border border-primary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-sm font-medium text-on-surface-variant">{rec}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-outline flex flex-col gap-4">
                  <button className="w-full py-4 bg-primary text-on-primary rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 uppercase tracking-widest text-xs">
                    <MessageSquare className="w-5 h-5" />
                    Consult an Expert
                  </button>
                  <button className="w-full py-4 bg-surface-container-low text-primary font-bold rounded-full hover:bg-surface-container transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-xs border border-outline">
                    <Download className="w-5 h-5" />
                    Download Treatment Guide (PDF)
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-surface-container-lowest rounded-xl p-12 border border-dashed border-outline flex flex-col items-center justify-center text-center space-y-4 min-h-[400px] shadow-sm"
              >
                <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center text-outline">
                  <Info className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-primary">No Analysis Yet</h3>
                <p className="text-on-surface-variant text-sm max-w-xs">
                  Upload a photo of your crop to receive an AI-powered diagnosis and organic treatment plan.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Insight Glass Card */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Lightbulb className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest text-primary">Predictive Analytics</h5>
                <p className="text-xs text-on-surface-variant">Weather conditions in your region (Humidity &gt; 80%) suggest high risk of spread over the next 48 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
