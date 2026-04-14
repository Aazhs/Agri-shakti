import React from 'react';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import VisionAI from './components/VisionAI';
import MarketIntelligence from './components/MarketIntelligence';
import VoiceHub from './components/VoiceHub';
import { Screen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState<Screen>('landing');
  const [isVoiceHubOpen, setIsVoiceHubOpen] = React.useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentScreen('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'vision':
        return <VisionAI />;
      case 'market':
        return <MarketIntelligence />;
      default:
        return <LandingPage onStart={() => setCurrentScreen('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      <Layout 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen}
        onVoiceHubOpen={() => setIsVoiceHubOpen(true)}
      >
        {renderScreen()}
      </Layout>

      <VoiceHub 
        isOpen={isVoiceHubOpen} 
        onClose={() => setIsVoiceHubOpen(false)} 
      />
    </div>
  );
}
