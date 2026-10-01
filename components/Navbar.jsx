'use client'

import { useState, useEffect } from 'react'

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['Home', 'Projects', 'About', 'Skills', 'Contact']

  return (
    <header className="navbar-header">
      <nav
        className="glass navbar-inner"
        style={{
          boxShadow: scrolled
            ? '0 8px 40px rgba(80,40,50,0.13)'
            : '0 4px 20px rgba(80,40,50,0.07)',
        }}
      >
        {/* Monogram */}
        <span className="navbar-monogram">RA</span>

        {/* Desktop links */}
        <div className="navbar-links">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="navbar-link"
              style={{
                color: link === 'Home' ? 'var(--accent)' : 'var(--muted)',
                background: link === 'Home' ? 'var(--light-pink)' : 'transparent',
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Dark toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="navbar-toggle-btn"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar-mobile-btn"
          aria-label="Menu"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer glass">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
