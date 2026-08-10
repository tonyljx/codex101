# Codex101 Skills 栏图像提示词

完整执行流程见 [`article-illustration-sop.md`](./article-illustration-sop.md)。本文档只保存 Skills 栏现有文章的具体提示词。

这份清单用于 `$artifact-template-codex101`。参考图只定义视觉语言；文章源码定义事实与叙事。每篇文章生成两种资产：一张横向正文配图和一张纵向漫画讲解。

## 通用视觉规则

- 参考图角色：`/Users/tony/.codex/skills/artifact-template-codex101/assets/reference.png`
- 正文配图画幅：横向 3:2，适配 52rem 文档正文宽度。
- 漫画画幅：纵向 2:3，4–6 个大模块，移动端仍能读清。
- 视觉语言：温暖米白纸张、轻微纸纤维、深灰手绘墨线、低饱和青绿色与陶土橙色、少量浅灰阴影、圆角虚线分区、手绘箭头与简单图标。
- 人物：需要时固定使用同一位非真人的可爱女生知识向导；年轻成年东亚女性、长黑发、圆眼镜、柔和圆润五官、米白 T 恤、深色直筒裤和简洁运动鞋，不出现姓名或品牌字样，不使用男生 IP。
- 信息密度：标题大，模块标题中等，正文标签短；禁止长段落、小号脚注和装饰性废话。
- 中文：只渲染提示词中 `Text (verbatim)` 列出的文字，必须逐字准确，不增加其他文字。
- 安全边界：不虚构数据，不使用真实公司标志，不生成水印、签名、二维码或界面截图。

## 01. Skill 是什么？

来源：`/docs/skills/what-is-skill/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is a visual-style reference only; do not copy its topic or factual claims
Primary request: explain the relationship between a one-time Prompt and a reusable Skill through one clear visual metaphor
Scene/backdrop: warm off-white paper with subtle fibers
Subject: on the left, one loose task note enters an AI workbench; in the center, repeated instructions are organized into a reusable SOP binder labeled Skill; on the right, different weekly inputs pass through the same binder and produce three consistently structured reports
Style/medium: friendly hand-drawn editorial infographic, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: simple left-to-right flow with three large stages, ample whitespace, no tiny labels
Text (verbatim): "一次交代", "可复用 SOP", "稳定输出"
Constraints: communicate that Prompt supplies the current task while Skill preserves the reusable method; render the three labels exactly once; no extra text; no logos; no watermark
Avoid: dense dashboard, photorealism, code screenshot, copied investment content from the reference image
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: teach what a Skill is using a weekly report example
Scene/backdrop: warm off-white paper with modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide with long dark hair and round glasses first repeats the same Friday instructions, then collects the method into a Skill binder, then feeds new weekly data into the same workflow, and finally checks whether the task repeats, has stable steps, and needs consistent results
Style/medium: hand-drawn Chinese knowledge comic, ink outlines, muted teal, terracotta orange, pale gray-green
Composition/framing: five large modules; one action per module; large title; generous margins; mobile-readable labels
Text (verbatim): "Skill 是什么？", "每周都要重新解释", "把方法装进 Skill", "输入每次变化，流程保持稳定", "重复 + 固定步骤 + 稳定结果"
Constraints: show that Skill can contain instructions, examples, references, and tools through four simple unlabeled icons; exact Chinese text only; no extra text; no logos; no watermark
Avoid: tiny paragraphs, stock-market charts, excessive decorative icons
```

## 02. 为什么需要 Skill？

