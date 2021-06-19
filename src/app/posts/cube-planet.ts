import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/cube-planet.zh.md';
import en from 'raw-loader!../../assets/articles/cube-planet.en.md';

export const CUBE_PLANET: Post = {
  id: 'cube-planet',
  title: 'Cube Planet Mobile Game',
  originLang: 'en',
  thumbnail: 'cubeplanet.png',
  size: 2,
  info: {
    role: 'All (Except Music)',
    context: 'school',
    skills: [
      'Creativity',
      'Unity (C#)',
      'Photoshop',
      'Illustrator',
      'Project Management',
    ],
  },
  category: 'A Minimalist Puzzle Game',
  time: 'Jan 2017',
  tags: ['game'],
  featured: true,
  mdContent: { zh, en },
};
