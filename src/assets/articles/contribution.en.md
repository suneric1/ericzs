#### Background

Sponsor Portal is a platform for Slavic401k's major customers to manage 401k plan, including various data processing and service management functions. Every time when the salary is settled, PEO customers use the Contribution module to import the employee's investment data, and then our business department will review and modify the compliance of the amount and trade. Due to the single function of the module, lack of systematic design and the overall outdated system framework, the efficiency of the business process is very low. In order to meet business growth and improve service quality, we redesigned the Contribution module and restructured the Sponsor Portal, laying the foundation for subsequent rapid iterations. After the new module went online, it was generally praised by customers, and the average daily processing volume of the business department during the peak period increased by 150%.

#### Requirement Analysis

The higher-level requirements design a new process for the Contribution module, transforming a pure data import tool into an application covering a complete business flow, allowing customers to complete most of the work online, freeing business personnel from email communication, and at the same time Significantly reduce the possibility of human error.

###### Key Problems

Summarize the core issues by interviewing users, stakeholders and analyzing business processes

- Inefficiency causes business bottlenecks

> "Sometimes it takes too long to process"
>
> "We often receive data that needs to be fixed by the client"
>
> "Some clients send us files in wrong format and we need to fix it"

- Imperfect self-service and high cost of communication

> "I have no idea about the process status unless I ask via email"
>
> "I'm not 100% sure who has access to which divisions"
>
> "Things can get lost as we communicate all the changes with email"
>
> "Can you make it easier to apply forfeiture?"

###### 5W1H

![问题拆解](/assets/img/contribution/5w1h.png)

###### Ideation

The ideation stage mainly diverges around three HMW issues, and finally summarizes them into a series of function points.

![HMW](/assets/img/contribution/hmw.png)

#### MVP

Due to changes in the core business process, we decided to quickly develop an MVP that meets the basic needs and open it to a small number of customers for testing. Based on the results of the survey and our understanding of the business, MVP needs to include the following functions

- Upload file to import data and submit request
  - Select the corresponding division and salary settlement period
  - View the data format requirements of the corresponding division
  - Correct abnormal data, including non-compliant fields, non-compliant funds, etc.
  - Allocate forfeiture (can be understood as available balance) for each enterprise
- Manage submitted requests
  - View details-including status, data revision, etc.
  - Cancel request

###### Information Architecture

At the same time, I also need to design new visual and interactive logic for the entire framework of Sponsor Portal to lay the foundation for the new system architecture and the next rapid iteration.

![Information Architecture](/assets/img/contribution/information-architecture.png)

###### Process Optimization

![flow-before-after](/assets/img/contribution/flow-before-after.png)

###### Design Guidelines

Telos Design System is an internal design system initiated and maintained by me, which provides reusable basic components and style specifications. It helps us quickly produce high-fidelity designs, and at the same time promotes efficient collaboration between design and technology. In the design process, we will also add new components with universal applicability to the design system through design review.

![Telos Design System](./assets/img/tds-sketch-lib.png 'Telos Design System')

###### Portal Layout Before and After

The information architecture of the old version is chaotic, and the entrances of different modules are placed at will by developers. UI was also previously completed by outsourced designers, which has been out of touch with existing design specifications. The new version has a left-right layout, the left side is the navigation of the main modules, the top provides a clear context for users through breadcrumb, and the work area is guided by a module-level banner.

![Layout Before After](/assets/img/contribution/layout-before-after.png)

###### MVP Demo

The following is a demo of the MVP main process - submit contribution request.

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/contribution/new-request-beta.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">MVP Demo</p>
</div>

#### Find Problems and Iterate Quickly

In the one-month test, we put forward an improvement plan for the problems found, and conducted a questionnaire survey with customers for Kano Analysis along with the planned functions.

![Kano Analysis](/assets/img/contribution/kano.png)

Based on the analysis results, we prioritize the requirements based on the understanding of the business. Some functions such as Preview data are not basic requirements for the overall user sample, but they are important to ensure the usability of the system, so we have also increased the priority.

###### Data format issue

The design of MVP does not provide the function of data preview and configuration format, but only prompts the format requirements when the user uploads the file. In the back-end verification process, exceptions such as data column mismatch will return an error.

![Format Error](/assets/img/contribution/screenshots/format-error-before.png)

During the MVP test, about 10% of sessions jumped to the old version of the page after the format is abnormal, which is a problem that needs to be solved urgently. In the follow-up, we added the function of previewing and adjusting the data column, which basically eliminated the influence of irregular format.

> The user can drag the header to adjust the correspondence between the data columns and save it as the default configuration of the corresponding division.

![Verify data format](/assets/img/contribution/screenshots/verify-data-format.png)

###### Give users the flexibility to delay processing

In the initial version, users can only choose to modify or delete abnormal items. Retrieving data found that some users will return to the homepage at this step and upload using the old version, and the usage rate of the delete option is low. Through further interviews, we learned that even basic abnormal data requires customers to spend extra time to investigate, and this step cannot be skipped and is not flexible enough. In the official version, we have added the function of Mark for investigation, which allows users to delay processing, and improves the editing ability after the request is submitted.

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/video/resolve-invalid.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Resolve Invalid Data</p>
</div>

We have also correspondingly added prompts for request status changes and data updates to facilitate users to align the progress

![Request status](/assets/img/contribution/screenshots/status-before-after.png)

###### Apply Forfeiture

In view of the limited development resources, the related requirements for Forfeiture in the MVP just follow the old version of the solution, but from the Kano model analysis results, this is a higher priority expectation requirement, so this feature is added to the official version.

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/video/apply-forfeiture.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Apply Forfeiture</p>
</div>

###### Clearer status and notification

The request status of the MVP version is only divided into processing, processed and canceled. The original intention is to abstract the internal complex status into simple ones to avoid user information overload. Through the feedback of the test, we found that excessive abstraction could not meet the user's demand for information integrity, and at the same time could not support the optimized process well. Therefore, we improved the state granularity and flow path.

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/video/request-status.mp4" type="video/mp4">
  </video>
</div>

We also improved the management of submitted requests

![Detail Before and After](/assets/img/contribution/screenshots/detail-before-after.png)

<div class="ext-link">
  <a href="https://www.figma.com/proto/MPon9QNFUyHgFg16HkcYrF/Contribution-Data-Transfer?page-id=0%3A1&node-id=87%3A12343&viewport=-2106%2C131%2C0.7748899459838867&scaling=scale-down&starting-point-node-id=0%3A271" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    Figma Hi-Fi Prototype
  </a>
</div>

#### Results

Two months after the revision and launch of the module, about 90% of customers have completely adopted the new process, and the average daily processing volume of the contribution department has increased by 150% during the peak period. Based on the results of the questionnaire before and after the revision, the NPS of the module increased from 3 points to 8 points, and the new design was generally praised by customers.

Subsequent optimization needs to continue to improve the ability of third-party access to improve the overall degree of automation of the business. However, we cannot ensure the accuracy of the data from the source, and there will always be a need for human intervention. The degree of automation of the process will become higher and higher, and the scopes designed at different stages will be different. At present, the legacy problems of the old system hinder us from providing more complete solutions, but we are also stepping away from it. Both design and development are reducing coupling and providing more possibilities for rapid product iteration.
