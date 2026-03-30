import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'À propos',
  description: "La maison d'édition Jabrilia — son histoire, sa mission, ses valeurs.",
}

export default function AProposPage() {
  return (
    <>
      {/* ── Hero avec Image 3 — mains + livre + particules ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dnbyi8fw6/image/upload/v1774855773/file_0000000074c871f49607c3d984d92026_zduwcm.png"
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.14 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">La maison</p>
            <h1
              className="font-serif font-light text-paper leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
            >
              Notre histoire
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-36 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Main text */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2
                className="font-serif font-light text-paper mb-10 leading-[1.2]"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                Une maison née de la conviction que la liberté éditoriale totale
                permet l'émergence des projets les plus authentiques.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-7 font-sans text-paper/50 leading-relaxed text-sm md:text-base">
                <p>
                  Jabrilia est une maison d'édition indépendante qui place la littérature
                  au cœur des grandes transitions humaines. Elle publie des œuvres qui allient
                  exigence artistique, pertinence intellectuelle et accessibilité, en croisant
                  les disciplines, les formes narratives et les sensibilités contemporaines.
                </p>
                <p>
                  Jabrilia s'est donnée pour mission de révéler des voix singulières, de créer
                  des ponts entre mémoire et innovation, et de proposer des livres qui éveillent
                  autant qu'ils questionnent.
                </p>
                <p>
                  Dans un monde en mutation, nous pensons que les livres doivent jouer un rôle
                  actif : éclairer, transmettre, relier, inspirer. Chaque ouvrage que nous portons
                  est conçu comme un projet éditorial complet, alliant profondeur du propos,
                  qualité d'écriture, et esthétique de l'objet-livre.
                </p>
                <p>
                  Parce que la littérature ne se réduit ni au divertissement ni au manifeste.
                  Elle donne à voir, à sentir, à comprendre autrement.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Values card */}
          <div className="lg:col-span-4 lg:col-start-9">
            <ScrollReveal delay={200}>
              <div className="border border-border p-8">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-8">
                  Nos valeurs
                </p>
                <div className="space-y-0">
                  {[
                    { title: 'Exigence artistique', desc: 'Chaque livre, un projet éditorial complet.' },
                    { title: 'Indépendance', desc: 'Liberté totale pour les voix les plus authentiques.' },
                    { title: 'Accessibilité', desc: 'Des œuvres profondes, ouvertes à tous.' },
                    { title: 'Engagement', desc: 'Des textes ancrés dans les questions de leur temps.' },
                  ].map((v, i) => (
                    <div key={v.title} className={`py-7 ${i < 3 ? 'border-b border-border' : ''}`}>
                      <h3 className="font-serif text-lg font-light text-paper mb-2">{v.title}</h3>
                      <p className="font-sans text-[11px] text-paper/40 leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission banner avec Image 1 — femme marchant ── */}
      <section className="relative py-40 px-6 overflow-hidden text-center">
        {/* Image 1 en fond */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dnbyi8fw6/image/upload/v1774855773/file_000000006cbc7243b73c3bb8ce1c7f06_umb5tb.png"
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-top"
            style={{ opacity: 0.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
        </div>

        <ScrollReveal>
          <div className="relative">
            <p
              className="font-serif italic font-light text-paper/75 max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
            >
              "Révéler des voix singulières, créer des ponts entre mémoire et innovation,
              proposer des livres qui éveillent autant qu'ils questionnent."
            </p>
            <Link
              href="/catalogue"
              className="inline-block font-sans text-[11px] tracking-[0.28em] uppercase text-ink bg-gold px-9 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Découvrir le catalogue
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
