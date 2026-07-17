export default function Footer() {
  return (
    <footer className="border-t border-[var(--accent-primary)]/10 py-10 text-center">
      <p className="font-display text-gradient text-lg font-bold">
        Shipping products. Winning hackathons. Still in college.
      </p>
      <p className="mt-3 font-mono text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Mohamed Athik R · Built with React, Three.js & GSAP
      </p>
    </footer>
  )
}
