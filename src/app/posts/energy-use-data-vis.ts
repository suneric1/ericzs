import { Post } from './post';
import zh from 'raw-loader!../../assets/articles/energy-use-data-vis.zh.md';
import en from 'raw-loader!../../assets/articles/energy-use-data-vis.en.md';

export const ENERGY_USE: Post = {
  id: 'energy-use-data-vis',
  title: 'Energy Use Data Viz',
  originLang: 'en',
  thumbnail: 'energyuse.png',
  size: 1,
  info: {
    role: 'Reporter + Developer',
    context: 'school',
    skills: ['D3.js', 'Data Visualization', 'HTML', 'JavaScript', 'CSS'],
    links: { 'Check it out!': 'http://suneric1.github.io/energy-use-data-viz' },
  },
  category: 'Interactive Data Visualization and Storytelling',
  time: 'May 2016',
  tags: ['data_viz', 'dev'],
  featured: true,
  mdContent: { en, zh },
};
