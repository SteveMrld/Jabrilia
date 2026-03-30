import Image from 'next/image'
import Link from 'next/link'
import { Book } from '@/lib/books'

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link href={`/livre/${book.slug}`} className="group block">

      {/* Cover */}
      <div className="relative overflow-hidden aspect-[2/3] mb-4" style={{ background: '#EAE4D8' }}>
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* CTA badge */}
        <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="font-sans text-[10px] tracking-[0.22em] uppercase border border-gold text-gold px-4 py-2 bg-ink/60 backdrop-blur-sm">
            Découvrir
          </span>
        </div>

        {/* Release tag */}
        <div className="absolute top-3 left-3 bg-ink/75 backdrop-blur-sm px-3 py-1">
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/80">
            {book.release}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="px-0.5">
        <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-ink/40 mb-1.5">{book.genre}</p>
        <h3 className="font-serif text-[1.05rem] leading-snug font-light text-ink group-hover:text-gold transition-colors duration-300 mb-1.5">
          {book.title}
        </h3>
        <p className="font-sans text-sm text-gold font-light">{book.price}</p>
      </div>
    </Link>
  )
}
