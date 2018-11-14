export const PLAN_SETUP = {
  name: '401k-plan-setup',
  badge: 'in progress',
  thumbnail: '401k-plan-setup.svg',
  size: 1,
  info: {
    role: 'DESIGNER + DEVELOPER',
    context: 'WORK PROJECT',
    skills: [
      'Angular 6',
      'HTML',
      'TypeScript',
      'CSS / Sass',
      'UX / UI Design',
      'Sketch'
    ]
  },
  category: 'UX/UI DESIGN + FRONT-END DEV',
  time: 'Oct 2018',
  tags: ['ux', 'front end', 'angular'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `Setting up a 401(k) plan can be tedious and time-consuming. Employers that are interested in setting up a plan
    usually don’t have enough knowledge of it, so a sales representative have to be involved. At Slavic401k, this
    has been done on paper for many years. In order to improve the efficiency and capacity of acquiring new business,
    we started this Angular project which will allow employers to self-serve most of the process.`
    },
    {
      type: 'image',
      src: './assets/img/plan-setup-contribution.gif',
      caption: 'Angular implementation with mock data'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Based on the business requirements and data points in the plan setup documents, design and build an Angular app
      for employers to proactively start the process of setting up a plan, provide the required information, configure
      the plan specifications, and sign generated documents through DocuSign.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `To be honest, as the only designer for this project, I strongly feel that the best UX for this process should
      be minimal, meaning that the users don’t have to enter any company information or answer compliance questions,
      all those should be automatically imported. What they need to worry about should only be the decisions they want
      to make, such as when the 401(k) plan starts, eligibility requirements, and the employer contributions, etc.
      However, automation requires an API integration with our clients, which is not ready yet. Therefore, the task
      will be to optimize the data entry flow and experience.`
    },
    {
      type: 'para',
      content: `The first step is to sort out the requirements by mind mapping.`
    },
    {
      type: 'image',
      src: './assets/img/plan-setup-mind-map.png',
      caption: 'Mind mapping (disregard my terrible handwriting)'
    },
    {
      type: 'para',
      content: `As a flow with a bunch of questions that might be beyond the knowledge of its users, it needs to be progressive
      so they don’t
      get overwhelmed. Regulations should also be taken cared by design. For example, the constraints of a lot of
      fields
      are dependent on other fields, so it needs to keep track of them and notify the user if a previous input is no
      longer valid. Based on my understanding of the business logic and going back and forth with the stakeholders,
      I created the user flow before I worked on the wireframes and hi-fi design.`
    },
    {
      type: 'image',
      src: './assets/img/plan-setup-user-flow.png',
      caption: 'User flow'
    },
    {
      type: 'para',
      content: `Given the close deadline and the workload, this is certainly a big project as I’m responsible for the entire
      design and the
      majority of front-end development. Thanks to the symbol based style guide I built in Sketch for previous
      projects,
      I was able to quickly complete most of the design and iterate with prototypes.`
    },
    {
      type: 'para',
      content: `In addition to the style guide, I also created a customized Bootstrap library accordingly, which helped me a lot
      when I built the project in Angular.`
    },
    {
      type: 'image',
      src: './assets/img/plan-setup-hi-fi-design.png',
      caption: 'High Fidelity Design'
    },
    {
      type: 'para',
      content: `A good thing about being both a UX designer and a front-end developer is that I don’t need to be too detailed on
      the prototypes, especially when it comes to animations that are not very well supported in tools like Sketch prototyping /
      InVision. I can implement my ideas directly when building the Angular app, which, at the end of the day, could serve as
      a prototype before it’s production ready.`
    }
  ]
};