'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power2.out' })
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.5, ease: 'power2.out' })
    }

    const onEnterLink = () => {
      gsap.to(ring, { scale: 2.2, borderColor: '#C49A4A', opacity: 0.6, duration: 0.3 })
      gsap.to(dot, { scale: 0, duration: 0.2 })
    }

    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(196,154,74,0.5)', opacity: 1, duration: 0.3 })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove', onMove)

    const links = document.querySelectorAll('a, button, [data-cursor]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-gold/50 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  )
}
