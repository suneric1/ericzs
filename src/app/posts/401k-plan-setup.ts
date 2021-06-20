import { Post } from './post';

export const PLAN_SETUP: Post = {
  id: '401k-plan-setup',
  title: '401k Plan Setup',
  originLang: 'en',
  thumbnail: '401k-plan-setup.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'work',
    skills: [
      'Angular',
      'HTML',
      'TypeScript',
      'CSS / Sass',
      'Product Design',
      'Sketch',
    ],
  },
  category: 'MVP of a Better Experience to Start 401k Plans',
  time: 'Q4 2018 - Q1 2019',
  tags: ['design', 'dev'],
  featured: false,
};
