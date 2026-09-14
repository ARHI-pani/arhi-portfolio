type PixelProps = {
  className?: string
}

/**
 * Small helper that renders a grid of solid squares from a string matrix.
 * Each character maps to a fill color; a space means transparent.
 */
function PixelGrid({
  rows,
  palette,
  className,
  title,
}: {
  rows: string[]
  palette: Record<string, string>
  className?: string
  title: string
}) {
  const cols = rows[0].length
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows.length}`}
      className={className}
      role="img"
      aria-label={title}
      shapeRendering="crispEdges"
    >
      {rows.map((row, y) =>
        row.split('').map((ch, x) =>
          palette[ch] ? (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={palette[ch]}
            />
          ) : null,
        ),
      )}
    </svg>
  )
}

export function PixelInvader({ className }: PixelProps) {
  const rows = [
    '  Y   Y  ',
    ' YYYYYYY ',
    'YYYYYYYYY',
    'YYNYYYNYY',
    'YYYYYYYYY',
    ' Y YYY Y ',
    'Y Y   Y Y',
  ]
  return (
    <PixelGrid
      rows={rows}
      palette={{ Y: '#f5b41e', N: '#003e93' }}
      className={className}
      title="Pixel arcade creature"
    />
  )
}

export function GameBoy({ className }: PixelProps) {
  return (
    <svg
      viewBox="0 0 100 130"
      className={className}
      role="img"
      aria-label="Retro handheld console showing the year 2026"
      shapeRendering="crispEdges"
    >
      <rect
        x="4"
        y="4"
        width="92"
        height="122"
        rx="10"
        fill="#f5b41e"
        stroke="#003e93"
        strokeWidth="5"
      />
      <rect
        x="18"
        y="16"
        width="64"
        height="42"
        rx="4"
        fill="#fdf7e7"
        stroke="#003e93"
        strokeWidth="4"
      />
      <text
        x="50"
        y="44"
        textAnchor="middle"
        fontFamily="var(--font-pixel), monospace"
        fontSize="16"
        fill="#003e93"
      >
        2026
      </text>
      {/* D-pad */}
      <rect x="16" y="78" width="10" height="30" fill="#003e93" />
      <rect x="6" y="88" width="30" height="10" fill="#003e93" />
      {/* Buttons */}
      <circle cx="70" cy="82" r="7" fill="#ff5f5a" stroke="#003e93" strokeWidth="3" />
      <circle cx="84" cy="98" r="7" fill="#ff5f5a" stroke="#003e93" strokeWidth="3" />
    </svg>
  )
}

export function PixelStar({ className }: PixelProps) {
  const rows = [
    '  G  ',
    ' GGG ',
    'GGGGG',
    ' GGG ',
    'G   G',
  ]
  return (
    <PixelGrid
      rows={rows}
      palette={{ G: '#f5b41e' }}
      className={className}
      title="Pixel star"
    />
  )
}

export function PixelHeart({ className }: PixelProps) {
  const rows = [
    ' R R ',
    'RRRRR',
    'RRRRR',
    ' RRR ',
    '  R  ',
  ]
  return (
    <PixelGrid
      rows={rows}
      palette={{ R: '#ff5f5a' }}
      className={className}
      title="Pixel heart"
    />
  )
}
