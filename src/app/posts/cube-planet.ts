export const CUBE_PLANET = {
  name: 'cube-planet',
  thumbnail: 'cubeplanet.png',
  size: 2,
  info: {
    role: 'ALL (EXCEPT SOUND)',
    context: 'SCHOOL PROJECT',
    skills: ['Creativity','Unity (C#)', 'Photoshop', 'Illustrator', 'Project Management']
  },
  category: 'GAME DESIGN + DEV',
  time: 'Jan 2017',
  tags: ['mobile', 'game dev'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `Cube Planet is a puzzle game with a minimalist design.`
    },
    {
      type: 'para',
      content: `In certain levels, there are rocks that might get in your way. They can block your path, or in some cases, be placed strategically to help you. Some rocks also slide when you hit them. The end result is a fun to play puzzle game that’s highly addictive.`
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/Lxs03ozUMdU',
      caption: 'Gameplay'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Make a game in a semester.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `Due to limited time and resources in the class, I came up with the idea of making a minimalist mobile game 
      so that we could save time on creating assets and focus more on the gameplay. After the pitch, my concept was picked 
      as one of the class projects. I teamed up with Hal, who created all the audio assets for Cube Planet. I worked on the design, programming and game mechanics. 
      We playtested this project at several events across campus and released an Alpha test on Google Play store.`
    },
    {
      type: 'image',
      src: './assets/img/cube-planet.jpg',
      caption: 'Screenshots'
    },
  ]
};
