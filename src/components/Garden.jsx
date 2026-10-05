// Декор «Түнгі бақ»: гүлдер (ромашка, раушан, лаванда), гирлянда және шелек-құйғыш

export function Bloom({ type = 'daisy', className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 90" aria-hidden="true">
      <path d="M20 30v60" stroke="#2faa6e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M20 76c-10-4-14-14-12-24 9 4 13 13 12 24z" fill="#35c27d" />
      <path d="M20 66c8-4 12-12 11-21-8 3-12 11-11 21z" fill="#2faa6e" />
      {type === 'daisy' && (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <ellipse key={i} cx="20" cy="14" rx="3.4" ry="9" fill="#fff" transform={`rotate(${i * 36} 20 24)`} />
          ))}
          <circle cx="20" cy="24" r="6" fill="#f6b93b" />
        </>
      )}
      {type === 'rose' && (
        <>
          <circle cx="20" cy="22" r="14" fill="currentColor" />
          <path d="M20 22m-9 0a9 9 0 0 1 18 0a6 6 0 0 1-12 0a3.5 3.5 0 0 1 7 0" stroke="#fff" strokeOpacity=".5" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M8 22c0 8 6 14 12 14s12-6 12-14" stroke="#000" strokeOpacity=".12" strokeWidth="2" fill="none" />
        </>
      )}
      {type === 'lavender' && (
        <>
          {[6, 14, 22, 30].map((y, i) => (
            <g key={y}>
              <ellipse cx="15" cy={y} rx="4.2" ry="5.2" fill="currentColor" transform={`rotate(-18 15 ${y})`} />
              <ellipse cx="25" cy={y + 3} rx="4.2" ry="5.2" fill="currentColor" transform={`rotate(18 25 ${y + 3})`} />
              {i === 0 && <ellipse cx="20" cy="0" rx="4" ry="5" fill="currentColor" />}
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

// Көк жиегіндегі жарық гирлянда: шамдар жыпылықтайды
export function Garland({ className = '' }) {
  const bulbs = Array.from({ length: 19 }, (_, i) => {
    const x = 40 + i * 78;
    const y = 30 + 54 * Math.sin((x / 1440) * Math.PI * 3) * 0.5 + 24;
    return [x, y, ['#ffd45a', '#ff6b97', '#ffffff', '#9ee7c2', '#c9b3ff'][i % 5]];
  });
  return (
    <svg className={className} viewBox="0 0 1440 130" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <path d="M0 40Q120 110 240 56T480 62 720 56 960 62 1200 56 1440 50" stroke="#2a0a22" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7" />
      {bulbs.map(([x, y, c], i) => (
        <g key={x} className="bulb" style={{ animationDelay: `${(i % 6) * 0.45}s` }}>
          <circle cx={x} cy={y + 8} r="14" fill={c} opacity=".28" />
          <ellipse cx={x} cy={y + 8} rx="6" ry="8" fill={c} />
        </g>
      ))}
    </svg>
  );
}

export function WateringCan({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 140 100" aria-hidden="true">
      <path d="M20 40h56l-4 46H28z" fill="#f6b93b" />
      <path d="M20 40h56" stroke="#e8a21b" strokeWidth="6" strokeLinecap="round" />
      <path d="M76 52l46-26" stroke="#f6b93b" strokeWidth="9" strokeLinecap="round" />
      <path d="M116 14l16 20-18 2z" fill="#e8a21b" />
      <path d="M22 44c-18 0-18 28 4 30" stroke="#e8a21b" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M32 40c4-14 36-14 40 0" stroke="#e8a21b" strokeWidth="5" fill="none" />
      <ellipse cx="42" cy="58" rx="6" ry="14" fill="#fff" opacity=".28" />
    </svg>
  );
}
