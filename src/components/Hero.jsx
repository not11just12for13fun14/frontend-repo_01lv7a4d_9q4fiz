import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(1000px_500px_at_90%_-20%,rgba(59,130,246,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_35%,rgba(2,6,23,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> New in finance UX
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200/70">
            The glassmorphic card for a borderless world
          </h1>
          <p className="mt-5 text-blue-100/80 text-lg">
            Manage, move, and grow your money with a minimalist, modern experience. Designed for global citizens and creators.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
            <a href="#waitlist" className="inline-flex justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_50px_rgba(255,255,255,0.25)] transition-shadow">
              Join the waitlist
            </a>
            <a href="#features" className="inline-flex justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10">
              Explore features
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 h-[480px] sm:h-[560px] lg:h-[640px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur relative">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