来源：`/docs/skills/why-skills/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is a visual-style reference only
Primary request: contrast a growing copied Prompt with a reusable Skill workflow
Scene/backdrop: warm paper texture
Subject: left side shows a long tangled scroll repeatedly copied into chats, with missing pieces and drifting output cards; right side shows a compact Skill playbook feeding a stable four-step workflow shared by several teammates
Style/medium: hand-drawn editorial infographic with charcoal lines, muted teal and terracotta accents
Composition/framing: clear before-and-after split; one visual idea per side; strong central arrow
Text (verbatim): "重复解释", "结果漂移", "经验沉淀", "团队复用"
Constraints: four benefit labels appear as simple badges on the Skill side; exact text only; no extra text; no logos; no watermark
Avoid: implying Prompt is obsolete; dense tables; photorealism
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: explain when a useful Prompt should evolve into a Skill
Scene/backdrop: warm off-white paper, rounded dashed modules
Subject: the same recurring cute young adult East Asian female guide with long dark hair and round glasses uses a short Prompt successfully for a one-time email; the same task repeats and the Prompt grows into a messy long scroll; the method is separated from weekly inputs and saved as a Skill; four benefit cards show less repetition, less drift, reusable experience, and room to grow; the final checklist asks whether the work repeats, has stable steps, and needs shared standards
Style/medium: hand-drawn knowledge comic, restrained colors, simple expressive character poses
Composition/framing: five large modules with a downward narrative flow
Text (verbatim): "Prompt 当然还有用", "什么时候开始吃力？", "方法和材料分开", "从好答案到稳定工作流", "3 个以上回答“是”"
Constraints: never say Skill replaces Prompt; render exact text only; no extra text; no logos; no watermark
Avoid: tiny checklist copy, overpacked layout, technical code
```

## 03. Skill、Prompt、Project、Memory、MCP 的区别

来源：`/docs/skills/skill-vs-prompt-project-memory-mcp/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style reference only
Primary request: create a memorable workbench map of Prompt, Memory, Project, Skill, MCP / App, and Agent
Scene/backdrop: warm off-white paper, one large workbench
Subject: six distinct objects arranged around one task: a task card for Prompt, a profile notebook for Memory, a project folder for Project, a playbook for Skill, a power plug connecting external data for MCP / App, and a conductor assembling everything for Agent
Style/medium: clean hand-drawn editorial diagram with muted teal and terracotta accents
Composition/framing: six large labeled objects around a central completed deliverable; balanced, not a dense grid
Text (verbatim): "Prompt", "Memory", "Project", "Skill", "MCP / App", "Agent"
Constraints: each concept must have one visually distinct role; exact labels only; no extra text; no logos; no watermark
Avoid: making the six concepts look interchangeable; software screenshots; photorealism
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: explain the six concepts through preparing for a customer meeting
Scene/backdrop: warm paper with a vertical mission flow
Subject: the same recurring cute young adult East Asian female guide with long dark hair and round glasses receives the current meeting task; Memory supplies personal communication preferences; Project opens the long-term customer folder; Skill supplies the repeatable research method; MCP / App fetches permitted external information; Agent coordinates the pieces and produces a one-page meeting brief
Style/medium: hand-drawn Chinese knowledge comic, ink, muted teal and terracotta
Composition/framing: title plus six connected large modules; each module uses one icon and one short question
Text (verbatim): "这次做什么？", "你偏好什么？", "我们在做哪个项目？", "这类工作怎么做？", "去哪里取数据？", "把整件事完成"
Constraints: preserve the conceptual boundaries; exact Chinese text only; no extra text; no real company names; no logos; no watermark
Avoid: API code, tiny annotations, confusing arrows
```

## 04. 从重复工作到 Skill：6 类最常用工作流

