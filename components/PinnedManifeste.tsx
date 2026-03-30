'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function PinnedManifeste() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<HTMLElement[]>([])

  const addLine = (el: HTMLElement | null) => {
    if (el && !lineRefs.current.includes(el)) lineRefs.current.push(el)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = lineRefs.current

      // Each line fades in sequentially as you scroll
      lines.forEach((line, i) => {
        gsap.fromTo(line,
          { opacity: 0.4, y: 20 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top+=${i * 80} 60%`,
              end: `top+=${i * 80 + 100} 50%`,
              scrub: 1,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-40 px-6 bg-ink">
      <div className="max-w-4xl mx-auto text-center">

        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold mb-14">
          Notre vision
        </p>

        <div className="space-y-4">
          {[
            { text: 'La littérature', style: 'font-serif font-light text-paper', size: 'clamp(2rem, 6vw, 5rem)' },
            { text: "n'est pas un refuge.", style: 'font-serif font-light text-paper', size: 'clamp(2rem, 6vw, 5rem)' },
            { text: "C'est un observatoire.", style: 'font-serif italic text-gold', size: 'clamp(2rem, 6vw, 5rem)' },
          ].map((line, i) => (
            <p
              key={i}
              ref={addLine}
              className={line.style}
              style={{ fontSize: line.size, lineHeight: 1.15 }}
            >
              {line.text}
            </p>
          ))}
        </div>

        <div
          ref={addLine}
          className="mt-14 flex justify-center"
        >
          <div className="w-12 h-px bg-gold/40" />
        </div>

        <p
          ref={addLine}
          className="font-sans text-paper/50 leading-relaxed text-sm md:text-base max-w-xl mx-auto mt-8"
        >
          Nous publions des romans qui racontent, des essais qui éclairent,
          des bandes dessinées qui révèlent. Des œuvres habitées par leur époque,
          portées par la force d'une écriture et d'un regard singulier.
        </p>

        <div ref={addLine} className="mt-12">
          <Link
            href="/a-propos"
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold border border-gold/50 px-8 py-3 hover:bg-gold hover:text-ink transition-all duration-300"
          >
            Notre histoire →
          </Link>
        </div>
      </div>
    </section>
  )
}
