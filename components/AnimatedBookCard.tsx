'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Book } from '@/lib/books'

export default function AnimatedBookCard({ book }: { book: Book }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6deg', '6deg'])

  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={`/livre/${book.slug}`} className="group block">
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800, background: '#EAE4D8' }}
        className="relative overflow-hidden aspect-[2/3] mb-5"
      >
        {/* Cover image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-ink/60"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* CTA */}
        <motion.div
          className="absolute inset-0 flex items-end p-5"
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <span className="font-sans text-[9px] tracking-[0.28em] uppercase border border-gold text-gold px-4 py-2 bg-ink/50 backdrop-blur-sm">
            Découvrir →
          </span>
        </motion.div>

        {/* Shine overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useTransform(
              [springX, springY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${((lx as number) + 0.5) * 100}% ${((ly as number) + 0.5) * 100}%, rgba(196,154,74,0.08) 0%, transparent 60%)`
            ),
          }}
        />

      </motion.div>

      {/* Meta */}
      <div>
        {/* Badge date — hors image pour ne pas couvrir la couverture */}
        <div className="flex items-center gap-2 mt-3 mb-1.5">
          <span className={`font-sans text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 ${
            book.release.includes('2027') || book.release.includes('2028')
              ? 'bg-ink/10 text-ink/40'
              : 'bg-gold text-ink font-medium'
          }`}>
            {book.release.includes('2027') || book.release.includes('2028')
              ? `À paraître · ${book.release}`
              : book.release
            }
          </span>
        </div>
        <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-ink/40 mb-1">{book.genre}</p>
        <h3 className="font-serif text-[1.05rem] leading-snug font-light text-ink group-hover:text-gold transition-colors duration-300 mb-1.5">
          {book.title}
        </h3>
        <p className="font-sans text-sm text-gold font-light">{book.price}</p>
      </div>
    </Link>
  )
}
