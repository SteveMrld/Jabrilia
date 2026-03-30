import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-[0.22em] font-light mb-5">
              JABRILIA<span className="text-gold">.</span>
            </p>
            <p className="text-paper/40 text-sm leading-relaxed font-sans">
              Un souffle littéraire engagé,<br />
              accessible et visionnaire.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-6">Navigation</p>
            <nav className="flex flex-col gap-4">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/catalogue', label: 'Catalogue' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-paper/40 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-6">Contact</p>
            <address className="not-italic font-sans text-sm text-paper/40 leading-relaxed">
              200, rue de la Croix Nivert<br />
              75015 Paris, France
              <br /><br />
              <a
                href="mailto:info@jabrilia.com"
                className="hover:text-gold transition-colors duration-300"
              >
                info@jabrilia.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] text-paper/25">
            © {new Date().getFullYear()} Éditions Jabrilia — Tous droits réservés
          </p>
          <div className="flex gap-8">
            <span className="font-sans text-[11px] text-paper/25">Mentions légales</span>
            <span className="font-sans text-[11px] text-paper/25">Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
