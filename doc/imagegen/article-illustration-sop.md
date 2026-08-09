# Codex101 文章配图 SOP

本文档定义 Codex101 新文章从“内容理解”到“图片上线”的完整流程。

执行者读取本文档后，只需要再获得一篇文章的本地路径或 URL，就应当能够独立完成正文配图与漫画讲解，不需要用户重复说明视觉风格、文件命名、压缩方式和验收标准。

## 一句话调用

以后可以直接使用下面这句话：

```text
请严格执行 doc/imagegen/article-illustration-sop.md，
为 <文章路径或 URL> 完成正文配图和漫画讲解，并接入文章。
```

如果没有额外要求，执行者应采用本文档中的全部默认值，并端到端完成任务。

## 完成定义

一篇文章的配图任务只有同时满足以下条件才算完成：

1. 已完整阅读文章，并提炼核心观点、关键关系、流程和事实边界；
2. 已生成一张横向正文配图；
3. 已生成一张纵向漫画讲解图；
4. 两张图都经过内容、中文、视觉和 IP 一致性检查；
5. 已使用 Zipic 转换并压缩为 WebP；
6. 已按约定命名并保存到项目静态资源目录；
7. 已将两张图片插入对应文章的合适位置；
8. 已验证图片引用、Astro 检查和完整构建；
9. 已汇报提示词、图片路径、压缩结果和验证结果。

除非用户明确要求“只写提示词”“只分析”或“暂时不要修改文章”，否则不要停在中间步骤。

## 默认输入

执行任务时至少需要一个输入：

- 本地文章文件，例如 `src/content/docs/zh/example.mdx`；或
- 已发布文章 URL，例如 `https://codex101.org/docs/example/`。

如果 URL 能映射到当前仓库中的文章源码，优先以本地源码为内容事实来源，因为它更完整，也更接近即将发布的版本。

只有以下情况需要向用户追问：

- 没有提供文章路径或 URL，且无法从当前上下文识别目标文章；
- 用户希望使用新的真人、角色或品牌视觉，但没有提供必要参考图；
- 用户要求的输出数量、语言或视觉方向与本文档默认值明显冲突。

其他细节应通过阅读源码、现有目录和模板自行判断，不要把普通实现选择重新抛给用户。

## 默认交付物

每篇文章默认生成两张图：

| 类型 | 主要职责 | 默认画幅 | 默认信息量 |
| --- | --- | --- | --- |
| 正文配图 | 让读者一眼理解一个核心关系、结构或流程 | 横向 3:2 | 3–6 个短标签 |
| 漫画讲解 | 用连续模块讲清文章的主要逻辑 | 纵向 2:3 | 4–6 个模块 |

正文配图与漫画不能只是同一张图换画幅：

- 正文配图回答“这篇文章最值得一眼看懂的关系是什么？”；
- 漫画回答“如果只看这张漫画，读者能否理解文章的大致逻辑？”

## 固定模板与可变内容

默认使用个人 ImageGen 模板：

```text
$artifact-template-codex101
```

模板目录：

```text
/Users/tony/.codex/skills/artifact-template-codex101
```

参考图：

```text
/Users/tony/.codex/skills/artifact-template-codex101/assets/reference.png
```

### 默认保持稳定的视觉语言

- 温暖米白纸张与轻微纸纤维；
- 深灰手绘墨线；
- 低饱和青绿色与陶土橙色；
- 少量浅灰阴影；
- 圆角或虚线模块；
- 手绘箭头、清晰流程和简单图标；
- 知识解释优先，不追求炫技或写实质感；
- 不使用水印、签名、二维码或无关品牌标志。

### 默认女生 IP

只要图片需要人物，就固定使用同一位非真人的知识向导：

- 年轻成年东亚女性；
- 长黑发；
- 圆眼镜；
- 柔和圆润五官；
- 可爱、亲和、聪明，但不过度幼态；
- 米白无字 T 恤；
- 深色直筒裤；
- 简洁运动鞋；
- 不出现姓名或品牌字样；
- 不使用男生 IP；
- 不使用性感化、儿童化或夸张二次元身体比例。

同一张漫画的不同模块可以改变动作和表情，但发型、五官、眼镜、服装和整体比例必须保持一致。

正文配图不必强行出现人物。流程图、关系图或概念图能讲得更清楚时，应优先使用图标和物件；漫画默认使用女生 IP 承担引导和判断动作。

### 允许按文章修改的部分

模板不是固定版式。下面内容可以根据文章调整：

- 画幅和模块数量；
- 女生是否出现；
- 人物动作、表情和道具；
- 青绿与橙色的使用比例；
- 流程图、对比图、时间线、工作台或卡片布局；
- 图中文字数量；
- 文章特有的图标和视觉比喻。

用户对单篇文章的明确要求优先于这些默认值，但不得悄悄改变全站模板本身。

