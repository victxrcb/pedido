import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MUSIC_SOURCE = '/musica.mp3';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_SOURCE);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.68;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.warn('Falha ao reproduzir a música:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-xl"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-roseSoft">Música romântica</p>
      <button
        onClick={togglePlay}
        className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
          playing ? 'bg-transparent border border-roseSoft text-roseSoft hover:bg-roseSoft/10' : 'button-primary text-nightShade'
        }`}
      >
        {playing ? 'Pausar música' : 'Tocar música'}
      </button>
    </motion.div>
  );
}
