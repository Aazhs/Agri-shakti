import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Brain, Mic, TrendingUp, Users, Leaf, Camera, Zap, ShieldCheck } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex flex-col bg-surface">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ37eWCAEHBWp9SRclp8hhysIS82NeCQxoPGil4SFiN-0ENSYhCvg5mGyfi_ljYdW6TaBxO9_cA9-DAuJjhsb5v6emNDXMZyi3NCO-PTDNzyCpm7f6w0a2WhQiEGMJfjyuw1vRfW5YdoG0QWbxhoF9ysAT2gPK6SEarofgEiiYDAhPy9Wnp7ANwRnSyVEcd2GFryIKGk8cPir0hsgkTPFR1BNc40jPoEP_TRq1psRpiZDGp2VROw-eX2ZT2uCzMUoaUy94qVt_vn8" 
            alt="Lush rice terraces"
            className="w-full h-full object-cover brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-6 block">The Digital Harvest</span>
            <h1 className="font-serif italic text-5xl md:text-7xl leading-[1.1] text-primary mb-8">
              Empowering the Hands That Feed the World
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Agri-Shakti AI bridges the gap between ancient wisdom and modern precision. Transform your smartphone into a laboratory, a market strategist, and a multilingual expert.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onStart}
                className="bg-primary text-on-primary px-10 py-5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-2 uppercase tracking-widest"
              >
                Start Your Digital Harvest
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-surface-container-lowest text-primary border border-outline px-10 py-5 rounded-full text-sm font-bold hover:bg-surface-container-low transition-all active:scale-95 flex items-center gap-2 uppercase tracking-widest">
                <Play className="w-5 h-5 fill-current" />
                Watch Mission
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Vision AI Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row group transition-all shadow-sm border border-outline"
            >
              <div className="p-10 flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif italic text-3xl text-primary mb-4">Vision AI Identification</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Instantly detect pest infestations and nutrient deficiencies. Simply point your camera, and our CNN-powered models provide organic remediation steps tailored to your specific soil.
                </p>
                <button className="flex items-center gap-2 text-secondary font-bold group-hover:gap-3 transition-all uppercase tracking-widest text-xs">
                  <span>Try the demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 min-h-[300px] relative overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xMHuDbtch5yfCgusgj5ehK13k4AYeZkmEzo7rnNfX8RTv1-4nr1yCAbrIv0kE1Ksg8wzCCPPanPUhHLi0IRSARzZyT65w3P8ONIVyVCRhTauGTE3nulKI8aK6waYuQZggqYflL-l2K5Lp2RoM8nwUuJW_X27RyyLi-I4BMpgTH8hb-FnqAL3K3ZPtjdXLmt51vs_kKNyro3WWuBhfytP4x9XWCeezw7UdahEcff99Mciult9S1ns77y0QJeoFh3rrfzQNc22NA0" 
                  alt="Leaf analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Multilingual Assistant */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-between relative overflow-hidden shadow-md"
            >
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <Mic className="w-48 h-48" />
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Mic className="w-8 h-8" />
                </div>
                <h3 className="font-serif italic text-3xl mb-4">Voice-First LLM</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Speak naturally in your native dialect. Our assistant understands rural context and provides actionable advice without requiring literacy or typing.
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <p className="text-sm italic">"Shakti, what's the best organic fertilizer for cotton in the monsoon season?"</p>
              </div>
            </motion.div>

            {/* Market Analytics */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-5 bg-surface-container-lowest rounded-xl p-10 group shadow-sm border border-outline transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif italic text-3xl text-primary mb-4">Predictive Market Intelligence</h3>
              <div className="space-y-4 mb-6">
                <div className="h-24 w-full bg-surface-container rounded-xl flex items-end p-4 gap-2">
                  <div className="w-full bg-primary-container h-[40%] rounded-t-sm" />
                  <div className="w-full bg-primary-container h-[60%] rounded-t-sm" />
                  <div className="w-full bg-primary-container h-[55%] rounded-t-sm" />
                  <div className="w-full bg-primary h-[90%] rounded-t-sm relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary uppercase tracking-widest">PROJECTED</div>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  Forecast crop prices up to 6 months in advance using global satellite data and local trade patterns. Never undersell your harvest again.
                </p>
              </div>
            </motion.div>

            {/* CTA Feature Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-secondary-container rounded-xl p-10 flex flex-col md:flex-row gap-8 items-center shadow-sm border border-outline transition-all"
            >
              <div className="flex-1">
                <h3 className="font-serif italic text-3xl text-primary mb-4">Empowering 2 Million Farmers</h3>
                <p className="text-on-surface-variant mb-6">Join the movement that's increasing average farm yields by 24% and reducing pesticide costs by 40%.</p>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all uppercase tracking-widest text-xs">
                  Read Case Studies
                </button>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-10 h-10 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Flowchart */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">System Architecture</span>
          <h2 className="font-serif text-4xl md:text-5xl text-on-surface mt-4">The Logic of Growth</h2>
        </div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative">
            {/* Input */}
            <div className="w-full md:w-64 bg-surface-container-high p-8 rounded-2xl relative z-10 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Input</h4>
              <p className="text-sm text-on-surface-variant">User captures leaf image or records voice query.</p>
            </div>
            
            <div className="hidden md:block flex-1 h-0.5 bg-outline-variant relative">
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-primary" />
            </div>

            {/* AI Engine */}
            <div className="w-full md:w-80 bg-primary-container text-on-primary-container p-8 rounded-2xl relative z-10 shadow-xl text-center">
              <div className="w-12 h-12 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <h4 className="font-bold text-lg mb-2">AI Engine</h4>
              <p className="text-sm opacity-90">CNN & NLP analysis layers processing data in real-time.</p>
            </div>

            <div className="hidden md:block flex-1 h-0.5 bg-outline-variant relative">
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-primary" />
            </div>

            {/* Output */}
            <div className="w-full md:w-64 bg-surface-container-high p-8 rounded-2xl relative z-10 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
                <ShieldCheck className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Actionable Advice</h4>
              <p className="text-sm text-on-surface-variant">Organic recommendations and harvest timing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="pb-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="rounded-[2.5rem] overflow-hidden relative min-h-[600px] flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYNVyUNuuLZBQaCu08zSxiQKT-8qXSNbsaWQvrVpcFcLJxKc-8fy05MkUtsGMMJD-VYxs2JJLHp6ugqHHYvbZvb4wRjvOsEEC2RqQqk3TgQG1djzOUTsv5znlGLXR2Vjm0XDd54ACx3HhpmBp-k4lzvTjmftjSvoJ2XKlI61UTCq9OGo0_FP4fjoQsWm7mukwFwsu9vNrg8emU0sLNh7tiq9ykEOtCJ4kRa1y0b6p-GCOI9ErRflDHbdmjN45TZMJPQZLrvIdpijA" 
              alt="Pomegranates"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-on-surface/40" />
            <div className="relative z-10 p-12 md:p-24 max-w-2xl text-white">
              <h2 className="font-serif text-5xl mb-6">Designed for the Field</h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed">
                We spent 18 months in rural villages testing our interface. The result is a high-contrast, low-bandwidth solution that works under direct sunlight and on basic internet connections.
              </p>
              <div className="flex items-center gap-12">
                <div>
                  <div className="text-4xl font-serif mb-1">98.4%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-serif mb-1">12+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Regional Dialects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
