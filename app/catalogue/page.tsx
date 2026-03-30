'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { books } from '@/lib/books'
import BookCard from '@/components/BookCard'
import ScrollReveal from '@/components/ScrollReveal'

// Les 4 genres de Jabrilia Éditions + "Tous"
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
    <>
      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden bg-paper">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dnbyi8fw6/image/upload/v1774855773/file_00000000e4dc71f48207943aa88c4d93_huietn.png"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ opacity: 0.06 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">
              Notre sélection
            </p>
            <h1
              className="font-serif font-light text-ink leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
            >
              Catalogue
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-px bg-gold" />
              <p className="font-sans text-ink/35 text-sm">{books.length} titres</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtres actifs */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {GENRES.map(genre => {
            const isActive = genre === activeGenre
            return (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`
                  relative font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 border
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? 'border-gold bg-gold text-ink'
                    : 'border-border text-ink/35 hover:border-ink/20 hover:text-ink/60'
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

      {/* Divider */}
      <div className="h-px bg-border max-w-7xl mx-auto mx-6 mb-20" />

      {/* Grille filtrée avec animation */}
      <section className="pb-36 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((book, i) => (
                <motion.div
                  key={book.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <BookCard book={book} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-ink/30 font-serif text-xl py-24">
              Aucun titre dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
