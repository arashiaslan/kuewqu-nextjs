"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  distance?: number
}

export function FloatingElement({
  children,
  className = "",
  duration = 3,
  delay = 0,
  distance = 15,
}: FloatingElementProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className={className}>{children}</div>

  return (
    <div
      className={`transition-transform ${className}`}
      style={{
        animation: `floating ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
      <style jsx global>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(${distance}px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}
