export interface Book {
  slug: string
  title: string
  price: string
  release: string
  cover: string
  summary: string
  genre: string
  amazon?: string
  fnac?: string
}

export const books: Book[] = [
  {
    slug: 'les-reparatrices',
    title: 'Les réparatrices',
    price: '19,90€',
    release: 'Février 2027',
    genre: 'Essai',
    cover: 'https://static.wixstatic.com/media/2ac949_7c07796bb1b94202b0aae9c180565b57~mv2.png',
    summary: `Elles n'ont pas seulement marqué l'histoire : elles l'ont réparée.\n\nDe Harriet Tubman à Rigoberta Menchú, en passant par Rosa Parks, Katherine Johnson, Toni Morrison, Maya Angelou, Joséphine Baker, Aretha Franklin ou Wangari Maathai, elles ont ouvert des chemins de liberté, recousu des mémoires, rendu possible l'espérance.\n\nElles n'étaient pas des héroïnes figées, mais des femmes de chair et de courage, qui ont choisi de dire non à l'injustice et oui à la vie. Chacune à sa manière a colmaté une brèche, rallumé une flamme, réveillé une dignité.\n\nCet essai n'est pas une galerie de portraits, mais une constellation. Dix voix, dix flammes, un même geste : rappeler qu'un monde brisé peut toujours être réparé.`,
  },
  {
    slug: 'mon-petit-livre-anti-stress',
    title: 'Mon petit livre Anti-Stress',
    price: '16,90€',
    release: 'Septembre 2026',
    genre: 'Jeunesse',
    cover: 'https://static.wixstatic.com/media/2ac949_7063ae2dcc354a97bcce6e8b5b712394~mv2.png',
    summary: `Et si on donnait enfin à nos enfants les mots qu'on aurait aimé entendre petits ?\n\nCe livre n'est pas un mode d'emploi. C'est un compagnon de cœur. Un petit guide simple et poétique pour aider les enfants à comprendre ce qu'ils ressentent, à poser leurs émotions, et à retrouver leur calme intérieur.\n\nConçu comme un véritable voyage intérieur, il mêle des outils concrets (respiration magique, rituels du matin, carnet de gratitude…), des témoignages authentiques, des jeux, des pages à compléter, et des conseils pour les parents — afin d'avancer ensemble, pas à pas.\n\nChaque page est une invitation à se découvrir, à s'apaiser, à se sentir capable et aimé. Car les enfants n'ont pas besoin de solutions miracles. Ils ont besoin de présence, de douceur, et de confiance.`,
  },
  {
    slug: 'sur-les-hauteurs-des-chutes-du-niagara',
    title: 'Sur les hauteurs des chutes du Niagara',
    price: '12,50€',
    release: 'Disponible',
    genre: 'Roman',
    cover: 'https://static.wixstatic.com/media/2ac949_03c6d8039bb945c584bec6c2442d3def~mv2.png',
    summary: `Sur les hauteurs des chutes du Niagara est le récit de Moanda-Lumey Kafouine, un jeune Sierra-Léonais arraché très tôt à sa terre natale vers un ailleurs qu'il ne connaît pas. Jeté dans les affres d'une vie d'être servile, son parcours de vie jonché d'obstacles et de souffrances feront de son existence une longue agonie.\n\nSur les hauteurs des chutes du Niagara naîtront les prémices d'un destin hors du commun. Sa rencontre avec Abraham et Rosa, personnages mystérieux qui semblent le connaître mieux que lui-même, changeront à tout jamais son existence.\n\nEt si les destins singuliers de Martin Luther King, Rosa Parks et Abraham Lincoln, tous soumis au poids de la fatalité, s'étaient noués dans des temps reculés…`,
  },
  {
    slug: 'dans-les-failles-du-siecle',
    title: 'Dans les failles du siècle',
    price: '19,90€',
    release: 'Avril 2026',
    genre: 'Essai',
    cover: 'https://static.wixstatic.com/media/2ac949_be01d41f3101444391527548b086252f~mv2.png',
    summary: `Une analyse approfondie des dynamiques sociales et culturelles modernes.\n\nDans les failles du siècle explore les fractures invisibles qui traversent notre époque — économiques, identitaires, spirituelles — et cherche à comprendre ce qu'elles disent de nous, de nos choix collectifs, de l'avenir que nous sommes en train de construire.\n\nUn essai exigeant et nécessaire pour tous ceux qui refusent de détourner les yeux.`,
  },
  {
    slug: 'les-memoires-reliees',
    title: 'Les mémoires reliées',
    price: '19,90€',
    release: 'Septembre 2026',
    genre: 'Roman',
    cover: 'https://static.wixstatic.com/media/2ac949_4c6ffffae954435e8a3899837434e344~mv2.png',
    summary: `Et si nos douleurs n'étaient que les échos d'histoires oubliées ?\n\nGabriel, Élise, Sophie, Cécile… Ils vivent séparés, mais une souffrance inexplicable les unit. Une douleur qui dépasse le corps, une vibration qui semble venir d'ailleurs.\n\nÀ mesure qu'ils explorent leurs passés, un mystère émerge : et si ces maux invisibles étaient les fragments d'une mémoire partagée ?\n\nAu croisement du réel et du mystique, Les Mémoires Reliées nous plonge dans une quête bouleversante, où chaque douleur révèle un lien, chaque rencontre éclaire un chemin. Un récit puissant et lumineux sur ce qui nous unit au-delà de nous-mêmes.`,
  },
  {
    slug: 'du-chaos-nait-une-etoile',
    title: 'Du chaos naît une étoile',
    price: '19,90€',
    release: 'Octobre 2026',
    genre: 'Essai',
    cover: 'https://static.wixstatic.com/media/2ac949_eb58e2f35e624e85918c1a276b9b5a1b~mv2.png',
    summary: `Il arrive un moment où tout s'effondre.\n\nOù les repères vacillent, où les masques tombent, où l'ancien monde ne tient plus. Ce moment-là, nous le redoutons. Et pourtant… il annonce souvent une autre naissance.\n\nIl y a des chutes qui ne détruisent pas, mais révèlent. Des épreuves qui, loin de nous briser, nous réveillent à ce que nous étions appelés à devenir. Dans Du chaos naît une étoile, Steve Moradel explore avec une rare justesse les chemins intimes de la transformation.\n\nÀ travers des récits vibrants, une prose poétique et des réflexions profondes, il nous invite à regarder nos tempêtes comme des seuils — et non des fins. Ce livre n'est ni un guide, ni un témoignage. C'est une présence. Un miroir tendu à celles et ceux qui cherchent, au milieu des ruines, un sens, un souffle, une lumière.`,
  },
  {
    slug: 'aurora',
    title: 'Aurora',
    price: '19,90€',
    release: 'Novembre 2027',
    genre: 'Roman',
    cover: 'https://static.wixstatic.com/media/2ac949_033334641dca4a8796e28296e75a9e01~mv2.png',
    summary: `Dans les tréfonds glacés de l'Antarctique, la frontière entre légende et réalité s'effondre.\n\nSous des kilomètres de glace, une découverte bouleverse l'ordre établi : un sanctuaire oublié, témoin d'un savoir perdu et d'ambitions inimaginables. Aurora n'est pas qu'un lieu : c'est une promesse. Celle d'un avenir façonné par des secrets trop longtemps dissimulés.\n\nMais tout progrès a son prix, et ce qui sommeille dans les silences d'Aurora pourrait bien redéfinir la place de l'humanité dans l'univers.\n\nEntre vérités enfouies et visions d'un monde nouveau, une question demeure : sommes-nous prêts pour ce qui nous attend ?`,
  },
  {
    slug: 'a-l-ombre-des-oliviers',
    title: "À l'ombre des oliviers",
    price: '19,90€',
    release: '2027',
    genre: 'Roman',
    cover: 'https://static.wixstatic.com/media/2ac949_36a87891daa34831b322655afbd75999~mv2.png',
    summary: `Sous le ciel brûlé de promesses déchues, deux destins se croisent et s'affrontent sur une terre où l'espoir et le désespoir dansent une valse tragique.\n\nLiora, fille d'un kibboutz marqué par la résilience de ses ancêtres, et Rayane, jeune homme épris de la terre de Gaza, découvrent que leurs vies, comme les branches noueuses des oliviers millénaires, sont profondément enracinées dans l'histoire de leurs peuples.\n\nChaque pierre, chaque souffle d'air, porte le poids des luttes et des rêves, dans un récit qui interroge la mémoire, la transmission et la possibilité fragile d'un futur apaisé. Une fresque humaine et universelle, un voyage au cœur des blessures et des résistances.`,
  },
  {
    slug: 'le-temps-des-etincelles',
    title: 'Le temps des étincelles',
    price: '25,99€',
    release: '2027',
    genre: 'Bande dessinée',
    cover: 'https://static.wixstatic.com/media/2ac949_4140352e902a4dffa89ba587adad5275~mv2.png',
    summary: `Et si les idées voyageaient comme des étincelles ?\n\nJade a 15 ans, une curiosité vive, des questions plein les poches… et une soif d'apprendre que rien n'arrête.\n\nEn explorant les souvenirs de sa famille, les objets du quotidien, ou les traces laissées par les inventions humaines, elle découvre peu à peu le fil invisible qui relie l'histoire de la technologie à celle des émotions, des rêves et des transmissions.\n\nEntre poésie et réflexion, Le Temps des Étincelles est une bande dessinée hybride, sensible et lumineuse. Elle traverse les âges et les idées, mêle l'intime au collectif, et propose une autre manière de comprendre notre monde : non pas comme une suite de révolutions, mais comme un tissu fragile et merveilleux de gestes, de mémoires et de choix.`,
  },
]

export function getBookBySlug(slug: string): Book | undefined {
  return books.find(b => b.slug === slug)
}
