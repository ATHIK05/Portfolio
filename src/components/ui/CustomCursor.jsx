import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [fine, setFine] = useState(false)

  useEffect(() => {
    setFine(window.matchMedia('(pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!fine) return

    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const over = (e) => {
      const isHot = !!e.target.closest('a, button, input, textarea, [role="button"], .cursor-pointer')
      if (ringRef.current) ringRef.current.classList.toggle('cursor-hot', isHot)
      if (dotRef.current) dotRef.current.classList.toggle('cursor-hot', isHot)
    }

    const loop = () => {
      // Instant positioning for dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`
      }

      // Lag/Lerp positioning for ring
      if (ringRef.current) {
        const dx = x - cx
        const dy = y - cy
        const speed = Math.sqrt(dx * dx + dy * dy)

        cx += dx * 0.15
        cy += dy * 0.15

        const isHot = ringRef.current.classList.contains('cursor-hot')

        if (isHot) {
          // Expand the lens stably on hover
          ringRef.current.style.transform = `translate(${cx - 12}px, ${cy - 12}px) scale(2.2)`
        } else {
          // Stretch fluidly in the direction of motion when moving
          const angle = Math.atan2(dy, dx) * (180 / Math.PI)
          const stretch = Math.min(speed * 0.05, 0.8) // Cap stretching to 0.8 to preserve shape
          const scaleX = 1 + stretch
          const scaleY = 1 - stretch * 0.3
          ringRef.current.style.transform = `translate(${cx - 12}px, ${cy - 12}px) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`
        }
      }

      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [fine])

  if (!fine) return null // hidden on touch devices
  return createPortal(
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>,
    document.body
  )
}
