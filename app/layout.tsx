import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Jabrilia Éditions — Éveiller, questionner, inspirer',
    template: '%s — Jabrilia Éditions',
  },
  description:
    "Maison d'édition indépendante parisienne. Romans, essais, bandes dessinées. Un souffle littéraire engagé, accessible et visionnaire.",
  openGraph: {
    title: 'Jabrilia Éditions',
    description: "Un souffle littéraire engagé, accessible et visionnaire.",
    url: 'https://www.jabrilia.com',
    siteName: 'Jabrilia Éditions',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-ink antialiased overflow-x-hidden cursor-none">
        <SmoothScroll>
          <Cursor />
          <Nav />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
