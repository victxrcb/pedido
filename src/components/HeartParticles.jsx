const hearts = Array.from({ length: 12 });
const sparkle = Array.from({ length: 16 });

export default function HeartParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, index) => (
        <span
          key={`heart-${index}`}
          className="heart-floating absolute text-[1.4rem] opacity-80"
          style={{
            left: `${Math.random() * 92}%`,
            top: `${Math.random() * 96}%`,
            animationDuration: `${5 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          💖
        </span>
      ))}
      {sparkle.map((_, index) => (
        <span
          key={`sparkle-${index}`}
          className="absolute text-[0.85rem] text-white/40"
          style={{
            left: `${Math.random() * 96}%`,
            top: `${Math.random() * 98}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.55
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
