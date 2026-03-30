'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '@/components/MagneticButton'

gsap.registerPlugin(ScrollTrigger)

// f_mp4,q_auto force Cloudinary à servir en MP4 quelle que soit la source
const VIDEOS = [
  'https://res.cloudinary.com/dnbyi8fw6/video/upload/f_mp4,q_auto/share4268875397021411373_kv40',
  'https://res.cloudinary.com/dnbyi8fw6/video/upload/f_mp4,q_auto/share427370869461509158_tbzou8',
]

const PLAY_DURATION = 7000  // ms avant switch
const FADE_MS       = 1200  // ms de fondu

const TAGLINE_WORDS = ['Éveiller,', 'questionner,', 'inspirer.']

export default function Hero() {
  const heroRef    = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)
  const scrollRef  = useRef<HTMLDivElement>(null)
  const word0Ref   = useRef<HTMLSpanElement>(null)
  const word1Ref   = useRef<HTMLSpanElement>(null)
  const word2Ref   = useRef<HTMLSpanElement>(null)
  const wordRefs   = [word0Ref, word1Ref, word2Ref]

  const vid0Ref = useRef<HTMLVideoElement>(null)
  const vid1Ref = useRef<HTMLVideoElement>(null)
  const vidRefs = [vid0Ref, vid1Ref]

  // activeIndex : quelle vidéo est au premier plan
  const [activeIndex, setActiveIndex] = useState(0)

  /* ── Crossfade vidéos ─────────────────────────────────── */
  useEffect(() => {
    // Lance les deux vidéos dès que chargées
    vidRefs.forEach(ref => {
      const el = ref.current
      if (!el) return
      el.muted   = true
      el.loop    = true
      el.play().catch(() => {})
    })

    // Switch toutes les PLAY_DURATION ms
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev === 0 ? 1 : 0))
    }, PLAY_DURATION)

    return () => clearInterval(interval)
  }, []) // eslint-disable-line

  /* ── GSAP — entrée + parallax ─────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Split titre en chars
      const titleEl = titleRef.current
      if (titleEl) {
        const text = titleEl.textContent || ''
        titleEl.innerHTML = text.split('').map((char, i) =>
          `<span class="inline-block overflow-hidden">` +
          `<span class="inline-block char-${i}">` +
          (char === '.' ? `<span class="text-gold">.</span>` : char) +
          `</span></span>`
        ).join('')
        const chars = titleEl.querySelectorAll<HTMLElement>('span > span')
        tl.fromTo(chars, { y: '120%' }, { y: 0, duration: 1.1, stagger: 0.035 }, 0.2)
      }

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, letterSpacing: '0.1em' },
        { opacity: 1, letterSpacing: '0.45em', duration: 1.2, ease: 'power2.out' }, 0)

      // Tagline cinématique — chaque mot arrive individuellement
      const wEls = wordRefs.map(r => r.current).filter(Boolean)
      wEls.forEach((el, i) => {
        tl.fromTo(el,
          {
            opacity: 0,
            y: 50,
            scale: 1.4,
            filter: 'blur(12px)',
            letterSpacing: '0.4em',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            letterSpacing: i === 2 ? '0.06em' : '0.02em',
            duration: 1.1,
            ease: 'expo.out',
          },
          1.1 + i * 0.22
        )
      })

      // Après l'entrée : "inspirer." pulse doucement en or
      if (wordRefs[2].current) {
        tl.to(wordRefs[2].current, {
          color: '#C49A4A',
          textShadow: '0 0 40px rgba(196,154,74,0.4)',
          duration: 0.8,
          ease: 'power2.inOut',
        }, 2.0)
      }

      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, 2.0)
      tl.fromTo(scrollRef.current,
        { opacity: 0 }, { opacity: 1, duration: 1 }, 2.5)

      // Parallax image
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 18, ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top', end: 'bottom top', scrub: true,
          },
        })
      }

      // Titre qui se réduit au scroll
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          scale: 0.88, opacity: 0, ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top', end: '40% top', scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, []) // eslint-disable-line

  return (
    <section ref={heroRef} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">

      {/* ── Vidéos en crossfade ────────────────────────────── */}
      <div ref={imgRef} className="absolute inset-0 scale-105">
        {VIDEOS.map((src, i) => (
          <video
            key={i}
            ref={i === 0 ? vid0Ref : vid1Ref}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity:    activeIndex === i ? 0.5 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
              zIndex:     activeIndex === i ? 2 : 1,
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* ── Overlays ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink/65 via-ink/35 to-ink/75" />
      <div className="absolute inset-0 z-10"
        style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, rgba(12,11,9,0.6) 100%)' }}
      />

      {/* ── Contenu ───────────────────────────────────────── */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">

        <p
          ref={eyebrowRef}
          className="font-sans text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-gold mb-8 opacity-0"
        >
          Maison d'édition indépendante &nbsp;·&nbsp; Paris
        </p>

        {/* Titre légèrement réduit */}
        <h1
          ref={titleRef}
          className="font-serif font-light text-paper leading-none tracking-[0.08em] mb-8"
          style={{ fontSize: 'clamp(4rem, 13vw, 11rem)' }}
        >
          JABRILIA.
        </h1>

        {/* Tagline — plus grand, animé mot par mot */}
        <p
          className="mb-16 flex flex-wrap justify-center items-baseline gap-x-5 gap-y-2"
          aria-label="Éveiller, questionner, inspirer."
        >
          {TAGLINE_WORDS.map((word, i) => (
            <span
              key={word}
              ref={wordRefs[i]}
              className="font-serif italic text-paper/75 opacity-0 inline-block"
              style={{
                fontSize: i === 2
                  ? 'clamp(1.8rem, 4.5vw, 2.8rem)'   // "inspirer." — plus grand
                  : 'clamp(1.2rem, 3vw, 1.9rem)',
                fontWeight: i === 2 ? 400 : 300,
              }}
            >
              {word}
            </span>
          ))}
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

      {/* ── Scroll indicator ──────────────────────────────── */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-0">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-paper/25">Défiler</span>
        <div className="w-px h-12 overflow-hidden">
          <div className="w-full h-full bg-gold/50 animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
