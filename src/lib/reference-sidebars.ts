import type { Locale } from './site';

export type ReferenceSidebarItem = {
  title: string;
  href: string;
};

export type ReferenceSidebarGroup = {
  title?: string;
  items: ReferenceSidebarItem[];
};

export type ReferenceSidebar = {
  label: string;
  groups: ReferenceSidebarGroup[];
};

const item = (title: string, href: string): ReferenceSidebarItem => ({ title, href });

// Context hubs use their own source-site navigation trees. Regular
// articles continue to use the locale collection navigation assembled from MDX.
const zhReferenceSidebars: Record<string, ReferenceSidebar> = {
  features: {
    label: '功能 · 文档导航',
    groups: [
      { items: [item('概览', '/docs/features')] },
      {
        title: '工作流',
        items: [
          item('项目与聊天', '/docs/projects'),
          item('站点', '/docs/sites'),
          item('可视化', '/docs/visualizations'),
          item('定时任务', '/docs/automations'),
          item('长时间运行的工作', '/docs/long-running-work'),
          item('通知', '/docs/notifications'),
          item('桌面伙伴', '/docs/pets'),
          item('Codex Micro', '/docs/features/codex-micro'),
        ],
      },
      {
        title: '能力',
        items: [
          item('浏览器', '/docs/browser'),
          item('计算机操作', '/docs/computer-use'),
          item('语音', '/docs/features/voice'),
          item('插件', '/docs/plugins'),
          item('网页搜索', '/docs/web-search'),
          item('图像生成', '/docs/image-generation'),
          item('图像输入', '/docs/image-inputs'),
          item('应用截图', '/docs/appshots'),
          item('Chrome 扩展', '/docs/chrome-extension'),
          item('处理文件', '/docs/artifacts-viewer'),
        ],
      },
      {
        title: '参考',
        items: [
          item('命令', '/docs/reference/commands'),
          item('斜杠命令', '/docs/reference/slash-commands'),
          item('设置', '/docs/reference/settings'),
          item('故障排查', '/docs/reference/troubleshooting'),
        ],
      },
    ],
  },
  configuration: {
    label: '配置 · 文档导航',
    groups: [
      { items: [item('概览', '/docs/configuration')] },
      {
        title: '个性化',
        items: [
          item('概览', '/docs/customization/overview'),
          item('记忆', '/docs/customization/memories'),
          item('执行记录', '/docs/customization/chronicle'),
        ],
      },
      {
        title: '配置文件',
        items: [
          item('配置基础', '/docs/config-file/config-basic'),
          item('高级配置', '/docs/config-file/config-advanced'),
          item('配置参考', '/docs/config-file/config-reference'),
          item('环境变量', '/docs/config-file/environment-variables'),
          item('示例配置', '/docs/config-file/config-sample'),
        ],
      },
      {
        title: '智能体配置',
        items: [
          item('AGENTS.md', '/docs/agent-configuration/agents-md'),
          item('子智能体', '/docs/agent-configuration/subagents'),
          item('速度', '/docs/agent-configuration/speed'),
          item('规则', '/docs/agent-configuration/rules'),
        ],
      },
      {
        title: '扩展 ChatGPT 与 Codex',
        items: [
          item('录制与回放', '/docs/extend/record-and-replay'),
          item('MCP', '/docs/extend/mcp'),
        ],
      },
      {
        title: 'Windows',
        items: [
          item('桌面应用', '/docs/windows/windows-app'),
          item('Windows 沙箱', '/docs/windows/windows-sandbox'),
          item('WSL', '/docs/windows/wsl'),
        ],
      },
    ],
  },
  developers: {
    label: '开发者 · 文档导航',
    groups: [
      { items: [item('概览', '/docs/developers')] },
      {
        title: '开发工作流',
        items: [item('代码评审', '/docs/code-review'), item('集成终端', '/docs/integrated-terminal')],
      },
      {
        title: '扩展与自动化',
        items: [item('构建技能', '/docs/build-skills'), item('构建插件', '/docs/build-plugins'), item('钩子', '/docs/hooks')],
      },
      {
        title: '环境',
        items: [
          item('模式', '/docs/environments/modes'),
          item('本地环境', '/docs/environments/local-environment'),
          item('云端环境', '/docs/environments/cloud-environment'),
          item('Git 工作树', '/docs/environments/git-worktrees'),
        ],
      },
      {
        title: '使用 Codex 构建',
        items: [
          item('Codex SDK', '/docs/codex-sdk'),
          item('App Server', '/docs/app-server'),
          item('MCP Server', '/docs/mcp-server'),
          item('GitHub Action', '/docs/github-action'),
          item('非交互模式', '/docs/non-interactive-mode'),
        ],
      },
      {
        title: '第三方集成',
        items: [item('GitHub', '/docs/third-party/github'), item('Slack', '/docs/third-party/slack'), item('Linear', '/docs/third-party/linear')],
      },
      {
        title: '参考',
        items: [
          item('CLI 自定义', '/docs/cli-customization'),
          item('开发者命令', '/docs/developer-commands'),
          item('开发者设置', '/docs/developer-settings'),
        ],
      },
    ],
  },
  'security-administration': {
    label: '安全 · 文档导航',
    groups: [
      { items: [item('概览', '/docs/security-administration')] },
      {
        title: '权限',
        items: [
          item('配置档案', '/docs/permissions'),
          item('沙箱', '/docs/sandboxing'),
          item('自动评审', '/docs/sandboxing/auto-review'),
          item('智能体审批与安全', '/docs/agent-approvals-security'),
          item('互联网访问', '/docs/cloud/internet-access'),
        ],
      },
      {
        title: 'Codex 安全',
        items: [
          item('概览', '/docs/security'),
          item('快速开始', '/docs/security/plugin'),
          item('使用 Security 工作台', '/docs/security/plugin/workbench'),
          item('运行安全扫描', '/docs/security/plugin/scans'),
          item('运行深度扫描', '/docs/security/plugin/deep-scans'),
          item('评审代码变更', '/docs/security/plugin/code-changes'),
          item('梳理积压项', '/docs/security/plugin/triage-backlog'),
          item('修复安全发现', '/docs/security/plugin/fix-findings'),
          item('导出并跟踪安全发现', '/docs/security/plugin/export-findings'),
          item('撰写漏洞报告', '/docs/security/plugin/vulnerability-reports'),
          item('提出安全加固方案', '/docs/security/plugin/security-hardening'),
          item('更新日志', '/docs/security/plugin/changelog'),
          item('设置', '/docs/security/setup'),
          item('改进威胁模型', '/docs/security/threat-model'),
          item('云端常见问题', '/docs/security/faq'),
          item('CLI 快速开始', '/docs/security/cli'),
          item('运行批量扫描', '/docs/security/cli/bulk-scans'),
          item('CLI 参考', '/docs/security/cli/reference'),
          item('在 CI 中运行扫描', '/docs/security/cli/ci'),
          item('CLI 常见问题', '/docs/security/cli/faq'),
          item('TypeScript SDK', '/docs/security/sdk'),
        ],
      },
      { title: '安全保障', items: [item('网络安全', '/docs/cyber-safety')] },
    ],
  },
  administration: {
    label: '管理 · 文档导航',
    groups: [
      { items: [item('概览', '/docs/administration')] },
      {
        title: '开始使用',
        items: [item('管理员上线指南', '/docs/enterprise/admin-setup'), item('ChatGPT Work 管理员常见问题', '/docs/enterprise/work-admin-faq')],
      },
      {
        title: '身份与认证',
        items: [item('认证概览', '/docs/auth'), item('访问令牌', '/docs/enterprise/access-tokens')],
      },
      {
        title: '工作区访问、策略与模型',
        items: [
          item('组与预配', '/docs/enterprise/groups-and-provisioning'),
          item('角色与工作区权限', '/docs/enterprise/roles-and-workspace-permissions'),
          item('托管配置', '/docs/enterprise/managed-configuration'),
          item('HIPAA 配置', '/docs/hipaa-configuration'),
          item('工作区模型可用性', '/docs/enterprise/workspace-model-availability'),
        ],
      },
      {
        title: '插件与连接器控制',
        items: [item('插件控制', '/docs/enterprise/apps-and-connectors'), item('技能控制', '/docs/enterprise/skills')],
      },
      {
        title: '用量、治理与合规',
        items: [
          item('治理', '/docs/enterprise/governance'),
          item('工作区分析', '/docs/enterprise/workspace-analytics'),
          item('分析 API', '/docs/enterprise/analytics-api'),
          item('合规 API 与审计事件', '/docs/enterprise/compliance-api'),
        ],
      },
      {
        title: '部署与模型提供商',
        items: [
          item('管理 App 更新', '/docs/enterprise/manage-app-updates'),
          item('Windows App 部署', '/docs/enterprise/windows-deployment'),
          item('远程连接', '/docs/remote-connections'),
          item('Amazon Bedrock', '/docs/amazon-bedrock'),
        ],
      },
    ],
  },
  skills: {
    label: 'Skills 技能 · 文档导航',
    groups: [
      { items: [item('概览', '/docs/skills')] },
      {
        title: '入门',
        items: [
          item('Skill 是什么？', '/docs/skills/what-is-skill'),
          item('为什么需要 Skill？', '/docs/skills/why-skills'),
          item('Skill 与 Prompt、Memory、MCP', '/docs/skills/skill-vs-prompt-project-memory-mcp'),
        ],
      },
      {
        title: '从工作出发',
        items: [item('6 类最常用 Skill 工作流', '/docs/skills/workflow-playbook')],
      },
      {
        title: '第一次动手',
        items: [
          item('第一次使用 Skill', '/docs/skills/getting-started/use-first-skill'),
          item('创建第一个 Skill', '/docs/skills/getting-started/create-first-skill'),
        ],
      },
      {
        title: '安装与安全',
        items: [
          item('查找与安装 Skill', '/docs/skills/discover-and-install-skills'),
          item('第三方 Skill 安全审查', '/docs/skills/review-skill-security'),
        ],
      },
      {
        title: '写好并排错',
        items: [
          item('怎样写好一个 Skill', '/docs/skills/authoring/write-reliable-skill'),
          item('测试与迭代 Skill', '/docs/skills/authoring/test-and-iterate'),
          item('Skill 不触发怎么办？', '/docs/skills/troubleshoot-skill'),
        ],
      },
      {
        title: '组合与复用',
        items: [
          item('多个 Skill 怎么配合？', '/docs/skills/compose-multiple-skills'),
          item('跨工具与团队复用', '/docs/skills/portable-team-skills'),
        ],
      },
      {
        title: 'Skill 推荐',
        items: [
          item('AI 网站开发', '/docs/skills/recommendations/ai-web-development'),
          item('文章撰写与内容工作', '/docs/skills/recommendations/writing'),
          item('电商与增长运营', '/docs/skills/recommendations/ecommerce'),
          item('股票研究与投资分析', '/docs/skills/recommendations/investing'),
        ],
      },
    ],
  },
};

