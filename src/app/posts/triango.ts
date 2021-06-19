import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/triango.zh.md';
import en from 'raw-loader!../../assets/articles/triango.en.md';

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
  mdContent: { zh, en },
};
