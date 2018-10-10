export const MELTING = {
  name: 'melting',
  thumbnail: 'melting.svg',
  size: 1,
  info: {
    role: 'DESIGNER + DEVELOPER',
    context: 'SCHOOL PROJECT',
    skills: ['openFrameworks', 'C++']
  },
  category: 'INTERACTIVE INSTALLATION',
  tags: ['experience'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `This is an interactive experience I worked on for my interactive installation class. 
      It’s set up with a projector and a Kinect, as well as a laptop to run the application. When you 
      walk over the Kinect, you can see your pixelate body projected on the wall, which will start 
      melting immediately. However, you can restore your pixels by touching hands of other people who 
      are in the same color as you. If they have different colors, touching each other would speed up 
      the melting. If there's nobody else in the same color, you can restore by holding your hands 
      together. Everyone’s color changes every 10 seconds, so you need to pay attention!`
    },
    {
      type: 'para',
      content: `The project was set up on May 4th on Canes Film Festival in the School of Communication, 
      University of Miami. With Melting, I won the award of Best Experimental on the festival.`
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/LqiKr4NzxTU',
      caption: 'Project exhibited on Canes Film Festival'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Design and develop an interactive installation for multiple people using openFrameworks.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `An interactive installation experience will be similar to games, but the purpose is totally different. 
      Unlike games, there won’t be explicit mechanics or goals for an installation. I don’t need to consider the difficulty 
      curve either, since for most people it’s just a one-shot experience. Thus it’s less than a game. However, the most 
      challenging part is to attract people’s attention and interest them in seconds. Also, the mechanics shouldn’t be 
      too overwhelming for people to understand.`
    },
    {
      type: 'para',
      content: `The goal for this experience, though not necessarily, is to keep your body from 
      falling apart, but you don’t have to. You can simply walk over, be play around with it, and then leave. Or, 
      if you’re with friends, you might start helping or competing with each other.`
    },
  ]
};