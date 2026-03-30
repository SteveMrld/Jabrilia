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
    date: 'Mars 2026',
    category: 'Sortie',
    title: 'Du chaos naît une étoile — disponible en juin 2026',
    excerpt: 'Le nouveau livre de Steve Moradel sortira en juin 2026. Une exploration intime des chemins de transformation, entre chaos et renaissance.',
  },
  {
    id: '2',
    date: 'Février 2026',
    category: 'Partenariat',
    title: 'Jabrilia Éditions rejoint le réseau des librairies indépendantes',
    excerpt: 'Nous sommes fiers d\'annoncer notre partenariat avec un réseau de librairies indépendantes françaises pour une diffusion plus large de nos titres.',
  },
  {
    id: '3',
    date: 'Janvier 2026',
    category: 'Presse',
    title: 'Steve Moradel interviewé dans Le Monde des Livres',
    excerpt: 'L\'auteur revient sur sa démarche éditoriale, ses influences et les projets à venir chez Jabrilia Éditions.',
  },
]
