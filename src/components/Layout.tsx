import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Sprout, 
  TrendingUp, 
  Mic, 
  Bell, 
  Languages, 
  Settings, 
  HelpCircle,
  Plus,
  Search,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Screen, NavItem } from '@/src/types';

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'market', label: 'Market', icon: 'TrendingUp' },
  { id: 'vision', label: 'Vision AI', icon: 'Sprout' },
];

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onVoiceHubOpen: () => void;
}

export default function Layout({ children, currentScreen, onNavigate, onVoiceHubOpen }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const IconMap: Record<string, any> = {
    LayoutDashboard,
    Sprout,
    TrendingUp,
    Mic
  };

  const isLanding = currentScreen === 'landing';

  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      {/* Top Navigation Bar */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 bg-surface border-b border-outline transition-all",
        isLanding ? "bg-transparent border-transparent" : ""
      )}>
        <div className="flex justify-between items-center px-10 h-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate('landing')}
              className={cn(
                "text-2xl font-bold tracking-tight font-serif italic flex items-center gap-2",
                isLanding ? "text-white" : "text-primary"
              )}
            >
              <span className={cn("w-8 h-8 rounded-lg", isLanding ? "bg-white" : "bg-primary")} />
              Agri-Shakti AI
            </button>
            {!isLanding && (
              <nav className="hidden md:flex gap-8 items-center ml-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={cn(
                      "text-[13px] font-bold transition-all relative py-1 uppercase tracking-wider",
                      currentScreen === item.id 
                        ? "text-primary" 
                        : "text-on-surface-variant hover:text-primary"
                    )}
                  >
                    {item.label}
                    {currentScreen === item.id && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            {!isLanding && (
              <div className="hidden sm:flex items-center bg-primary-container/50 rounded-full px-4 py-2 gap-2 border border-outline">
                <Search className="w-4 h-4 text-on-surface-variant" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent border-none focus:ring-0 text-sm w-32 lg:w-48 placeholder:text-on-surface-variant/60"
                />
              </div>
            )}
            <button className={cn(
              "p-2 rounded-full transition-colors relative",
              isLanding ? "text-white/80 hover:bg-white/10" : "text-primary hover:bg-primary-container"
            )}>
              <Bell className="w-5 h-5" />
            </button>
            <button className={cn(
              "p-2 rounded-full transition-colors",
              isLanding ? "text-white/80 hover:bg-white/10" : "text-primary hover:bg-primary-container"
            )}>
              <Languages className="w-5 h-5" />
            </button>
            {!isLanding && (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-outline">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSAuHVQ3qyDgYnQdWLI92-1jgf26x8h6vAzQug8ewXg6y2mz4Sc0nnOZDL66TPcSiycOnvjo6sSoXaLNmmnUsJj_YNib931p5sH-JV3tk1dORdZ6-oqPuxMMqwbhGtqK1senYqc4lZL2-FPFZMEGLkZx-fEIz9RsrW5jQ2YIuBqZ7Ek0cgnU5xKf_1A2uMTUy6ttd-6f1A64dJOTAk987G1ARhvkroA2tld-dXeQHPivzOcM-enxNXx76GBjc6b9j75YXVq75FbJs" 
                  alt="User Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            {isLanding ? (
              <button 
                onClick={() => onNavigate('dashboard')}
                className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all"
              >
                Launch App
              </button>
            ) : (
              <button 
                className="md:hidden p-2 text-primary"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && !isLanding && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
            <div className="absolute top-0 left-0 bottom-0 w-64 bg-surface-container-low shadow-2xl flex flex-col pt-20 pb-8">
              <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = IconMap[item.icon];
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsSidebarOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                        currentScreen === item.id 
                          ? "bg-primary text-white shadow-lg shadow-primary/20" 
                          : "text-on-surface/60 hover:bg-surface-container-high"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    onVoiceHubOpen();
                    setIsSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface/60 hover:bg-surface-container-high transition-all"
                >
                  <Mic className="w-5 h-5" />
                  <span className="font-medium">Voice Hub</span>
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      {!isLanding && (
        <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 z-40 bg-surface flex-col pt-24 pb-8 border-r border-outline">
          <div className="px-8 mb-8">
            <h2 className="text-xl font-bold text-primary font-serif italic">Agri-Shakti AI</h2>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-[0.2em]">Farmer Central</p>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const Icon = IconMap[item.icon];
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-8 py-3 transition-all relative group",
                    currentScreen === item.id 
                      ? "text-primary font-bold" 
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {currentScreen === item.id && (
                    <motion.div 
                      layoutId="sidebar-active"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    />
                  )}
                  <Icon className={cn("w-5 h-5", currentScreen === item.id ? "text-primary" : "text-on-surface-variant group-hover:text-primary")} />
                  <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={onVoiceHubOpen}
              className="w-full flex items-center gap-3 px-8 py-3 text-on-surface-variant hover:text-primary transition-all group"
            >
              <Mic className="w-5 h-5 group-hover:text-primary" />
              <span className="text-xs uppercase tracking-widest font-bold">Voice Hub</span>
            </button>
          </nav>

          <div className="px-6 mt-auto space-y-4">
            <button 
              onClick={() => onNavigate('vision')}
              className="w-full bg-secondary text-white py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4" />
              New Analysis
            </button>
            <div className="pt-4 border-t border-outline">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-all text-xs font-bold uppercase tracking-widest">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className={cn(
        "flex-1 pt-24 transition-all duration-300",
        !isLanding && "md:ml-64"
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={cn(
        "bg-surface-container-low py-12 px-6 md:px-12 border-t border-outline-variant/10",
        currentScreen !== 'landing' && "md:ml-64"
      )}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif font-bold text-primary text-2xl">Agri-Shakti AI</span>
            <p className="text-on-surface-variant text-xs uppercase tracking-widest">© 2024 Agri-Shakti AI. Cultivating Equality through Intelligence.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {['Vision AI', 'Market Intelligence', 'Mission', 'Support'].map((link) => (
              <button key={link} className="text-on-surface-variant hover:text-primary transition-all text-xs uppercase tracking-widest font-medium">
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
