export default function MarqueeBanner() {
  const items = [
    'Éveiller', '·', 'Questionner', '·', 'Inspirer', '·',
    'Romans', '·', 'Essais', '·', 'Bandes dessinées', '·',
    'Éveiller', '·', 'Questionner', '·', 'Inspirer', '·',
    'Romans', '·', 'Essais', '·', 'Bandes dessinées', '·',
  ]

  return (
    <div className="py-5 border-y border-border overflow-hidden bg-surface">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.concat(items).map((item, i) => (
          <span
            key={i}
            className={`font-serif italic text-base md:text-lg mx-6 ${
              item === '·' ? 'text-gold' : 'text-paper/30'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
