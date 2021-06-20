#### 背景

Bespoke 是 Slavic 非常受欢迎的一项动态投资组合服务，它根据投资者的经济情况和风险偏好，结合 plan 提供的基金选择，动态调整投资比例以达到 target-date funds 的效果，并且比一般的 target-date funds 费率更低。为了将这项服务作为增值业务开放给其他的 401k 服务公司，管理层决定和 Relius 合作，将其整合到 Relius。（Relius 是一个面向 401k 行业的解决方案，众多 401k 服务公司用它管理着上千亿美元的资产，Slavic 在它的基础上开发了自己的平台）

#### 任务

我的任务是为这项服务设计完整的交互流程，主要包括 enrollment（服务开通）和投资者 portal，让投资者可以从 Relius 的入口开通这项服务，成为我们的用户。主要的功能包括

- 完整的 enrollment 流程
  - 收集用户的信息来个性化定制投资方案
    - 字段包括养老存款、薪资、预期的退休年龄、期望的退休月收入
    - 基于这些字段，我们会给出 contribution 的建议，以让用户能够在退休时有足够的退休金
    - 根据用户的风险承受能力调整投资比例
    - 雇主的 match 是影响用户决策的一个重要因素，当用户没有最大化自己的福利时要给予提示
  - 根据投资方案展示基金的组成
    - 这项服务最大的优势是相对于 target-date fund 而言费用会低很多
  - 录入遗产受益人的信息
- enroll 之后的管理、信息查看、取消服务等

#### 1.0 版本上线

鉴于有限的研发资源，我们上线的第一个版本作为一个 MVP，主要包含了基础型功能以试探市场需求。401k 作为企业员工福利，超过 70%的用户来自于桌面端，因此我们采用了 desktop-first 的方式，再用响应式设计为移动端进行适配。

###### Enrollment 的 Sketch 原型

![Enrollment Prototype](./assets/img/bespoke/bespoke-sketch.png)

###### 移动端

![Bespoke Mobile](./assets/img/bespoke/bespoke-mobile.png)

###### 退休计划配置页面

用堆叠面积图让用户了解他们当前的 contribution 对于退休储蓄的影响，蓝色部分是用户的 contribution，绿色部分是雇主的 match。输入字段变更时，图表短暂模糊表示数据正在加载。若用户的 contribution 不足以让其达到设定的目标，则给出提示。

![Retirement Goal](./assets/img/bespoke/retirement-goal.gif)

###### 投资组合展示

![Bespoke Funds](./assets/img/bespoke/bespoke-funds.png)

###### Contribution Update 页面

![Update Contribution](./assets/img/bespoke/update-contribution.png)

#### 迭代

经过 usability testing 和用户访谈，我发现了以下主要问题

- 用户对于 retirement goal 页面的数据可视化印象深刻，但没有意识到他们在该步骤决策的重要性
- 在 retirement goal 页面，对于退休金的年限表述感到困惑
- 高风险的投资回报高，但其不确定性没有反映在图表上
- 用户输入对图表的影响不够直观
- 部分用户表示不能直观感受到产品的优势
- 多数用户并不了解雇主提供的 match

针对这些问题，我在设计上做出了一系列改进：

<div class="ext-link">
  <a href="https://www.sketch.com/s/ee6e54ee-5b05-4d8f-bc07-60bcfe53acb7/a/GmqJzME/play" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    改进后的高保真原型
  </a>
</div>

###### 优化 retirement goal 页面

- 修改算法以优化 retirement income 的呈现逻辑
- 加入了投资组合的 performance 对资产增长的影响
- 改进了图表以更好地呈现用户输入与图表的关系
- 提高了 contribution 表单的层级

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/bespoke/bespoke-prototype-chart.mp4" type="video/mp4">
  </video>
</div>

###### 可视化 match 的计算方式

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/bespoke/bespoke-prototype-contribution.mp4" type="video/mp4">
  </video>
</div>

###### 强调费用优势

- 在基金组合页面动态计算相比 target-date fund 能节省的费用，突显产品优势

![强调费用优势](./assets/img/bespoke/bespoke-fees.png)

###### 优化着陆页

![Landing Page](./assets/img/bespoke/bespoke-landing-compare.jpg)

#### 一些改进的方向

- 提供动态调整 contribution rate 的选项，让存款的预测值与期望始终能保持一致
- 给出 401k 对税收的减免预测，激发用户提高 contribution 的意愿
- 对于原本已经加入了 401k 计划的用户，展现相比现有投资组合的优势
- 在基金组合页面展示投资回报率
- 在 portal 中整合公司的专栏文章，做好用户的 401k 基础教育
- 整合其他金融账户，给用户提供更准确的建议
