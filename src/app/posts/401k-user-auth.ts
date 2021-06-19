import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/401k-user-auth.zh.md';
import en from 'raw-loader!../../assets/articles/401k-user-auth.en.md';

export const USER_AUTH: Post = {
  id: 'slavic401k-user-auth',
  title: 'Slavic401k User Auth',
  originLang: 'en',
  thumbnail: '401k-user-auth.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'work',
    skills: [
      'AngularJS',
      'UX / UI Design',
      'HTML',
      'CSS / Sass',
      'Gulp',
      'Sketch',
    ],
  },
  category: 'Abstracting Complexity of A Legacy Account System',
  time: 'May 2018',
  tags: ['design', 'dev'],
  featured: true,
  mdContent: { en, zh },
};
