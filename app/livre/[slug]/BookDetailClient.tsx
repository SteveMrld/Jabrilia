'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Book } from '@/lib/books'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  book: Book
  paragraphs: string[]
}

export default function BookDetailClient({ book, paragraphs }: Props) {
  const coverRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cover parallax on scroll
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: coverRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Content stagger on mount
      const items = contentRef.current?.querySelectorAll('.animate-item')
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Cover ── */}
          <div ref={coverRef} className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0 w-full overflow-hidden bg-[#F0EBE0] shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
            >
              <div ref={imgRef} className="absolute inset-0 scale-110">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Details ── */}
          <div ref={contentRef} className="lg:col-span-7 lg:pt-4 space-y-0">

            {/* Genre + release */}
            <div className="animate-item flex flex-wrap items-center gap-3 mb-7">
              <span className="font-sans text-[9px] tracking-[0.28em] uppercase border border-gold/60 text-gold px-3 py-1">
                {book.genre}
              </span>
              <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-paper/30">
                {book.release}
              </span>
            </div>

            {/* Title */}
            <h1
              className="animate-item font-serif font-light text-paper leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {book.title}
            </h1>

            {/* Price */}
            <p className="animate-item font-serif text-2xl text-gold font-light mb-12">
              {book.price}
            </p>

            {/* Divider */}
            <div className="animate-item flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-gold" />
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-paper/25">Résumé</span>
            </div>

            {/* Summary */}
            <div className="animate-item space-y-6 mb-14">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`font-sans leading-relaxed ${
                    i === 0
                      ? 'text-paper/75 text-base md:text-lg font-light'
                      : 'text-paper/45 text-sm md:text-base'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Buy buttons */}
            <div className="animate-item flex flex-col sm:flex-row gap-3 mb-8">
              {book.amazon ? (
                <MagneticButton className="flex-1">
                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-sans text-[11px] tracking-[0.25em] uppercase bg-gold text-ink py-4 hover:bg-gold-light transition-colors duration-300"
                  >
                    Commander — Amazon
                  </a>
                </MagneticButton>
              ) : (
                <div className="flex-1 text-center font-sans text-[11px] tracking-[0.22em] uppercase border border-border text-paper/20 py-4 select-none">
                  Amazon — bientôt disponible
                </div>
              )}
              {book.fnac ? (
                <MagneticButton className="flex-1">
                  <a
                    href={book.fnac}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-sans text-[11px] tracking-[0.25em] uppercase border border-gold text-gold py-4 hover:bg-gold hover:text-ink transition-all duration-300"
                  >
                    Commander — Fnac
                  </a>
                </MagneticButton>
              ) : (
                <div className="flex-1 text-center font-sans text-[11px] tracking-[0.22em] uppercase border border-border text-paper/20 py-4 select-none">
                  Fnac — bientôt disponible
                </div>
              )}
            </div>

            {/* Direct order */}
            <p className="animate-item font-sans text-[11px] text-paper/25 leading-relaxed border-t border-border pt-6">
              Commande directe :{' '}
              <a href="mailto:info@jabrilia.com" className="text-gold/60 hover:text-gold transition-colors">
                info@jabrilia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