export type ReferenceHubKey = keyof typeof zhReferenceSidebars;

const referenceItems = (sidebar: ReferenceSidebar) => sidebar.groups.flatMap((group) => group.items);
const supplementalReferenceHubs: Partial<Record<ReferenceHubKey, string[]>> = {
  administration: ['/docs/enterprise/usage-limits', '/docs/auth/ci-cd-auth'],
};

export function getReferenceHubKey(locale: Locale, currentSlug: string): ReferenceHubKey | undefined {
  if (locale !== 'zh') return undefined;
  const currentHref = currentSlug ? `/docs/${currentSlug}` : '/docs';
  const sidebarHub = Object.entries(zhReferenceSidebars).find(([, sidebar]) =>
    referenceItems(sidebar).some((item) => item.href === currentHref),
  )?.[0] as ReferenceHubKey | undefined;
  if (sidebarHub) return sidebarHub;
  return Object.entries(supplementalReferenceHubs).find(([, routes]) => routes?.includes(currentHref))?.[0] as ReferenceHubKey | undefined;
}

export function getReferenceSidebar(locale: Locale, currentSlug: string): ReferenceSidebar | undefined {
  const hub = getReferenceHubKey(locale, currentSlug);
  return hub ? zhReferenceSidebars[hub] : undefined;
}

export function getReferenceNeighbors(locale: Locale, currentSlug: string) {
  const sidebar = getReferenceSidebar(locale, currentSlug);
  if (!sidebar) return undefined;

  const currentHref = `/docs/${currentSlug}`;
  const items = referenceItems(sidebar);
  const currentIndex = items.findIndex((item) => item.href === currentHref);
  if (currentIndex < 0) return undefined;

  return {
    previous: currentIndex > 0 ? items[currentIndex - 1] : undefined,
    next: items[currentIndex + 1],
  };
}
