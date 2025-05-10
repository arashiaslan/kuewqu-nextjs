interface CurvedDividerProps {
  position: "top" | "bottom"
  fill: string
  className?: string
}

export function CurvedDivider({ position, fill, className = "" }: CurvedDividerProps) {
  return (
    <div className={`absolute left-0 right-0 w-full overflow-hidden ${className}`} style={{ height: "70px" }}>
      {position === "top" ? (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill={fill}
            opacity="1"
          ></path>
        </svg>
      ) : (
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill={fill}
            opacity="1"
          ></path>
        </svg>
      )}
    </div>
  )
}
