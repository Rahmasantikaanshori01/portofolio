export function HeroOrb({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id="orb1" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F6DDE0" />
          <stop offset="50%" stopColor="#E8B4B8" />
          <stop offset="100%" stopColor="#C77D87" stopOpacity="0.6" />
        </radialGradient>
        <filter id="blur1">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#orb1)" />
      <circle cx="200" cy="200" r="180" fill="url(#orb1)" opacity="0.3" filter="url(#blur1)" />
      <ellipse cx="150" cy="140" rx="60" ry="40" fill="white" opacity="0.25" />
    </svg>
  )
}

export function WaveShape({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 600 300" fill="none" className={className} style={style} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6DDE0" />
          <stop offset="100%" stopColor="#E8B4B8" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path d="M0,80 C80,20 180,140 280,80 C380,20 480,120 600,60 L600,300 L0,300 Z" fill="url(#wave1)" />
    </svg>
  )
}

export function SmallOrb({ color = '#E8B4B8', size = 60, opacity = 0.7 }) {
  const gradientId = `sorb-${color.replace('#', '')}`
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="28" fill={`url(#${gradientId})`} opacity={opacity} />
    </svg>
  )
}

export function AbstractBlob({ className = '', style = {} }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6DDE0" />
          <stop offset="100%" stopColor="#D99AA2" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d="M160,20 C220,20 270,70 275,140 C280,210 240,270 170,275 C100,280 30,235 20,165 C10,95 60,20 160,20 Z"
        fill="url(#blob1)"
      />
    </svg>
  )
}

export function DotGrid({ className = '', style = {} }) {
  const dots = []
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 8; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="2" fill="currentColor" />)
    }
  }
  return (
    <svg viewBox="0 0 170 110" className={className} style={style} aria-hidden="true">
      {dots}
    </svg>
  )
}
