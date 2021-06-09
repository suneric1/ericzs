import { Post } from './post';

export const EAT_GREEN_STAY_COOL: Post = {
  name: 'eat-green-stay-cool',
  title: 'Eat Green Stay Cool',
  thumbnail: 'eatgreen.svg',
  size: 1,
  info: {
    role: 'Reporter + Designer',
    context: 'School Project',
    skills: ['Data Visualization', 'Illustrator']
  },
  category: 'DATA VISUALIZATION',
  time: 'Dec 2015',
  tags: ['data_viz'],
  featured: true,
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `This is a static infographic design project with a topic of the relationship between global warming and meet production. Greenpeace is the imaginary client, so I tried to match their style for the design.`
    },
    {
      type: 'image-xl',
      src: './assets/img/eg-1.png',
      caption: 'Report'
    }
  ]
};