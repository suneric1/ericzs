#### 背景

Bespoke是Slavic非常受欢迎的一项动态投资组合服务，它根据投资者的经济情况和风险偏好，结合plan提供的基金选择，动态调整投资比例以达到target-date funds的效果，并且比一般的target-date funds费率更低。为了将这项服务作为增值业务开放给其他的401k服务公司，管理层决定和Relius合作，将其整合到Relius。（Relius是一个面向401k行业的解决方案，众多401k服务公司用它管理着上千亿美元的资产，Slavic在它的基础上开发了自己的平台）

#### 任务

我的任务是为这项服务设计完整的交互流程，主要包括enrollment（服务开通）和投资者portal，让投资者可以从Relius的入口开通这项服务，成为我们的用户。主要的功能包括

- 完整的enrollment流程
  - 收集用户的信息来个性化定制投资方案
    - 字段包括养老存款、薪资、预期的退休年龄、期望的退休月收入
    - 基于这些字段，我们会给出contribution的建议，以让用户能够在退休时有足够的退休金
    - 根据用户的风险承受能力调整投资比例
    - 雇主的match是影响用户决策的一个重要因素，当用户没有最大化自己的福利时要给予提示
  - 根据投资方案展示基金的组成
    - 这项服务最大的优势是相对于target-date fund而言费用会低很多
  - 录入遗产受益人的信息
- enroll之后的管理、信息查看、取消服务等

#### 1.0版本上线

鉴于有限的研发资源，我们上线的第一个版本作为一个MVP，主要包含了基础型功能以试探市场需求。401k作为企业员工福利，超过70%的用户来自于桌面端，因此我们采用了desktop-first的方式，再用响应式设计为移动端进行适配。

###### Enrollment的Sketch原型

![Enrollment Prototype](./assets/img/bespoke/bespoke-sketch.png)

###### 移动端

![Bespoke Mobile](./assets/img/bespoke/bespoke-mobile.png)

###### 退休计划配置页面

用堆叠面积图让用户了解他们当前的contribution对于退休储蓄的影响，蓝色部分是用户的contribution，绿色部分是雇主的match。输入字段变更时，图表短暂模糊表示数据正在加载。若用户的contribution不足以让其达到设定的目标，则给出提示。

![Retirement Goal](./assets/img/bespoke/retirement-goal.gif)

###### 投资组合展示

![Bespoke Funds](./assets/img/bespoke/bespoke-funds.png)

###### Contribution Update页面

![Update Contribution](./assets/img/bespoke/update-contribution.png)

#### 迭代

经过usability testing和用户访谈，我发现了以下主要问题
- 用户对于retirement goal页面的数据可视化印象深刻，但没有意识到他们在该步骤决策的重要性
- 在retirement goal页面，对于退休金的年限表述感到困惑
- 高风险的投资回报高，但其不确定性没有反映在图表上
- 用户输入对图表的影响不够直观
- 部分用户表示不能直观感受到产品的优势
- 多数用户并不了解雇主提供的match

针对这些问题，我在设计上做出了一系列改进：

<div class="ext-link">
  <a href="https://www.sketch.com/s/ee6e54ee-5b05-4d8f-bc07-60bcfe53acb7/a/GmqJzME/play" target="_blank">
    <i class="icon-font icon-link-ext-alt"></i>
    改进后的高保真原型
  </a>
</div>

###### 优化retirement goal页面

- 修改算法以优化retirement income的呈现逻辑
- 加入了投资组合的performance对资产增长的影响
- 改进了图表以更好地呈现用户输入与图表的关系
- 提高了contribution表单的层级

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/bespoke/bespoke-prototype-chart.mp4" type="video/mp4">
  </video>
</div>

###### 可视化match的计算方式

<div class="video-wrapper">
  <video controls>
    <source src="./assets/img/bespoke/bespoke-prototype-contribution.mp4" type="video/mp4">
  </video>
</div>

###### 强调费用优势
- 在基金组合页面动态计算相比target-date fund能节省的费用，突显产品优势

![强调费用优势](./assets/img/bespoke/bespoke-fees.png)

###### 优化着陆页

![Landing Page](./assets/img/bespoke/bespoke-landing-compare.jpg)

#### 一些改进的方向

- 提供动态调整contribution rate的选项，让存款的预测值与期望始终能保持一致
- 给出401k对税收的减免预测，激发用户提高contribution的意愿
- 对于原本已经加入了401k计划的用户，展现相比现有投资组合的优势
- 在基金组合页面展示投资回报率
- 在portal中整合公司的专栏文章，做好用户的401k基础教育
- 整合其他金融账户，给用户提供更准确的建议
