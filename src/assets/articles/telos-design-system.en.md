#### Intro

Telos Design System provides a source of truth for a set of reusable UI components for our products at Slavic401k. It comes with a Sketch library, an
[Angular UI component library](https://www.npmjs.com/package/telos-design-system)
, and a
[Storybook demo page](https://tds-bak.vercel.app). The goal of this project is to improve efficiency of the design and front end team, as well as ensure consistency throughout different products.

#### The Ask

As we build more and more Angular apps under the new design guidelines, updates on design are getting more time-consuming. We used to rely on a customized Bootstrap library and tried to keep it in sync with the design guidelines. However, Bootstrap only helps with the visual part, while the implementation of common components is duplicated in multiple projects. To solve this problem, we need a design system.

#### The Answer

Telos Design System includes a Sketch library managed in Abstract, which is an amazing tool for design collaboration. New symbols are continuously added as we design new products / features and see the need of reusability for any components.

![Sketch Library in Abstract](./assets/img/tds-sketch-lib.png 'Sketch Library in Abstract')

The Angular library is hosted on NPM, while the repository resides in BitBucket Cloud. A quick start guide in the README would come in handy for new front end team members.

![Angular Library on NPM](./assets/img/tds-npm.png 'Angular Library on NPM')

Additionally, there's a [Storybook page](https://tds-bak.vercel.app) where you can play around with the components and check out corresponding code snippets. It not only serves as a documentation site for developers, but also a place where designers can review the implementation of their design.

![App Layout Component](./assets/img/tds-1.gif 'App Layout Component')

![Multi-Choice Question Component](./assets/img/tds-2.gif 'Multi-Choice Question Component')

![Progress Bar Component](./assets/img/tds-3.gif 'Progress Bar Component')

I started this project with my spare time, and now it has been a critical part of all our new products. Other team members have also started to contribute to the design system. Even though it's still in an early stage, we've become a better team because of it.
