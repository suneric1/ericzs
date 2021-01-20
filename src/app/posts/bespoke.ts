export const BESPOKE = {
  name: 'bespoke',
  thumbnail: 'bespoke.svg',
  size: 1,
  info: {
    role: 'DESIGNER + DEVELOPER',
    context: 'WORK PROJECT',
    skills: [
      'Product Design',
      'Angular',
      'HTML',
      'TypeScript',
      'CSS / Sass',
      'Sketch',
    ],
  },
  category: 'PRODUCT DESIGN + FRONT-END DEV',
  time: 'Jun 2020',
  tags: ['ux', 'front end', 'angular'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `At Slavic401k, Bespoke has been a popular portfolio option for our 401k participants, as it
      dynamically adjusts their investment allocation based on their retirement goal and risk tolerance. In
      order to make this feature available for other 401(k) recordkeepers using FIS Relius, on top of which
      we've built a lot of tools to support our business, we decided to productize it as a service.`,
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Design and build the MVP of Bespoke, which includes the enrollment process and the user 
      dashboard, both integrated with FIS Relius using SSO. When a recordkeeper enables Bespoke in Relius,
      their participants will be able to enroll with Bespoke and let it take care of their investment allocation.`,
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `While there were many challenges we faced when working on this project, managing conflicting
      priorities was the one I was mostly concerned. Much as we want to deliver all the great features in our backlog, we are
      just a small team, so reusability is the key. In our product roadmap, the new Participant Dashboard was one 
      of the upcoming big project. Due to the similarity between it and Bespoke, I tried to keep the design and 
      code as reusable as possible. In fact, about 80% of the components can be reused in Participant Dashboard.`,
    },
    {
      type: 'image',
      src: './assets/img/bes-1.png',
      caption: 'Bespoke Dashboard',
    },
    {
      type: 'para',
      content: `The account overview page provides participants a clear view of the most important data points they 
      should care about, including the account balance, contribution, investment allowcation, and most importantly, 
      retirement savings projection. The stacked area chart visualizes how your account balance might grow, and how
      much the employer match contributes to it.`,
    },
    {
      type: 'image',
      src: './assets/img/bes-2.png',
      caption: 'Enrollment - Retirement Goal Settings',
    },
    {
      type: 'para',
      content: `During enrollment, retirement goal setting is the most important step. You're able to play around 
      with the numbers and see how they might affect your retirement savings. Clicking the "Set to recommended" 
      button will adjust your contribution rate so that your retirement goal can be met.`,
    },
    {
      type: 'image',
      src: './assets/img/bes-3.png',
      caption: 'Adding beneficiaries',
    },
    {
      type: 'para',
      content: `Overall, the idea of Bespoke is very straightforward, but the core is really the investment 
      allocation logic and the algorithm behind the retirement savings chart. Honestly, there are a lot we can 
      improve to help participants make better decisions, but this is good enough for an MVP. Even if it turned
      out not as successful as we expected, our efforts already contributed to the upcoming projects.`,
    },
    {
      type: 'para',
      content: `Fail fast, learn faster.`,
    },
  ],
};
