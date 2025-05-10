interface SprinklesPatternProps {
  className?: string
}

export function SprinklesPattern({ className = "" }: SprinklesPatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-20 ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sprinkles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="#ec4899" />
            <circle cx="15" cy="15" r="2" fill="#a855f7" />
            <circle cx="25" cy="5" r="2" fill="#14b8a6" />
            <circle cx="35" cy="15" r="2" fill="#3b82f6" />
            <circle cx="5" cy="25" r="2" fill="#facc15" />
            <circle cx="15" cy="35" r="2" fill="#ec4899" />
            <circle cx="25" cy="25" r="2" fill="#a855f7" />
            <circle cx="35" cy="35" r="2" fill="#14b8a6" />
            <rect x="10" y="10" width="4" height="4" fill="#facc15" />
            <rect x="30" y="10" width="4" height="4" fill="#ec4899" />
            <rect x="10" y="30" width="4" height="4" fill="#3b82f6" />
            <rect x="30" y="30" width="4" height="4" fill="#a855f7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sprinkles)" />
      </svg>
    </div>
  )
}
