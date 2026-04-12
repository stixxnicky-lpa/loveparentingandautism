import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Love, Parenting & Autism',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: 'var(--color-teal)' }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="text-white no-underline">
          <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-bold text-white leading-tight block">
            Love, Parenting
          </span>
          <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }} className="text-sm font-normal italic">
            &amp; Autism
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[['/', 'Home'], ['/shop', 'Shop'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="text-white font-medium hover:opacity-80 transition-opacity no-underline text-sm tracking-wide"
            >
              {label}
            </Link>
          ))}
          <Link to="/shop" className="btn-gold text-sm px-4 py-2 rounded-lg font-semibold" style={{ textDecoration: 'none' }}>
            Browse Guides
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: 'var(--color-teal-dark)' }} className="md:hidden px-5 pb-4 flex flex-col gap-3">
          {[['/', 'Home'], ['/shop', 'Shop'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="text-white font-medium py-2 border-b border-white/20 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-cream)' }} className="mt-16">
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-gold)' }} className="text-lg font-bold mb-3">
            Love, Parenting & Autism
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Real talk for neurotypical parents and partners navigating life alongside autism — with warmth, honesty, and 26 years of lived experience.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {[['/', 'Home'], ['/shop', 'Shop'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: 'var(--color-cream)' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm uppercase tracking-wider">Find Me Online</h4>
          <ul className="space-y-2">
            {[
            ['https://loveparentingautism.etsy.com', 'Etsy Shop'],
              ['https://www.instagram.com/loveparentingandautism/', 'Instagram'],
              ['https://www.facebook.com/profile.php?id=61588607705379', 'Facebook'],
              ['https://es.pinterest.com/stixxnicky', 'Pinterest'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity" style={{ color: 'var(--color-cream)' }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,248,240,0.15)' }} className="max-w-6xl mx-auto px-5 py-4 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Love, Parenting & Autism. All rights reserved.
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ backgroundColor: 'var(--color-cream)' }}>
        <Nav />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

