import Image from 'next/image'
import { Book } from '@/lib/books'
import Link from 'next/link'

export default function BookCard({ book }: { book: Book }) {
  const isFuture = book.release.includes('2027') || book.release.includes('2028')

  if (isFuture) {
    return (
      <div className='block cursor-default'>
        {/* Cover avec flou + voile mystère */}
        <div className='relative overflow-hidden aspect-[2/3] mb-4' style={{ background: '#EAE4D8' }}>
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className='object-contain'
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
            style={{ filter: 'blur(8px)', transform: 'scale(1.1)' }}
          />
          {/* Voile semi-opaque */}
          <div className='absolute inset-0' style={{ background: 'rgba(240,235,224,0.55)' }} />
          {/* Badge central */}
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4'>
            <div style={{ width: '2rem', height: '1px', background: '#C49A4A', margin: '0 auto' }} />
            <p className='font-sans text-ink/50' style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              À paraître
            </p>
            <p className='font-serif font-light text-ink' style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.2 }}>
              {book.title}
            </p>
            <p className='font-sans text-gold' style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {book.release}
            </p>
            <div style={{ width: '2rem', height: '1px', background: '#C49A4A', margin: '0 auto' }} />
          </div>
        </div>
        {/* Meta atténué */}
        <div className='px-0.5 opacity-40'>
          <p className='font-sans mb-1.5' style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(12,11,9,0.4)' }}>{book.genre}</p>
          <h3 className='font-serif font-light' style={{ fontSize: '1.05rem', lineHeight: 1.3, color: '#0C0B09', marginBottom: '0.375rem' }}>
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
          <span className='font-sans text-[10px] tracking-[0.22em] uppercase border border-gold text-gold px-4 py-2 bg-ink/60 backdrop-blur-sm'>
            Découvrir
          </span>
        </div>
      </div>
      <div className='mb-1.5'>
        <span className='font-sans text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 bg-gold text-ink font-medium'>
          {book.release}
        </span>
      </div>
      <div className='px-0.5'>
        <p className='font-sans text-[9px] tracking-[0.22em] uppercase text-ink/40 mb-1.5'>{book.genre}</p>
        <h3 className='font-serif text-[1.05rem] leading-snug font-light text-ink group-hover:text-gold transition-colors duration-300 mb-1.5'>
          {book.title}
        </h3>
        <p className='font-sans text-sm text-gold font-light'>{book.price}</p>
      </div>
    </Link>
  )
}
