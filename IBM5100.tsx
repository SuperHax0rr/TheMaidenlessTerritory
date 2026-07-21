import { useState } from 'react'

export default function IBM5100() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      title="Open Digital Workshop"
    >
      <svg
        style={{
            overflow: "visible"
       }}
        viewBox="0 0 480 320"
        width="480"
        height="320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="outer-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
  >
            <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="7"
                floodColor="#49B3FF"
                floodOpacity="0.9"
            />
        </filter>
          <filter id="outer-glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main body — off-white/cream casing */}
        <rect x="20" y="20" width="440" height="280" rx="6" ry="6"
          fill="#1C1F24" stroke={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"} strokeWidth="1.5"
          filter={hovered ? "url(#outer-glow)" : undefined} />

        {/* Top bezel */}
        <rect x="20" y="20" width="440" height="14" rx="6" ry="6"
          fill="#141820" stroke={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"} strokeWidth="1" />
        <rect x="20" y="28" width="440" height="6"
          fill="#141820" />

        {/* IBM badge */}
        <text x="38" y="33" fontFamily="'JetBrains Mono', monospace" fontSize="8"
          fontWeight="700" fill={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"} letterSpacing="3">IBM</text>
        <text x="78" y="33" fontFamily="'JetBrains Mono', monospace" fontSize="6"
          fill={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"} letterSpacing="1">5100</text>

        {/* Power indicator */}
        <circle cx="450" cy="29" r="4" fill={hovered ? '#22c55e' : '#1a3a1a'}
          filter={hovered ? 'url(#screen-glow)' : undefined} />
        <circle cx="450" cy="29" r="2.5" fill={hovered ? '#4ade80' : '#111'} />

        {/* Screen bezel */}
        <rect x="36" y="44" width="244" height="172" rx="3"
          fill="#0A0C0F" stroke={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"} strokeWidth="1" />

        {/* CRT screen surface */}
        <rect x="42" y="50" width="232" height="160" rx="2"
          fill={hovered ? '#020a04' : '#010305'}
          stroke={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"}
          strokeWidth="1" />

        {/* Screen content — green phosphor text */}
        {[
          { y: 70, text: 'DIGITAL WORKSHOP v1.0', color: hovered ? '#4ade80' : '#22c55e' },
          { y: 86, text: '──────────────────────', color: '#1a4a1a' },
          { y: 102, text: '> Photography........[12]', color: hovered ? '#86efac' : '#1e6a1e' },
          { y: 116, text: '> Projects...........[8]', color: hovered ? '#86efac' : '#1e6a1e' },
          { y: 130, text: '> ASCII Art...........[6]', color: hovered ? '#86efac' : '#1e6a1e' },
          { y: 144, text: '> Experiments........[14]', color: hovered ? '#86efac' : '#1e6a1e' },
          { y: 158, text: '> Archives...........[∞]', color: hovered ? '#86efac' : '#1e6a1e' },
          { y: 178, text: hovered ? '█ ENTER TO ACCESS_' : '  [CLICK TO OPEN]_', color: hovered ? '#4ade80' : '#155015' },
        ].map(({ y, text, color }) => (
          <text key={y} x="52" y={y}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9.5" fill={color}
            filter={hovered ? 'url(#screen-glow)' : undefined}
          >
            {text}
          </text>
        ))}

        {/* Scanlines overlay */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i}
            x1="42" y1={50 + i * 8} x2="274" y2={50 + i * 8}
            stroke="rgba(0,0,0,0.25)" strokeWidth="3.5" />
        ))}

        {/* Screen corner highlights (CRT effect) */}
        <rect x="42" y="50" width="232" height="160" rx="2"
          fill="url(#crt-vignette)" opacity="0.3" />

        {/* Right panel — controls and tape drive */}
        <rect x="296" y="44" width="148" height="172" rx="2"
          fill="#161B22" stroke="#2a2a2a" strokeWidth="1" />

        {/* Tape cartridge slot */}
        <rect x="308" y="58" width="96" height="54" rx="2"
          fill="#0D1117" stroke="#333" strokeWidth="1" />
        <rect x="316" y="64" width="80" height="42" rx="1"
          fill="#080C10" stroke={hovered ? 'rgba(74,166,248,0.3)' : '#222'} strokeWidth="1" />
        <text x="330" y="82" fontFamily="'JetBrains Mono', monospace"
          fontSize="7" fill="#444" letterSpacing="1">TAPE DRIVE</text>
        <text x="338" y="96" fontFamily="'JetBrains Mono', monospace"
          fontSize="7" fill="#333">── 1/2 ──</text>

        {/* Ventilation slots */}
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i}
            x1="308" y1={126 + i * 8} x2="404" y2={126 + i * 8}
            stroke="#252525" strokeWidth="2" strokeLinecap="round" />
        ))}

        {/* Label area */}
        <rect x="308" y="170" width="96" height="36" rx="1"
          fill="#111418" stroke="#2a2a2a" strokeWidth="1" />
        <text x="315" y="183" fontFamily="'JetBrains Mono', monospace"
          fontSize="6.5" fill={hovered ? '#4AA6F8' : '#3a4a5a'} letterSpacing="2">IBM 5100</text>
        <text x="315" y="196" fontFamily="'JetBrains Mono', monospace"
          fontSize="6" fill="#2a3a4a">PORTABLE COMPUTER</text>

        {/* Keyboard section */}
        <rect x="36" y="224" width="408" height="64" rx="3"
          fill="#14181F" stroke="#2a2a2a" strokeWidth="1" />

        {/* Key rows */}
        {[
          { row: 0, keys: 14, startX: 44, y: 232, w: 26, h: 14 },
          { row: 1, keys: 14, startX: 44, y: 250, w: 26, h: 14 },
          { row: 2, keys: 12, startX: 56, y: 268, w: 28, h: 14 },
        ].map(({ row, keys, startX, y, w, h }) =>
          Array.from({ length: keys }).map((_, i) => (
            <rect key={`${row}-${i}`}
              x={startX + i * (w + 2)} y={y}
              width={w} height={h} rx="1.5"
              fill="#1C2030"
              stroke={hovered && (i + row) % 7 === 0 ? 'rgba(74,166,248,0.3)' : '#262C3A'}
              strokeWidth="0.75"
            />
          ))
        )}

        {/* Space bar */}
        <rect x="120" y="268" width="120" height="14" rx="1.5"
          fill="#1C2030" stroke="#262C3A" strokeWidth="0.75" />

        {/* Bottom chassis edge */}
        <rect x="20" y="292" width="440" height="8" rx="3"
          fill="#0F1318" stroke={hovered ? "var(--ibm-hover)" : "var(--ibm-border)"} strokeWidth="1" />
      </svg>
    </div>
  )
}
