import Link from 'next/link'
import { books } from '@/lib/books'
import { news } from '@/lib/news'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import PinnedManifeste from '@/components/PinnedManifeste'
import AnimatedBookCard from '@/components/AnimatedBookCard'
import MagneticButton from '@/components/MagneticButton'

export default function Home() {
  const featured = [
    books.find(b => b.slug === 'sur-les-hauteurs-des-chutes-du-niagara'),
    books.find(b => b.slug === 'du-chaos-nait-une-etoile'),
    books.find(b => b.slug === 'mon-petit-livre-anti-stress'),
    books.find(b => b.slug === 'les-memoires-reliees'),
  ].filter(Boolean) as typeof books

  return (
    <>
      <Hero />
      <MarqueeBanner />
      <PinnedManifeste />

      {/* ── Catalogue ── */}
      <section className="pt-10 pb-10 bg-paper">
        <div className="flex items-center gap-5 max-w-5xl mx-auto px-6 mb-8">
          <div className="flex-1 h-px bg-ink/12" />
          <span className="font-sans text-[10px] text-gold tracking-[0.35em] uppercase shrink-0">Catalogue</span>
          <div className="flex-1 h-px bg-ink/12" />
        </div>

        <div className="max-w-5xl mx-auto px-6 overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
            {featured.map((book) => (
              <div key={book.slug} style={{ flex: '0 0 68vw', maxWidth: '240px', scrollSnapAlign: 'start' }}>
                <AnimatedBookCard book={book} />
              </div>
            ))}
            <div style={{ flex: '0 0 1.5rem' }} />
          </div>

          <div className="text-center mt-8">
            <Link href="/catalogue" className="group inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-ink/50 hover:text-gold transition-colors duration-300">
              <span className="w-6 h-px bg-ink/20 group-hover:bg-gold transition-all duration-300" />
              Découvrir le catalogue complet
              <span className="w-6 h-px bg-ink/20 group-hover:bg-gold transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── La Maison ── */}
      <section className="py-12 lg:py-20 px-6 bg-paper border-t border-ink/8">
        <div className="max-w-5xl mx-auto">
          <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-gold block mb-2">La maison</span>
          <div className="w-8 h-px bg-gold mb-5" />
          <h2 className="font-serif font-light text-ink mb-5 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Un éditeur indépendant au service des voix singulières
          </h2>
          <p className="font-sans text-ink/50 leading-relaxed text-sm mb-7 max-w-xl">
            Jabrilia place la littérature au cœur des grandes transitions humaines.
            Née de la conviction qu'une liberté éditoriale totale permet l'émergence des projets les plus authentiques.
          </p>
          <Link href="/a-propos" className="inline font-sans text-[11px] tracking-[0.22em] uppercase text-ink border-b border-ink/25 pb-0.5 hover:border-gold hover:text-gold transition-colors duration-300">
            Notre histoire →
          </Link>
        </div>
      </section>

      {/* ── Actualités ── */}
      <section className="py-12 lg:py-18 px-6 bg-paper border-t border-ink/8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <div className="flex-1 h-px bg-ink/10" />
            <span className="font-sans text-[10px] text-gold tracking-[0.35em] uppercase shrink-0">Actualités</span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>

          <div>
            {news.map((item, i) => (
              <div key={item.id} className={`py-6 ${i < news.length - 1 ? 'border-b border-ink/8' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold bg-gold/10 px-2 py-0.5">
                    {item.category}
                  </span>
                  <span className="font-sans text-[10px] text-ink/30">{item.date}</span>
                </div>
                <h3 className="font-serif font-light text-ink leading-snug mb-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">
                      {item.title} <span className="text-gold/60 text-sm">↗</span>
                    </a>
                  ) : item.title}
                </h3>
                <p className="font-sans text-sm text-ink/45 leading-relaxed">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Citation ── */}
      <section className="py-12 px-6 border-t border-ink/8 bg-paper text-center">
        <p className="font-serif italic font-light text-ink/45 max-w-2xl mx-auto leading-relaxed mb-8" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
          "Nous n'avons jamais trop de livres."
        </p>
        <Link href="/contact" className="inline-block font-sans text-[11px] tracking-[0.28em] uppercase text-ink bg-gold px-10 py-3.5 hover:bg-gold-light transition-colors duration-300">
          Nous contacter
        </Link>
      </section>
    </>
  )
}
