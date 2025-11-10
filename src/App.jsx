import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-neon-orange/30 selection:text-white">
      {/* Hero with immersive Spline background */}
      <Hero />

      {/* Code meets art ribbon */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-[-1px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,106,0,0.12),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:16px_12px] opacity-30" />
            <div className="relative grid gap-6 sm:grid-cols-2">
              <pre className="rounded-xl bg-black/40 p-4 text-sm leading-relaxed ring-1 ring-white/10 overflow-x-auto">
{`const experience = compose(art, code)

const product = experience
  .with(precision)
  .with(emotion)
  .ship("delight")
`}
              </pre>
              <div className="flex items-center">
                <p className="text-white/80">
                  A scroll‑triggered moment where syntax becomes story. Design and development converge—
                  aesthetics inform logic, and logic shapes experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Timeline */}
      <Timeline />

      {/* Creative Lab teaser */}
      <section id="lab" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-glow">Creative Lab</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Small, delightful experiments: widgets, motion studies, and open‑source snippets.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-neon-orange/10 via-transparent to-purple-500/10" />
                <div className="h-36 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-700 mb-5 ring-1 ring-white/10 shadow-inner animate-pulse" />
                <h3 className="text-white font-semibold">Idea #{i + 1}</h3>
                <p className="text-white/70 text-sm mt-1">Exploration into motion, texture, and interaction.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        <p>© {new Date().getFullYear()} Harish Garg. Built with care.</p>
      </footer>
    </div>
  )
}

export default App
