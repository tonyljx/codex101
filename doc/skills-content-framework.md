# Skills 专题内容框架

更新时间：2026-08-10

这份文档记录 Skills 专题的受众、学习路径、选题依据和扩展边界。新增或调整 Skills 文章时，应先判断它属于哪一阶段、解决哪一个新手问题，再决定是否创建独立页面。

## 专题目标

Skills 专题不是一份 Skill 清单，也不是只教 `SKILL.md` 语法的开发者手册。

它要帮助第一次接触 Agent Skills 的读者完成一条连续路径：

```text
听懂概念
→ 在真实任务中使用一次
→ 找到并安全安装第三方 Skill
→ 创建、排错和改进自己的 Skill
→ 组合多个能力并跨工具、跨团队维护
→ 按行业选择合适的 Skill
```

默认读者不需要预先理解 YAML、MCP、Agent、上下文窗口或软件供应链。每篇文章必须先解释真实问题，再介绍术语和技术细节。

## 调研方法

本轮扩展使用 Firecrawl 对 2026 年 Agent Skills 相关的官方文档、开放规范、开发者资料、OpenAI Community 和 Reddit 讨论进行多组检索，并对候选主题做交叉验证。

“讨论量高”不等于虚构精确搜索量。本专题使用以下信号判断优先级：

- 同一个问题是否在不同社区和不同平台反复出现；
- 官方产品和开放规范是否已经提供对应能力；
- 是否已经形成大型目录、市场或跨平台生态；
- 是否存在公开的原始安全研究或真实故障案例；
- 新手是否会在第一次安装、触发、组合或分享时直接遇到；
- 主题能否跨行业长期复用，而不是只跟随一次产品更新。

## 现有覆盖

现有文章已经覆盖：

- Skill 是什么、为什么需要；
- Skill 与 Prompt、Project、Memory、MCP、Agent 的区别；
- 六类常见工作流；
- 第一次使用和第一次创建；
- description、`SKILL.md`、渐进式加载和支持目录；
- 触发与输出质量测试；
- AI 网站开发、写作、电商和投资四类推荐。

因此，本轮不再增加“什么是 Skill”“如何写 YAML”“更多行业 Skill 清单”这类重复页面。

## 候选主题与取舍

| 优先级 | 候选主题 | 讨论信号 | 处理方式 |
| --- | --- | --- | --- |
| 1 | 去哪里找、如何安装和判断质量 | 目录、市场、官方仓库和“该装哪些”讨论大量出现 | 新增独立入门文章 |
| 2 | 第三方 Skill 的安全与供应链风险 | Snyk、Orca 均发布原始研究，社区反复讨论自动更新与信任 | 新增独立安全文章 |
| 3 | Skill 找不到、不触发或执行不完整 | Codex、Claude Code 社区反复出现，属于新手最直接的失败 | 新增独立排错文章 |
| 4 | 多个 Skill 的重叠、冲突与组合 | 大型 Skill 目录和编排讨论增长，OpenAI Community 有专门讨论 | 新增独立组合文章 |
| 5 | 跨平台复用、团队分享与版本维护 | Agent Skills 已成为开放格式，VS Code、Codex 等客户端采用 | 合并为一篇“可移植核心 + 客户端差异”文章 |
| 6 | 如何发布到 Marketplace | 与安装、团队分发高度重叠，且各平台变化快 | 并入“查找安装”和“分享维护” |
| 7 | 更复杂的自动评测平台 | 已有测试与迭代文章，当前对小白过早 | 暂不单独成篇 |
| 8 | 多 Agent 编排 | 容易与 Skill、Subagent、Agent Teams 混淆 | 在组合文章解释边界，不把它包装成 Skill 必备能力 |

## 升级后的信息架构

### 01 · 先理解

目标：建立共同语言，知道 Skill 解决什么、不解决什么。

- Skill 是什么？
- 为什么需要 Skill？
- Skill 与 Prompt、Project、Memory、MCP、Agent 的区别

### 02 · 从工作出发

目标：先识别值得沉淀的重复工作，再决定是否创建 Skill。

- 6 类最常用 Skill 工作流

### 03 · 第一次动手

目标：先真实使用，再创建一个足够小的 Skill。

- 第一次使用 Skill
- 创建第一个 Skill

### 04 · 安装与安全

目标：解决新手从“我想用”到“我敢用”的缺口。

- 去哪里找 Skill？如何安装和判断值不值得用
- 第三方 Skill 安全吗？安装前的十分钟审查

### 05 · 写好并排错

目标：让 Skill 不只格式正确，还能被发现、执行和持续改进。

- 怎样写好一个 Skill
- 怎样测试与迭代 Skill
- Skill 不触发怎么办？

### 06 · 组合与复用

目标：从单个 Skill 进入真实工作系统，同时保持边界清楚。

- 多个 Skill 怎么配合？
- 一份 Skill 能跨 Codex、Claude 和 VS Code 共用吗？

### 07 · 行业推荐

目标：按真实工作选择少量必要能力，而不是一次安装巨大清单。

- AI 网站开发
- 文章撰写与内容工作
- 电商与增长运营
- 股票研究与投资分析

## 新增文章契约

本轮新增五篇：

1. `discover-and-install-skills`
2. `review-skill-security`
3. `troubleshoot-skill`
4. `compose-multiple-skills`
5. `portable-team-skills`

每篇都必须：

- 用一个小白会遇到的真实问题开场；
- 明确“先做什么、再做什么、什么时候停下来”；
- 区分官方事实、开放规范、通用实践和文章建议；
- 不把第三方市场的下载量或徽章当成安全证明；
- 不暗示不同客户端的权限、脚本语言和触发行为完全相同；
- 与前后文章建立下一步链接；
- 按 `doc/imagegen/article-illustration-sop.md` 提供一张正文图和一张漫画图。

## 主要来源

- [OpenAI：Build skills](https://developers.openai.com/codex/build-skills)
- [Agent Skills specification](https://agentskills.io/specification)
- [Agent Skills best practices](https://agentskills.io/skill-creation/best-practices)
- [VS Code：Use Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills)
- [Snyk ToxicSkills research](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/)
- [Orca Security：AI Agent Skill supply-chain research](https://orca.security/resources/blog/ai-agent-skill-supply-chain-security/)
- [OpenAI Community：overlapping Codex skills](https://community.openai.com/t/how-do-you-handle-overlapping-codex-skills-in-larger-skill-catalogs/1383626)

社区页面只用于判断讨论信号。技术行为以官方文档、开放规范和原始研究为准。