## 第一步：阅读文章并建立内容简报

必须先读完整文章，再写提示词。不能只根据标题生成图片。

从文章中提取以下信息：

```text
文章标题：
目标读者：
一句话核心观点：
读者看完应该记住什么：
3–6 个关键事实、步骤或概念：
最重要的关系类型：对比 / 流程 / 层级 / 时间线 / 循环 / 决策
必须保留的边界或风险提示：
不得虚构的数字、结论或品牌：
适合正文配图的一句话视觉比喻：
适合漫画的 4–6 个叙事节点：
```

内容简报不一定需要单独展示给用户，但必须在生成前完成。

### 内容来源规则

- 文章源码是图片事实和叙事的主要来源；
- 参考图只定义视觉语言，不能复制参考图里的主题、数字或结论；
- 不为了填满版面而虚构数据、案例、引用、功能或因果关系；
- 文章涉及价格、法律、医疗、金融、软件版本等易变化信息时，应先核对当前来源；
- 事实、假设、建议和风险必须保持文章中的原有边界；
- 金融文章不得生成目标价、买卖建议或自动交易暗示；
- 支付、部署、改价、退款等高风险操作必须保留人工确认节点。

## 第二步：确定两张图片分别讲什么

### 正文配图

正文配图只选择一个最重要的关系，不要把整篇文章压缩成密集海报。

优先结构：

- 对比关系：左右对照；
- 流程关系：从左到右；
- 六项以内的分类：环形或工作台地图；
- 数据到决策：输入 → 处理 → 人工确认；
- 研究闭环：循环图；
- 时间演进：简洁时间线。

默认限制：

- 横向 3:2；
- 3–6 个短标签；
- 每个标签尽量不超过 8 个汉字；
- 避免长段落、小字、脚注和密集表格；
- 需要人物时只使用固定女生 IP；
- 不需要人物时明确写 `no human characters`。

### 漫画讲解

漫画把文章压缩成 4–6 个连续模块，每个模块只完成一个叙事动作。

常用结构：

1. 提出问题或当前困境；
2. 解释关键概念；
3. 展示主要步骤或分类；
4. 显示判断、检查或人类确认；
5. 给出最终方法、边界或下一步。

默认限制：

- 纵向 2:3；
- 4–6 个大模块；
- 模块编号可以出现；
- 每个模块一个动作、一个短标题；
- 女生 IP 的造型必须一致；
- 不把正文段落直接塞进图片；
- 手机宽度下仍应看清主要标签。

## 第三步：编写并保存提示词

提示词使用 ImageGen 的结构化格式。推荐用英文描述画面，用 `Text (verbatim)` 固定需要渲染的中文。

### 正文配图模板

```text
Use case: infographic-diagram
Asset type: Codex101 article illustration, landscape 3:2
Input images: Image 1 is the visual-style and female-IP reference only; do not copy its topic, claims, or numbers
Primary request: <正文配图要讲清的一个核心关系>
Scene/backdrop: warm off-white paper with subtle fibers
Subject: <主体、图标和关系>
Style/medium: hand-drawn editorial infographic matching Image 1, charcoal ink outlines, muted teal and terracotta orange accents
Composition/framing: landscape 3:2, <左右对比 / 从左到右 / 环形 / 工作台>, large elements, generous whitespace
Text (verbatim): "<短标签 1>", "<短标签 2>", "<短标签 3>"
Constraints: render each exact label once; no extra text; no fabricated facts; no vendor logos; no watermark; if a person appears, use only the same long-haired female IP from Image 1 and never a male character
Avoid: dense dashboard, tiny paragraphs, photorealism, copied content from Image 1
```

### 漫画模板

```text
Use case: illustration-story
Asset type: Codex101 educational comic, portrait 2:3
Input images: Image 1 is the visual-style and female-IP reference
Primary request: <漫画要解释的主题>
Scene/backdrop: warm off-white paper with modular rounded panels and hand-drawn arrows
Subject: the same recurring cute young adult East Asian female guide from Image 1, with long dark hair, round glasses, an off-white blank T-shirt, dark straight-leg pants, and simple sneakers, <按顺序描述 4–6 个叙事动作>
Style/medium: hand-drawn Chinese knowledge comic matching Image 1, charcoal ink, muted teal, terracotta orange, pale gray-green
Composition/framing: portrait 2:3, <4–6> large modules, one action per module, generous margins, mobile-readable labels
Text (verbatim): "<模块标题 1>", "<模块标题 2>", "<模块标题 3>", "<模块标题 4>"
Constraints: use only the same female IP and never a male character; render the exact Chinese lines once; module numbers allowed; no fabricated facts; no vendor logos; no watermark
Avoid: short hair, male appearance, child-like or sexualized styling, tiny paragraphs, copied claims or numbers from Image 1
```

