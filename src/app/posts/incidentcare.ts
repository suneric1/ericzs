export const INCIDENTCARE = {
  name: 'incidentcare',
  thumbnail: 'incidentcare.svg',
  size: 1,
  info: {
    role: 'UX DESIGNER',
    context: 'SCHOOL PROJECT',
    skills: ['UI / UX Design', 'Sketch', 'Adobe Xd'],
    link: {
      'View Report': 'https://drive.google.com/file/d/0ByT8WMcW900tZ1pvcElXMzY0NWM/view?usp=sharing',
      'Interactive Prototype': 'https://xd.adobe.com/view/f37627ee-af9c-4ec8-984b-87787101ee70'
    }
  },
  category: 'PROTOTYPE',
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `IncidentCare is a nursing incident admin system primarily designed for tablets 
      (Report Portal app) and desktops (admin web app). It’s intended to make the workflow of 
      processing incidents much easier, since filling forms is always tedious. Employers can 
      generate reports using the Report Portal app. `
    },
    {
      type: 'para',
      content: `The app is designed to automatically populate 
      most of the information while they’re filling the form. The Admin Portal is web-based, 
      which allows supervisors to view data reports and process the cases quickly. After an 
      incident is reported, it needs to be reviewed by a supervisor, then the worker compensation 
      form should be filled out if it’s needed. The next step is to complete the OSHA 300/301 
      forms and close the case when everything is done. Supervisors can also auto-generate 
      formal OSHA forms with the history data.`
    },
    {
      type: 'image',
      src: './assets/img/ic-1.png',
      caption: 'Reports Overview'
    },
    {
      type: 'ext-link',
      src: 'https://xd.adobe.com/view/f37627ee-af9c-4ec8-984b-87787101ee70',
      text: 'Prototype'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Design and prototype a reporting system that simplifies the workflow of 
      processing work-related incidents, provided with general research results and required contents.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `The most challenging problem in this project is that paperwork is always cumbersome 
      and tedious, let alone the aesthetics. The first step is to have a self-explanatory layout 
      which can guide the users throughout the whole process. They should also be able to find 
      the overview of all cases easily. I designed a global display and color coded the status.`
    },
    {
      type: 'para',
      content: `For the whole process of an individual case, I distributed the 4 steps into 
      tabs, with icons indicating whether a step is completed.`
    },
    {
      type: 'image',
      src: './assets/img/ic-2.png',
      caption: 'OSHA Form'
    },
    {
      type: 'para',
      content: `Since this project consisted of so many forms and tables, much of this project 
      focused on typography and color usage. I restricted the use of color, making it clean 
      and comfortable to use.`
    },
  ]
};