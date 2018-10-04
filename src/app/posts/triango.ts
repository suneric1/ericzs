export const TRIANGO = {
  name: 'triango',
  thumbnail: 'triango.svg',
  size: 1,
  info: {
    role: 'DESIGNER + DEVELOPER',
    context: 'SCHOOL PROJECT',
    skills: ['Creativity', 'Unity (C#)', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere'],
    link: {
      'Try it out!': '/triango'
    }
  },
  category: 'GAME DESIGN + DEV',
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `TrianGo is a puzzle platformer game I designed using simple mechanics such as colors and shapes. It’s about a triangle, Trian, who wants to become a circle so that he can roll smoothly. In each level, the player needs to get though the destination, a portal, by transforming itself into different shapes and colors to defeat enemies and move across obstacles.`
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/QZbEUmopGaI',
      caption: 'Game Trailer'
    },
    {
      type: 'para',
      content: `You can press A and D to move, SPACE to jump. Press A and D with S being held, you will be rolling instead of moving. There’re some interactible objects in the environment. By pressing E you can let Trian interact with them, such as turn on a switch.`
    },
    {
      type: 'para',
      content: `The game is still a prototype, and I do hope I'll have time to finish it.`
    },
    {
      type: 'image',
      src: './assets/img/tg-2.png',
      caption: 'Level 2'
    },
    {
      type: 'ext-link',
      src: '/triango',
      text: 'Try it out'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Design creative game mechanics and build a prototype.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `My inspiration was from my “5 in 5” project, for which 
      I built 5 games in 5 days with the constraints of only using colors 
      and shapes for the graphics. From that project, I found the unlimited 
      possibilities of the most basic elements, which led to the concept of TrianGo.`
    },
    {
      type: 'para',
      content: `I drew all the 2D assets on a tablet, tweaked them in Photoshop, 
      and created a video prototype with After Effects and Premiere as a proof of 
      concept. The implementation was done with Unity and C#. While there were only 
      2 weeks for it, I managed to build 2 levels by the end of the semester.`
    }
  ]
};