### 提示词保存位置

提示词必须保存，不能只留在对话记录里。

- Skills 专题现有示例：`doc/imagegen/skills-visual-prompts.md`；
- 其他新文章默认保存：`doc/imagegen/prompts/<slug>.md`；
- 同一专题也可以维护一个集中式提示词文件，但要能根据 slug 快速定位。

现有 Skills 栏提示词可以作为结构示例，但不要复制其中的文章事实到新文章。

## 第四步：使用 ImageGen 生成

默认使用内置 `$imagegen`，不需要 `OPENAI_API_KEY`。

执行规则：

1. 读取 `$artifact-template-codex101`；
2. 将模板保留的 PNG 作为视觉和女生 IP 参考；
3. 正文配图和漫画分别调用一次 ImageGen；
4. 不用一个调用的多变体代替两份不同提示词；
5. 先生成、检查，再决定是否需要针对性修改；
6. 项目要使用的最终图片必须复制到当前项目，不能只留在 `$CODEX_HOME/generated_images`。

如果需要修改已有本地图片，先查看图片，再使用 ImageGen 编辑模式，并明确写出：

```text
change only <目标元素>; keep <不可变内容> unchanged
```

不要为了路径、尺寸或普通质量控制切换到 CLI。只有用户明确要求 CLI/API/model，或特殊透明背景确实需要时，才考虑备用流程。

## 第五步：逐张验收并迭代

每张图必须检查以下项目。

### 内容检查

- 是否讲的是目标文章，而不是参考图的原主题；
- 是否准确表达文章核心观点；
- 是否虚构了数字、事实、引用或功能；
- 是否把假设画成了事实；
- 是否保留法律、金融、支付、隐私或发布边界；
- 正文配图与漫画是否承担不同职责。

### 中文与标签检查

- 标题和关键标签是否逐字正确；
- 是否漏字、错字、重复或增加无关文字；
- 英文缩写和文件名大小写是否正确，例如 `React`、`QA`、`SKILL.md`；
- 小字是否在手机宽度下仍有意义；
- 如果模型增加了文字，只有在语义准确、明显提升理解且不破坏布局时才能保留。

### 女生 IP 检查

- 是否出现男生角色；
- 是否保持长黑发、圆眼镜和固定服装；
- 多个模块是否仍像同一个角色；
- 是否出现短发、幼态或性感化漂移；
- 正文配图不需要人物时，是否错误地强行加入角色。

### 视觉检查

- 画面是否完整，没有裁切、空白失衡或损坏；
- 主次是否清楚；
- 是否保留米白、墨线、青绿和橙色系统；
- 是否出现第三方 Logo、二维码、水印或无关图标；
- 漫画是否保持 4–6 个大模块；
- 横图在文档正文宽度下是否仍可读。

不合格时只改一个明确问题，例如：

```text
replace only the browser-brand logos with neutral browser-window symbols;
keep all Chinese labels, the female character, layout, colors, arrows, and every other element unchanged
```

不要在一次迭代中同时重写构图、人物、文字和配色。

## 第六步：文件命名与目录

默认文件名：

```text
<slug>-illustration.webp
<slug>-comic.webp
```

默认目录：

```text
public/images/docs/<section>/
```

例如：

```text
public/images/docs/skills/what-is-skill-illustration.webp
public/images/docs/skills/what-is-skill-comic.webp
```

规则：

- 使用文章稳定 slug；
- 全部使用小写英文和连字符；
- 正文图固定后缀 `-illustration`；
- 漫画固定后缀 `-comic`；
- 页面最终引用 WebP；
- 不用 `final`、`new`、`最新` 等不可维护名称；
- 如果用户明确要求保留多个版本，再使用 `-v2`、`-v3`，不能静默覆盖。

## 第七步：使用 Zipic 压缩

默认 Web 发布参数：

```text
format=webp
level=3
```

Zipic 会处理本地文件，不会上传到云端。

### 压缩前检查

```bash
uname -s
ls /Applications/Zipic.app 2>/dev/null || mdfind "kMDItemCFBundleIdentifier == 'studio.5km.zipic'"
```

必须满足：

- 系统为 `Darwin`；
- 已安装 `/Applications/Zipic.app`。

### 安全压缩流程

Zipic 默认可能转换或替换传入文件，因此不要直接把唯一原图交给它。

1. 把待压缩 PNG 复制到任务专用临时目录；
2. 对临时目录运行 Zipic；
3. 检查 WebP 数量、格式和大小；
4. 把合格 WebP 复制到 `public/images/docs/<section>/`；
5. 确认文章只引用 WebP；
6. 删除由本任务创建且已经确认是重复副本的临时目录。

示例：

```bash
open "zipic://compress?url=/absolute/path/to/task-staging&level=3&format=webp"
```

