'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const opaque = scrolled || !isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          opaque
            ? 'bg-ink/96 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">

          {/* Logo + flèche retour sur pages internes */}
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link
                href="/"
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.2em] uppercase text-paper/40 hover:text-gold transition-colors duration-300 group"
                aria-label="Retour à l'accueil"
              >
                <span className="text-base leading-none transition-transform duration-300 group-hover:-translate-x-1">←</span>
              </Link>
            )}
            <Link
              href="/"
              className="font-serif text-xl md:text-2xl tracking-[0.22em] font-light text-paper hover:text-gold transition-colors duration-300"
            >
              JABRILIA<span className="text-gold">.</span>
            </Link>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 group ${
                  pathname === link.href ? 'text-gold' : 'text-paper/55 hover:text-paper'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            <span
              className={`block w-full h-px bg-paper origin-center transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-2/3 h-px bg-paper transition-all duration-300 ${
                open ? 'opacity-0 -translate-x-2' : ''
              }`}
            />
            <span
              className={`block w-full h-px bg-paper origin-center transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink/98 backdrop-blur-lg flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-serif text-4xl font-light tracking-widest transition-colors duration-300 ${
              pathname === link.href ? 'text-gold' : 'text-paper/70 hover:text-gold'
            }`}
            style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="mailto:contact@jabrilia.com"
          className="mt-8 font-sans text-xs tracking-[0.25em] uppercase text-paper/40 hover:text-gold transition-colors"
        >
          contact@jabrilia.com
        </a>
      </div>
    </>
  )
}
