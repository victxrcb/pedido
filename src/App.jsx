import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import ProposalScreen from './components/ProposalScreen';
import CelebrationScreen from './components/CelebrationScreen';
import HeartParticles from './components/HeartParticles';

const screenStates = {
  intro: 'intro',
  proposal: 'proposal',
  celebration: 'celebration'
};

export default function App() {
  const [screen, setScreen] = useState(screenStates.intro);

  return (
    <div className="relative min-h-screen overflow-hidden bg-nightShade text-white">
      <HeartParticles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.18),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(255,255,255,0.08),_transparent_16%)]" />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {screen === screenStates.intro && (
            <IntroScreen key="intro" onOpen={() => setScreen(screenStates.proposal)} />
          )}
          {screen === screenStates.proposal && (
            <ProposalScreen key="proposal" onYes={() => setScreen(screenStates.celebration)} />
          )}
          {screen === screenStates.celebration && (
            <CelebrationScreen key="celebration" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
