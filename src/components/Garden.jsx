// Декор «Гүл бағы»: раушан, пион, қызғалдақ, космея, гортензия, ромашка, лаванда,
// гүл гирляндасы, көбелек, себет, қоршау және шелек-құйғыш. Түс — currentColor, реңкті үстіңгі қабаттар береді.

const PETAL = '#ffffff';

// Гүл басы (орталығы 20,22): Bloom мен Head ортақ пайдаланады
function Shapes({ type }) {
  switch (type) {
    case 'rose':
      return (
        <>
          <path d="M10 33l10 8 10-8-3-4h-14z" fill="#2faa6e" />
          <circle cx="20" cy="22" r="14" fill="currentColor" />
          <path d="M7 24c2 10 8 15 13 15s11-5 13-15c-5 4-8 5-13 5s-8-1-13-5z" fill="#000" opacity=".16" />
          <path d="M10 15c2-7 8-10 14-9-5 1-9 4-10 9z" fill={PETAL} opacity=".35" />
          <path d="M20 22m-9 0a9 9 0 0 1 17-4 7 7 0 0 1-12 5 5 5 0 0 1 8-3 3 3 0 0 1-5 2" stroke={PETAL} strokeOpacity=".65" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      );
    case 'peony':
      return (
        <>
          {Array.from({ length: 8 }, (_, i) => (
            <ellipse key={`a${i}`} cx="20" cy="9" rx="7.5" ry="11" fill="currentColor" transform={`rotate(${i * 45} 20 22)`} />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <ellipse key={`b${i}`} cx="20" cy="13" rx="6" ry="9" fill="currentColor" stroke={PETAL} strokeOpacity=".4" strokeWidth="1" transform={`rotate(${i * 60 + 20} 20 22)`} />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <ellipse key={`c${i}`} cx="20" cy="17" rx="4.2" ry="6.5" fill={PETAL} opacity=".26" transform={`rotate(${i * 72} 20 22)`} />
          ))}
          <circle cx="20" cy="22" r="3.6" fill="#f6b93b" />
        </>
      );
    case 'tulip':
      return (
        <>
          <path d="M9 24C9 10 14 5 20 5s11 5 11 19c0 9-5 14-11 14S9 33 9 24z" fill="currentColor" />
          <path d="M20 5c-5 6-6 16-4 31 3 1 5 1 8 0 2-15 1-25-4-31z" fill={PETAL} opacity=".24" />
          <path d="M9 24c0-8 2-14 5-17-4 2-9 8-5 24z" fill="#000" opacity=".12" />
          <path d="M31 24c0-8-2-14-5-17 4 2 9 8 5 24z" fill="#000" opacity=".08" />
        </>
      );
    case 'cosmos':
      return (
        <>
          {Array.from({ length: 8 }, (_, i) => (
            <path key={i} d="M20 22L14 8q6-5 12 0z" fill="currentColor" stroke={PETAL} strokeOpacity=".45" strokeWidth=".8" transform={`rotate(${i * 45} 20 22)`} />
          ))}
          <circle cx="20" cy="22" r="4.6" fill="#f6b93b" />
          <circle cx="20" cy="22" r="2" fill="#fff3c4" />
        </>
      );
    case 'hydrangea':
      return (
        <>
          {[[20, 11], [12, 15], [28, 15], [7, 22], [17, 20], [24, 22], [33, 22], [11, 29], [20, 28], [29, 29], [16, 35], [24, 35]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="5.8" fill="currentColor" />
              <circle cx={x} cy={y} r="5.8" fill={i % 2 ? '#000' : PETAL} opacity=".1" />
              <circle cx={x} cy={y} r="1.5" fill={PETAL} opacity=".8" />
            </g>
          ))}
        </>
      );
    case 'lavender':
      return (
        <>
          {[4, 12, 20, 28].map((y, i) => (
            <g key={y}>
              <ellipse cx="15" cy={y} rx="4.2" ry="5.2" fill="currentColor" transform={`rotate(-18 15 ${y})`} />
              <ellipse cx="25" cy={y + 3} rx="4.2" ry="5.2" fill="currentColor" transform={`rotate(18 25 ${y + 3})`} />
              {i === 0 && <ellipse cx="20" cy="-2" rx="4" ry="5" fill="currentColor" />}
            </g>
          ))}
        </>
      );
    default: // daisy
      return (
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <ellipse key={i} cx="20" cy="11" rx="3.2" ry="9.5" fill={PETAL} stroke="#ecc7d6" strokeWidth=".7" transform={`rotate(${i * 30} 20 22)`} />
          ))}
          <circle cx="20" cy="22" r="6" fill="#f6b93b" />
          <circle cx="18" cy="20" r="2" fill="#fff3c4" />
        </>
      );
  }
}

// Сабақты гүл (өсіп тұрған)
export function Bloom({ type = 'daisy', className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 90" aria-hidden="true">
      <path d="M20 30v60" stroke="#2faa6e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M20 76c-10-4-14-14-12-24 9 4 13 13 12 24z" fill="#35c27d" />
      <path d="M20 66c8-4 12-12 11-21-8 3-12 11-11 21z" fill="#2faa6e" />
      <Shapes type={type} />
    </svg>
  );
}

// Тек гүл басы (арка мен гирлянда үшін)
export function Head({ type = 'rose', className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 2 40 40" aria-hidden="true">
      <Shapes type={type} />
    </svg>
  );
}

