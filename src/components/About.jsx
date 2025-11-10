import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-glow"
        >
          Where code meets feeling
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-white/80 leading-relaxed text-lg"
        >
          I’m Harish Garg, a Full Stack Developer Intern at Zenmonk. I build interfaces that feel effortless—and systems that scale quietly behind the scenes. My journey started as a curious tinkerer, turning ideas into interactive stories. Today, I combine empathy, engineering, and design to craft digital experiences that speak to both heart and mind.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-white/70"
        >
          I believe in thoughtful motion, accessible systems, and creative discipline. Beyond shipping features, I care about narratives—how each click feels, how pages breathe, and how products express purpose.
        </motion.p>
      </div>
    </section>
  )
}
