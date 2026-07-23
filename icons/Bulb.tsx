function BulbIcon({
  size = 48,
  glow = false,
}: {
  size?: number
  glow?: boolean
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <defs>
        <filter id="bulbGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3"
            floodColor="#ff4c57"
            floodOpacity="1"
          />
        </filter>
      </defs>

      <g filter={glow ? "url(#bulbGlow)" : undefined}>
        <g
          stroke="#ff4c57"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="
              M24 8
              C17.5 8 13 13 13 19.5
              C13 24.2 15.6 27.4 18.5 30
              H29.5
              C32.4 27.4 35 24.2 35 19.5
              C35 13 30.5 8 24 8
              Z
            "
          />

          <line x1="21" y1="32" x2="27" y2="32" />
          <line x1="20" y1="35" x2="28" y2="35" />
          <line x1="21.5" y1="38" x2="26.5" y2="38" />
        </g>
      </g>
    </svg>
  )
}

export default BulbIcon;