import { Post } from './post';

export const THEME_PARK_TICKET_APP: Post = {
  id: 'theme-park-ticketing',
  title: 'Theme Park Ticketing Prototype',
  originLang: 'en',
  thumbnail: 'crazyland.svg',
  size: 1,
  info: {
    role: 'UX Designer',
    context: 'school',
    skills: ['UI / UX Design', 'Sketch', 'Flinto']
  },
  category: 'PROTOTYPE',
  time: 'Mar 2016',
  tags: ['design'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `This is a simple prototype of the process of purchasing tickets from a theme park mobile app. While the tickets pricing from Disney or Universal Studio always confuse me, I tried to make the process a more straightforward experience. I created the design in Sketch, and with Flinto I was able to craft some nice animations when prototyping.`
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/0cz9osi0bDY',
      caption: 'Prototype Walkthrough'
    }
  ]
};