来源：`/docs/skills/workflow-playbook/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style reference only
Primary request: map one recurring real job into six reusable workflow families
Scene/backdrop: warm paper, central worktable
Subject: a central recurring-task card branches to six large icons: magnifying glass, chart drill-down, pencil and outline, template factory, audit checklist, and monitoring bell; the branches return to one stable workflow card
Style/medium: hand-drawn editorial infographic with charcoal lines and restrained teal/orange palette
Composition/framing: radial map with six evenly spaced branches and generous whitespace
Text (verbatim): "研究", "分析", "写作", "生成", "审核", "监控"
Constraints: the six labels map respectively to collect-and-judge, inspect-and-drill, understand-and-draft, template-to-deliverable, checklist-review, and compare-and-alert; exact labels only; no extra text; no watermark
Avoid: code files, tiny flowcharts, excessive icons
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: teach how to turn a repeated task into a stable Skill workflow
Scene/backdrop: off-white paper, large rounded modules
Subject: the same recurring cute young adult East Asian female guide with long dark hair and round glasses starts from a real repeated task instead of a code file; a six-cell visual menu shows research, analysis, writing, generation, review, and monitoring; a conveyor belt then shows input check, steps, decision rules, output format, QA, and boundaries; she replaces vague adjectives with observable actions and tests the workflow on three real tasks
Style/medium: hand-drawn knowledge comic, friendly and practical
Composition/framing: five modules, strong downward arrows, large text
Text (verbatim): "不要从 SKILL.md 开始", "先找重复工作", "6 类工作流", "输入 → 步骤 → 规则 → 输出 → QA → 边界", "用 3 个真实任务测试"
Constraints: exact text only; no extra text; no code screenshot; no logos; no watermark
Avoid: showing Skill creation as merely writing YAML; cramped six-column table
```

## 05. Skill 推荐：AI 网站开发

来源：`/docs/skills/recommendations/ai-web-development/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style reference only
Primary request: show a practical AI website development Skill stack from interface to production verification
Scene/backdrop: warm paper with a small web product in the center
Subject: six connected capability blocks surround a web app: interface design, React engineering, real-browser QA, payment state, database security, and deployment; a human reviewer holds the release checklist before the final arrow reaches production
Style/medium: hand-drawn editorial tech infographic, charcoal ink, muted teal and terracotta
Composition/framing: horizontal build pipeline with six large stations, no tiny UI
Text (verbatim): "界面", "React", "浏览器 QA", "支付", "数据库", "部署"
Constraints: distinguish Skills from tools through visual roles without extra explanatory text; show human approval before production; exact labels only; no vendor logos; no watermark
Avoid: generic futuristic AI art, source-code screenshot, autonomous production deployment
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: explain how to combine AI web-development Skills safely
Scene/backdrop: warm off-white paper, modular development journey
Subject: the same recurring cute young adult East Asian female guide with long dark hair and round glasses chooses a UI direction, applies React engineering rules, tests navigation/forms/breakpoints in a real browser, connects payment and database with explicit states and access boundaries, deploys to preview, then verifies online routes and keeps a rollback door; final panel shows her inspecting a Skill before installation
Style/medium: hand-drawn Chinese knowledge comic, clean technical icons, restrained palette
Composition/framing: six large modules with a visible preview-to-production gate
Text (verbatim): "先组合，不找万能 Skill", "设计与工程分工", "真实浏览器验收", "支付与数据要有边界", "先预览，再上线", "安装前先读完整 SKILL.md"
Constraints: exact Chinese text only; no extra text; no vendor logos; no watermark
Avoid: claiming one Skill does everything; tiny code; unsafe automatic deployment
```

## 06. Skill 推荐：文章撰写与内容工作

来源：`/docs/skills/recommendations/writing/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style reference only
Primary request: show writing as an editorial production line instead of a one-shot Prompt
Scene/backdrop: warm paper, editorial desk
Subject: source cards enter a sequence of six large stations: research materials, core idea, outline, draft, edit and fact check, then channel-specific publishing; an editor character checks logic before release
Style/medium: hand-drawn editorial infographic, ink outlines, muted teal and orange accents
Composition/framing: left-to-right pipeline with clear progression and generous whitespace
Text (verbatim): "材料", "观点", "结构", "初稿", "编辑与核查", "发布适配"
Constraints: exact labels only; show iteration between draft and edit; no extra text; no logos; no watermark
Avoid: magic one-click writing, dense document screenshot, decorative books unrelated to the workflow
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: teach a reusable writing Skill workflow for deep articles and work documents
Scene/backdrop: warm off-white paper, rounded editorial modules
Subject: a weak one-shot Prompt produces a shapeless draft; the same recurring cute young adult East Asian female guide with long dark hair and round glasses separates research, outline, drafting, editing, fact and citation checks, title and summary, and publishing format; the flow branches into a deep-article path and a PRD path, then returns to a custom editor Skill that applies the user's standards
Style/medium: hand-drawn Chinese knowledge comic with restrained colors
Composition/framing: five large modules; minimal Chinese copy; visible revision loop
Text (verbatim): "写作不是一个 Prompt", "先理解，再成稿", "编辑不是重写", "事实与引用要复核", "把你的标准做成 Skill"
Constraints: exact text only; no extra text; no fake citations; no logos; no watermark
Avoid: tiny paragraphs, romanticized writer imagery, implying AI publishes without review
```

