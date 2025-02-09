import type React from "react"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DevCrd Logo"
    >
      <g stroke="currentColor" strokeWidth="3">
        <g strokeWidth="2.5">
          <path d="M85 85 L100 60 L115 85" />
          <path d="M85 115 L100 140 L115 115" />
          <path d="M60 100 L85 85 L85 115" />
          <path d="M140 100 L115 85 L115 115" />
        </g>
      </g>
      <g stroke="currentColor" strokeWidth="3" opacity="0.75">
        <path d="M100 20 L150 45 L150 95 L100 120 L50 95 L50 45 Z" />
        <path d="M100 70 L125 82.5 L125 107.5 L100 120 L75 107.5 L75 82.5 Z" />
      </g>
    </svg>
  )
}

export default Logo

