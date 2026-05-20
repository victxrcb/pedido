import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function randomPosition() {
  const x = Math.floor(Math.random() * 520) - 260;
  const y = Math.floor(Math.random() * 220) - 110;
  const rotate = Math.floor(Math.random() * 28) - 14;
  return { x, y, rotate };
}

export default function ProposalScreen({ onYes }) {
  const [noMotion, setNoMotion] = useState({ x: 0, y: 0, rotate: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const moveNo = () => {
    setIsVisible(false);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNoMotion(randomPosition());
      setIsVisible(true);
    }, 150);
  };

  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-6 pb-10 pt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.45 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.18),_transparent_18%),radial-gradient(circle_at_bottom_left,_rgba(255,208,173,0.14),_transparent_16%)]" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-8 rounded-[36px] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur-2xl sm:p-10">
        <div className="absolute inset-x-0 top-6 -z-10 h-72 rounded-full bg-gradient-to-b from-roseSoft/30 via-transparent to-transparent blur-3xl" />
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Quer namorar comigo? <span className="inline-block">💘</span>
          </h2>
        </div>
        <div className="relative flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onYes}
            className="button-smooth button-primary w-full sm:w-auto"
          >
            SIM 💖
          </motion.button>
          <motion.button
            className="button-smooth button-secondary w-full sm:w-auto"
            animate={{
              x: noMotion.x,
              y: noMotion.y,
              rotate: noMotion.rotate,
              opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            onMouseMove={moveNo}
            onMouseEnter={moveNo}
            onFocus={moveNo}
            onTouchStart={moveNo}
            onClick={moveNo}
          >
            NÃO 😅
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