## 07. Skill 推荐：电商与增长运营

来源：`/docs/skills/recommendations/ecommerce/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style reference only
Primary request: show how real ecommerce data feeds verifiable Skills and human-approved actions
Scene/backdrop: warm paper, simplified ecommerce operations desk
Subject: four input streams—store, public web pages, spreadsheets, and payments—flow into three separate Skill boxes for review analysis, listing optimization, and ad review; evidence cards flow out to a human approval gate before publishing, budget changes, or refunds
Style/medium: hand-drawn business infographic, charcoal, muted teal and terracotta
Composition/framing: wide data-to-decision flow with large icons and a clearly visible approval gate
Text (verbatim): "真实数据", "评论分析", "Listing 优化", "广告复盘", "人工确认"
Constraints: keep Skill boundaries separate; exact labels only; no vendor logos; no personal data; no watermark
Avoid: autonomous price changes, fabricated dashboards, tiny KPI tables
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference
Primary request: explain three high-frequency ecommerce Skill workflows and their safety boundaries
Scene/backdrop: warm off-white paper, modular operations board
Subject: module one shows a new-product flow from public research to review evidence to listing to QA; module two shows weekly ad data cleaned in a spreadsheet, drilled down, separated into facts and hypotheses, then turned into a reversible experiment; module three shows competitor monitoring that filters noise and records before/after evidence; final guardrail panel protects personal data and requires approval for publishing, pricing, budget, and refunds
Style/medium: hand-drawn Chinese knowledge comic, clear icons, muted colors
Composition/framing: title plus four large modules, strong vertical flow
Text (verbatim): "新品上架", "每周广告复盘", "竞品持续监控", "事实 ≠ 假设", "发布与改价必须人工确认"
Constraints: exact text only; no extra text; no real store or vendor logos; no personal information; no watermark
Avoid: unsupported sales claims, automatic account actions, dense numerical tables
```

## 08. Skill 推荐：股票研究与投资分析

来源：`/docs/skills/recommendations/investing/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style reference only; do not reuse its market claims or numbers
Primary request: show investment research discipline as an evidence-to-thesis loop, not a buy/sell machine
Scene/backdrop: warm paper, research desk
Subject: primary filings and company disclosures feed a clean financial model; the model branches to comparable analysis and DCF scenarios; evidence updates a thesis tracker and catalyst calendar; an independent audit checks formulas and sources; the final output stops at a human decision gate
Style/medium: hand-drawn financial research infographic, charcoal lines, muted teal and terracotta
Composition/framing: circular research loop with a clearly separated human decision at the end
Text (verbatim): "一手来源", "可复算模型", "估值情景", "Thesis Tracker", "独立审计", "人工决策"
Constraints: exact labels only; no stock tickers, target prices, recommendations, or fabricated numbers; no logos; no watermark
Avoid: upward-only price chart, investment hype, automatic trading
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style reference only
Primary request: explain a disciplined stock-research Skill workflow with source and decision boundaries
Scene/backdrop: warm off-white paper, modular analyst notebook
Subject: the same recurring cute young adult East Asian female guide with long dark hair and round glasses first defines a research question and collects regulatory filings and investor-relations materials; then cleans historical data and builds a recalculable model; Comps and DCF create scenarios rather than one precise answer; a thesis tracker records supporting and opposing evidence plus invalidation conditions; catalyst and earnings modules update the record; a separate audit checks formulas and citations; final panel blocks automatic BUY or SELL output and hands the evidence to a person
Style/medium: hand-drawn Chinese knowledge comic, restrained financial icons, no hype
Composition/framing: six large modules with a downward evidence trail
Text (verbatim): "先定研究问题", "来源与日期要可追踪", "模型必须可复算", "记录支持与反证", "独立检查公式和引用", "研究辅助，不替你交易"
Constraints: exact Chinese text only; no extra text; no fabricated data; no stock recommendations; no logos; no watermark
Avoid: market predictions, automatic trading buttons, reused percentages from the reference image
```

