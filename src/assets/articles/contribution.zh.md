#### 背景

Sponsor Portal 是 Slavic401k 的大客户们对 401k plan 进行管理的平台，包含了各种数据处理和服务管理的功能。每次薪资结算时，PEO 客户用其中的 Contribution 模块导入员工的投资数据，然后由我们的业务部门对金额的合规性进行审核并交易。由于缺乏系统性的设计加上老旧的系统框架，该流程的效率非常低下，业务部门需要进行大量数据校验的工作，并通过邮件与客户反复沟通。对客户的过度定制化服务也造成了各种不规范的问题，比如导入数据格式的不一致。为了满足业务的增长，提高服务的质量，我们决定先从 Contribution 模块开始，逐步设计全新的 Sponsor Portal。

#### 任务

此次任务是为 Contribution 模块设计一个全新的流程，把一个单纯的数据导入工具转变为覆盖完整业务流的应用，让客户能够在线上自助完成大部分工作，把业务人员从邮件沟通中解放出来，同时大幅度降低人为错误的可能性。
通过对上级需求的拆分和对客户与业务人员的访谈，我总结出了以下功能点，大致包括

- 上传文件导入数据并提交 request
  - 选择对应的 division 和工资结算期
  - 预览部分数据以确认数据格式准确
  - 配置数据格式
  - 修正异常的数据，包括不符合要求的字段、不合规的资金等
  - 为每个企业分配 forfeiture（可理解为可用余额）
- 管理已提交的 request
  - 查看明细 - 包括状态、数据修正情况等
  - 撤销未处理的 request

同时，我还需要为 Sponsor Portal 的整个框架设计新的视觉和交互逻辑，为新的系统架构和下一步的快速迭代奠定基础。

###### 新旧版对比

> 旧版的流程过于简陋，仅提供文件上传的功能，唯一要求用户输入的页面也设计得不合理。

![旧版](/assets/img/contribution/original.gif)

> 新版 Contribution 模块的首页，包含文件上传和近期提交的 request，顶上的 banner 提供了旧版的链接和提供反馈等选项。整个平台的布局和风格也重新设计。

![新版](/assets/img/contribution/new-landing.png)

#### Beta 与迭代

我们优先开发了能够支持新业务流程的 MVP，开放给一小部分 PEO 客户使用。基于 Beta 测试的反馈进行迭代，并灰度发布。以下为 MVP 的前端使用 mock 数据录制的主流程 - 上传文件导入数据并提交 request。

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/contribution/new-request-beta.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">新流程 MVP 的演示</p>
</div>

###### 数据格式的规范问题

MVP 的设计并没有提供数据预览和配置格式的功能，仅在用户上传文件时提示格式要求。在后端校验过程中，数据列不匹配等异常将返回错误。

![Format error](/assets/img/contribution/format-error.png)

Beta 测试期间，大约有 15%的 session 在格式异常后跳转到旧版的页面，调取记录发现多数是数据列不匹配导致。后续在流程中增加了预览和调整数据列的步骤，基本上解决了这个问题。

> 用户能够拖动 header 调整数据列的对应关系，并保存为默认配置。

![Verify data format](/assets/img/contribution/verify-data-format.png)

###### 异常数据的处理

在最初的版本中，对于异常的项，用户只能选择修正或者删除。调取数据发现，部分用户会在这一步返回主页并使用旧版本上传，并且删除项的使用率非常低。通过进一步访谈我们得知，许多异常的数据需要客户花额外的时间去调查，而该步骤没有提供跳过的选项，不够灵活。同时删除项的功能存在一定的风险，于是我们将 Remove 改为 Mark for investigation，暂由业务部门按原有的流程处理。

![异常处理步骤的原型演示](/assets/img/contribution/resolve-invalid.gif)

###### 分配 Forfeiture

鉴于有限的开发资源和需求的优先级，我们在 MVP 中对 Forfeiture 的相关需求只是沿用了旧版的方案，但在后续的版本上线了该功能。

<div class="video-wrapper">
  <video autoplay loop muted>
    <source src="./assets/img/contribution/apply-forfeiture.mp4" type="video/mp4">
  </video>
  <p class="col-xs-12 caption">分配 Forfeiture</p>
</div>

<div class="ext-link">
  <a href="https://www.sketch.com/s/88e9bb63-33e4-4590-a29e-e079bdcd89ae/a/paLKeLG/play" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    Sketch 高保真原型
  </a>
</div>

#### Takeaway

在理想的状态下，我们应该提供接入 PEO 系统的能力，每次薪资结算时数据能够通过开放接口获取，实际上这个项目上线的同时我们也和主流 PEO 解决方案 PrismHR 推进了相关 API 的落地。然而我们没办法从源头上确保数据的准确性，因此总会有人工介入的需要。流程的自动化程度会越来越高，在不同阶段设计的 scope 也会不同。目前，旧系统的遗留问题阻碍了我们提供更完善的解决方案，但我们也在一步步脱离出来，无论是设计还是开发都在降低耦合，为产品的快速迭代提供更多可能性。
