import { motion } from 'framer-motion';
import MusicPlayer from './MusicPlayer';

export default function CelebrationScreen() {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-6 pb-10 pt-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -36, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,182,193,0.24),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,221,191,0.12),_transparent_14%)]" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto w-full max-w-3xl rounded-[40px] border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-2xl sm:p-10">
        <div className="absolute inset-x-10 top-6 -z-10 h-72 rounded-[48px] bg-gradient-to-b from-roseSoft/25 via-transparent to-transparent blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-3 shadow-soft backdrop-blur-xl sm:p-4">
            <img
              src={encodeURI('/eu e moniky.jpg')}
              alt="Nós dois"
              className="h-[360px] w-full rounded-[28px] object-cover object-right shadow-soft sm:h-[420px]"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <MusicPlayer />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