## 09. 第一次使用 Skill：显式调用、自动触发与结果检查

来源：`/docs/skills/getting-started/use-first-skill/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: explain that a useful first Skill run combines a stable method, the current goal, and real task materials, then verifies the process and result
Scene/backdrop: warm off-white paper with subtle fibers
Subject: three large inputs—a compact Skill playbook for the stable method, a task card for the current goal and focus, and a file or App tray for real materials—flow into one transparent work process; the output passes through a checklist that verifies process, evidence, deliverable structure, and actionable next steps
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, left-to-right flow with three large input objects, one workflow station, and one verification checklist; large elements and generous whitespace; no human characters
Text (verbatim): "稳定方法", "本次目标", "真实材料", "过程与结果"
Constraints: render each exact label once; no extra text; no fabricated facts; no vendor logos; no watermark; make the difference between method, current task, and source material visually clear
Avoid: dense dashboard, tiny paragraphs, photorealism, copied content from Image 1, implying that invoking a Skill removes the need to provide context
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: teach a beginner how to use a Skill for the first time and verify that it is genuinely useful
Scene/backdrop: warm off-white paper with five modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; first she chooses one small real task with a checkable deliverable, then explicitly selects a matching Skill, then supplies the goal, materials, focus, and desired deliverable, then inspects the process, evidence, and output instead of asking whether the Skill was used, and finally tests automatic triggering with one matching task, one missing-input task, and one similar but unrelated task
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, five large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "先选一件真实小任务", "明确调用 Skill", "目标·材料·重点·交付物", "检查过程与证据", "再测试自动触发"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no fabricated facts; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, claiming that Skill replaces the current Prompt or source files
```

## 10. 创建第一个 Skill：从运营周报到可复用工作流

来源：`/docs/skills/getting-started/create-first-skill/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: show how one completed real job becomes a small reusable Skill by separating stable method from changing task materials
Scene/backdrop: warm off-white paper with subtle fibers
Subject: a completed weekly-operations report is unpacked into two trays; the stable-method tray contains input checks, analysis steps, fact-versus-hypothesis rules, output structure, and QA icons, while the changing-material tray contains this week's data, date range, special events, and current focus; only the stable-method tray flows into a compact Skill folder, which is then run on new data and improved once from observed evidence
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, left-to-right transformation with a clear two-way separation in the middle; large objects and generous whitespace; no human characters
Text (verbatim): "真实工作", "稳定方法", "本次材料", "创建 Skill", "运行并改一次"
Constraints: render each exact label once; no extra text; no fabricated metrics; no vendor logos; no watermark; clearly show that changing weekly data stays outside the reusable Skill
Avoid: starting from an empty code file, large software screenshots, adding scripts or many support folders to the first version, copied content from Image 1
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: explain the minimum end-to-end loop for creating a first Skill from a real operations-report workflow
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she starts from a real weekly report already completed, separates stable steps from this week's data, gives the confirmed workflow to skill-creator, opens the generated folder and checks the name, description, actual steps, QA, and boundaries, explicitly runs the new Skill on real data, then changes only the single most important observed problem and reruns the same task
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "从真实工作开始", "方法与材料分开", "交给 skill-creator", "检查生成结果", "用真实数据运行", "一次只改一个问题"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no fabricated facts; no vendor logos; no watermark; keep the first Skill visually small and simple
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, presenting a generated SKILL.md as finished before testing
```

