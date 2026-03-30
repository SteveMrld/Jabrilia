import Image from 'next/image'
import { Book } from '@/lib/books'
import Link from 'next/link'

export default function BookCard({ book }: { book: Book }) {
  const isAvailable = book.release === 'Disponible'

  if (!isAvailable) {
    return (
      <div className='block cursor-default'>
        <div className='relative overflow-hidden aspect-[2/3] mb-4' style={{ background: '#EAE4D8' }}>
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className='object-contain'
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
            style={{ filter: 'blur(10px)', transform: 'scale(1.12)' }}
          />
          <div className='absolute inset-0' style={{ background: 'rgba(240,235,224,0.5)' }} />
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4'>
            <div style={{ width: '2rem', height: '1px', background: '#C49A4A', margin: '0 auto' }} />
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(12,11,9,0.5)' }}>
              À paraître
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', lineHeight: 1.2, color: '#0C0B09' }}>
              {book.title}
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C49A4A' }}>
              {book.release}
            </p>
            <div style={{ width: '2rem', height: '1px', background: '#C49A4A', margin: '0 auto' }} />
          </div>
        </div>
        <div style={{ opacity: 0.35 }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(12,11,9,0.4)', marginBottom: '0.375rem' }}>{book.genre}</p>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', lineHeight: 1.3, fontWeight: 300, color: '#0C0B09' }}>
            {book.title}
          </h3>
        </div>
      </div>
    )
  }

  return (
    <Link href={'/livre/' + book.slug} className='group block'>
      <div className='relative overflow-hidden aspect-[2/3] mb-4' style={{ background: '#EAE4D8' }}>
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className='object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]'
          sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
        />
        <div className='absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        <div className='absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', border: '1px solid #C49A4A', color: '#C49A4A', padding: '0.5rem 1rem', background: 'rgba(12,11,9,0.6)' }}>
            Découvrir
          </span>
        </div>
      </div>
      <div style={{ marginBottom: '0.375rem' }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0.125rem 0.5rem', background: '#C49A4A', color: '#0C0B09', fontWeight: 600 }}>
          {book.release}
        </span>
      </div>
      <div style={{ paddingLeft: '0.125rem' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(12,11,9,0.4)', marginBottom: '0.375rem' }}>{book.genre}</p>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', lineHeight: 1.3, fontWeight: 300, color: '#0C0B09', marginBottom: '0.375rem' }}>
          {book.title}
        </h3>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#C49A4A', fontWeight: 300 }}>{book.price}</p>
      </div>
    </Link>
  )
}
