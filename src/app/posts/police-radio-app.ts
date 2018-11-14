export const POLICE_RADIO_APP = {
  name: 'police-radio-app',
  thumbnail: 'radioapp.svg',
  size: 1,
  info: {
    role: 'UX DESIGNER',
    context: 'SCHOOL PROJECT',
    skills: ['UI / UX Design', 'Sketch', 'InVision'],
    link: {
      'View Report': 'https://drive.google.com/file/d/0ByT8WMcW900tcTVYRzlKbkNyQms/view?usp=sharing',
      'Interactive Prototype': 'https://invis.io/3U947DFW5#/200620016_1'
    }
  },
  category: 'PROTOTYPE',
  time: 'Oct 2016',
  tags: ['mobile', 'ux'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `This is a mobile radio app which would be installed on a dedicated walkie-talkie Android device. Limited by the number of physical buttons such as Push-To-Talk and volume buttons, most of the functions should be done on the touch screen.`
    },
    {
      type: 'para',
      content: `The layout of the app is divided into 3 parts - global control panel, main panel, and tabs switching panel. The most important information or mostly used functions, such as channel information, caller ID, emergency alert button and channel control buttons are placed in the global control panel. The tabs switching panel is used to switch the scan lists, playback and channel selection.`
    },
    {
      type: 'image',
      src: './assets/img/ra-screenshots.jpg',
      caption: 'Screenshots'
    },
    { type: 'h6', content: 'Scan Lists' },
    {
      type: 'para',
      content: `You can select a scan list to scan or edit lists in this tab. Editing includes create list, rename list, delete list and add/remove/block channels within list. You can also add the current channel into a list by tapping the “Add” button on global display.`
    },
    { type: 'h6', content: 'Playback' },
    {
      type: 'para',
      content: `This is a tab where you can playback the previous voice in the current channel.`
    },
    { type: 'h6', content: 'Channels' },
    {
      type: 'para',
      content: `In this tab, you can view or select all built-in channels in different zones. You are also able to add a certain channel into your scan list.`
    },
    {
      type: 'para',
      content: `In the setting menu, you can customize some feature of the app. For example, you can enable “Autohold” so that you don’t need to hold the PTT button all the time when you talk. The Dark Mode is also useful when you’re in a low light environment.`
    },
    {
      type: 'image',
      src: './assets/img/ra-dark-mode.jpg',
      caption: 'Dark mode'
    },
    {
      type: 'ext-link',
      src: 'https://invis.io/3U947DFW5#/200620016_1',
      text: 'Try it out'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Create a prototype of a walkie-talkie app for a dedicated Android device. We were provided with generative research results and functionality requirements.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `The functions of a walkie-talkie are quite complex. With secondary research, I honed my design and integrated some new ideas to the original spec. I listed the functions the app should offer and made several sketches. After that, I started to think about the information structure and created a concept map, which helped me a lot with figuring out the task flows. Having all this work done, I could finally work on the wireframe in Sketch, which led towards the final design.`
    },
  ]
};