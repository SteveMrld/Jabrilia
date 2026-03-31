import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contacter les Éditions Jabrilia — Paris, 75015.",
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Nous joindre</p>
            <h1
              className="font-serif font-light text-paper leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
            >
              Contact
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-36 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Form */}
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={150}>
            <div className="space-y-12">
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Adresse</p>
                <address className="not-italic font-sans text-paper/50 text-sm leading-relaxed">
                  Éditions Jabrilia<br />
                  200, rue de la Croix Nivert<br />
                  75015 Paris, France
                </address>
              </div>

              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Email</p>
                <a
                  href="mailto:contact@jabrilia.com"
                  className="font-sans text-paper/50 hover:text-gold transition-colors duration-300 text-sm"
                >
                  contact@jabrilia.com
                </a>
              </div>

              <div className="border-t border-border pt-10">
                <p className="font-sans text-[11px] text-paper/30 leading-relaxed">
                  Pour toute proposition de manuscrit, envoyez un synopsis et les trois premiers chapitres à l'adresse ci-dessus. Nous accusons réception sous 15 jours.
                </p>
              </div>

              <div className="border-t border-border pt-10">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
                  Réseaux sociaux
                </p>
                <div className="flex gap-6">
                  {[
                    { label: 'Instagram', href: '#' },
                    { label: 'Facebook', href: '#' },
                    { label: 'LinkedIn', href: '#' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="font-sans text-xs text-paper/35 hover:text-gold transition-colors duration-300"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
