import { useState, useEffect } from 'react'

export default function OSBootloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIATING CLOUD CONNECTION...')
  const [stage, setStage] = useState('loading') // 'loading' | 'welcome'
  const [logLines, setLogLines] = useState([])

  const logs = [
    'PING cloud.athikos.dev [SUCCESS]',
    'SECURE TLS SHAKING... REGISTERED',
    'ALLOCATING KERNEL MEMORY SPACE...',
    'DOWNLOADING CORE INTERACTIVE ENGINE...',
    'PULLING DESKTOP WINDOW MANAGER...',
    'VERIFYING SHA-256 SUMS... OK',
    'COMPILING WEBGL SHADERS FOR PARTICLES...',
    'LOADING HIGH-RES IMAGES & GRAPHICS...',
    'MOUNTING APPS & TROPHY ROOM SYSTEM...',
    'READY FOR BOOT.'
  ]

  useEffect(() => {
    // Add logs dynamically as progress goes up
    const logInterval = setInterval(() => {
      setLogLines(prev => {
        if (prev.length < logs.length) {
          return [...prev, logs[prev.length]]
        }
        clearInterval(logInterval)
        return prev
      })
    }, 280)

    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        const step = Math.floor(Math.random() * 8) + 4
        return Math.min(p + step, 100)
      })
    }, 150)

    return () => {
      clearInterval(logInterval)
      clearInterval(progressInterval)
    }
  }, [])

  useEffect(() => {
    if (progress < 25) {
      setStatusText('ESTABLISHING SECURE CLOUD LINK...')
    } else if (progress < 50) {
      setStatusText('DOWNLOADING CORE OS BINARIES...')
    } else if (progress < 75) {
      setStatusText('PREPARING ENVIRONMENT & SHADERS...')
    } else if (progress < 100) {
      setStatusText('INITIALIZING GRAPHICAL INTERFACES...')
    } else {
      setStatusText('BOOT SEQUENCE COMPLETE.')
      setTimeout(() => {
        setStage('welcome')
      }, 600)
    }
  }, [progress])

  useEffect(() => {
    if (stage === 'welcome') {
      const timer = setTimeout(() => {
        onComplete()
      }, 3500) // Keep the welcome screen for 3.5 seconds
      return () => clearTimeout(timer)
    }
  }, [stage, onComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] text-white font-sans select-none overflow-hidden">
      {/* Matrix-like scanner overlay */}
      <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none" />

      {stage === 'loading' ? (
        <div className="w-full max-w-md px-6 flex flex-col gap-6 relative z-10">
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="text-sm font-semibold tracking-[0.25em] text-cyan-400 font-mono animate-pulse">
              ATHIK CLOUD INFRASTRUCTURE
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight font-display bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              ATHIK OS v2.0
            </h1>
          </div>

          {/* Loader Terminal Logs */}
          <div className="h-32 bg-black/40 border border-white/10 rounded-lg p-4 font-mono text-[10px] text-cyan-300/80 overflow-y-auto flex flex-col gap-1 shadow-inner">
            {logLines.map((line, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-purple-400">❯</span>
                <span>{line}</span>
              </div>
            ))}
            {progress < 100 && (
              <div className="flex items-center gap-1 animate-pulse">
                <span className="text-cyan-400">❯</span>
                <span className="w-1.5 h-3 bg-cyan-400 inline-block" />
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-white/60 tracking-wider uppercase font-semibold">{statusText}</span>
              <span className="text-cyan-400 font-bold">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 border border-white/10 rounded-full p-[1px] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Welcome Stage */
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center animate-fade-in">
          <div className="welcome-glow-circle absolute z-0" />
          <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight font-display welcome-text p-4">
            Sit back, relax and enjoy the Show 🍷
          </h2>
        </div>
      )}
    </div>
  )
}
