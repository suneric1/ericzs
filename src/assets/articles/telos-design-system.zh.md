#### 背景

Telos Design System 为 Slavic401k 的产品提供了一组可重用 UI 组件的真实来源。它带有一个 Sketch 库，一个
[Angular UI 组件库](https://www.npmjs.com/package/telos-design-system)
, 和
[Storybook demo page](https://tds-bak.vercel.app)。该项目的目标是提高设计和前端团队的效率，并确保不同产品的一致性。

#### 任务

随着我们在新的设计指南下构建越来越多的 Angular 应用程序，设计更新变得越来越耗时。我们过去依赖于定制的 Bootstrap 库，并试图使其与设计指南保持同步。但是，Bootstrap 只对视觉部分有帮助，而公共组件的实现在多个项目中是重复的。为了解决这个问题，我们需要一个设计系统。

#### 成果

Telos Design System 包含一个在 Abstract 中管理的 Sketch 库，它是一个了不起的设计协作工具。当我们设计新产品/功能并看到任何组件的可重用性需求时，会不断添加新符号。

![Abstract 中的 Sketch 组件库](./assets/img/tds-sketch-lib.png 'Abstract 中的 Sketch 组件库')

Angular 库托管在 NPM 上，而存储库驻留在 BitBucket Cloud 中。 README 中的快速入门指南对新的前端团队成员会派上用场。

![NPM 上的 Angular 组件库](./assets/img/tds-npm.png 'NPM 上的 Angular 组件库')

此外，还有一个[Storybook 演示页面](https://tds-bak.vercel.app)，您可以在其中试用组件并查看相应的代码片段。它不仅是开发人员的文档站点，也是设计人员可以查看其设计实现的地方。

![应用布局组件](./assets/img/tds-1.gif '应用布局组件')

![多选题组件](./assets/img/tds-2.gif '多选题组件')

![进度条组件](./assets/img/tds-3.gif '进度条组件')

我利用业余时间开始了这个项目，现在它已成为我们所有新产品的重要组成部分。其他团队成员也开始为设计系统做出贡献。尽管它仍处于早期阶段，但我们已经因此成为一个更好的团队。
