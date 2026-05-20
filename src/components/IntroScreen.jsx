import { motion } from 'framer-motion';

const overlayVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};

export default function IntroScreen({ onOpen }) {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -24, transition: { duration: 0.45 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,167,184,0.21),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(255,237,209,0.17),_transparent_20%)]" />
      <div className="relative z-10 mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur-xl">
        <motion.div variants={overlayVariants} initial="hidden" animate="visible" className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tenho uma pergunta muito importante pra você... <span className="inline-block">💖</span>
          </h1>
          <button
            onClick={onOpen}
            className="button-smooth button-primary w-full border border-transparent text-nightShade shadow-soft hover:scale-[1.02] hover:shadow-glow"
          >
            Abrir
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
