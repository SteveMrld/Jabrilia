export interface NewsItem {
  id: string
  date: string
  category: 'Presse' | 'Partenariat' | 'Sortie' | 'Événement'
  title: string
  excerpt: string
  url?: string
}

export const news: NewsItem[] = [
  {
    id: '1',
    date: 'Juin 2026',
    category: 'Sortie',
    title: 'Du chaos naît une étoile — disponible en juin 2026',
    excerpt: 'Le nouveau livre de Steve Moradel sortira en juin 2026. Une exploration intime des chemins de transformation, entre chaos et renaissance.',
  },
  {
    id: '2',
    date: '2026',
    category: 'Presse',
    title: '« Sur les hauteurs des chutes du Niagara » — chroniqué par Les Pages de Jade',
    excerpt: 'Le blog littéraire Les Pages de Jade consacre une chronique au roman de Steve Moradel, disponible dès maintenant.',
    url: 'https://www.lespagesdejade.com/sur-les-hauteurs-des-chutes-du-niagara.html',
  },
]