## 11. 怎样写好一个 Skill：触发、目录与渐进式加载

来源：`/docs/skills/authoring/write-reliable-skill/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: explain the three-layer progressive-loading architecture of a reliable Skill and the distinct job of each file type
Scene/backdrop: warm off-white paper with subtle fibers
Subject: a user task first reaches a description gateway that decides whether to open the Skill; the selected task then reaches a compact SKILL.md playbook containing input checks, workflow, output contract, QA, and boundaries; only when a step requires more detail do arrows open three supporting drawers for references, deterministic scripts, and reusable delivery assets
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, three clear layers from left to right with the support layer branching into three large drawers; large elements and generous whitespace; no human characters
Text (verbatim): "description：路由", "SKILL.md：流程", "references：知识", "scripts：确定性", "assets：交付素材"
Constraints: render each exact label once; preserve capitalization and punctuation exactly; no extra text; no fabricated rules; no vendor logos; no watermark; make on-demand loading visually explicit
Avoid: dense file tree, tiny code, suggesting that every support file is always loaded, copied claims or numbers from Image 1
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: teach how to turn a format-correct but vague Skill into a reliable, testable, progressively loaded workflow
Scene/backdrop: warm off-white paper with five modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she first rejects a vague Skill filled only with professional-sounding adjectives, then writes a description with real user language and adjacent non-trigger boundaries, then turns SKILL.md into inputs, ordered actions, output contract, QA, and boundaries, then moves detailed knowledge, deterministic checks, and reusable templates into clearly routed supporting files, and finally performs a static preflight of triggers, steps, paths, dependencies, and stale links before testing
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, five large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "能读取 ≠ 可靠", "description 决定何时打开", "SKILL.md 保存核心流程", "详细资料按需读取", "发布前做静态检查"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; preserve capitalization and punctuation exactly; module numbers allowed; no fabricated facts; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, equating reliability with a longer file
```

## 12. 怎样测试 Skill：正常、缺失输入与不应触发的任务

来源：`/docs/skills/authoring/test-and-iterate/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: show a practical Skill evaluation bench that separates trigger accuracy from output quality and feeds failures into regression testing
Scene/backdrop: warm off-white paper with subtle fibers
Subject: three large test-card stacks—positive tasks that should trigger, adjacent negative tasks that should not trigger, and abnormal or missing-input tasks—enter a two-part evaluation bench; one gauge checks trigger accuracy, the second checklist checks output quality and observable assertions; failed cases are routed through one targeted change and back into a regression loop
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, three input lanes on the left, two evaluation stations in the center, and one compact feedback loop on the right; large elements and generous whitespace; no human characters
Text (verbatim): "应该触发", "不应触发", "异常输入", "触发准确性", "输出质量", "回归测试"
Constraints: render each exact label once; no extra text; no fabricated scores; no vendor logos; no watermark; visually keep trigger selection and output evaluation separate
Avoid: dense benchmark dashboard, tiny tables, implying that one successful Prompt proves reliability, copied content from Image 1
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: explain the minimum reliable loop for evaluating and iterating a Skill with real tasks
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she builds a small set of varied positive, adjacent negative, and abnormal-input Prompts, saves a no-Skill baseline, tests automatic triggering separately from explicitly invoked output quality, checks observable assertions for input handling, evidence, boundaries, structure, and actions, maps each failure to description, SKILL.md, support files, input, or a deterministic script, then changes only one problem and reruns the affected tests plus a minimal regression set
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "建立真实测试集", "先记录无 Skill 基线", "触发与质量分开测", "用断言检查结果", "从失败定位问题", "一次只改一个问题"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no fabricated scores; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, overfitting to one exact Prompt, declaring success from one run
```

## 13. 去哪里找 Skill？如何安装和判断值不值得用

