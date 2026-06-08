"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useRef, useState } from "react"
import { Confetti } from "./confetti"

export function ProposalSection() {
  const [accepted, setAccepted] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [dodgeCount, setDodgeCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const dodge = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const { width, height } = container.getBoundingClientRect()
    // Keep the button comfortably inside the container bounds.
    const maxX = Math.max(width / 2 - 90, 40)
    const maxY = Math.max(height / 2 - 60, 40)
    const x = (Math.random() * 2 - 1) * maxX
    const y = (Math.random() * 2 - 1) * maxY
    setNoPos({ x, y })
    setDodgeCount((c) => c + 1)
  }, [])

  const noMessages = [
    "NO",
    "¿Segura? 🥺",
    "Pensalo bien...",
    "¡No me agarrás! 😜",
    "Intentá de nuevo",
    "Imposible 💛",
  ]
  const noLabel = noMessages[Math.min(dodgeCount, noMessages.length - 1)]

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-background to-accent/40 px-6"
    >
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="ask"
            className="relative z-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.div
              className="mb-6 text-5xl sm:text-6xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
            >
              {"💛"}
            </motion.div>

            <h2 className="max-w-xl text-balance font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
              ¿Querés ser mi novia?
            </h2>

            <p className="mt-4 max-w-md text-pretty text-lg text-muted-foreground">
              Solo hay una respuesta correcta... y el otro botón es medio tímido.
            </p>

            <div className="relative mt-12 flex w-full items-center justify-center gap-6">
              <motion.button
                type="button"
                onClick={() => setAccepted(true)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-2xl bg-primary px-12 py-5 text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/40 transition-colors hover:bg-accent sm:text-3xl"
              >
                SÍ 💛
              </motion.button>

              <motion.button
                type="button"
                onMouseEnter={dodge}
                onPointerDown={(e) => {
                  e.preventDefault()
                  dodge()
                }}
                onFocus={dodge}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="rounded-2xl border-2 border-border bg-card px-10 py-5 text-2xl font-bold text-muted-foreground shadow-sm sm:text-3xl"
              >
                {noLabel}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="yes"
            className="relative z-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <Confetti count={70} />
            <motion.div
              className="mb-6 text-7xl sm:text-8xl"
              animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              {"💛💍💛"}
            </motion.div>
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
              ¡Sabía que dirías que sí!
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-xl text-foreground/80 sm:text-2xl">
              Te amo con todo mi corazón. Gracias por hacerme el más feliz del
              mundo 💛💛💛
            </p>
            <motion.p
              className="mt-8 text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
            >
              {"🥰🎉💛✨"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
