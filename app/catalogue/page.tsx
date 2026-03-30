import type { Metadata } from 'next'
import { books } from '@/lib/books'
import BookCard from '@/components/BookCard'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Tous les titres publiés par Jabrilia Éditions — romans, essais, bandes dessinées.',
}

const genres = ['Tous', ...Array.from(new Set(books.map(b => b.genre)))]

export default function CataloguePage() {
  return (
    <>
      {/* Header with atmospheric image */}
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        {/* Background image — livre ouvert dans la nature */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dnbyi8fw6/image/upload/v1774855773/file_00000000e4dc71f48207943aa88c4d93_huietn.png"
            alt=""
            aria-hidden
            className="w-full h-full object-cover"
            style={{ opacity: 0.12 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">
              Notre sélection
            </p>
            <h1
              className="font-serif font-light text-paper leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
            >
              Catalogue
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-px bg-gold" />
              <p className="font-sans text-paper/35 text-sm">{books.length} titres</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Genres */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {genres.map(genre => (
            <span
              key={genre}
              className={`font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 border cursor-default ${
                genre === 'Tous'
                  ? 'border-gold text-gold'
                  : 'border-border text-paper/35 hover:border-paper/30 hover:text-paper/60 transition-colors duration-300'
              }`}
            >
              {genre}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border max-w-7xl mx-auto mx-6 mb-20" />

      {/* Grid */}
      <section className="pb-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-10">
            {books.map((book, i) => (
              <ScrollReveal key={book.slug} delay={i * 50}>
                <BookCard book={book} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