路径包含空格或中文时必须进行 URL 编码。

压缩后验证：

```bash
find /absolute/path/to/task-staging -maxdepth 1 -type f -name '*.webp'
file /absolute/path/to/task-staging/*.webp
du -ch /absolute/path/to/task-staging/*.webp
```

最终项目目录只保留页面需要的压缩资产。未引用的大体积 PNG 不应放在 `public` 中随站点一起发布。

## 第八步：接入文章

在 MDX 中使用站点绝对资源路径：

```md
![准确描述图片传达内容的替代文本](/images/docs/<section>/<slug>-illustration.webp)
```

### 推荐插入位置

正文配图：

- 放在文章开场观点之后、第一节正文之前；或
- 放在首次建立核心概念或总览关系之后。

漫画讲解：

- 放在文章主要论证完成之后；
- 放在总结、选择指南、边界或下一步之前；
- 不要默认紧挨正文配图，避免连续两张大图重复信息。

### Alt 文本规则

Alt 文本描述图片传达的内容，而不是只写“文章配图”或“漫画”。

正确：

```md
![Prompt 从一次交代沉淀为可复用 Skill，并持续产出稳定结果](/images/docs/skills/what-is-skill-illustration.webp)
```

不推荐：

```md
![Skill 图片](/images/docs/skills/what-is-skill-illustration.webp)
```

### 多语言规则

含中文文字的图片只插入中文文章。

如果其他语言页面也需要同一图片：

- 生成对应语言版本；或
- 重新设计成无文字图片；
- 不要把中文漫画直接复用到英文、日文等页面。

## 第九步：技术验证

### 文件与引用

确认：

- 两张 WebP 都存在；
- 文件可被 `file` 识别为 WebP；
- MDX 引用路径与文件名完全一致；
- 构建产物中实际出现这两个路径；
- 没有误提交临时目录。

### Astro 检查

```bash
npm run check
npm run build
```

必须报告：

- Astro diagnostics；
- 构建是否成功；
- reference route coverage；
- Chinese internal link coverage。

### 页面视觉检查

需要启动开发服务器时，遵守项目规则使用后台模式：

```bash
npm run dev -- --background
npm run astro -- dev status
```

至少检查：

- 桌面宽度下横图不会过小或空白失衡；
- 手机宽度下漫画标题和关键标签可读；
- 图片不产生横向溢出；
- 浅色和深色页面中的边框与背景都可接受；
- 两张图的插入位置不会打断段落逻辑。

完成后停止服务器：

```bash
npm run astro -- dev stop
```

## 第十步：交付汇报

最终回复必须包含：

- 文章路径或 URL；
- 使用的模板：`$artifact-template-codex101`；
- 正文配图路径；
- 漫画路径；
- 提示词文档路径；
- Zipic 格式、压缩等级和压缩后总大小；
- 图片插入位置；
- 检查与构建结果；
- 任何仍需人工判断的文字或事实问题。

如果没有执行提交、推送或部署，不要暗示这些动作已经完成。

## 最终检查清单

### 内容

- [ ] 已完整阅读文章；
- [ ] 已提炼核心观点与 3–6 个关键点；
- [ ] 没有复制参考图中的主题或数字；
- [ ] 没有虚构事实；
- [ ] 风险和人工确认边界正确。

### 正文配图

- [ ] 横向 3:2；
- [ ] 只讲一个核心关系；
- [ ] 3–6 个短标签；
- [ ] 不需要人物时没有强塞人物；
- [ ] 需要人物时只使用女生 IP。

### 漫画

- [ ] 纵向 2:3；
- [ ] 4–6 个大模块；
- [ ] 每个模块一个动作；
- [ ] 女生 IP 全程一致；
- [ ] 没有男生、短发或幼态漂移；
- [ ] 手机宽度下主要文字可读。

### 文件与页面

- [ ] 两份提示词已保存；
- [ ] 两张最终图已使用 Zipic 转换为 WebP；
- [ ] 文件名符合 slug 约定；
- [ ] MDX 已插入正文图和漫画；
- [ ] Alt 文本准确；
- [ ] `public` 中没有未引用的大体积 PNG；
- [ ] 临时目录已清理。

### 验证

- [ ] 图片引用存在；
- [ ] 图片内容、中文和女生 IP 已人工检查；
- [ ] `npm run check` 通过；
- [ ] `npm run build` 通过；
- [ ] 参考路由和中文内部链接检查通过；
- [ ] 已汇报最终路径和验证结果。

## 更短的日常调用方式

当执行者已经知道当前仓库时，最短只需要说：

```text
按照文章配图 SOP，为这篇新文章完成正文图、漫画、Zipic 压缩、MDX 接入和验证：
<文章路径>
```

“文章配图 SOP”指：

```text
doc/imagegen/article-illustration-sop.md
```
