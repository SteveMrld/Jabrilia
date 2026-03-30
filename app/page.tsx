import Link from 'next/link'
import { books } from '@/lib/books'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import PinnedManifeste from '@/components/PinnedManifeste'
import AnimatedBookCard from '@/components/AnimatedBookCard'
import MagneticButton from '@/components/MagneticButton'

export default function Home() {
  const featured = books.filter(b =>
    ['du-chaos-nait-une-etoile', 'mon-petit-livre-anti-stress', 'les-memoires-reliees'].includes(b.slug)
  )

  return (
    <>
      <Hero />
      <MarqueeBanner />
      <PinnedManifeste />

      {/* ── Catalogue ── */}
      <section className="pt-16 pb-20 bg-paper">
        <div className="flex items-center gap-6 max-w-5xl mx-auto px-6 mb-12">
          <div className="flex-1 h-px bg-ink/15" />
          <span className="font-sans text-[10px] text-gold tracking-[0.35em] uppercase">Catalogue</span>
          <div className="flex-1 h-px bg-ink/15" />
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
            {featured.map((book) => (
              <AnimatedBookCard key={book.slug} book={book} />
            ))}
          </div>

          <div className="text-center mt-12">
            <MagneticButton className="inline-block">
              <Link
                href="/catalogue"
                className="group inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-ink/60 hover:text-gold transition-colors duration-500"
              >
                <span className="w-8 h-px bg-ink/20 group-hover:bg-gold group-hover:w-12 transition-all duration-500" />
                Découvrir le catalogue complet
                <span className="w-8 h-px bg-ink/20 group-hover:bg-gold group-hover:w-12 transition-all duration-500" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ── À propos ── */}
      <section className="py-20 lg:py-32 px-6 bg-paper border-t border-ink/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="hidden lg:block relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnbyi8fw6/image/upload/v1774855773/file_000000006cbc7243b73c3bb8ce1c7f06_umb5tb.png"
              alt="Lire, c'est avancer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper to-transparent" />
          </div>
          <div>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">La maison</span>
            <h2
              className="font-serif font-light text-ink mt-5 mb-7 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Un éditeur indépendant au service des voix singulières
            </h2>
            <p className="font-sans text-ink/55 leading-relaxed text-sm md:text-base mb-10 max-w-lg">
              Jabrilia place la littérature au cœur des grandes transitions humaines.
              Née de la conviction qu'une liberté éditoriale totale permet l'émergence
              des projets les plus authentiques.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/a-propos"
                className="block font-sans text-[11px] tracking-[0.22em] uppercase text-ink border-b border-ink/30 pb-0.5 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Notre histoire →
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ── Citation ── */}
      <section className="py-16 lg:py-24 px-6 border-t border-ink/10 bg-paper text-center">
        <p
          className="font-serif italic font-light text-ink/50 max-w-3xl mx-auto leading-relaxed mb-12"
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
      </section>
    </>
  )
}
