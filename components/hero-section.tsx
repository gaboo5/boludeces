"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Confetti } from "./confetti"

export function HeroSection() {
  const title = "¡Feliz Cumpleaños Mi Luci Bella!"

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-secondary to-background px-6">
      <Confetti count={45} />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-6 text-6xl sm:text-7xl"
          animate={{ rotate: [0, -10, 10, -10, 0], y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {"🎂"}
        </motion.div>

        <h1 className="flex flex-wrap justify-center gap-x-3 font-heading text-balance text-5xl font-extrabold leading-tight text-foreground sm:text-7xl">
          {title.split(" ").map((word, wi) => (
            <span key={wi} className="inline-flex">
              {word.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + (wi * 5 + ci) * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-4 text-2xl sm:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {"✨🎉💛"}
        </motion.p>

        <motion.p
          className="mt-6 max-w-md text-pretty text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          Hoy es tu día y quiero hacerlo inolvidable. Bajá despacito, tengo algo
          que decirte...
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="mb-2 text-sm font-medium">Deslizá hacia abajo</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </motion.div>
    </section>
  )
}
