import { Post } from './post';

export const BESPOKE: Post = {
  id: 'bespoke',
  title: 'Bespoke',
  originLang: 'zh',
  thumbnail: 'bespoke.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'work',
    skills: [
      'Product Design',
      'Angular',
      'HTML',
      'TypeScript',
      'CSS / Sass',
      'Sketch',
    ],
  },
  category: 'A Dynamic Portfolio Service for 401k',
  time: 'Q4 2019 - Q2 2020',
  tags: ['design', 'dev'],
  featured: true,
};
