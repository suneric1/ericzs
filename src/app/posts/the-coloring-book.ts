import { Post } from './post';

export const THE_COLORING_BOOK: Post = {
  id: 'the-coloring-book',
  title: 'The Coloring Book',
  originLang: 'en',
  thumbnail: 'the-coloring-book.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'school',
    skills: [
      'Node.js',
      'Hapi',
      'Handlebars',
      'SQL',
      'HTML',
      'JavaScript',
      'CSS',
      'Sketch',
    ],
    links: { 'Try it out!': 'http://thecoloringbook.herokuapp.com' },
  },
  category: 'A Simple Full Stack Web App',
  time: 'May 2017',
  tags: ['dev'],
};
