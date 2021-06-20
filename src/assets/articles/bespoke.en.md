#### Intro

Bespoke is a very popular dynamic portfolio service of Slavic. It dynamically adjusts the investment ratio to achieve the effect of target-date funds according to the investor’s economic situation and risk preference, combined with the fund selection provided by the plan, and is better than the general target. -Date funds have lower rates. In order to open this service as a value-added service to other 401k service companies, the management decided to cooperate with Relius and integrate it into Relius. (Relius is a solution for the 401k industry. Many 401k service companies use it to manage hundreds of billions of dollars in assets. Slavic has developed its own platform based on it.)

#### Task

My task is to design a complete interactive process for this service, including enrollment (service activation) and investor portal, so that investors can activate this service from the Relius portal and become our users. The main functions include

- Complete enrollment process
  - Collect user information to personalize and customize investment plans
    - Fields include pension savings, salary, expected retirement age, expected monthly retirement income
    - Based on these fields, we will give suggestions for contribution so that users can have enough retirement funds when they retire
    - Adjust the investment ratio according to the user's risk tolerance
    - Employer’s match is an important factor influencing users’ decision-making, and reminders should be given when users do not maximize their benefits
  - Show the composition of the fund according to the investment plan
    - The biggest advantage of this service is that the cost will be much lower compared to the target-date fund
  - Enter the beneficiary's information
- Management, information viewing, service cancellation, etc. after enroll

#### Releasing Version 1.0

Due to limited resources, the first version we launched as an MVP mainly included basic functions to test market demand. 401k is a corporate employee benefit, and more than 70% of users are from the desktop. Therefore, we adopted a desktop-first approach, and then used responsive design to adapt to the mobile terminal.

###### Sketch Prototype of Enrollment

![Enrollment Prototype](./assets/img/bespoke/bespoke-sketch.png)

###### Mobile Version

![Bespoke Mobile](./assets/img/bespoke/bespoke-mobile.png)

###### Retirement Goal Page

Use the stacked area chart to let users understand the impact of their current contributions on retirement savings. The blue part is the user's contribution, and the green part is the employer's match. When the input field is changed, the chart is briefly blurred to indicate that the data is being loaded. If the user's contribution is not enough to achieve the set goal, a prompt will be given.

![Retirement Goal](./assets/img/bespoke/retirement-goal.gif)

###### Displaying Funds

![Bespoke Funds](./assets/img/bespoke/bespoke-funds.png)

###### Contribution Update Page

![Update Contribution](./assets/img/bespoke/update-contribution.png)

#### Iteration

After usability testing and user interviews, I found the following main problems
- Users are impressed with the data visualization on the retirement goal page, but do not realize the importance of their decision at this step
- On the retirement goal page, I am confused about the term of retirement pension
- High-risk investments have high returns, but their uncertainties are not reflected on the chart
- The influence of user input on the chart is not intuitive enough
- Some users said they could not directly feel the advantages of the product
- Most users do not understand the match provided by the employer

In response to these problems, I made a series of improvements in the design:

<div class="ext-link">
  <a href="https://www.sketch.com/s/ee6e54ee-5b05-4d8f-bc07-60bcfe53acb7/a/GmqJzME/play" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    Improved Hi-Fi Prototype
  </a>
</div>

###### Optimize the Retirement Goal Page

- Modify the algorithm to optimize the presentation logic of retirement income
- Added the impact of portfolio performance on asset growth
- Improved the chart to better show the relationship between user input and the chart
- Improved the level of contribution form

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/bespoke/bespoke-prototype-chart.mp4" type="video/mp4">
  </video>
</div>

###### Visualize Match Calculation

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/bespoke/bespoke-prototype-contribution.mp4" type="video/mp4">
  </video>
</div>

###### Emphasize Low-Cost Advantage
- Dynamic calculation of the cost savings compared to target-date fund on the fund portfolio page, highlighting product advantages

![Emphasize Low-Cost Advantage](./assets/img/bespoke/bespoke-fees.png)

###### Optimize Landing Page

![Landing Page](./assets/img/bespoke/bespoke-landing-compare.jpg)

#### Ideas for Improvement

- Provides the option to dynamically adjust the contribution rate, so that the predicted value of the deposit can a lways be consistent with the expectation
- Provide 401k tax reduction and exemption forecasts to stimulate users' willingness to increase contribution
- For users who have already joined the 401k plan, show their advantages over the existing portfolio
- Display the return on investment on the fund portfolio page
- Integrate the company's column articles in the portal, and do a good job of 401k basic education for users
- Integrate other financial accounts to provide users with more accurate suggestions