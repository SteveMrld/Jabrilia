'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="min-h-screen bg-paper">

      {/* ── Header ── */}
      <section className="pt-32 pb-12 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">
            Notre sélection
          </p>
          <h1
            className="font-serif font-light text-ink leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          >
            Catalogue
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-gold" />
            <p className="font-sans text-ink/35 text-sm">{books.length} titres</p>
          </div>
        </div>
      </section>

      {/* ── Filtres ── */}
      <section className="px-6 pb-10 bg-paper">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {GENRES.map(genre => {
            const isActive = genre === activeGenre
            return (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`
                  font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 border
                  transition-all duration-300
                  ${isActive
                    ? 'border-gold bg-gold text-ink'
                    : 'border-ink/20 text-ink/40 hover:border-gold/60 hover:text-ink/70'
                  }
                `}
              >
                {genre}
                <span className={`ml-2 text-[9px] ${isActive ? 'text-ink/60' : 'text-gold/70'}`}>
                  {counts[genre]}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <div className="h-px bg-ink/10 max-w-7xl mx-auto mb-12 mx-6" />

      {/* ── Grille ── */}
      <section className="pb-32 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((book, i) => (
                <motion.div
                  key={book.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                >
                  <BookCard book={book} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-ink/30 font-serif text-xl py-24">
              Aucun titre dans cette catégorie.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
