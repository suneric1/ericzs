export const ENERGY_USE = {
  name: 'energy-use-data-vis',
  thumbnail: 'energyuse.svg',
  size: 1,
  info: {
    role: 'REPORTER + DEVELOPER',
    context: 'SCHOOL PROJECT',
    skills: ['D3.js', 'HTML', 'JavaScript', 'CSS'],
    link: ['Check it out!', 'http://suneric1.github.io/energy-use-data-viz']
  },
  category: 'INTERACTIVE DATA VISUALIZATION',
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: `The title of this report is Iceland Found the Right Way to Use Energy. It shows Iceland as an outlier with extremely high energy use per capita, while the CO2 emissions of the country is surprisingly low.`
    },
    {
      type: 'para',
      content: `The first graph is a map of all countries colored based on the energy usage. 
      You can hover on a country to see how the value changes over years. As you scroll down, 
      there’s a bar chart where you have the options of viewing the top 10 countries with 
      different attributes. The following chart is a scatter plot. Iceland should grab your 
      attention due to its uncommon relationship between energy use and CO2 emissions.`
    },
    {
      type: 'image',
      src: '/assets/img/eu-1.png',
      caption: 'Scatter Plot & Barchart'
    },
    {
      type: 'para',
      content: `A line chart is then used to depict Iceland’s dramatically growing energy use 
      over decades. By putting several featured countries together, the last graph, a connected 
      scatter plot, will give you a sense of how different the way of using energy is between countries.`
    },
    {
      type: 'image',
      src: '/assets/img/eu-2.png',
      caption: 'Connected Scatter Plot'
    },
    {
      type: 'ext-link',
      src: 'http://suneric1.github.io/energy-use-data-viz',
      text: 'Check it out'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: `Explore an interesting dataset and visualize it with storytelling using D3.js.`
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: `Since global warming is always a hot topic, and there’re tons of data for me to 
      explore, I started looking for energy usage data. While the energy use and CO2 emissions 
      of most countries are proportional to each other, I noticed that Iceland has a totally 
      different story. This was my final project for my data visualisation course.`
    },
    { type: 'heading', content: 'Quote' },
    {
      type: 'quote',
      quote: `Eric (Zhiming Sun) will be an amazing hire for someone when he's finished with 
      his MFA. He was a superb help with other students' coding issues and has a strong sense 
      of data story. His technical curiosity and ability to figure hard things out on his own were superior.`,
      by: ['Lynn Cherny', 'http://blogger.ghostweather.com/2016/07/spring-semester-d3-class-take-2.html']
    },
  ]
};