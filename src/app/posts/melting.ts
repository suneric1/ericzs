import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/melting.zh.md';
import en from 'raw-loader!../../assets/articles/melting.en.md';

export const MELTING: Post = {
  id: 'melting',
  title: 'Melting - Interactive Experience',
  originLang: 'en',
  thumbnail: 'melting.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'school',
    skills: ['openFrameworks', 'C++'],
  },
  category: 'Interactive Projection Using openFrameworks and Kinect',
  time: 'May 2017',
  tags: ['experimental'],
  featured: true,
  mdContent: { zh, en },
};
