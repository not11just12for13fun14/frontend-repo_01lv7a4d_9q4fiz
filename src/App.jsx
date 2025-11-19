import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Waitlist from './components/Waitlist'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(1000px_500px_at_110%_-10%,rgba(59,130,246,0.12),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Waitlist />
      </main>

      <footer className="relative py-10 text-center text-blue-200/60">
        © {new Date().getFullYear()} Glacio. All rights reserved.
      </footer>
    </div>
  )
}

export default App
