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

export const posts: Array<projectType> = [
  {
    id: 1,
    draft: 0,
    href: "/blog/wargaming",
    img: "/blog/wargaming.webp",
    en: {title: "i now work at Wargaming", description: "as a technical artist"},
    ru: {title: "Теперь я работаю в Wargaming", description: "как технический художник"},
    date: "2023-10-11",
    tags: ["dev", "techart","3d"]
  },
  {
    id: 2,
    draft: 0,
    href: "/blog/blender_addon",
    img: "/blog/blender_addon.webp",
    en: {title: "Blender addon development", description: "as a technical artist"},
    ru: {title: "Разработка аддонов для Blender", description: "как технический художник"},
    date: "2023-10-11",
    tags: ["dev", "techart","3d"]
  },
  {
    id: 3,
    draft: 0,
    href: "/blog/threading",
    img: "/blog/threading.webp",
    en: {title: "Threading with python", description: "how to spawn exact number of processes in parallel"},
    ru: {title: "Треадинг в питоне", description: "как запустить конкретное число процессов параллельно"},
    date: "2023-10-11",
    tags: ["dev", "techart"]
  },
]
