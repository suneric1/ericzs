#### 背景概述

Sponsor Portal 是 Slavic401k 的大客户们对 401k plan 进行管理的平台，包含了各种数据处理和服务管理的功能。每次薪资结算时，PEO 客户用其中的 Contribution 模块导入员工的投资数据，然后由我们的业务部门对金额的合规性进行审核修正并交易。由于该模块功能过于单一，缺乏系统性的设计加上整体老旧的系统框架，使得业务流程的效率非常低下。为了满足业务增长，提高服务质量，我们重新设计了 Contribution 模块，并且重构了 Sponsor Portal，为后续的快速迭代奠定了基础。新模块上线后得到了客户的普遍好评，业务部门的高峰期日均处理业务量提高了 150%。

#### 需求分析

上级的需求为 Contribution 模块设计一个全新的流程，把一个单纯的数据导入工具转变为覆盖完整业务流的应用，让客户能够在线上自助完成大部分工作，把业务人员从邮件沟通中解放出来，同时大幅度降低人为错误的可能性。

###### 核心问题

通过访谈用户、业务人员和分析业务流程，总结出核心问题

- 效率低下造成业务瓶颈

> "Sometimes it takes too long to process"
> 
> "We often receive data that needs to be fixed by the client"
> 
> "Some clients send us files in wrong format and we need to fix it"

- 自助服务不完善 沟通成本高

> "I have no idea about the process status unless I ask via email"
> 
> "I'm not 100% sure who has access to which divisions"
> 
> "Things can get lost as we communicate all the changes with email"
> 
> "Can you make it easier to apply forfeiture?"

###### 问题拆解

![问题拆解](/assets/img/contribution/5w1h.png)

###### Ideation

构思阶段主要围绕三个 HMW 问题进行发散，最后归纳成一系列的功能点。

![HMW](/assets/img/contribution/hmw.png)

#### MVP

由于关系到核心业务的流程变动，我们决定先快速开发满足基本型需求的 MVP，开放给小部分客户进行测试。基于调研的结果和我们对业务的理解，MVP 需要包括以下功能

- 上传文件导入数据并提交 request
  - 选择对应的 division 和工资结算期
  - 查看对应 division 的数据格式要求
  - 修正异常的数据，包括不符合要求的字段、不合规的资金等
  - 为每个企业分配 forfeiture（可理解为可用余额）
- 管理已提交的 request
  - 查看明细 - 包括状态、数据修正情况等
  - 撤销 request

###### 信息架构

同时，我还需要为 Sponsor Portal 的整个框架设计新的视觉和交互逻辑，为新的系统架构和下一步的快速迭代奠定基础。

![Information Architecture](/assets/img/contribution/information-architecture.png)

###### 流程优化

![flow-before-after](/assets/img/contribution/flow-before-after.png)

###### 设计规范

Telos Design System 是我发起并主导维护的一个内部设计系统，提供了可复用的基本组件和样式规范。它帮助我们快速地产出高保真的设计，同时促进了设计和技术之间的高效协作。在设计过程中对于具备普适性的新组件，我们也会通过设计评审加入到设计系统当中。

![Telos Design System](./assets/img/tds-sketch-lib.png 'Telos Design System')

###### Portal 新旧框架对比

旧版的信息架构混乱，不同模块的入口由开发人员随意放置。UI 也是以前由外包设计师完成，已经和现有的设计规范脱节。新版为左右布局，左侧为主要模块的导航，顶部通过 breadcrumb 为用户提供了清晰的 context，工作区域有模块层级的 banner 进行引导。

![Layout Before After](/assets/img/contribution/layout-before-after.png)

###### MVP Demo

以下为 MVP 主流程 submit contribution request 的 demo。

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/contribution/new-request-beta.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">MVP Demo</p>
</div>

#### 发现问题 快速迭代

在一个月的测试中，我们针对发现的问题提出了改进的方案，连同规划中的功能对客户做了问卷调查以进行 Kano Analysis。

![Kano Analysis](/assets/img/contribution/kano.png)

在分析结果的基础上，我们基于对业务的理解对需求的优先级进行排序。有些功能比如 Preview data 对于整体的用户样本虽然不是基本型需求，但对于保证系统的可用性很重要，因此我们也上调了优先级。

###### 数据格式规范

MVP 的设计并没有提供数据预览和配置格式的功能，仅在用户上传文件时提示格式要求。在后端校验过程中，数据列不匹配等异常将返回错误。

![Format Error](/assets/img/contribution/screenshots/format-error-before.png)

MVP 测试期间，大约有 10%的 session 在格式异常后跳转到旧版的页面，是个急需解决的问题。后续我们增加了预览和调整数据列的功能，基本上消除了格式不规范的影响。

> 用户能够拖动 header 调整数据列的对应关系，并保存为对应 division 的默认配置。

![Verify data format](/assets/img/contribution/screenshots/verify-data-format.png)

###### 给用户延迟处理的机会

在最初的版本中，对于异常项用户只能选择修正或者删除。调取数据发现，部分用户会在这一步返回主页并使用旧版本上传，并且删除选项的使用率较低。通过进一步访谈我们得知，即便是基本的异常数据也需要客户花额外的时间去调查，而该步骤无法跳过，不够灵活。在正式版中我们加入了 Mark for investigation 的功能，让用户能够延迟处理，并完善了 request 提交后的编辑能力。

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/video/resolve-invalid.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Resolve Invalid Data</p>
</div>

我们也相应增加了 request 的状态变动和数据更新的提示，方便用户对齐进度

![Request status](/assets/img/contribution/screenshots/status-before-after.png)

###### 分配 Forfeiture

鉴于有限的开发资源，MVP 中对 Forfeiture 的相关需求只是沿用了旧版的方案，但从 Kano 模型分析结果来看，这是一个优先级较高的期望型需求，因此在正式版本中加入了该功能。

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/video/apply-forfeiture.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">Apply Forfeiture</p>
</div>

###### 更清晰的状态流转和提醒

MVP 版本的 request 状态只分为 processing, processed 和 canceled，本意是将内部复杂的状态抽象为简单的几种，避免用户信息过载。通过测试的反馈，我们发现过度的抽象无法满足用户对信息完整度的需求，同时也不能很好地支撑优化后的流程，因此我们改进了状态的颗粒度和流转路径。

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/video/request-status.mp4" type="video/mp4">
  </video>
</div>

也完善了已提交 request 的管理功能

![Detail Before and After](/assets/img/contribution/screenshots/detail-before-after.png)

<div class="ext-link">
  <a href="https://www.figma.com/proto/MPon9QNFUyHgFg16HkcYrF/Contribution-Data-Transfer?page-id=0%3A1&node-id=87%3A12343&viewport=-2106%2C131%2C0.7748899459838867&scaling=scale-down&starting-point-node-id=0%3A271" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    Figma 高保真原型
  </a>
</div>

#### 结果

该模块改版上线的两个月后，约 90%的客户已经完全采用了新的流程，contribution 部门的高峰期日均处理业务量也提高了 150%。基于改版前后的问卷调查结果，模块的 NPS 从 3 分提高到 8 分，新设计得到了客户的普遍好评。

后续的优化需要继续完善第三方接入的能力，提高业务整体的自动化程度。然而我们没办法从源头上确保数据的准确性，总会有人工介入的需要。流程的自动化程度会越来越高，在不同阶段设计的 scope 也会不同。目前，旧系统的遗留问题阻碍了我们提供更完善的解决方案，但我们也在一步步脱离出来，无论是设计还是开发都在降低耦合，为产品的快速迭代提供更多可能性。
