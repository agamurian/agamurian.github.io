type tagType = {key: string, en: string, ru: string}
export const tags: Array<tagType> = [
  {key: "art", en: "art", ru: "совриск"},
  {key: "techart", en: "technical art", ru: "тех.арт"},
  {key: "web", en: "web", ru: "веб"},
  {key: "dev", en: "development", ru: "разработка"},
  {key: "3d", en: "3d art", ru: "3D арт"},
  {key: "2d", en: "2d art", ru: "2D арт"},
  {key: "illustration", en: "illustration", ru: "иллюстрации"},
  {key: "ar", en: "AR", ru: "AR"},
]

type projectTranslation = {title: string, description: string}
export interface projectType {
  id: number,
  draft: 0 | 1,
  href: string,
  img: string,
  en: projectTranslation,
  ru: projectTranslation,
  date: string,
  tags: Array<string>
}

export const projects: Array<projectType> = [
  {
    id: 1,
    draft: 0,
    href: "/projects/procrastinator",
    img: "/projects/procrastinator/032.jpg",
    en: {title: "Procrastinator", description: "pseudo-interactive video art / software art"},
    ru: {title: "Прокрастинатор", description: "псевдо-интерактивный медиа-арт, видео-арт"},
    date: "2018-06-06",
    tags: ["art", "dev"]
  },
  {
    id: 2,
    draft: 0,
    href: "/projects/hga",
    img: "/projects/revolution-clock/thumb.jpg",
    en: {title: "Human Computer Arcade", description: "Gamefication of AI growth: human friendly "},
    ru: {title: "Человеческий Компьютер: Аркада", description: "Геймификация роста ИИ: для людей"},
    date: "2019-12-21",
    tags: ["art", "3d", "illustration"]
  },
  {
    id: 3,
    draft: 0,
    href: "/projects/revolution-clock",
    img: "/projects/revolution-clock/thumb.jpg",
    en: {title: "Revolution Clock", description: "Russia, when?"},
    ru: {title: "Часы Революции", description: "Россия, когда?"},
    date: "2018-12-20",
    tags: ["art", "dev"]
  },
  {
    id: 4,
    draft: 0,
    href: "/projects/normalmap",
    img: "/projects/normalmap/thumb.jpg",
    en: {title: "Real Normalmap", description: "figitalism and 3d-printing"},
    ru: {title: "Реальная Карта Нормалей", description: "фиджитализм и 3д печать"},
    date: "2019-03-26",
    tags: ["art", "3d", "dev", "techart"]
  },
  {
    id: 5,
    draft: 0,
    href: "/projects/seeance",
    img: "/projects/seeance/thumb.jpg",
    en: {title: "Seeance", description: "Making 3D-scanned human body alive for AR"},
    ru: {title: "Seeance", description: "Оживление 3D-скана тела человека для AR"},
    date: "2021-02-17",
    tags: ["ar", "3d", "techart"]
  },
]
// tape