来源：`/docs/skills/discover-and-install-skills/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: show a beginner-friendly Skill selection funnel that begins with a real task and ends with one small verified installation instead of a giant catalog
Scene/backdrop: warm off-white paper with subtle fibers
Subject: a clear five-stage funnel; a task card enters first, then candidates from system, official, project, and community sources, then a quality-and-risk checklist filters them, then one Skill folder is placed into either project or personal scope, and finally a small non-sensitive test task produces a keep, disable, or remove decision
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, left-to-right selection funnel with five large stations, generous whitespace, no human characters
Text (verbatim): "先定义任务", "可信来源", "检查质量", "正确范围", "小任务验收"
Constraints: render each exact label once; no extra text; no fabricated ratings, download counts, or marketplace badges; no vendor logos; no watermark
Avoid: giant app-store grid, dense comparison table, implying that popularity proves quality, copied content from Image 1
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: teach a beginner how to discover, inspect, install, and verify one useful Skill without blindly installing a large catalog
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she writes a small task card, searches system and trusted maintainer sources before community catalogs, opens the complete Skill folder and checks source, SKILL.md, scripts, permissions, maintenance, and overlap, chooses project or personal scope, explicitly runs one non-sensitive real task, then records the source and decides to keep, disable, or remove it
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "先写任务卡", "从可信来源找", "检查完整目录", "选择安装范围", "显式运行小任务", "保留·禁用·删除"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no fabricated rankings; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, blind copy-paste installation commands
```

## 14. 第三方 Skill 安全吗？安装前的十分钟审查

来源：`/docs/skills/review-skill-security/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: explain a layered pre-install security gate for a third-party Skill without using fear-based imagery
Scene/backdrop: warm off-white paper with subtle fibers
Subject: a sealed third-party Skill folder approaches a human-review gate; five large inspection lenses examine source identity, written instructions, executable scripts and dependencies, requested permissions and data, and version updates; only after those checks does the folder enter a small isolated test sandbox with a visible stop control
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, five inspection lenses arranged around one central review gate, isolated sandbox on the right, large icons and generous whitespace, no human characters
Text (verbatim): "来源", "指令", "脚本与依赖", "权限与数据", "版本与更新", "隔离试跑"
Constraints: render each exact label once; no extra text; no fabricated security scores or statistics; no vendor logos; no watermark; show human approval before the sandbox opens
Avoid: skulls, hackers in hoodies, sensational red warning screens, dense code, implying that one scanner guarantees safety
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: explain the ten-minute safety review a beginner should perform before running a third-party Skill
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she traces a directory listing back to the original repository and version, opens the complete folder instead of only SKILL.md, reads instructions for hidden or unrelated actions, inspects scripts, dependencies, external domains, secrets, and permissions, runs a first test with fake data in an isolated recoverable workspace, then either approves with a version note or stops, removes access, and rotates exposed credentials
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "追到原始来源", "查看完整目录", "读懂真实指令", "检查脚本与权限", "用假数据隔离试跑", "批准或立即停止"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no dangerous command text; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, glamorized cybercrime, claiming all public Skills are malicious
```

## 15. Skill 不触发怎么办？从发现到执行的排查地图

来源：`/docs/skills/troubleshoot-skill/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: show the five distinct gates where a Skill can fail so beginners modify the correct layer
Scene/backdrop: warm off-white paper with subtle fibers
Subject: one small user task travels through five large diagnostic gates; discovery checks path, filename, metadata, and enabled state; routing checks description and overlap; loading checks SKILL.md and support-file paths; execution checks input, dependencies, permissions, scripts, and tools; output checks process, evidence, QA, and deliverable; each gate has one simple inspection icon and a repair loop only to that gate
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, five equal gates from left to right, minimal icons, generous whitespace, no human characters
Text (verbatim): "发现", "路由", "加载", "执行", "输出"
Constraints: render each exact label once; no extra text; no fabricated error codes; no vendor logos; no watermark; make the layers visually separate
Avoid: dense flowchart branches, terminal screenshots, blaming every failure on Prompt wording, copied content from Image 1
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: teach the minimum reliable sequence for diagnosing a Skill that is missing, not triggering, or failing after activation
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she first checks whether the Skill appears in the catalog and verifies path, filename, metadata, and enabled state, then explicitly invokes it with one minimal task, then compares automatic triggering across matching and adjacent Prompts, then separates overlapping Skills by ownership, then fixes support-file paths, dependencies, inputs, and permissions, and finally applies output assertions only after activation works
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "先确认能被发现", "再做显式调用", "检查自动触发", "消除 Skill 重叠", "修复路径与依赖", "最后检查输出质量"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no fabricated UI; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, changing many layers at once
```

