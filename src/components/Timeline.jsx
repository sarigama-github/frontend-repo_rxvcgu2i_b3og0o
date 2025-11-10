import { motion } from 'framer-motion'

const timeline = [
  { year: '2023', title: 'Zenmonk Internship', text: 'Immersed in full‑stack delivery, shipping features end‑to‑end.' },
  { year: '2022', title: 'Creative Explorations', text: 'Built micro‑experiments blending code, cameras, and craft.' },
  { year: '2021', title: 'Foundations', text: 'Fell in love with the web. Learned to design with empathy.' },
]

export default function Timeline() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-glow">Constellation of Growth</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Nodes of progress connected by curiosity and grit.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-0 pointer-events-none opacity-40">
            <svg viewBox="0 0 800 200" className="w-full h-40">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff6a00" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
                </radialGradient>
              </defs>
              {timeline.map((_, i) => (
                <circle key={i} cx={100 + i * 250} cy={100 + (i % 2 === 0 ? -20 : 20)} r="30" fill="url(#glow)" />
              ))}
              {timeline.slice(0, -1).map((_, i) => (
                <line key={i} x1={130 + i * 250} y1={100 + (i % 2 === 0 ? -20 : 20)} x2={100 + (i + 1) * 250 - 30} y2={100 + ((i + 1) % 2 === 0 ? -20 : 20)} stroke="#ff6a00" strokeOpacity="0.6" strokeWidth="2" />
              ))}
            </svg>
          </div>

          <ol className="relative z-10 grid sm:grid-cols-3 gap-6">
            {timeline.map((item, i) => (
              <motion.li
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-neon-orange text-sm font-medium">{item.year}</p>
                <h3 className="mt-1 text-white text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
