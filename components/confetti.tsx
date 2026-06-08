"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

const COLORS = ["#FFD93D", "#FFC300", "#FFB703", "#FFE066", "#FCA311", "#FFDD55"]

type Piece = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  color: string
  rotate: number
}

export function Confetti({ count = 40 }: { count?: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 10,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: Math.random() * 360,
    }))
  }, [count])

  if (!mounted) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
          }}
          initial={{ y: "-10vh", opacity: 0, rotate: p.rotate }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0.8],
            rotate: p.rotate + 360,
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
