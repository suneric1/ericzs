import { Post } from './post';

export const CONTRIBUTION: Post = {
  id: 'contribution',
  title: 'Contribution Processing Request',
  originLang: 'zh',
  thumbnail: 'contribution.png',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'work',
    skills: [
      'Product Design',
      'Product Management',
      'Angular',
      'HTML',
      'TypeScript',
      'CSS / Sass',
      'Sketch',
    ],
  },
  category: 'Redesign For A Critical Business Process',
  time: 'Q3 2019 - Q1 2020',
  tags: ['design', 'dev'],
  featured: true,
};
