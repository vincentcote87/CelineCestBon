// Flat food illustrations used as decoration. All are hidden from screen readers.
import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

const base = (props: Props) => ({
  'aria-hidden': true,
  focusable: false,
  ...props,
})

export function Tomato(props: Props) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <circle cx="32" cy="36" r="24" fill="#d9301f" />
      <ellipse cx="23" cy="28" rx="6" ry="4" fill="#fff" opacity="0.25" />
      <path
        d="M32 14c-3 0-8-2-11-1 2 2 4 4 8 5-3 1-6 4-7 7 4-1 7-3 10-5 3 2 6 4 10 5-1-3-4-6-7-7 4-1 6-3 8-5-3-1-8 1-11 1z"
        fill="#2f8a3b"
      />
      <rect x="31" y="6" width="2.5" height="9" rx="1.25" fill="#2a6435" />
    </svg>
  )
}

export function Lime(props: Props) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <circle cx="32" cy="32" r="28" fill="#8fc94f" />
      <circle cx="32" cy="32" r="24" fill="#f4f9e8" />
      <circle cx="32" cy="32" r="21" fill="#c7e59a" />
      <g stroke="#f4f9e8" strokeWidth="2.2" strokeLinecap="round">
        {[0, 45, 90, 135].map((a) => (
          <line key={a} x1="32" y1="12" x2="32" y2="52" transform={`rotate(${a} 32 32)`} />
        ))}
      </g>
      <circle cx="32" cy="32" r="2.5" fill="#f4f9e8" />
    </svg>
  )
}

export function Pepper(props: Props) {
  return (
    <svg viewBox="0 0 64 64" {...base(props)}>
      <path
        d="M18 26c0-6 6-9 14-9s14 3 14 9c0 14-4 30-14 30S18 40 18 26z"
        fill="#f2b51c"
      />
      <path d="M26 24c0 10 1 22 3 28" stroke="#d99a0b" strokeWidth="2" fill="none" />
      <path d="M32 18c0-5 2-9 6-11" stroke="#2f8a3b" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Leaf(props: Props) {
  return (
    <svg viewBox="0 0 64 32" {...base(props)}>
      <path d="M2 18C14 2 44 0 62 12 46 28 16 30 2 18z" fill="currentColor" />
      <path d="M8 18c16-4 32-6 50-6" stroke="#fff" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function Sprout(props: Props) {
  return (
    <svg viewBox="0 0 96 64" {...base(props)}>
      <ellipse cx="48" cy="58" rx="26" ry="10" fill="#7a4a2a" />
      <path d="M48 52V26" stroke="#2f8a3b" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M48 32C40 20 26 18 14 24c10 8 24 10 34 8z" fill="#58a845" />
      <path d="M48 28c8-14 24-18 36-12-10 10-24 14-36 12z" fill="#2f8a3b" />
    </svg>
  )
}

export function Apple(props: Props) {
  return (
    <svg viewBox="0 0 96 64" {...base(props)}>
      <rect x="56" y="30" width="30" height="22" rx="3" fill="#d9301f" />
      <circle cx="40" cy="36" r="22" fill="#7cc243" />
      <ellipse cx="32" cy="28" rx="6" ry="4" fill="#fff" opacity="0.3" />
      <path d="M40 15c0-4 1-7 3-9" stroke="#2a6435" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Pot(props: Props) {
  return (
    <svg viewBox="0 0 96 64" {...base(props)}>
      <rect x="47" y="2" width="2" height="10" rx="1" fill="#8a7d72" />
      <circle cx="48" cy="18" r="4" fill="#c8281e" />
      <path d="M18 24h60c0 3-1 4-3 4H21c-2 0-3-1-3-4z" fill="#a51f17" />
      <path d="M22 28h52v12c0 10-8 18-18 18H40c-10 0-18-8-18-18V28z" fill="#c8281e" />
      <rect x="12" y="30" width="10" height="5" rx="2.5" fill="#a51f17" />
      <rect x="74" y="30" width="10" height="5" rx="2.5" fill="#a51f17" />
    </svg>
  )
}

// The "cinq épices" (five spices): five coloured dots.
export function SpiceDots(props: Props) {
  const colors = ['#c8281e', '#e9ad1f', '#2a6435', '#7cc243', '#7a4a2a']
  return (
    <svg viewBox="0 0 130 24" {...base(props)}>
      {colors.map((c, i) => (
        <circle key={c} cx={12 + i * 26.5} cy="12" r="10" fill={c} />
      ))}
    </svg>
  )
}
