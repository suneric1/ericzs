import { Post } from './post';

export const HAPTICS_SIMULATOR: Post = {
  id: 'haptics-simulator',
  title: 'Haptics Simulator',
  originLang: 'en',
  thumbnail: 'haptics.svg',
  size: 1,
  info: {
    role: 'Maker + Developer',
    context: 'school',
    skills: ['Physical Computing', 'Arduino', 'JavaScript']
  },
  category: 'Simulating Haptics with Arduino',
  time: 'May 2016',
  tags: ['experimental'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `Haptics Simulator is an experimental physical computing project. I used an Arduino, a modified speaker and some sensors to simulate some haptics feedback.`
    },
    {
      type: 'para',
      content: `There are 3 modes - Rough Surface, Force Touch, and Rolling Ball.`
    },
    {
      type: 'h6',
      content: `Rough Surface`
    },
    {
      type: 'para',
      content: `This basically simulates the sense of scratching on a rough surface, while the actual surface is smooth.`
    },
    {
      type: 'h6',
      content: `Force Touch`
    },
    {
      type: 'para',
      content: `Force Touch is just like the force touch on a MacBook. When you press the surface, it plays the vibration and make it feel like a button.`
    },
    {
      type: 'h6',
      content: `Rolling Ball`
    },
    {
      type: 'para',
      content: `This mode is simulating a ball rolling inside of the box. When you tilt the box, you can hear the sound of a metal ball rolling then hitting the wall.`
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/jQI6-P1MD94',
      caption: 'Intro Video'
    },
  ]
};