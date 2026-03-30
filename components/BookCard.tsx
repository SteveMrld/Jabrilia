import Image from 'next/image'
import Link from 'next/link'
import { Book } from '@/lib/books'

export default function BookCard({ book }: { book: Book }) {
  const isFuture = book.release.includes('2027') || book.release.includes('2028')
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
        <span className={'font-sans text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 ' + (isFuture ? 'bg-ink/10 text-ink/40' : 'bg-gold text-ink font-medium')}>
          {isFuture ? 'À paraître · ' + book.release : book.release}
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
