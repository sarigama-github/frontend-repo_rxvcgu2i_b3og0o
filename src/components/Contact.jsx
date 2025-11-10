import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-glow">Let’s build something meaningful</h2>
        <p className="mt-3 text-white/70">Have a challenge, an idea, or a blank canvas? I’d love to hear it.</p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-neon-orange/60" />
          <input placeholder="Email" type="email" className="rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-neon-orange/60" />
          <textarea placeholder="Message" rows={4} className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-neon-orange/60" />
          <button className="sm:col-span-2 rounded-xl bg-gradient-to-r from-neon-orange via-neon-pink to-neon-purple px-6 py-3 font-medium text-white shadow-[0_10px_40px_-10px_rgba(255,106,0,0.7)] hover:shadow-[0_10px_50px_-10px_rgba(255,106,0,0.9)] transition">Send message</button>
        </motion.form>
      </div>
    </section>
  )
}
