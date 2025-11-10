import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ThemeToggle from './ThemeToggle'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl items-center px-6">
        <div className="pointer-events-auto">
          <ThemeToggle />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-glow"
          >
            Harish Garg
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-3 text-lg sm:text-xl text-white/80 max-w-xl"
          >
            Crafting experiences that merge logic and emotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.1 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            {['Full Stack Developer', 'Innovator', 'Creator'].map((chip, i) => (
              <span key={chip} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur">
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
