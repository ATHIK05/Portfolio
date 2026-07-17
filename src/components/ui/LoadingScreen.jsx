import { useEffect, useState } from 'react'

const VISITED_KEY = 'ma_visited'

export default function LoadingScreen() {
  // Returning visitors skip the loader entirely
  const [done, setDone] = useState(() => {
    try {
      return localStorage.getItem(VISITED_KEY) === '1'
    } catch {
      return false
    }
  })
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)

  const finish = () => {
    try {
      localStorage.setItem(VISITED_KEY, '1')
    } catch {
      /* private mode */
    }
    setDone(true)
  }

  useEffect(() => {
    if (done) return
    const skipTimer = setTimeout(() => setShowSkip(true), 1000) // skip visible after 1s
    const interval = setInterval(() => {
      setProgress((p) => {
        const cap = document.readyState === 'complete' ? 100 : 90
        return Math.min(p + Math.random() * 18, cap)
      })
    }, 200)
    return () => {
      clearTimeout(skipTimer)
      clearInterval(interval)
    }
  }, [done])

  useEffect(() => {
    if (!done && progress >= 100) finish()
  }, [progress, done])

  if (done) return null
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-void)]">
      <p className="font-display text-gradient text-2xl font-black">MA.</p>
      <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[image:var(--gradient-hero)] transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      {showSkip && (
        <button
          onClick={finish}
          className="mt-6 font-mono text-xs text-[var(--text-muted)] underline underline-offset-4 hover:text-white"
        >
          skip →
        </button>
      )}
    </div>
  )
}
