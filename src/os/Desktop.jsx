import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { APPS, getApp } from './apps/index'

export default function Desktop({ setViewMode }) {
  const [openWindows, setOpenWindows] = useState([])
  const [isStartOpen, setIsStartOpen] = useState(false)
  const [time, setTime] = useState('')
  const [activeMenu, setActiveMenu] = useState(null)
  const [spotlightOpen, setSpotlightOpen] = useState(false)
  const [spotlightQuery, setSpotlightQuery] = useState('')
  const [wallpaperOpacity, setWallpaperOpacity] = useState(0.35)
  const [wallpaperBrightness, setWallpaperBrightness] = useState(1.2)
  const [toastMsg, setToastMsg] = useState(null)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [wifiConnected, setWifiConnected] = useState(true)

  const desktopRef = useRef(null)
  const canvasRef = useRef(null)

  // Trigger temporary HUD toast notification
  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => {
      setToastMsg(null)
    }, 2500)
  }

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        showToast(`Fullscreen Error: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Handle keyboard shortcut for Spotlight (Command/Ctrl + Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
        e.preventDefault()
        setSpotlightOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Load, pixelate and setup interactive particle physics for wallpaper
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    let particles = []
    let rafId
    let mx = -9999
    let my = -9999

    const img = new Image()
    img.src = '/images/developer_photo.JPG'
    img.crossOrigin = 'Anonymous'
    img.onload = () => {
      // 300px width for sharp, recognizable face while keeping pixel aesthetic
      const width = 300
      const height = Math.round((img.height / img.width) * width)

      canvas.width = width
      canvas.height = height

      // Offscreen canvas to sample pixels
      const offscreen = document.createElement('canvas')
      offscreen.width = width
      offscreen.height = height
      const offCtx = offscreen.getContext('2d')
      offCtx.drawImage(img, 0, 0, width, height)
      const imgData = offCtx.getImageData(0, 0, width, height)
      const data = imgData.data

      // Keep ALL pixels — no white-keying (the shirt is white, we don't want to delete it)
      // Only skip fully transparent pixels (which JPGs don't have anyway)
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4
          const r = data[idx]
          const g = data[idx + 1]
          const b = data[idx + 2]
          const a = data[idx + 3]

          if (a < 10) continue // Skip only fully transparent

          particles.push({
            x, y,
            cx: x, cy: y,
            vx: 0, vy: 0,
            r, g, b, a,
          })
        }
      }

      const loop = () => {
        ctx.clearRect(0, 0, width, height)

        const outputData = ctx.createImageData(width, height)
        const outPixels = outputData.data

        // Subtle mouse ripple — small radius and gentle force to avoid creating a void
        const radius = 8
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const dx = p.cx - mx
          const dy = p.cy - my
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < radius) {
            const force = (radius - dist) / radius
            const angle = Math.atan2(dy, dx)
            // Gentle push — just enough to see the ripple, not create a hole
            p.vx += Math.cos(angle) * force * 0.6
            p.vy += Math.sin(angle) * force * 0.6
          }

          // Strong spring snaps particles back quickly
          p.vx += (p.x - p.cx) * 0.15
          p.vy += (p.y - p.cy) * 0.15

          // High friction to prevent particles drifting far
          p.vx *= 0.7
          p.vy *= 0.7

          p.cx += p.vx
          p.cy += p.vy

          // Write pixel to output buffer
          const px = Math.round(p.cx)
          const py = Math.round(p.cy)
          if (px >= 0 && px < width && py >= 0 && py < height) {
            const outIdx = (py * width + px) * 4
            // Additive blending — if two particles land on same pixel, keep brighter one
            if (outPixels[outIdx + 3] === 0 || p.a > outPixels[outIdx + 3]) {
              outPixels[outIdx] = p.r
              outPixels[outIdx + 1] = p.g
              outPixels[outIdx + 2] = p.b
              outPixels[outIdx + 3] = p.a
            }
          }
        }

        ctx.putImageData(outputData, 0, 0)
        rafId = requestAnimationFrame(loop)
      }

      loop()
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mx = ((e.clientX - rect.left) / rect.width) * canvas.width
      my = ((e.clientY - rect.top) / rect.height) * canvas.height
    }

    const onMouseLeave = () => {
      mx = -9999
      my = -9999
    }

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])  // Update clock every second to macOS format: Mon Oct 11 9:41 AM
  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      const options = { weekday: 'short', month: 'short', day: 'numeric' }
      const dateStr = date.toLocaleDateString('en-US', options).replace(',', '')
      
      let hours = date.getHours()
      const minutes = date.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      hours = hours ? hours : 12 // the hour '0' should be '12'
      const minStr = minutes < 10 ? '0' + minutes : minutes
      setTime(`${dateStr} ${hours}:${minStr} ${ampm}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Auto-launch terminal on first load
  useEffect(() => {
    launchApp('terminal')
  }, [])
  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id))
  }

  const minimizeWindow = (id) => {
    setOpenWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) return { ...w, isMinimized: true }
        return w
      })
    )
  }

  const toggleMaximize = (id) => {
    setOpenWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) return { ...w, isMaximized: !w.isMaximized }
        return w
      })
    )
  }

  const focusWindow = (id) => {
    setOpenWindows((prev) => {
      const maxZ = prev.reduce((max, w) => Math.max(max, w.zIndex || 0), 10)
      const target = prev.find((w) => w.id === id)
      if (target && target.zIndex === maxZ && prev.length > 1) return prev

      return prev.map((w) => {
        if (w.id === id) return { ...w, zIndex: maxZ + 1 }
        return w
      })
    })
  }

  const launchApp = (id) => {
    setIsStartOpen(false)
    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === id)
      const maxZ = prev.reduce((max, w) => Math.max(max, w.zIndex || 0), 10)

      if (existing) {
        // Restore if minimized and focus
        return prev.map((w) => {
          if (w.id === id) return { ...w, isMinimized: false, zIndex: maxZ + 1 }
          return w
        })
      } else {
        const app = getApp(id)
        if (!app) return prev

        const count = prev.length
        const isMobile = window.innerWidth < 768

        // Cascading coordinates relative to center
        const x = isMobile ? 0 : 80 + (count % 5) * 30
        const y = isMobile ? 0 : 60 + (count % 5) * 30

        const newWin = {
          id: app.id,
          title: app.title,
          icon: app.icon,
          tint: app.tint,
          component: app.component,
          size: { ...app.size },
          position: { x, y },
          isMaximized: isMobile, // Maximize by default on mobile
          isMinimized: false,
          zIndex: maxZ + 1,
        }

        return [...prev, newWin]
      }
    })
  }

  const handleDockClick = (id) => {
    const win = openWindows.find((w) => w.id === id)
    if (!win) {
      launchApp(id)
      return
    }

    const maxZ = openWindows.reduce((max, w) => Math.max(max, w.zIndex || 0), 10)
    const isFocused = win.zIndex === maxZ && !win.isMinimized

    if (isFocused) {
      // Minimize if already in focus
      minimizeWindow(id)
    } else {
      // Focus/Restore if minimized or in background
      setOpenWindows((prev) =>
        prev.map((w) => {
          if (w.id === id) {
            return { ...w, isMinimized: false, zIndex: maxZ + 1 }
          }
          return w
        })
      )
    }
  }

  // Handle custom drag resize
  const handleResizeStart = (e, winId) => {
    e.preventDefault()
    e.stopPropagation()
    const startX = e.clientX
    const startY = e.clientY
    const win = openWindows.find((w) => w.id === winId)
    if (!win) return
    const startW = win.size.w
    const startH = win.size.h

    const onMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX
      const deltaY = moveEvent.clientY - startY
      setOpenWindows((prev) =>
        prev.map((w) => {
          if (w.id === winId) {
            return {
              ...w,
              size: {
                w: Math.max(320, startW + deltaX),
                h: Math.max(240, startH + deltaY),
              },
            }
          }
          return w
        })
      )
    }

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return (    <div
      ref={desktopRef}
      className="relative h-screen w-screen overflow-hidden select-none bg-[radial-gradient(circle_at_center,rgba(26,20,55,0.4)_0%,#050508_100%)] p-4"
      onClick={() => {
        setIsStartOpen(false)
        setActiveMenu(null)
      }}
    >
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[var(--accent-primary)]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--accent-cyan)]/5 blur-[120px]" />

      {/* Fullscreen Pixelated Wallpaper with Interactive Pixel Dispersion */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <canvas
          ref={canvasRef}
          className="pointer-events-auto cursor-default transition-all duration-300"
          style={{
            imageRendering: 'pixelated',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            opacity: wallpaperOpacity,
            filter: `brightness(${wallpaperBrightness})`,
          }}
        />
      </div>
      {/* HUD Toast notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/85 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md z-[100] text-[11px] font-mono text-[var(--accent-cyan)] flex items-center gap-2"
          >
            <span>✨</span> {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spotlight Search Overlay */}
      <AnimatePresence>
        {spotlightOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[90] flex items-start justify-center pt-[20vh]"
            onClick={() => setSpotlightOpen(false)}
          >
            <motion.div
              className="w-[90vw] max-w-[500px] bg-black/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-3 py-2 border-b border-white/5">
                <span className="text-white/60 text-base">🔍</span>
                <input
                  type="text"
                  placeholder="Search apps, projects, skills or awards... (Esc to close)"
                  value={spotlightQuery}
                  onChange={(e) => setSpotlightQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white/35 font-mono text-sm w-full focus:outline-none"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setSpotlightOpen(false)
                    if (e.key === 'Enter') {
                      // Launch top matching app
                      const match = APPS.find(
                        (app) =>
                          app.title.toLowerCase().includes(spotlightQuery.toLowerCase()) ||
                          app.id.toLowerCase().includes(spotlightQuery.toLowerCase())
                      )
                      if (match) {
                        launchApp(match.id)
                        setSpotlightOpen(false)
                        setSpotlightQuery('')
                      } else {
                        showToast(`No matches found for "${spotlightQuery}"`)
                      }
                    }
                  }}
                />
              </div>

              {/* Suggestions */}
              <div className="mt-2 max-h-48 overflow-y-auto space-y-1">
                {APPS.filter(
                  (app) =>
                    !spotlightQuery ||
                    app.title.toLowerCase().includes(spotlightQuery.toLowerCase()) ||
                    app.id.toLowerCase().includes(spotlightQuery.toLowerCase())
                ).map((app) => (
                  <button
                    key={app.id}
                    onClick={() => {
                      launchApp(app.id)
                      setSpotlightOpen(false)
                      setSpotlightQuery('')
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 text-left text-white/80 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{app.icon}</span>
                      <span className="font-mono text-xs font-semibold">{app.title}</span>
                    </div>
                    <span className="font-mono text-[9px] text-white/30 uppercase">Launch App</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* macOS Style Top Menu Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-7 bg-white/[0.04] border-b border-white/5 backdrop-blur-md z-[70] flex items-center justify-between px-4 text-white/90 text-[11px] font-sans font-medium select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveMenu(activeMenu === 'apple' ? null : 'apple')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'apple' ? 'bg-white/10 text-white' : 'text-white'}`}
          >
            
          </button>
          
          <button
            onClick={() => setActiveMenu(activeMenu === 'finder' ? null : 'finder')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors font-semibold ${activeMenu === 'finder' ? 'bg-white/10 text-white' : 'text-white'}`}
          >
            Finder
          </button>

          <button
            onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'file' ? 'bg-white/10 text-white' : 'text-white/75'}`}
          >
            File
          </button>

          <button
            onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'edit' ? 'bg-white/10 text-white' : 'text-white/75'}`}
          >
            Edit
          </button>

          <button
            onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'view' ? 'bg-white/10 text-white' : 'text-white/75'}`}
          >
            View
          </button>

          <button
            onClick={() => setActiveMenu(activeMenu === 'go' ? null : 'go')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'go' ? 'bg-white/10 text-white' : 'text-white/75'}`}
          >
            Go
          </button>

          <button
            onClick={() => setActiveMenu(activeMenu === 'window' ? null : 'window')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'window' ? 'bg-white/10 text-white' : 'text-white/75'}`}
          >
            Window
          </button>

          <button
            onClick={() => setActiveMenu(activeMenu === 'help' ? null : 'help')}
            className={`px-2 py-0.5 rounded cursor-default hover:bg-white/10 active:bg-white/15 transition-colors ${activeMenu === 'help' ? 'bg-white/10 text-white' : 'text-white/75'}`}
          >
            Help
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Battery */}
          <button
            onClick={() => setActiveMenu(activeMenu === 'battery' ? null : 'battery')}
            className={`flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-white/10 active:bg-white/15 transition-all cursor-default ${activeMenu === 'battery' ? 'bg-white/10 text-white' : 'text-white/85'}`}
          >
            <span className="text-[9px] text-white/60 font-mono">100%</span>
            <svg className="w-5 h-2.5" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.8" />
              <rect x="2.5" y="2.5" width="16" height="7" rx="1" fill="currentColor" />
              <path d="M22 4V8" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </button>

          {/* Wifi */}
          <button
            onClick={() => setActiveMenu(activeMenu === 'wifi' ? null : 'wifi')}
            className={`p-1 rounded hover:bg-white/10 active:bg-white/15 transition-all cursor-default ${activeMenu === 'wifi' ? 'bg-white/10 text-white' : 'text-white/85'}`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h.01M5 12.859a10 10 0 0114 0M8.5 16.293a5 5 0 017 0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Spotlight Search */}
          <button
            onClick={() => setSpotlightOpen(!spotlightOpen)}
            className={`p-1 rounded hover:bg-white/10 active:bg-white/15 transition-all cursor-default ${spotlightOpen ? 'bg-white/10 text-white' : 'text-white/85'}`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>

          {/* Control Center */}
          <button
            onClick={() => setActiveMenu(activeMenu === 'control' ? null : 'control')}
            className={`p-1 rounded hover:bg-white/10 active:bg-white/15 transition-all cursor-default ${activeMenu === 'control' ? 'bg-white/10 text-white' : 'text-white/85'}`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>

          {/* Time & Date */}
          <span className="font-sans font-medium text-[11px] cursor-default hover:text-white transition-colors pr-1">
            {time}
          </span>
        </div>

        {/* --- LEFT DROPDOWNS --- */}
        <AnimatePresence>
          {/* Apple Menu */}
          {activeMenu === 'apple' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-4 w-44 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              <button
                onClick={() => {
                  launchApp('about')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>ℹ️ About Athik</span>
              </button>
              <button
                onClick={() => {
                  launchApp('skills')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>🛠️ System Settings</span>
              </button>
              <button
                onClick={() => {
                  launchApp('gallery')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>🖼️ Change Wallpaper...</span>
              </button>
              <div className="h-[1px] bg-white/10 my-1" />
              <button
                onClick={() => {
                  setOpenWindows([])
                  setWallpaperOpacity(0.08)
                  showToast('AthikOS put to sleep 💤')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>😴 Sleep System</span>
              </button>
              <button
                onClick={() => {
                  setOpenWindows([])
                  setWallpaperOpacity(0.35)
                  setWallpaperBrightness(1.2)
                  launchApp('terminal')
                  showToast('AthikOS restarted successfully!')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-[var(--accent-primary)] hover:text-white"
              >
                <span>🔄 Restart AthikOS</span>
              </button>
            </motion.div>
          )}

          {/* Finder Menu */}
          {activeMenu === 'finder' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-14 w-44 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              <button
                onClick={() => {
                  showToast("AthikOS Finder — Ver 2.0.0. Double click apps to open.")
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>Finder Info</span>
              </button>
              <button
                onClick={() => {
                  launchApp('terminal')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>Terminal Mode</span>
              </button>
            </motion.div>
          )}

          {/* File Menu */}
          {activeMenu === 'file' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-24 w-44 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              {APPS.slice(0, 5).map((app) => (
                <button
                  key={app.id}
                  onClick={() => {
                    launchApp(app.id)
                    setActiveMenu(null)
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
                >
                  <span>{app.icon}</span>
                  <span>Open {app.title}</span>
                </button>
              ))}
              <div className="h-[1px] bg-white/10 my-1" />
              <button
                onClick={() => {
                  setOpenWindows([])
                  setActiveMenu(null)
                  showToast('Closed all active windows')
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-red-400 hover:text-red-300"
              >
                <span>❌ Close All Windows</span>
              </button>
            </motion.div>
          )}

          {/* Edit Menu */}
          {activeMenu === 'edit' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-32 w-48 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              <button
                onClick={() => {
                  navigator.clipboard.writeText('rathik.ma@gmail.com')
                  showToast('Email address copied to clipboard!')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>📋 Copy Contact Email</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('https://github.com/rathik-ma')
                  showToast('GitHub Profile link copied!')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>💻 Copy GitHub Link</span>
              </button>
            </motion.div>
          )}

          {/* View Menu */}
          {activeMenu === 'view' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-40 w-48 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              <button
                onClick={() => {
                  toggleFullscreen()
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>🖥️ Toggle OS Fullscreen</span>
              </button>
              <button
                onClick={() => {
                  setViewMode('classic')
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-[var(--accent-cyan)] hover:text-white"
              >
                <span>📄 Go to Classic Landing</span>
              </button>
            </motion.div>
          )}

          {/* Go Menu */}
          {activeMenu === 'go' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-[200px] w-48 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              {APPS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => {
                    launchApp(app.id)
                    setActiveMenu(null)
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
                >
                  <span>{app.icon}</span>
                  <span>{app.title}</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* Window Menu */}
          {activeMenu === 'window' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-[245px] w-48 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              {openWindows.length === 0 ? (
                <div className="px-3 py-2 text-white/40 text-center select-none">
                  No Active Windows
                </div>
              ) : (
                openWindows.map((win) => (
                  <button
                    key={win.id}
                    onClick={() => {
                      focusWindow(win.id)
                      setActiveMenu(null)
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
                  >
                    <span className="truncate">{win.icon} {win.title}</span>
                    <span className="text-[8px] text-[var(--accent-primary)] font-bold">Focus</span>
                  </button>
                ))
              )}
            </motion.div>
          )}

          {/* Help Menu */}
          {activeMenu === 'help' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 left-[290px] w-52 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-1 z-[80] font-mono text-[10px]"
            >
              <button
                onClick={() => {
                  showToast("💡 Click app shortcuts on desktop or dock to explore Athik's portfolio.")
                  setActiveMenu(null)
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>💡 Quick System Guide</span>
              </button>
              <button
                onClick={() => {
                  launchApp('terminal')
                  setActiveMenu(null)
                  showToast("Type 'help' in terminal to view system details!")
                }}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-white/5 text-left text-white/85 hover:text-white"
              >
                <span>💻 Terminal Commands List</span>
              </button>
            </motion.div>
          )}

          {/* --- RIGHT DROPDOWNS --- */}
          {/* Battery Dropdown */}
          {activeMenu === 'battery' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 right-32 w-56 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-3.5 z-[80] font-mono text-[10px] text-white/80 space-y-1.5"
            >
              <div className="font-bold text-white border-b border-white/10 pb-1 flex justify-between">
                <span>Power Source: Battery</span>
                <span className="text-[var(--accent-primary)]">100%</span>
              </div>
              <div>Health Status: <span className="text-green-400">98% (Excellent)</span></div>
              <div>Condition: Normal</div>
              <div>Estimated Time Remaining: <span className="text-white">Calculating...</span></div>
            </motion.div>
          )}

          {/* Wifi Dropdown */}
          {activeMenu === 'wifi' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 right-24 w-56 bg-black/80 border border-white/10 rounded-lg shadow-2xl p-3.5 z-[80] font-mono text-[10px] text-white/80 space-y-1.5"
            >
              <div className="font-bold text-white border-b border-white/10 pb-1 flex justify-between">
                <span>Wi-Fi Network</span>
                <span className="text-green-400">On</span>
              </div>
              <div className="text-white/95">Connected to: <span className="font-semibold text-[var(--accent-cyan)]">Athik_5G_HighSpeed</span></div>
              <div>IP Address: 192.168.1.77</div>
              <div>Network Signal Strength: <span className="text-green-400">Excellent (📶 -8ms latency)</span></div>
            </motion.div>
          )}

          {/* Control Center Menu */}
          {activeMenu === 'control' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-8 right-4 w-60 bg-black/85 border border-white/10 rounded-xl shadow-2xl p-4 z-[80] font-mono text-[10px] text-white/80 space-y-4"
            >
              {/* Sliders */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-white/60">
                    <span>Wallpaper Opacity</span>
                    <span className="text-[var(--accent-cyan)] font-bold">{Math.round(wallpaperOpacity * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="0.80"
                    step="0.05"
                    value={wallpaperOpacity}
                    onChange={(e) => setWallpaperOpacity(parseFloat(e.target.value))}
                    className="w-full accent-[var(--accent-cyan)] bg-white/10 h-1 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-white/60">
                    <span>Wallpaper Brightness</span>
                    <span className="text-[var(--accent-primary)] font-bold">{Math.round(wallpaperBrightness * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={wallpaperBrightness}
                    onChange={(e) => setWallpaperBrightness(parseFloat(e.target.value))}
                    className="w-full accent-[var(--accent-primary)] bg-white/10 h-1 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                <button
                  onClick={() => {
                    setSoundEnabled(!soundEnabled)
                    showToast(soundEnabled ? 'System sounds muted' : 'System sounds enabled 🔊')
                  }}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${soundEnabled ? 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)] text-white' : 'bg-white/5 border-white/5 text-white/50'}`}
                >
                  <span className="text-base">{soundEnabled ? '🔊' : '🔇'}</span>
                  <span className="text-[8px] mt-1">Sound FX</span>
                </button>
                <button
                  onClick={() => {
                    setWifiConnected(!wifiConnected)
                    showToast(wifiConnected ? 'Disconnected from Wi-Fi' : 'Connected to Athik_5G network')
                  }}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${wifiConnected ? 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-white' : 'bg-white/5 border-white/5 text-white/50'}`}
                >
                  <span className="text-base">{wifiConnected ? '📶' : '📴'}</span>
                  <span className="text-[8px] mt-1">Wi-Fi</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Grid of Icons */}
      <div 
        className="absolute left-6 top-12 grid gap-x-8 gap-y-2.5 z-10"
        style={{
          gridTemplateRows: 'repeat(7, auto)',
          gridAutoFlow: 'column',
          alignContent: 'start',
        }}
      >
        {APPS.map((app) => (
          <button
            key={app.id}
            onClick={(e) => {
              e.stopPropagation()
              launchApp(app.id)
            }}
            className="group flex w-20 flex-col items-center gap-1.5 focus:outline-none"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-surface)]/40 border border-white/5 shadow-lg backdrop-blur-sm transition-all group-hover:scale-108 group-hover:bg-white/10 group-active:scale-95"
              style={{ borderLeftColor: `${app.tint}88`, borderTopColor: `${app.tint}88` }}
            >
              <span className="text-2xl drop-shadow">{app.icon}</span>
            </div>
            <span className="font-mono text-[10px] text-white/75 text-center tracking-tight drop-shadow-md group-hover:text-white transition-colors">
              {app.title}
            </span>
          </button>
        ))}
      </div>

      {/* Windows Layer */}
      <AnimatePresence>
        {openWindows.map((win) => {
          const AppContent = win.component
          return (
            <motion.div
              key={win.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{
                scale: win.isMinimized ? 0.75 : 1,
                opacity: win.isMinimized ? 0 : 1,
                y: win.isMinimized ? 150 : 0,
              }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              drag={!win.isMaximized && window.innerWidth >= 768}
              dragMomentum={false}
              dragHandleClassName="window-titlebar"
              dragConstraints={desktopRef}
              style={{
                position: 'absolute',
                left: win.isMaximized ? 0 : win.position.x,
                top: win.isMaximized ? 0 : win.position.y,
                width: win.isMaximized ? '100vw' : win.size.w,
                height: win.isMaximized ? 'calc(100vh - 64px)' : win.size.h,
                zIndex: win.zIndex,
              }}
              className={`card-glass flex flex-col overflow-hidden shadow-2xl backdrop-blur-md transition-shadow duration-300 ${win.isMaximized ? 'rounded-none border-none' : 'rounded-2xl border border-white/15'
                }`}
              onClick={(e) => {
                e.stopPropagation()
                focusWindow(win.id)
              }}
            >
              {/* Window Titlebar */}
              <div
                className="window-titlebar flex h-10 shrink-0 cursor-move items-center justify-between bg-black/40 px-4 border-b border-white/5 select-none"
                onDoubleClick={() => toggleMaximize(win.id)}
              >
                {/* Window Controls */}
                <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => closeWindow(win.id)}
                    className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors shadow-sm"
                    aria-label="Close window"
                  />
                  <button
                    onClick={() => minimizeWindow(win.id)}
                    className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors shadow-sm"
                    aria-label="Minimize window"
                  />
                  <button
                    onClick={() => toggleMaximize(win.id)}
                    className="hidden h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors shadow-sm sm:block"
                    aria-label="Maximize window"
                  />
                </div>

                {/* Window Title */}
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-white/80">
                  <span>{win.icon}</span>
                  <span>{win.title}</span>
                </div>

                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Window Content */}
              <div className="flex-1 overflow-auto bg-black/35">
                <AppContent openApp={launchApp} />
              </div>

              {/* Resize Handle (only if not maximized) */}
              {!win.isMaximized && window.innerWidth >= 768 && (
                <div
                  className="absolute bottom-0 right-0 h-4 w-4 cursor-se-resize bg-transparent"
                  onMouseDown={(e) => handleResizeStart(e, win.id)}
                />
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Dock / Taskbar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between w-[92vw] max-w-[680px] h-12 px-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-lg z-50">

        {/* Start / Switch Button */}
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsStartOpen(!isStartOpen)
            }}
            className={`flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg text-gradient font-display text-xs font-black tracking-tight transition-all active:scale-95 ${isStartOpen ? 'bg-white/10 border-white/20' : ''
              }`}
          >
            MA.
          </button>

          {/* Start Menu Popup */}
          <AnimatePresence>
            {isStartOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-14 left-0 w-64 card-glass border border-white/15 rounded-xl p-4 shadow-2xl backdrop-blur-xl z-50 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-sm font-black text-white">
                    MA
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Mohamed Athik R</h4>
                    <p className="text-[10px] text-[var(--accent-cyan)] font-mono">Founder & Builder</p>
                  </div>
                </div>

                <div className="py-2 space-y-1 font-mono text-[11px]">
                  <button
                    onClick={() => {
                      setIsStartOpen(false)
                      setViewMode('classic')
                    }}
                    className="flex w-full items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white text-left transition-colors"
                  >
                    <span>📄</span> Classic Landing Page
                  </button>
                  <button
                    onClick={() => {
                      setOpenWindows([])
                      launchApp('terminal')
                    }}
                    className="flex w-full items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white text-left transition-colors"
                  >
                    <span>🔄</span> Restart AthikOS
                  </button>
                  <button
                    onClick={() => setOpenWindows([])}
                    className="flex w-full items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white text-left transition-colors"
                  >
                    <span>❌</span> Close All Windows
                  </button>
                  <button
                    onClick={() => launchApp('about')}
                    className="flex w-full items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-[var(--accent-primary)] hover:text-white text-left transition-colors"
                  >
                    <span>ℹ️</span> About This System
                  </button>
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-white/40 font-mono">
                  <span>v2.0.0-stable</span>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub ↗</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dock Items (Centered) */}
        <div className="flex items-center gap-2">
          {APPS.map((app) => {
            const isOpen = openWindows.some((w) => w.id === app.id)
            const isMinimized = openWindows.find((w) => w.id === app.id)?.isMinimized

            return (
              <button
                key={app.id}
                onClick={() => handleDockClick(app.id)}
                className="group relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-105 transition-all active:scale-95"
                title={app.title}
              >
                <span className="text-xl drop-shadow group-hover:scale-110 transition-transform">{app.icon}</span>
                {/* Active Indicator dots */}
                {isOpen && (
                  <span
                    className={`absolute -bottom-1 h-1.5 rounded-full transition-all duration-300 ${isMinimized
                        ? 'w-1.5 bg-white/40'
                        : 'w-3 bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]'
                      }`}
                  />
                )}
              </button>
            )
          })}
        </div>

      </div>
    </div>
  )
}
