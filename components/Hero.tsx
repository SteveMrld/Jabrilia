'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Entry timeline ───────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Split title into characters
      const titleEl = titleRef.current
      if (titleEl) {
        const text = titleEl.textContent || ''
        titleEl.innerHTML = text.split('').map((char, i) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block char-${i}">${char === '.' ? `<span class="text-gold">.</span>` : char}</span></span>`
        ).join('')
        const chars = titleEl.querySelectorAll<HTMLElement>('span > span')
        tl.fromTo(chars,
          { y: '120%' },
          { y: 0, duration: 1.2, stagger: 0.04, ease: 'power4.out' },
          0.2
        )
      }

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 16, letterSpacing: '0.2em' },
        { opacity: 1, y: 0, letterSpacing: '0.45em', duration: 1 },
        0
      )
      tl.fromTo(taglineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1 },
        1.2
      )
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9 },
        1.5
      )
      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        2.2
      )

      // ── Parallax on image ────────────────────────────
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // ── Title scale-down on scroll ───────────────────
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          scale: 0.88,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/*
        ── VIDÉOS RUNWAY ─────────────────────────────────────────────────
        Pour passer en local : mets tes MP4 dans /public/videos/
        et remplace les <source> par :
          <source src="/videos/hero-1.mp4" type="video/mp4" />
          <source src="/videos/hero-2.mp4" type="video/mp4" />
          <source src="/videos/hero-3.mp4" type="video/mp4" />
        ─────────────────────────────────────────────────────────────────
      */}

      {/* Background video — opacité basse, fond d'ambiance cinématographique */}
      <div ref={imgRef} className="absolute inset-0 scale-105">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Layered overlays — plus denses pour laisser la vidéo en fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(12,11,9,0.65) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          ref={eyebrowRef}
          className="font-sans text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-gold mb-10 opacity-0"
        >
          Maison d'édition indépendante &nbsp;·&nbsp; Paris
        </p>

        <h1
          ref={titleRef}
          className="font-serif font-light text-paper leading-none tracking-[0.1em] mb-10"
          style={{ fontSize: 'clamp(5rem, 16vw, 13rem)' }}
        >
          JABRILIA.
        </h1>

        <p
          ref={taglineRef}
          className="font-serif italic text-paper/55 mb-16 opacity-0"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.4rem)' }}
        >
          Éveiller, questionner, inspirer.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <MagneticButton>
            <Link
              href="/catalogue"
              className="block font-sans text-[11px] tracking-[0.28em] uppercase bg-gold text-ink px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Découvrir le catalogue
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/a-propos"
              className="block font-sans text-[11px] tracking-[0.28em] uppercase border border-paper/25 text-paper/55 px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300"
            >
              La maison
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-paper/20">Défiler</span>
        <div className="w-px h-12 overflow-hidden">
          <div className="w-full h-full bg-gold/50 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
