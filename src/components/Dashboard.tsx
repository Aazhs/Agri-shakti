import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  CloudRain, 
  Droplets, 
  Wind, 
  ArrowRight, 
  Camera, 
  Mic, 
  CheckCircle2, 
  Circle,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Task } from '@/src/types';

const tasks: Task[] = [
  { id: '1', title: 'Spray organic neem oil', location: 'North Sector', due: 'Due in 2h', status: 'pending', type: 'spray' },
  { id: '2', title: 'Check moisture in Plot B', location: 'Scheduled for 4 PM', due: 'Scheduled', status: 'pending', type: 'water' },
];

export default function Dashboard() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      {/* Greeting Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary bg-secondary-container px-3 py-1 rounded-full mb-3 inline-block">
            Farmer Central
          </span>
          <h1 className="text-5xl font-bold font-serif italic text-primary leading-tight">Namaste, Sunita!</h1>
          <p className="text-lg text-on-surface-variant max-w-xl mt-2">
            Your fields are flourishing. Today's harvest potential looks promising with the morning mist clearing up.
          </p>
        </motion.div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <button className="p-6 bg-surface-container-lowest rounded-xl flex flex-col gap-3 flex-1 md:w-48 shadow-sm border border-outline hover:bg-surface-container-low transition-all group">
            <Camera className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs uppercase tracking-widest">Upload Leaf</span>
            <p className="text-[10px] uppercase tracking-tighter opacity-70">AI Analysis</p>
          </button>
          <button className="p-6 bg-primary text-on-primary rounded-xl flex flex-col gap-3 flex-1 md:w-48 shadow-md hover:opacity-90 transition-all group">
            <Mic className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs uppercase tracking-widest">Voice Assist</span>
            <p className="text-[10px] uppercase tracking-tighter opacity-70 text-white/70">Ask Anything</p>
          </button>
        </div>
      </section>

      {/* Bento Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
        {/* Farm Health Summary */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 relative overflow-hidden flex flex-col justify-between group shadow-sm border border-outline"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGD6jntL0YmhTnkL5UkxYFVJ3d5H6NQcX4GPbyFKxEIKT1nSz5_ZEuSnxEADN_T_m25D4soRw-oeFPZjFInViblB8XHl6GQIwiGj8JzJZtdTl6LbsHDQFLlrEyZquFRTyauVLebG6XaR5ovbvaGLMDGq7jXTdlKEF1nNIW9w8-Zua67xLF9q3T5DEWT7yClPDfAtRc18RsiJRjnzi-fQVvtm_TQhf4FH6J-M6BQJ61qq_NI-Mn5srHUd6SpExST0I1L9KVBG1rAVY" 
              alt="Farm fields"
              className="object-cover h-full w-full"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              Live Farm Status
            </h3>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-serif italic text-primary">Status: Healthy</span>
            </div>
            <div className="mt-4 flex gap-3">
              <span className="px-4 py-1 bg-tertiary-container text-tertiary rounded-full text-[10px] font-bold uppercase tracking-widest">Crops OK</span>
              <span className="px-4 py-1 bg-secondary-container text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                1 Pest Detected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-6 relative z-10">
            <div className="flex-grow">
              <div className="flex justify-between mb-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                <span>Overall Soil Moisture</span>
                <span>68%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '68%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-tertiary rounded-full" 
                />
              </div>
            </div>
            <button className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Weather Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-tertiary-container text-tertiary rounded-xl p-8 flex flex-col justify-between shadow-sm border border-outline"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold uppercase opacity-80 tracking-widest">Mumbai, IN</p>
              <h2 className="text-5xl font-light mt-2">24°C</h2>
            </div>
            <Sun className="w-12 h-12 text-tertiary" />
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            {[
              { day: 'Tue', temp: '28°' },
              { day: 'Wed', temp: '31°', active: true },
              { day: 'Thu', temp: '30°' },
            ].map((d) => (
              <div key={d.day} className={cn(
                "rounded-xl py-2 transition-all",
                d.active ? "bg-white/40 border border-outline" : "bg-black/5"
              )}>
                <p className="text-[10px] uppercase font-bold opacity-60">{d.day}</p>
                <p className="font-bold">{d.temp}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mt-4 pt-4 border-t border-tertiary/10">
            <span className="flex items-center gap-1"><Droplets className="w-3 h-3" /> 42% Humid</span>
            <span className="flex items-center gap-1"><Wind className="w-3 h-3" /> 12km/h</span>
          </div>
        </motion.div>

        {/* Task Management */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-5 bg-surface-container-lowest rounded-xl p-8 flex flex-col h-full shadow-sm border border-outline"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-serif italic text-primary">Field Alerts</h3>
            <button className="text-[10px] font-bold text-secondary uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="space-y-4 overflow-y-auto no-scrollbar">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl hover:translate-x-1 transition-transform cursor-pointer group border border-outline/50">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white",
                  task.type === 'spray' ? "bg-primary" : "bg-secondary"
                )}>
                  <Droplets className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-on-surface">{task.title}</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{task.location} • {task.due}</p>
                </div>
                {task.status === 'completed' ? (
                  <CheckCircle2 className="w-5 h-5 text-tertiary" />
                ) : (
                  <Circle className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Insight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-7 bg-primary text-on-primary rounded-xl p-8 flex gap-8 items-center relative overflow-hidden group shadow-md"
        >
          <div className="flex-grow space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-white/80 font-bold text-[10px] uppercase tracking-[0.2em]">
              <Sparkles className="w-4 h-4" />
              AI Recommendation
            </div>
            <h4 className="text-2xl font-serif italic leading-tight">
              Soil data suggests increasing Nitrogen levels by 12% for the next wheat cycle.
            </h4>
            <button className="bg-secondary text-white px-6 py-3 rounded-full text-xs font-bold shadow-md hover:opacity-90 transition-all active:scale-95 uppercase tracking-widest">
              Generate Plan
            </button>
          </div>
          <div className="hidden sm:block w-48 h-48 rounded-xl overflow-hidden shadow-2xl relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYiqHkb75zT3LH6FZVKlgxA-uRzoqjTdm75-zymgMHss1LoI5QoB7TQl8NuOw4KwgPPPsMLHP9K7AocnIn9OT1hVAYyfz6Zbr1UBKTJlQ8CyIrIHcWwvPeTbSb8M2WGV2Tp6EO4_1KlQ73q9qh6M8SRICpRUpudVTJgIYih8C3SKN8mu_0LcFWpH8Tnd5RIpMaL-zQaiToA1hpXzLxBl6hJ72X_cNtKn0CoZl88r6DvIBNAVLCv4F2HULNa9PsOwjd7bnrKuhPvN4" 
              alt="Soil quality"
              className="object-cover h-full w-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
