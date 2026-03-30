'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BackBar() {
  const pathname = usePathname()
  if (pathname === '/') return null

  const isLivrePage = pathname.startsWith('/livre/')

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      height: '44px',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      background: 'rgba(12,11,9,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(196,154,74,0.15)',
    }}>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(240,235,224,0.5)',
          textDecoration: 'none',
          transition: 'color 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#C49A4A')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,224,0.5)')}
      >
        <span style={{ fontSize: '14px', lineHeight: 1 }}>←</span>
        Accueil
      </Link>

      {isLivrePage && (
        <>
          <span style={{ margin: '0 0.75rem', color: 'rgba(240,235,224,0.15)', fontSize: '10px' }}>·</span>
          <Link
            href="/catalogue"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(240,235,224,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C49A4A')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,235,224,0.5)')}
          >
            Catalogue
          </Link>
        </>
      )}
    </div>
  )
}
