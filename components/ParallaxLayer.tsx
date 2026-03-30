'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: React.ReactNode
  speed?: number   // 0.1 = subtle, 0.3 = strong
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.15, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const yShift = `${speed * 100}%`

    gsap.fromTo(el,
      { y: `-${yShift}` },
      {
        y: yShift,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
