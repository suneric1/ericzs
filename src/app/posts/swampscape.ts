import { Post } from './post';

// TO-DO
export const SWAMPSCAPE: Post = {
  name: 'swampscape',
  title: 'SwampScape',
  thumbnail: 'biscaynevr.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'School Project',
    skills: ['VR Developing','Unity (C#)', 'Photoshop', 'Illustrator']
  },
  category: 'VR EXPERIENCE',
  time: 'May 2017',
  tags: ['vr', 'experimental'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `This is a placeholder.`
    },
    {
      type: 'para',
      content: `This is a placeholder.`
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/Bn9CJFvYXEA',
      caption: 'This is a placeholder'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `This is a placeholder.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `This is a placeholder. `
    },
  ]
};