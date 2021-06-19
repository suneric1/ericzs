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
  time: 'Apr 2020',
  tags: ['design', 'dev'],
  featured: true,
};
