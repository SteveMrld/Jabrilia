import Link from 'next/link'
import { books } from '@/lib/books'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import PinnedManifeste from '@/components/PinnedManifeste'
import AnimatedBookCard from '@/components/AnimatedBookCard'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticButton from '@/components/MagneticButton'

export default function Home() {
  const featured = books.slice(0, 3)

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <Hero />

      {/* ── Marquee ────────────────────────────────────────────── */}
      <MarqueeBanner />

      {/* ── Manifeste (scroll-scrubbed) ─────────────────────────── */}
      <PinnedManifeste />

      {/* ── Catalogue section ──────────────────────────────────── */}
      <section className="py-6 bg-cream">
        {/* Section label */}
        <div className="flex items-center gap-6 max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <div className="flex-1 h-px bg-ink/15" />
          <ScrollReveal>
            <span className="font-sans text-[10px] text-gold tracking-[0.35em] uppercase">Catalogue</span>
          </ScrollReveal>
          <div className="flex-1 h-px bg-ink/15" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12">
            {featured.map((book, i) => (
              <ScrollReveal key={book.slug} delay={i * 100}>
                <AnimatedBookCard book={book} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-20">
            <ScrollReveal>
              <MagneticButton className="inline-block">
                <Link
                  href="/catalogue"
                  className="block font-sans text-[11px] tracking-[0.28em] uppercase text-ink border border-ink/30 px-12 py-4 hover:bg-ink hover:text-paper hover:border-ink transition-all duration-400"
                >
                  Voir les {books.length} titres →
                </Link>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── À propos teaser ──────────────────────────────────────── */}
      <section className="py-36 px-6 bg-ink border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image — femme marchant vers la lumière */}
          <ScrollReveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/dnbyi8fw6/image/upload/v1774855773/file_000000006cbc7243b73c3bb8ce1c7f06_umb5tb.png"
                alt="Lire, c'est avancer"
                className="w-full h-full object-cover"
              />
              {/* Subtle dark overlay on edges */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(12,11,9,0.4) 0%, transparent 30%, transparent 70%, rgba(12,11,9,0.4) 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={150}>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">La maison</span>
            <h2
              className="font-serif font-light text-paper mt-5 mb-7 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Un éditeur indépendant au service des voix singulières
            </h2>
            <p className="font-sans text-paper/45 leading-relaxed text-sm md:text-base mb-10 max-w-lg">
              Jabrilia place la littérature au cœur des grandes transitions humaines.
              Née de la conviction qu'une liberté éditoriale totale permet l'émergence
              des projets les plus authentiques.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/a-propos"
                className="block font-sans text-[11px] tracking-[0.22em] uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-300"
              >
                Notre histoire →
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quote banner ─────────────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-ink/10 bg-cream-dark text-center">
        <ScrollReveal>
          <p
            className="font-serif italic font-light text-ink/50 max-w-3xl mx-auto leading-relaxed mb-14"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}
          >
            "Nous n'avons jamais trop de livres."
          </p>
          <MagneticButton className="inline-block">
            <Link
              href="/contact"
              className="block font-sans text-[11px] tracking-[0.28em] uppercase text-ink bg-gold px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Nous contacter
            </Link>
          </MagneticButton>
        </ScrollReveal>
      </section>
    </>
  )
}
