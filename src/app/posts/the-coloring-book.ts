import { Post } from './post';

export const THE_COLORING_BOOK: Post = {
  name: 'the-coloring-book',
  title: 'The Coloring Book',
  thumbnail: 'the-coloring-book.svg',
  size: 1,
  info: {
    role: 'Designer + Developer',
    context: 'School Project',
    skills: ['Node.js', 'Hapi', 'Handlebars', 'SQL', 'HTML', 'JavaScript', 'CSS', 'Sketch'],
    links: { 'Try it out!': 'http://thecoloringbook.herokuapp.com' }
  },
  category: 'WEB DESIGN + FULL STACK DEV',
  time: 'May 2017',
  tags: ['front end', 'back end'],
  body: [ 
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `The Coloring Book is a website where you can pick blank illustration templates 
      and color them in, just like the Secret Garden coloring book. When coloring you are 
      presented with a color palette with 12 colors but, to help you get creative, there is a 
      Blend Mode that allows you to mix the colors. I also made it mobile friendly with a responsive design.`
    },
    {
      type: 'para',
      content: `The app also allows you to view all the paintings by previous users merged 
      together so you can see trends and use of color.`
    },
    {
      type: 'image',
      src: './assets/img/tcb-1.png',
      caption: 'Destop version'
    },
    {
      type: 'image',
      src: './assets/img/tcb-mobile.jpg',
      caption: 'Mobile version'
    },
    {
      type: 'ext-link',
      src: 'http://thecoloringbook.herokuapp.com',
      text: 'Try it out'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Create a web application using Node.js with database manipulation for a midterm class project.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `The class was mainly about using databases and learning how to use Node.js, however, 
      I didn’t want to create a boring form that collects and stores data. For me, the project should 
      not only meet the professor’s requirements, but also be able to collect interesting data without 
      being explicit about it. Also, since this is a web app designed for relaxing, mobile should be a 
      major target platform, so I made it responsive.`
    }
  ]
};