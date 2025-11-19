import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState({ state: 'idle' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })
    try {
      const res = await fetch(`${baseUrl}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'landing' }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setStatus({ state: 'success', id: data.id })
      setEmail('')
      setName('')
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="waitlist" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Be first to get the card</h2>
        <p className="mt-3 text-blue-100/80">Early members get priority access and limited launch perks.</p>

        <form onSubmit={submit} className="mt-8 grid sm:grid-cols-[1fr_1fr_auto] gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="h-12 rounded-xl bg-transparent px-4 text-white placeholder:text-blue-200/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" type="email" required className="h-12 rounded-xl bg-transparent px-4 text-white placeholder:text-blue-200/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <button disabled={status.state==='loading'} className="h-12 rounded-xl bg-white text-slate-900 font-semibold px-6 hover:opacity-90 disabled:opacity-60">{status.state==='loading'?'Joining...':'Join'}</button>
        </form>

        {status.state==='success' && (
          <p className="mt-4 text-cyan-300">You're on the list! We'll be in touch soon.</p>
        )}
        {status.state==='error' && (
          <p className="mt-4 text-red-300">Something went wrong: {status.message}</p>
        )}
      </div>
    </section>
  )
}
