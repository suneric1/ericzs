import { Post } from './post';

export const TRIANGO: Post = {
  id: 'triango',
  title: 'TrianGo - Puzzle Game',
  originLang: 'en',
  thumbnail: 'triango.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'school',
    skills: [
      'Creativity',
      'Unity (C#)',
      'Photoshop',
      'Illustrator',
      'After Effects',
      'Premiere',
    ],
    links: {
      'Try it out!': '/triango',
    },
  },
  category: 'Puzzle Platformer Game Prototype',
  time: 'Dec 2015',
  tags: ['game'],
};