// Үстіңгі гүл гирляндасы: жапырақты өсімдік пен салбыраған бұтақшалар
const SPRIGS = [
  [110, 50, '#ff7aa5', 'rose'], [280, 70, '#ffffff', 'daisy'], [450, 44, '#c9a3ff', 'cosmos'], [620, 66, '#ff9fbd', 'peony'],
  [800, 48, '#ffb08a', 'rose'], [970, 72, '#ffffff', 'daisy'], [1140, 50, '#ff7aa5', 'cosmos'], [1310, 68, '#c9a3ff', 'peony'],
];
export function Vine({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1440 170" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <path d="M0 16Q180 56 360 24T720 30 1080 24 1440 20" stroke="#2faa6e" strokeWidth="5" fill="none" strokeLinecap="round" />
      {Array.from({ length: 24 }, (_, i) => {
        const x = 30 + i * 60;
        return <ellipse key={i} cx={x} cy={30 + (i % 2) * -8} rx="15" ry="6.5" fill={i % 3 ? '#35c27d' : '#6fdba0'} transform={`rotate(${i % 2 ? -34 : 34} ${x} ${30 + (i % 2) * -8})`} />;
      })}
      {SPRIGS.map(([x, len, c, kind], i) => (
        <g key={x} className="sprig" style={{ animationDelay: `${i * 0.5}s` }}>
          <path d={`M${x} 28Q${x + 14} ${28 + len / 2} ${x} ${28 + len}`} stroke="#2faa6e" strokeWidth="3" fill="none" strokeLinecap="round" />
          <ellipse cx={x + 10} cy={28 + len * 0.4} rx="11" ry="5" fill="#35c27d" transform={`rotate(30 ${x + 10} ${28 + len * 0.4})`} />
          <ellipse cx={x - 8} cy={28 + len * 0.7} rx="10" ry="4.6" fill="#6fdba0" transform={`rotate(-30 ${x - 8} ${28 + len * 0.7})`} />
          <svg x={x - 22} y={28 + len - 8} width="44" height="44" viewBox="0 2 40 40" style={{ color: c }}>
            <Shapes type={kind} />
          </svg>
        </g>
      ))}
    </svg>
  );
}

export function Butterfly({ className = '', color = '#ff8fb1', accent = '#ffd1dc' }) {
  return (
    <svg className={className} viewBox="0 0 80 60" aria-hidden="true">
      <g className="bwing">
        <path d="M40 30C28 2 2 6 6 26c3 14 22 16 34 4z" fill={color} />
        <path d="M40 32C30 44 14 56 24 52c10-4 16-10 16-20z" fill={accent} />
        <circle cx="19" cy="20" r="4" fill={accent} opacity=".8" />
      </g>
      <g className="bwing bwing-r">
        <path d="M40 30C52 2 78 6 74 26c-3 14-22 16-34 4z" fill={color} />
        <path d="M40 32C50 44 66 56 56 52c-10-4-16-10-16-20z" fill={accent} />
        <circle cx="61" cy="20" r="4" fill={accent} opacity=".8" />
      </g>
      <rect x="38" y="16" width="4" height="28" rx="2" fill="#5b1245" />
      <path d="M39 16c-3-6-6-8-9-8M41 16c3-6 6-8 9-8" stroke="#5b1245" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Раушан салынған себет
export function Basket({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 130 110" aria-hidden="true">
      <path d="M26 50C26 2 104 2 104 50" stroke="#b9783a" strokeWidth="6" fill="none" />
      <path d="M40 46c-10-12-22-8-24 0 10 0 18 2 24 0zM96 44c10-12 22-8 24 0-10 0-18 2-24 0z" fill="#35c27d" />
      <g style={{ color: '#ff6b97' }}><svg x="22" y="14" width="38" height="38" viewBox="0 2 40 40"><Shapes type="rose" /></svg></g>
      <g style={{ color: '#e8326f' }}><svg x="46" y="4" width="40" height="40" viewBox="0 2 40 40"><Shapes type="rose" /></svg></g>
      <g style={{ color: '#ffb08a' }}><svg x="72" y="14" width="38" height="38" viewBox="0 2 40 40"><Shapes type="rose" /></svg></g>
      <g style={{ color: '#c9a3ff' }}><svg x="50" y="26" width="30" height="30" viewBox="0 2 40 40"><Shapes type="cosmos" /></svg></g>
      <path d="M12 50H118L106 104H24z" fill="#d9a066" />
      <path d="M18 66H112M22 82H108M44 50l-6 54M65 50v54M86 50l6 54" stroke="#b9783a" strokeWidth="3" />
    </svg>
  );
}

// Ақ қоршау (шарбақ)
export function Fence({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0" y="22" width="1440" height="8" fill="#fff" stroke="#f3cfdc" strokeWidth="1.5" />
      <rect x="0" y="50" width="1440" height="8" fill="#fff" stroke="#f3cfdc" strokeWidth="1.5" />
      {Array.from({ length: 62 }, (_, i) => (
        <path key={i} d={`M${i * 24 + 3} 70V16l9-12 9 12V70z`} fill="#fff" stroke="#f3cfdc" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

// Шелек-құйғыш (қызғылт-мятный)
export function WateringCan({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 140 100" aria-hidden="true">
      <path d="M20 40h56l-4 46H28z" fill="#ff8fb1" />
      <path d="M20 40h56" stroke="#e8326f" strokeWidth="6" strokeLinecap="round" />
      <path d="M76 52l46-26" stroke="#ff8fb1" strokeWidth="9" strokeLinecap="round" />
      <path d="M116 14l16 20-18 2z" fill="#e8326f" />
      <path d="M22 44c-18 0-18 28 4 30" stroke="#e8326f" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M32 40c4-14 36-14 40 0" stroke="#e8326f" strokeWidth="5" fill="none" />
      <ellipse cx="42" cy="58" rx="6" ry="14" fill="#fff" opacity=".35" />
      <circle cx="50" cy="66" r="7" fill="#fff" opacity=".9" />
      <path d="M50 60v12M44 66h12" stroke="#4fcfa8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
