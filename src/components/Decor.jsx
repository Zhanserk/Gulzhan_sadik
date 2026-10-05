// Декор: гүл, жапырақ және толқын — «Гулжан» (гүл) атауының белгілері

export function Flower({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <ellipse key={i} cx="50" cy="25" rx="14" ry="23" fill="currentColor" transform={`rotate(${i * 60} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="12" fill="#f6b93b" />
      <circle cx="50" cy="50" r="5" fill="#fff3c4" />
    </svg>
  );
}

export function Leaf({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M10 90C10 40 40 10 90 10c0 50-30 80-80 80z" fill="currentColor" />
      <path d="M14 86C36 60 56 40 80 20" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Wave({ className = '' }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 40C120 0 240 0 360 40s240 40 360 0 240-40 360 0 240 40 360 0V80H0z" fill="currentColor" />
    </svg>
  );
}
