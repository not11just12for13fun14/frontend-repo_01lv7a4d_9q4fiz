import { useState } from 'react'
import { Menu, X, CreditCard, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/80 to-cyan-400/80 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold leading-tight">Glacio</p>
                <p className="text-xs text-blue-200/80">Next‑gen Fintech</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-blue-100/80 hover:text-white transition-colors">Features</a>
              <a href="#security" className="text-blue-100/80 hover:text-white transition-colors">Security</a>
              <a href="#waitlist" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors border border-white/10">
                <Sparkles className="h-4 w-4 text-cyan-300" /> Join Waitlist
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              <a href="#features" className="block rounded-lg px-3 py-2 text-blue-100/80 hover:text-white hover:bg-white/10">Features</a>
              <a href="#security" className="block rounded-lg px-3 py-2 text-blue-100/80 hover:text-white hover:bg-white/10">Security</a>
              <a href="#waitlist" className="block rounded-lg px-3 py-2 text-white bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border border-white/10">Join Waitlist</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
