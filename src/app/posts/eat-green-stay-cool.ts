import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/eat-green-stay-cool.zh.md';
import en from 'raw-loader!../../assets/articles/eat-green-stay-cool.en.md';

export const EAT_GREEN_STAY_COOL: Post = {
  id: 'eat-green-stay-cool',
  title: 'Eat Green Stay Cool',
  originLang: 'en',
  thumbnail: 'eatgreen.svg',
  size: 1,
  info: {
    role: 'Reporter + Designer',
    context: 'school',
    skills: ['Data Visualization', 'Illustrator', 'Storytelling'],
  },
  category: 'Data Visualization About Meat Production and Global Warming',
  time: 'Dec 2015',
  tags: ['data_viz'],
  featured: true,
  mdContent: { zh, en },
};
