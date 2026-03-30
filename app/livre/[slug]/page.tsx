import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { books, getBookBySlug } from '@/lib/books'
import AnimatedBookCard from '@/components/AnimatedBookCard'
import ScrollReveal from '@/components/ScrollReveal'
import BookDetailClient from './BookDetailClient'

export async function generateStaticParams() {
  return books.map(b => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const book = getBookBySlug(params.slug)
  if (!book) return {}
  return {
    title: book.title,
    description: book.summary.slice(0, 160).replace(/\n/g, ' '),
  }
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug)
  if (!book) notFound()

  const paragraphs = book.summary.split('\n\n').filter(Boolean)
  const others = books.filter(b => b.slug !== book.slug).slice(0, 3)

  return (
    <>
      {/* ── Back ── */}
      <div className="pt-28 pb-6 px-6 max-w-7xl mx-auto bg-paper">
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.22em] uppercase text-ink/30 hover:text-gold transition-colors duration-300"
        >
          ← Catalogue
        </Link>
      </div>

      {/* ── Main ── */}
      <BookDetailClient book={book} paragraphs={paragraphs} />

      {/* ── Other titles ── */}
      <section className="border-t border-ink/10 py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-14">
              Autres titres
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-16">
            {others.map((b, i) => (
              <ScrollReveal key={b.slug} delay={i * 100}>
                <AnimatedBookCard book={b} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
