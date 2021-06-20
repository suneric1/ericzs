#### Intro

Setting up a 401(k) plan can be tedious and time-consuming. Employers that are interested in setting up a plan usually don’t have enough knowledge of it, so a sales representative have to be involved. At Slavic401k, this has been done on paper for many years. In order to improve the efficiency and capacity of acquiring new business, we started this Angular project which will allow employers to self-serve most of the process.

![Angular implementation with mock data](./assets/img/plan-setup-contribution.gif 'Angular implementation with mock data')

#### The Ask

Based on the business requirements and data points in the plan setup documents, design and build an Angular app for employers to proactively start the process of setting up a plan, provide the required information, configure the plan specifications, and sign generated documents through DocuSign.

#### The Answer

To be honest, as the only designer for this project, I strongly feel that the best UX for this process should be minimal, meaning that the users don’t have to enter any company information or answer compliance questions, all those should be automatically imported. What they need to worry about should only be the decisions they want to make, such as when the 401(k) plan starts, eligibility requirements, and the employer contributions, etc. However, automation requires an API integration with our clients, which is not ready yet. Therefore, the task will be to optimize the data entry flow and experience.

The first step is to sort out the requirements by mind mapping.

![Mind mapping draft (disregard my terrible handwriting)](./assets/img/plan-setup-mind-map.png 'Mind mapping draft (disregard my terrible handwriting)')

As a flow with a bunch of questions that might be beyond the knowledge of its users, it needs to be progressive so they don’t get overwhelmed. Regulations should also be taken cared by design. For example, the constraints of a lot of fields are dependent on other fields, so it needs to keep track of them and notify the user if a previous input is no longer valid. Based on my understanding of the business logic and going back and forth with the stakeholders, I created the user flow before I worked on the wireframes and hi-fi design.

![User flow](./assets/img/plan-setup-user-flow.png 'User flow')

Given the close deadline and the workload, this is certainly a big project as I’m responsible for the entire design and the majority of front-end development. Thanks to the symbol based style guide I built in Sketch for previous projects, I was able to quickly complete most of the design and iterate with prototypes.

In addition to the style guide, I also created a customized Bootstrap library, which got a complete rewrite and evolved to a more sophisticated [design system](/projects/telos-design-system) after this project.

![High Fidelity Design](./assets/img/plan-setup-hi-fi-design.png 'High Fidelity Design')

A good thing about being both a product designer and a front-end developer is that I don’t need to be too detailed on the prototypes, especially when it comes to animations that are not very well supported in tools like Sketch prototyping / InVision. I can implement my ideas directly when building the Angular app, which, at the end of the day, could serve as a prototype before it’s production ready.
