import Section from '../ui/Section'

export default function Contact() {
  return (
    <Section id="contact" kicker="07 — CONTACT" title="Let's build something.">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left Column: Direct Call to Action */}
        <div>
          <h3 className="font-display text-2xl lg:text-3xl font-black text-[var(--text-primary)] leading-tight">
            We can connect and work together.
          </h3>
          <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
            Ready to collaborate on mobile app development, startup architectures, or AI integrations. 
            Connect with me on social platforms to initiate discussions or browse my live works.
          </p>
        </div>

        {/* Right Column: Social Connection Cards */}
        <div className="space-y-4">
          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/mohamedathik"
            target="_blank"
            rel="noreferrer"
            className="card-glass flex items-center gap-4 rounded-xl p-5 border border-[rgba(123,97,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,119,181,0.12)] group"
          >
            <div className="h-12 w-12 rounded-lg bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center transition-colors group-hover:bg-[#0077B5] group-hover:text-white shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-[var(--text-primary)]">LinkedIn Professional</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Explore enterprise architecture & consultancies</p>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/hyy_thikk"
            target="_blank"
            rel="noreferrer"
            className="card-glass flex items-center gap-4 rounded-xl p-5 border border-[rgba(123,97,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(225,48,108,0.12)] group"
          >
            <div className="h-12 w-12 rounded-lg bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center transition-colors group-hover:bg-[#E1306C] group-hover:text-white shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-[var(--text-primary)]">Instagram Social</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Direct chat at @hyy_thikk for casual collabs</p>
            </div>
          </a>
        </div>
      </div>
    </Section>
  )
}
