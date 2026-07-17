import { useState } from 'react'
import emailjs from '@emailjs/browser'

const CONFIGURED = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID)

const ORB_COLORS = {
  idle: 'rgba(136, 132, 168, 0.5)',
  active: '#7B61FF',
  sent: '#22C55E',
  error: '#FF6B35',
}

const inputCls =
  'w-full rounded-xl border border-[var(--accent-primary)]/20 bg-black/30 px-4 py-2.5 text-xs outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)]'

export default function MailApp() {
  const [state, setState] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!CONFIGURED) {
      // EmailJS not configured yet — graceful mailto fallback
      const fd = new FormData(e.target)
      const subject = encodeURIComponent(`Portfolio contact from ${fd.get('from_name')}`)
      const body = encodeURIComponent(`${fd.get('message')}\n\n— ${fd.get('reply_to')}`)
      window.location.href = `mailto:hello@mohamedathik.dev?subject=${subject}&body=${body}`
      setState('sent')
      return
    }
    setState('active')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setState('sent')
      e.target.reset()
    } catch {
      setState('error')
    }
  }

  const color = ORB_COLORS[state]

  return (
    <div className="flex flex-col items-center p-6">
      {/* Orb syncs to form state: neutral → violet → green */}
      <div
        className="h-20 w-20 rounded-full transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${color}, transparent 70%)`,
          boxShadow: `0 0 50px ${color}`,
          animation: 'orb-pulse 3s ease-in-out infinite',
        }}
      />
      <p className="mt-3 text-xs text-[var(--text-muted)]">
        {state === 'sent' ? 'Message away! \ud83d\ude80' : "Let's build something together."}
      </p>
      <form
        onSubmit={onSubmit}
        onFocus={() => state === 'idle' && setState('active')}
        className="mt-5 w-full max-w-sm space-y-3"
      >
        <input name="from_name" required placeholder="Your name" className={inputCls} />
        <input name="reply_to" type="email" required placeholder="Your email" className={inputCls} />
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project\u2026"
          className={inputCls}
        />
        <button
          type="submit"
          disabled={state === 'active'}
          className="w-full rounded-full bg-[image:var(--gradient-hero)] px-6 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {state === 'sent' ? 'Sent \u2713' : state === 'active' ? 'Sending\u2026' : 'Send Message \u2192'}
        </button>
        {state === 'error' && (
          <p className="text-xs text-[var(--accent-orange)]">Something went wrong — try again.</p>
        )}
      </form>
    </div>
  )
}
