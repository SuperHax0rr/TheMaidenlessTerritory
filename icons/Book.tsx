function BookIcon({
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
        <filter id="bookGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3"
            floodColor="#ff4c57"
            floodOpacity="1"
          />
        </filter>
      </defs>

      <g filter={glow ? "url(#bookGlow)" : undefined}>
        <path
          d="M24 10
             C20 6 13 6 10 10
             V34
             C13 30 20 30 24 34

             M24 10
             C28 6 35 6 38 10
             V34
             C35 30 28 30 24 34"
          stroke="#ff4c57"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1="24"
          y1="10"
          x2="24"
          y2="37"
          stroke="#ff4c57"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default BookIcon