export const TELOS_DESIGN_SYSTEM = {
  name: 'telos design system',
  thumbnail: 'tds.png',
  size: 1,
  info: {
    role: 'DESIGNER + DEVELOPER',
    context: 'WORK PROJECT',
    skills: [
      'Design System',
      'Management',
      'Sketch',
      'Angular',
      'TypeScript',
      'HTML / CSS / Sass',
      'NPM',
    ],
  },
  category: 'DESIGN + FRONT-END DEV',
  time: 'Q1 2020',
  tags: ['ux', 'front end', 'angular'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `Telos Design System provides a source of truth for a set of reusable UI components for our products at Slavic401k. It comes with a Sketch library, an 
      <a target="_blank" href="https://www.npmjs.com/package/telos-design-system">Angular UI component library</a>
      , and a 
      <a target="_blank" href="https://tds-bak.vercel.app">Storybook demo page</a>. The goal of this project is to improve efficiency of the design and front end team, as well as ensure consistency throughout different products.`,
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `As we build more and more Angular apps under the new design guidelines, updates on design are getting more time-consuming. We used to rely on a customized Bootstrap library and tried to keep it in sync with the design guidelines. However, Bootstrap only helps with the visual part, while the implementation of common components is duplicated in multiple projects. To solve this problem, we need a design system.`,
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `Telos Design System includes a Sketch library managed in Abstract, which is an amazing tool for design collaboration. New symbols are continuously added as we design new products / features and see the need of reusability for any components.`,
    },
    {
      type: 'image',
      src: './assets/img/tds-sketch-lib.png',
      caption: 'Sketch Library in Abstract',
    },
    {
      type: 'para',
      content: `The Angular library is hosted on NPM, while the repository resides in BitBucket Cloud. A quick start guide in the README would come in handy for new front end team members.`,
    },
    {
      type: 'image',
      src: './assets/img/tds-npm.png',
      caption: 'Angular Library on NPM',
    },
    {
      type: 'para',
      content: `Additionally, there's a <a target="_blank" href="https://tds-bak.vercel.app">Storybook page</a> where you can play around with the components and check out corresponding code snippets. It not only serves as a documentation site for developers, but also a place where designers can review the implementation of their design.`,
    },
    {
      type: 'image',
      src: './assets/img/tds-1.gif',
      caption: 'App Layout Component',
    },
    {
      type: 'image',
      src: './assets/img/tds-2.gif',
      caption: 'Multiple-Choice Component',
    },
    {
      type: 'image',
      src: './assets/img/tds-3.gif',
      caption: 'Progress Bar Component',
    },
    {
      type: 'para',
      content: `I started this project with my spare time, and now it has been a critical part of all our new products. Other team members have also started to contribute to the design system. Even though it's still in an early stage, it really made us a better team.`,
    },
  ],
};
