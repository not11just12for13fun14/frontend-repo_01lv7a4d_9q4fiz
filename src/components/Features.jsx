import { Shield, Globe, Zap, ArrowRight } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Globe,
      title: 'Multi‑currency by default',
      desc: 'Hold and spend in 30+ currencies with real‑time FX at transparent rates.',
    },
    {
      icon: Shield,
      title: 'Security as a feature',
      desc: 'Biometric auth, dynamic CVV, per‑merchant controls, and instant locks.',
    },
    {
      icon: Zap,
      title: 'Built for speed',
      desc: 'Tap‑to‑pay, instant notifications, and API access for power users.',
    },
  ]

  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_70%_10%,rgba(6,182,212,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 text-cyan-200">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-blue-100/80">{it.desc}</p>
              <a href="#waitlist" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-white">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
