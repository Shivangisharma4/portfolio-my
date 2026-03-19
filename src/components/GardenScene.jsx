const GardenScene = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden pointer-events-none select-none" aria-hidden="true">

      {/* Ground line */}
      <div className="absolute bottom-4 left-0 right-0 h-[1px] bg-accent/10" />

      {/* Grass tufts */}
      {[8, 15, 22, 35, 48, 55, 65, 72, 80, 88, 93].map((left, i) => (
        <svg
          key={`grass-${i}`}
          className="absolute bottom-4 animate-sway"
          style={{ left: `${left}%`, animationDelay: `${i * 0.3}s` }}
          width="12"
          height="20"
          viewBox="0 0 12 20"
        >
          <path d="M6 20 Q4 12, 2 4" fill="none" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
          <path d="M6 20 Q6 10, 6 2" fill="none" stroke="#C17F4E" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
          <path d="M6 20 Q8 12, 10 5" fill="none" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
        </svg>
      ))}

      {/* Tiny flowers */}
      {[20, 42, 70, 85].map((left, i) => (
        <svg
          key={`flower-${i}`}
          className="absolute bottom-5 animate-sway-slow"
          style={{ left: `${left}%`, animationDelay: `${i * 0.5 + 0.2}s` }}
          width="8"
          height="16"
          viewBox="0 0 8 16"
        >
          <path d="M4 16 Q4 10, 4 6" fill="none" stroke="#8C7E72" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="4" cy="5" r="2" fill="none" stroke="#D4A574" strokeWidth="0.8" opacity="0.4" />
          <circle cx="4" cy="5" r="0.8" fill="#C17F4E" opacity="0.5" />
        </svg>
      ))}

      {/* Flying bird 1 */}
      <svg
        className="absolute top-4 animate-bird-fly"
        style={{ animationDelay: '0s' }}
        width="18"
        height="10"
        viewBox="0 0 18 10"
      >
        <path d="M0 5 Q4 0, 9 4 Q14 0, 18 5" fill="none" stroke="#8C7E72" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      </svg>

      {/* Flying bird 2 */}
      <svg
        className="absolute top-8 animate-bird-fly"
        style={{ animationDelay: '6s' }}
        width="14"
        height="8"
        viewBox="0 0 14 8"
      >
        <path d="M0 4 Q3 0, 7 3 Q11 0, 14 4" fill="none" stroke="#8C7E72" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      </svg>
    </div>
  );
};

export default GardenScene;
