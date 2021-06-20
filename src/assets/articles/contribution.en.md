#### Background

Sponsor Portal is a platform for Slavic401k's major customers to manage 401k plan, which includes various data processing and service management functions. Every time the salary is settled, PEO customers use the Contribution module to import the employee's investment data, and then our business department will review and trade the amount for compliance. Due to the lack of systematic design and the old system framework, the efficiency of the process is very low. The business department needs to perform a large amount of data verification work and repeatedly communicate with customers through emails. Over-customized services for customers have also caused various irregular problems, such as inconsistencies in the format of imported data. In order to meet business growth and improve service quality, we decided to start with the Contribution module and gradually design a new Sponsor Portal.

#### Task

This task is to design a brand-new process for the Contribution module, transform a pure data import tool into an application covering a complete business flow, so that customers can complete most of the work online and free business personnel from email communication. At the same time, the possibility of human error is greatly reduced.
Through the separation of superior requirements and interviews with customers and business personnel, I have summarized the following functional points, which roughly include

- Upload file to import data and submit request
- Select the corresponding division and salary settlement period
- Preview part of the data to confirm that the data format is accurate
- Configuration data format
- Correct abnormal data, including non-compliant fields, non-compliant funds, etc.
- Allocate forfeiture (can be understood as available balance) for each enterprise
- Manage submitted requests
- View details-including status, data revision, etc.
- Withdraw unprocessed request

At the same time, I also need to design new visual and interactive logic for the entire framework of Sponsor Portal to lay the foundation for the new system architecture and the next rapid iteration.

###### Comparison between the new and the old version

> The process of the old version is too simple, only provides the function of uploading files, and the only page that requires user input is also unreasonably designed.

![Old version](/assets/img/contribution/original.gif)

> The home page of the new version of the Contribution module contains file uploads and recently submitted requests. The banner on the top provides links to the old version and provides feedback options. The layout and style of the entire platform have also been redesigned.

![新版](/assets/img/contribution/new-landing.png)

#### Beta and Iteration

We have prioritized the development of MVPs that can support new business processes and open them to a small number of PEO customers. Iterate based on feedback from Beta testing and release in grayscale. The following is the main process of MVP front-end recording using mock data-uploading files, importing data and submitting requests.

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/contribution/new-request-beta.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Demonstrating the new process of MVP</p>
</div>

###### Data format specification issues

The design of MVP does not provide the function of data preview and configuration format, but only prompts the format requirements when the user uploads the file. In the back-end verification process, exceptions such as data column mismatch will return an error.

![Format error](/assets/img/contribution/format-error.png)

During the Beta test, about 15% of sessions jumped to the old version of the page after the format was abnormal, and the records were retrieved and it was found that most of the data columns did not match. Subsequent steps to preview and adjust data columns were added to the process, which basically solved this problem.

> The user can drag the header to adjust the correspondence between the data columns and save it as the default configuration.

![Verify data format](/assets/img/contribution/verify-data-format.png)

###### Resolving invalid data

In the initial version, users can only choose to correct or delete abnormal items. Retrieving data found that some users will return to the homepage at this step and upload using the old version, and the usage rate of deleted items is very low. Through further interviews, we learned that many abnormal data require customers to spend extra time to investigate, and this step does not provide skip options and is not flexible enough. At the same time, the function of deleting items has certain risks, so we changed Remove to Mark for investigation, and the business department will handle it according to the original process for the time being.

![Prototype demonstration of exception handling steps](/assets/img/contribution/resolve-invalid.gif)

###### Apply Forfeiture

In view of the limited development resources and the priority of the requirements, our related requirements for Forfeiture in the MVP just follow the old version of the solution, but the function will be launched in the subsequent version.

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/apply-forfeiture.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Apply Forfeiture</p>
</div>

<div class="ext-link">
  <a href="https://www.sketch.com/s/88e9bb63-33e4-4590-a29e-e079bdcd89ae/a/paLKeLG/play" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    Sketch Hi-Fi Prototype
  </a>
</div>

#### Takeaway

In an ideal state, we should provide the ability to access the PEO system, and the data can be obtained through an open interface every time the salary is settled. In fact, when this project is launched, we have also promoted the implementation of related APIs with the mainstream PEO solution PrismHR. However, we have no way to ensure the accuracy of the data from the source, so there will always be a need for human intervention. The degree of automation of the process will become higher and higher, and the scope of the design at different stages will be different. At present, the legacy problems of the old system prevent us from providing more complete solutions, but we are also stepping away from it. Both design and development are reducing coupling and providing more possibilities for rapid product iteration.