## 16. 多个 Skill 怎么配合？避免重叠、冲突与上下文拥挤

来源：`/docs/skills/compose-multiple-skills/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: explain a reliable multi-Skill workflow with one owner, distinct helpers, explicit handoff contracts, and a human approval before release
Scene/backdrop: warm off-white paper with subtle fibers
Subject: one large central owner card defines stages and completion; four smaller helper stations for research, writing, images, and deployment each receive a clear input card and produce a checkable output card; tool and MCP plugs sit below as data-and-action providers rather than owners; failed outputs route to stop or retry, and the final deployment arrow passes through a human approval gate
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, central owner with four distinct helper stations in a clean pipeline, tools below, approval gate at the end, generous whitespace, no human characters
Text (verbatim): "主负责人", "研究", "写作", "图片", "发布", "人工确认"
Constraints: render each exact label once; no extra text; no vendor logos; no watermark; show only one primary owner and make handoffs visible
Avoid: every Skill connected to every other Skill, giant routing brain, implying tools are Skills, automatic production release without approval
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: teach how to compose several Skills without semantic overlap or hidden failure propagation
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she names one workflow owner, assigns distinct helper Skills and keeps tools or MCP as data-and-action providers, chooses sequential, parallel, or conditional structure according to dependency, writes input-output-acceptance-failure handoff cards, tests every Skill alone and then each handoff including a failed case, and finally approves the high-risk publish step only after all checks pass
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "只设一个主负责人", "辅助能力各负其责", "选择组合结构", "写清交接契约", "单项·交接·整体测试", "高风险动作人工确认"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, portraying more Skills as automatically better
```

## 17. 一份 Skill 能跨 Codex、Claude 和 VS Code 共用吗？

来源：`/docs/skills/portable-team-skills/`

### 正文配图

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: explain the relationship between one portable Agent Skills core and client-specific adapters without claiming identical runtime behavior
Scene/backdrop: warm off-white paper with subtle fibers
Subject: a central standard Skill folder contains SKILL.md, relative paths, scripts, references, and assets; it branches to three neutral client frames labeled Codex, Claude, and VS Code; each client has a small outer adapter ring for install location, invocation, permissions, tools, and script runtime; beneath them one Git repository, a compatibility test matrix, version notes, and rollback arrow keep the team synchronized
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, central core with three balanced client branches and one shared maintenance foundation, large elements and generous whitespace, no human characters
Text (verbatim): "标准核心", "Codex", "Claude", "VS Code", "客户端适配", "兼容测试"
Constraints: render each exact label once; preserve capitalization exactly; no extra text; use neutral terminal, chat, and editor frames rather than vendor logos; no watermark; make shared core and client differences equally clear
Avoid: copied logos, claiming write-once-run-identically, hard-coded personal paths, dense compatibility table
```

### 漫画讲解

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: teach a team how to keep one portable Skill source while adapting and testing it across clients
Scene/backdrop: warm off-white paper with six modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers; she extracts the standard SKILL.md core and support folders, replaces personal absolute paths with relative paths and documents dependencies, labels install locations, invocation methods, permissions, tools, and client-only fields as adapters, stores one source of truth in a version-controlled team repository, runs a small compatibility matrix across Codex, Claude, and VS Code using the same positive, negative, missing-input, and output checks, then publishes a reviewed version with changelog and rollback information
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, six large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "提取标准核心", "改用相对路径", "标记客户端差异", "只维护一份事实源", "运行兼容测试", "带版本与回退发布"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; preserve capitalization exactly; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, three drifting copies of the same Skill
```
