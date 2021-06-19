import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/altoria.zh.md';
import en from 'raw-loader!../../assets/articles/altoria.en.md';

export const ALTORIA: Post = {
  id: 'altoria',
  title: 'Altoria VR Game Demo',
  originLang: 'en',
  thumbnail: 'altoria.svg',
  size: 1,
  info: {
    role: 'Game UX + Developer',
    context: 'school',
    skills: ['Creativity', 'Unity (C#)', 'Photoshop', 'Illustrator', 'Maya'],
  },
  category: 'Designing Puzzle-Adventure VR Game Mechanics and Interaction',
  time: 'May 2017',
  tags: ['vr', 'game'],
  featured: true,
  mdContent: { zh, en },
};
