import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Photography Portfolio',
    description: 'A minimalist, high-performance gallery with buttery-smooth lightbox and generative covers.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Dental Clinic Platform',
    description: 'Full-stack appointment system with patient onboarding, analytics, and role-based access.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Creative Lab',
    description: 'Interactive micro-experiments exploring shaders, particles, and UI motion recipes.',
    tags: ['Shaders', 'Three.js', 'UX'],
    link: '#',
    repo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-glow">Signature Work</h2>
          <p className="mt-3 text-white/70 max-w-2xl">A selection of builds where code, craft, and curiosity meet.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 hover:border-white/20 hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-neon-orange/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="h-36 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-700 mb-5 ring-1 ring-white/10 shadow-inner" />

              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/70">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-2 text-neon-orange hover:underline">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-2 text-white/70 hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
