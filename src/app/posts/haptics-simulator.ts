import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/haptics-simulator.zh.md';
import en from 'raw-loader!../../assets/articles/haptics-simulator.en.md';

export const HAPTICS_SIMULATOR: Post = {
  id: 'haptics-simulator',
  title: 'Haptics Simulator',
  originLang: 'en',
  thumbnail: 'haptics.svg',
  size: 1,
  info: {
    role: 'Maker + Developer',
    context: 'school',
    skills: ['Physical Computing', 'Arduino', 'JavaScript'],
  },
  category: 'Simulating Haptics with Arduino',
  time: 'May 2016',
  tags: ['experimental'],
  mdContent: { en, zh },
};
