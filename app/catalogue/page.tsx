'use client'

import { useState, useMemo } from 'react'
import { books } from '@/lib/books'
import BookCard from '@/components/BookCard'

const GENRES = ['Tous', 'Romans', 'Essais', 'Jeunesse', 'Bande dessinée'] as const
type Genre = typeof GENRES[number]

export default function CataloguePage() {
  const [activeGenre, setActiveGenre] = useState<Genre>('Tous')

  const filtered = useMemo(
    () => activeGenre === 'Tous' ? books : books.filter(b => b.genre === activeGenre),
    [activeGenre]
  )

  const counts = useMemo(() =>
    GENRES.reduce((acc, g) => {
      acc[g] = g === 'Tous' ? books.length : books.filter(b => b.genre === g).length
      return acc
    }, {} as Record<Genre, number>),
    []
  )

  return (
    <div style={{ minHeight: '100vh', background: '#F0EBE0' }}>

      {/* Header */}
      <div style={{ paddingTop: '8rem', paddingBottom: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C49A4A', marginBottom: '1rem' }}>
          Notre sélection
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, color: '#0C0B09', lineHeight: 1, fontSize: 'clamp(3rem, 10vw, 7rem)', marginBottom: '1.5rem' }}>
          Catalogue
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '2.5rem', height: '1px', background: '#C49A4A' }} />
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'rgba(12,11,9,0.4)' }}>{books.length} titres</p>
        </div>
      </div>

      {/* Filtres */}
      <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', maxWidth: '80rem', margin: '0 auto' }}>
          {GENRES.map(genre => {
            const isActive = genre === activeGenre
            return (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1rem',
                  border: isActive ? '1px solid #C49A4A' : '1px solid rgba(12,11,9,0.2)',
                  background: isActive ? '#C49A4A' : 'transparent',
                  color: isActive ? '#0C0B09' : 'rgba(12,11,9,0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                {genre} <span style={{ fontSize: '9px', opacity: 0.7 }}>{counts[genre]}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ height: '1px', background: 'rgba(12,11,9,0.1)', maxWidth: '80rem', margin: '0 auto 3rem', marginLeft: '1.5rem', marginRight: '1.5rem' }} />

      {/* Grille */}
      <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingBottom: '8rem', maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="md:grid-cols-3 lg:grid-cols-4">
          {filtered.map(book => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'rgba(12,11,9,0.3)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', padding: '6rem 0' }}>
            Aucun titre dans cette catégorie.
          </p>
        )}
      </div>
    </div>
  )
}
