import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/telos-design-system.zh.md';
import en from 'raw-loader!../../assets/articles/telos-design-system.en.md';

export const TELOS_DESIGN_SYSTEM: Post = {
  id: 'telos-design-system',
  title: 'Telos Design System',
  originLang: 'en',
  thumbnail: 'tds.png',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'work',
    skills: [
      'Design System',
      'Management',
      'Sketch',
      'Angular',
      'TypeScript',
      'HTML / CSS / Sass',
      'NPM',
    ],
  },
  category: 'A Design System at Early Stage',
  time: 'Q1 2020',
  tags: ['design', 'dev'],
  featured: true,
  mdContent: { en, zh },
};
