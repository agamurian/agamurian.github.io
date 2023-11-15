interface menuItem {href: string, en: string, ru: string}
interface translation {ru: any, en: any}

export const menu: Array<menuItem> = [
  {href: '/', en: 'Home', ru: 'Главная'},
  {href: '/about', en: 'About me', ru: 'Обо мне'},
  {href: '/projects', en: 'Projects', ru: 'Проекты'},
  {href: '/blog', en: 'Blog', ru: 'Блог'}
];

export const meta = {
  title: {en: "agamurian", ru: "agamurian"}
}

export const home = {
  title: {
    en: ['Hi, ', 'it`s ', 'Andrey:', '\n', 'designer, ', 'developer ', 'and media-artist'],
    ru: ['Привет, ', 'это ', 'Андрей:', '\n', 'дизайнер, ', 'разработчик ', 'и медиа-художник']
  }
};

export const about = {
  name: {en: "a", ru: "a"},
}

