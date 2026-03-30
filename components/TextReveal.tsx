'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  scrub?: boolean
  /** If true, animate on mount (hero). If false, animate on scroll */
  onMount?: boolean
}

export default function TextReveal({
  text,
  className = '',
  tag: Tag = 'h2',
  delay = 0,
  onMount = false,
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Split into words, each word split into chars
    const words = text.split(' ')
    el.innerHTML = words.map(word =>
      `<span class="word-wrap" style="display:inline-block; overflow:hidden; vertical-align:bottom; margin-right:0.28em">` +
      `<span class="char-inner" style="display:inline-block; transform:translateY(110%)">${word}</span>` +
      `</span>`
    ).join('')

    const chars = el.querySelectorAll<HTMLElement>('.char-inner')

    if (onMount) {
      gsap.to(chars, {
        y: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.04,
        delay,
      })
    } else {
      gsap.to(chars, {
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.035,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [text, delay, onMount])

  return <Tag ref={ref as React.RefObject<any>} className={className}>{text}</Tag>
}
