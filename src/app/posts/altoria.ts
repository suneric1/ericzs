import { Post } from './post';

export const ALTORIA: Post = {
  id: 'altoria',
  title: 'Altoria VR Game Demo',
  originLang: 'en',
  thumbnail: 'altoria.svg',
  size: 1,
  info: {
    role: 'Game UX + Developer',
    context: 'school',
    skills: ['Creativity', 'Unity (C#)', 'Photoshop', 'Illustrator', 'Maya']
  },
  category: 'Designing Puzzle-Adventure VR Game Mechanics and Interaction',
  time: 'May 2017',
  tags: ['vr', 'game'],
  featured: true,
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `Altoria is a VR adventure + puzzle game for Oculus Rift. The goal of the player is to pass each level by defeating mobs and solving puzzles to proceed further into the fallen city of Altoria.`
    },
    {
      type: 'para',
      content: `Our demo begins with Tato, the player, one of the last few remaining Altorians in the world. After tragedy strikes his family he must follow a Macilent soldier to the old city of Altoria. Along for the journey is Alma, the trapped spirit of Tato’s grandmother. Alma guides him as he tries to enter the fallen city.      `
    },
    {
      type: 'para',
      content: `Along the way he uncovers the mystery surrounding this Macilent stranger, his family, and the jinn Alma herself.`
    },
    {
      type: 'image',
      src: './assets/img/altoria_vr.gif',
      caption: 'Inventory Interaction'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Collaborate with a game designer to build a VR game (demo) in a semester.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/a2C0x7ZOsyg',
      caption: 'Walkthrough Video'
    },
    {
      type: 'para',
      content: `This was the first time I developed a VR game, which was a very time-consuming project and it's been a great learning experience. 
      While my teammate Pablo designed and modeled most of the assets for the game, I focused mostly on the UX, development, as well as composition.`
    },
    {
      type: 'para',
      content: `Starting with brainstorming, we spent a lot of time on ideation. Originally we wanted to make it a multiplayer game where the VR player can play with a mobile player. 
      However, our storytelling doesn't fit the multiplayer gameplay very well, so we pivoted and focused on refining the VR experience.`
    },
    {
      type: 'para',
      content: `When it comes to implementation, we encountered so many UX problems due to the lack of references out there.
      For example, we don’t want the player to teleport through spots, so we kept the traditional movement, 
      while the player can flip the camera with the controller. In this case, the player is always faced with the sensors. 
      This can reduce the motion sickness (not as good as teleporting), and is less disorienting.`
    },
    {
      type: 'para',
      content: `Due to the nature of VR, every single interaction design requires us to be innovative. 
      Also, being immersive drastically increases the workload of making a game, especially in terms of coding. 
      As of now, this is more of a prototype rather than a complete game, but what's important is the process of learning.`
    },
  ]
};