export const USER_AUTH = {
  name: 'slavic401k-user-auth',
  thumbnail: '401k-user-auth.svg',
  size: 1,
  info: {
    role: 'DESIGNER + DEVELOPER',
    context: 'WORK PROJECT',
    skills: [
      'AngularJS',
      'UX / UI Design',
      'HTML',
      'CSS / Sass',
      'Gulp',
      'Sketch'
    ]
  },
  category: 'UX/UI DESIGN + FRONT-END DEV',
  tags: ['ux', 'front end', 'angular'],
  body: [
    { type: 'heading', content: 'Intro' },
    {
      type: 'para',
      content: 'This project is a complete revamp for the user authentication experience on <a href="https://www.slavic401k.com/account/sign-in/participant" target="_blank">slavic401k.com</a>. The original design had very limited functionalities and was so confusing that it caused a lot of phone calls for customer service, which was unacceptable. As a result of this project, the number of calls regarding user account dramatically reduced, which lowered the total volume of calls by over 50%.'
    },
    {
      type: 'para',
      content: 'While we have 3 types of users using different systems, this article will focus on the participant one.'
    },
    {
      type: 'image',
      src: './assets/img/401k-auth/login.png',
      caption: 'Login page for participants'
    },
    { type: 'heading', content: 'The Ask' },
    {
      type: 'para',
      content: 'Historically, Slavic401k has been creating temporary usernames and passwords for all new users (participants) enrolled in our 401(k) plan. As a new user, you go to the site, use the temporary credentials to log in, and then you will be prompted to enter a new password. Since there\'s no clear instruction on the site and this heavily relies on the communication with the users in advance (which sometimes are not reliable in our case), the new users often don\'t know what to do. In addition, the reset password functionality has been a big issue as well.'
    },
    {
      type: 'para',
      content: 'As the UX designer and front-end developer for this project, I need to design and implement a solution for login, sign up, and password reset, which should handle all the exceptions (we have A LOT). The front end was done with AngularJS (1.6), consuming APIs built by the backend team.'
    },
    { type: 'heading', content: 'The Answer' },
    {
      type: 'para',
      content: 'The image below is what you would see on the site previously, and there\'s no way for you to create an account, even it\'s usually the first thing you want to do before logging in if you don\'t have one.'
    },
    {
      type: 'image',
      src: './assets/img/401k-auth/login-old.png',
      caption: 'The original login pop-up'
    },
    {
      type: 'para',
      content: 'The main reason why such a simple problem becomes tricky here is because of how the industry works. We have participants coming from other plans, we have new participants, and we have people that are no longer employed, etc. We don\'t always have enough / correct information to verify the users, meaning we need to deal with a lot of exceptions. Therefore, I had to come up with a thought through user flow before starting the design.'
    },
    {
      type: 'image',
      src: './assets/img/401k-auth/ux-flow.png',
      caption: 'User flow that handles all the exceptions'
    },
    {
      type: 'para',
      content: 'The first change is to use a dedicated page instead of just a pop-up, which allows for more complex tasks. With the new flow, as a user, you\'ll need to sign up rather than log in with temporary credentials. After providing some information, you need to use the code sent your email to finish the process.'
    },
    {
      type: 'image',
      src: './assets/img/401k-auth/sign-up.gif',
      caption: 'Signing up as a new participant'
    },
    {
      type: 'para',
      content: 'One of the exceptions is that sometimes we don\'t have the user\'s contact information except for an address that\'s probably no longer valid. In this case, we\'d need to collect some identification documents before they can move on.'
    },
    {
      type: 'image',
      src: './assets/img/401k-auth/upload.gif',
      caption: 'Uploading identification documents'
    },
    {
      type: 'para',
      content: 'While security is important and the password requirements are kind of strict, I expect the experience of setting up a password to be less frustrating by providing dynamic checks and a proper display of status.'
    },
    {
      type: 'image',
      src: './assets/img/401k-auth/password-check.gif',
      caption: 'Password checks'
    },
    {
      type: 'para',
      content: 'As the front end developer for this project, I started the implementation right after the design was approved. While the backend was still unavailable at that time, I was able to mock the backend with the ngMockE2E module that comes with AngularJS. This really speeded up the development and allowed me to perform user testing when only the front end was done.'
    },
    {
      type: 'para',
      content: 'There weren\'t many challenges from the development, as the structure is very straightforward. One thing that I really enjoyed was creating my own <b><a href="https://github.com/suneric1/input-mask" target="_blank">input text mask</a></b>, as it was difficult to find a library that behaves exactly what I wanted. Feel free to try it out!'
    }
  ]
};