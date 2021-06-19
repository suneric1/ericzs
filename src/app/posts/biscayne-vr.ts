import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/biscayne-vr.zh.md';
import en from 'raw-loader!../../assets/articles/biscayne-vr.en.md';

export const BISCAYNE_VR: Post = {
  id: 'biscayne-vr',
  title: 'Biscayne VR',
  originLang: 'en',
  thumbnail: 'biscaynevr.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'school',
    skills: ['VR Developing', 'Unity (C#)', 'Photoshop', 'Illustrator'],
  },
  category: 'VR Experience',
  time: 'May 2017',
  tags: ['vr'],
  featured: true,
  mdContent: { zh, en },
};
