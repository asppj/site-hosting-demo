export type Stat = { value: string; label: string };
export type Metric = { value: string; label: string };
export type Decision = { title: string; detail: string };
export type ArchLane = { lane: string; steps: string[]; note?: string };

export type SkillGroup = {
  icon: "workflow" | "layers" | "bug" | "gauge" | "shield" | "code";
  title: string;
  blurb: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  stack: string[];
};

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  period: string;
  role: string;
  stack: string[];
  featured: boolean;
  background: string;
  approach: string[];
  metrics: Metric[];
  architecture: ArchLane[];
  decisions: Decision[];
  pitfalls: Decision[];
};

export const profile = {
  name: "林知远",
  title: "Agent 开发工程师",
  focus: "多智能体系统 · 工具链 · 可观测与调试",
  tagline: "把「跑得起来」的 Agent 原型，推到「敢上线」的生产系统。",
  intro:
    "4 年大模型应用研发，其中 3 年几乎全部在 Agent 上：从单 Agent 的 Function Calling，做到带 Planner / Executor / Critic 的多智能体协同。我的强项不是把 demo 跑通，而是当一个系统里有 6 个角色、20 多个工具、平均 20 步长链路、还要 7×24 在线的时候，把它调稳。",
  intro2:
    "工作方式偏工程：先复现、再定位、再装闸门，最后把结论写成回归断言。复杂的 Agent 系统不会因为提示词写得漂亮而稳定，它是因为每一步都可观测、可回放、可止损才稳定。",
  location: "杭州",
  locationNote: "杭州 · 接受上海 / 远程",
  email: "zhiyuan.lin@example.com",
  phone: "138-0000-0000",
  github: "github.com/zhiyuan-agent",
  website: "zhiyuan-agent.dev",
  blog: "blog.zhiyuan-agent.dev",
  wechat: "zhiyuan_agent",
  years: "4 年",
  educationShort: "杭州电子科技大学 · 计算机科学与技术（本科）",
  languages: "中文（母语）· 英文（CET-6，可读论文与官方文档）",
  targetRole: "Agent / LLM 应用工程师",
  openTo: "全职 · 平台与工程化方向",
  stats: [
    { value: "4 年", label: "Agent / LLM 应用研发" },
    { value: "6 条", label: "业务线在跑我的平台" },
    { value: "3.2 万", label: "日会话量 / 生产环境" },
    { value: "78%", label: "复杂工单自动解决率" },
  ] as Stat[],
  availability: [
    { label: "目标岗位", value: "Agent / LLM 应用工程师，偏平台与工程化" },
    { label: "工作地点", value: "杭州 · 上海 · 可远程" },
    { label: "到岗时间", value: "一个月内" },
    { label: "面试偏好", value: "欢迎现场系统设计 + 线上调试演练" },
  ],
};

export const highlights = [
  {
    title: "真扛过多 Agent 生产系统",
    body: "6 个角色分工、20+ 工具接入、日均 3.2 万次会话、P95 端到端 4.8 秒。不是架构图，是每天要接线上告警的那种。",
  },
  {
    title: "调试体系是自己搭的",
    body: "trace、回放、断言式回归三件套从零建成，1200 条用例进 CI。长链路故障定位从 3 小时压到 15 分钟。",
  },
  {
    title: "工具面足够宽",
    body: "Function Calling、MCP、LangGraph、AutoGen、CrewAI 都真写过；把内部 20+ 服务收敛成一套工具 schema 与网关。",
  },
  {
    title: "攻坚靠方法，不靠运气",
    body: "四步定位法 + 四道预算闸门，用来处理死循环、工具误调用、上下文污染，能复述，也能教会别人。",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: "workflow",
    title: "Agent 编排",
    blurb: "角色拆分、状态机、路由分流与失败回环",
    items: ["LangGraph", "AutoGen", "CrewAI", "ReAct", "Plan-and-Execute", "多 Agent 仲裁"],
  },
  {
    icon: "layers",
    title: "工具链与协议",
    blurb: "把内部服务变成模型能安全调用的工具",
    items: ["Function Calling", "MCP Server", "Tool Schema", "鉴权限流幂等", "结构化输出", "RAG 混合检索"],
  },
  {
    icon: "bug",
    title: "调试与评测",
    blurb: "让失败能复现，让经验不流失",
    items: ["Trace 树与回放", "断言式回归", "语义评分", "人工抽检", "上下文污染排查"],
  },
  {
    icon: "gauge",
    title: "工程化与成本",
    blurb: "延迟、费用、稳定性一起看",
    items: ["预算闸门", "模型分档路由", "上下文压缩", "灰度与回滚", "OpenTelemetry · Langfuse"],
  },
  {
    icon: "shield",
    title: "稳定性",
    blurb: "复杂系统要能降级，而不是崩掉",
    items: ["超时 / 重试 / 熔断", "工具沙箱", "高风险二次确认", "多模型 fallback", "会话幂等与恢复"],
  },
  {
    icon: "code",
    title: "语言与后端",
    blurb: "Python 为主，TypeScript 为辅",
    items: ["Python", "TypeScript", "FastAPI", "Node.js", "PostgreSQL · Redis · Kafka", "Docker · K8s"],
  },
];

export const experiences: Experience[] = [
  {
    company: "星链跨境 SaaS",
    role: "Agent 平台负责人 / 高级工程师",
    period: "2022.06 — 至今",
    location: "杭州",
    summary: "负责内部 Agent 平台从 0 到 1，再从一个团队的试点，推到 6 条业务线的日常生产。",
    points: [
      "搭平台三层：编排层（角色 / 状态机 / 路由）、工具网关（统一 schema、鉴权、幂等）、观测层（trace / 回放 / 评测），支撑日均 3.2 万次会话。",
      "设计 Planner–Executor–Critic–Router 四角色协同：Router 按意图与难度分流轻量模型，Critic 做最多 2 轮打分回环。复杂客服工单自动解决率 41% → 78%，平均对话轮次 6.4 → 3.1。",
      "自建 trace + 回放 + 断言式回归（1200 条用例进 CI）：线上长链路故障平均定位时间 3 小时 → 15 分钟；模型与提示词变更灰度 3 天，零回滚事故。",
      "治理长链路失控：状态指纹去重 + 四道预算闸门（步数 / Token / 工具次数 / 墙钟时间），死循环与重复工具调用从每周 20+ 起降到个位数。",
      "成本与延迟：上下文压缩 + 结果缓存 + 模型分档路由，单任务 Token 成本 −62%，P95 延迟 −47%。",
      "带 5 人小组（3 后端 / 1 算法 / 1 产品），负责方案评审、值班机制与新人上手文档。",
    ],
    stack: ["LangGraph", "Python", "FastAPI", "PostgreSQL", "Redis", "Langfuse", "K8s"],
  },
  {
    company: "泓源金融科技",
    role: "后端 / 智能应用工程师",
    period: "2020.03 — 2022.05",
    location: "杭州",
    summary: "智能投研助手，从单轮问答做到能查数据、能出图表的研究助理。",
    points: [
      "主导智能投研助手：Function Calling + 混合检索（BM25 + 向量），研报问答人工抽检准确率 68% → 89%。",
      "工具调用加权限沙箱与高风险操作二次确认，上线 18 个月零误操作事故。",
      "维护规则引擎与任务编排，日均处理 20 万+ 定时任务；负责核心接口性能优化，P99 从 900ms 降到 210ms。",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Elasticsearch", "Celery"],
  },
  {
    company: "云栖软件",
    role: "后端开发工程师",
    period: "2019.07 — 2020.02",
    location: "杭州",
    summary: "企业后台交付。练的是接口设计与数据迁移的耐心。",
    points: [
      "交付 4 个企业后台项目，负责接口设计与历史数据迁移，单次迁移 300 万条数据零丢失。",
    ],
    stack: ["Python", "MySQL", "Redis"],
  },
];

export const projects: Project[] = [
  {
    slug: "multi-agent-service",
    name: "多 Agent 客服协同系统",
    subtitle: "Planner / Executor / Critic / Router 四角色分工",
    period: "2023.03 — 2023.12",
    role: "架构设计与核心实现",
    stack: ["LangGraph", "Python", "FastAPI", "Redis", "PostgreSQL"],
    featured: true,
    background:
      "客服工单跨订单、物流、退款、账户四个域。单 Agent 的提示词一路膨胀到 6000 字，复杂工单仍然要来回追问 6 轮以上，失败时完全不知道错在哪一步。",
    approach: [
      "按职责拆成 Router（意图与难度分流）、Planner（出计划）、Executor（调工具执行）、Critic（打分并决定是否重规划）四个角色，每个角色只带自己需要的工具与上下文。",
      "共享记忆用结构化黑板：计划、已确认事实、工具结果摘要分开存，不再把整段对话无脑塞进每一次调用。",
      "Critic 最多 2 轮回环，超过就降级到人工队列，并把差评样本自动落成回归用例。",
      "简单问题由 Router 直接走轻量单 Agent 通道，把 60% 的流量挡在复杂图之外。",
    ],
    metrics: [
      { value: "41 → 78%", label: "复杂工单自动解决率" },
      { value: "6.4 → 3.1", label: "平均对话轮次" },
      { value: "−62%", label: "单任务 Token 成本" },
      { value: "4.8s", label: "P95 端到端延迟" },
    ],
    architecture: [
      { lane: "请求链路", steps: ["用户消息", "Router 分流", "Planner", "Executor", "工具网关", "业务服务"] },
      { lane: "质量回路", steps: ["Executor 结果", "Critic 核验", "重规划 (≤2 轮)", "人工队列"] },
      { lane: "观测链路", steps: ["Span 采集", "预算闸门", "trace 存储", "回放 / 回归"] },
    ],
    decisions: [
      {
        title: "为什么不用一个大 Agent 硬扛",
        detail:
          "角色拆分的收益不在「像人」，而在上下文可控：每个角色只看自己需要的 800 字，而不是共享 6000 字的巨型提示词，出错也能定位到具体角色。",
      },
      {
        title: "为什么 Critic 只允许 2 轮",
        detail:
          "实测第 3 轮开始收益趋近于零，成本却线性上涨。超过 2 轮直接转人工，整体满意度反而更高。",
      },
      {
        title: "为什么保留轻量通道",
        detail:
          "60% 的工单一句话就能解决。让它们走完整图是纯浪费，也让复杂链路更难观察。",
      },
    ],
    pitfalls: [
      {
        title: "工具返回被截断，模型开始编",
        detail:
          "物流接口返回 200 条轨迹，早期只截前 5 条，模型就自行补全了「已签收」。改成结构化摘要 + 关键字段优先，并在提示词里声明「未提供即为未知」。",
      },
      {
        title: "两个 Agent 互相等对方",
        detail:
          "Planner 等 Executor 的结果，Executor 觉得缺参数又回去问 Planner，形成礼貌的死循环。最终用调用图上的状态指纹检测重复，第二次同状态直接触发闸门。",
      },
      {
        title: "降级路径没人测",
        detail:
          "模型超时的降级分支写了但从未跑过，真出事时直接抛异常。后来把降级写进回归用例，每周强制演练一次。",
      },
    ],
  },
  {
    slug: "agent-observability",
    name: "Agent 观测与回放平台",
    subtitle: "trace、回放、断言式回归三件套",
    period: "2023.09 — 2024.06",
    role: "从 0 设计与实现",
    stack: ["Python", "OpenTelemetry", "ClickHouse", "React", "Langfuse"],
    featured: true,
    background:
      "多 Agent 上线后最大的痛点不是不会改，而是不敢改：动一句提示词，没人知道会影响哪些用例，出了问题只能翻日志猜。",
    approach: [
      "以会话为单位记录 span 树：每次 LLM 调用、每次工具调用、每次路由决策都带输入、输出、Token、耗时与父节点。",
      "一键回放：拿失败会话的输入与工具快照重跑一遍，模型和提示词可替换，用于对照实验。",
      "断言式回归：除期望输出外，还断言「必须调用哪些工具、不许调用哪些、调用顺序是否合法、是否在预算内」。",
      "1200 条用例接进 CI，PR 上直接给出通过率与成本差异，提示词变更不再靠感觉。",
    ],
    metrics: [
      { value: "3h → 15min", label: "长链路故障定位" },
      { value: "12 → 86%", label: "回归用例覆盖率" },
      { value: "1200 条", label: "CI 中运行的用例" },
      { value: "20+ / 周", label: "拦住的潜在回归" },
    ],
    architecture: [
      { lane: "采集", steps: ["Agent 运行时", "OTel Span", "采集器", "ClickHouse"] },
      { lane: "回放", steps: ["工具结果快照", "mock 通道", "对照实验", "差异报告"] },
      { lane: "评测", steps: ["失败会话", "用例生成器", "回归集", "CI 门禁"] },
    ],
    decisions: [
      {
        title: "为什么断言工具序列而不是文本",
        detail:
          "文本相似度对业务几乎没有意义，工具序列错了才是真的错。事实层面用关键字段包含关系检查，稳定得多。",
      },
      {
        title: "为什么失败会话全量保留",
        detail:
          "失败样本是最贵的资产，直接决定评测集质量。抽样只对成功会话做，避免评测集全是简单题。",
      },
      {
        title: "为什么不做自动改提示词",
        detail:
          "试过，收益不稳定且引入不可解释的漂移。最后定位成「给人看的对照实验工具」：人来决策，机器负责把实验做得足够快。",
      },
    ],
    pitfalls: [
      {
        title: "span 埋点漏了异步任务",
        detail:
          "后台重规划跑在 Celery 里，trace 直接断掉，看到的现象是「模型突然没有输出」。补上上下文透传后才连成整条链路。",
      },
      {
        title: "回放和线上行为不一致",
        detail:
          "早期只回放 LLM 调用，工具走真实接口，每次结果都不同。加上快照 mock 之后才真正可复现。",
      },
    ],
  },
  {
    slug: "tool-gateway",
    name: "统一工具网关与 MCP 适配层",
    subtitle: "20+ 内部服务收敛成一套工具协议",
    period: "2024.02 — 2024.10",
    role: "协议设计与网关实现",
    stack: ["Python", "TypeScript", "MCP", "FastAPI", "Redis"],
    featured: true,
    background:
      "各业务线各自给模型写工具，schema 五花八门、错误信息全是 500、权限靠口头约定，工具调用错误率一度到 7.8%。",
    approach: [
      "统一工具描述规范：名称、用途、参数、返回结构、失败时的可读原因，全部强制 schema 校验。",
      "网关统一做鉴权、限流、幂等键、dry-run 预览与审计日志，业务方只写一个纯函数。",
      "提供 MCP Server 适配层，第三方与外部工具按 MCP 接入，平均 1 天接完一个。",
      "错误信息面向模型重写：不说「500 Internal Error」，而说「订单号不存在，请向用户确认后重试」。",
    ],
    metrics: [
      { value: "7.8 → 0.9%", label: "工具调用错误率" },
      { value: "20+", label: "接入的内部服务" },
      { value: "1 天", label: "新工具平均接入时间" },
      { value: "100%", label: "高风险操作审计覆盖" },
    ],
    architecture: [
      { lane: "调用", steps: ["Agent", "工具注册表", "网关", "内部服务 / MCP Server"] },
      { lane: "治理", steps: ["鉴权", "限流", "幂等键", "dry-run 确认", "审计日志"] },
      { lane: "反馈", steps: ["可读错误信息", "模型重试", "指标上报", "观测平台"] },
    ],
    decisions: [
      {
        title: "为什么把错误信息当产品做",
        detail:
          "模型的自愈能力取决于错误信息可读性。同样一次失败，「缺少必填参数 order_id」和「400 Bad Request」的重试成功率差了三倍。",
      },
      {
        title: "为什么强制 dry-run",
        detail:
          "写操作先返回将要执行的动作，由 Agent 展示给用户确认，再带幂等键真正执行。这一步让误操作事故归零。",
      },
    ],
    pitfalls: [
      {
        title: "schema 太自由，模型就自由发挥",
        detail:
          "早期参数允许任意 object，模型开始编造字段。改成封闭 schema、additionalProperties: false 之后稳定很多。",
      },
      {
        title: "限流把正常重试也拦了",
        detail:
          "按 IP 限流会误伤集中在网关后面的 Agent。改成按会话 + 工具维度配额，配合退避提示，成功率回升。",
      },
    ],
  },
  {
    slug: "agent-debug-kit",
    name: "agent-debug-kit（个人开源）",
    subtitle: "把 trace 变成可读时间线，把失败会话一键变用例",
    period: "2024.08 — 至今",
    role: "独立开发与维护",
    stack: ["TypeScript", "React", "Python"],
    featured: false,
    background:
      "公司内部工具好用但绑得死。我想做一套能带走的最小调试工具，任何框架接进来都能用。",
    approach: [
      "定义与框架无关的 JSONL trace 格式，提供 LangGraph 与自研框架的转换脚本。",
      "浏览器里渲染会话时间线：角色、工具、耗时、Token、费用一眼可见，长内容可折叠。",
      "选中异常步骤即可生成回归用例骨架，省掉手写断言的时间。",
    ],
    metrics: [
      { value: "1.4k", label: "GitHub Star" },
      { value: "6 家", label: "外部团队反馈在用" },
    ],
    architecture: [
      { lane: "流水线", steps: ["任意框架", "转换脚本", "JSONL", "时间线视图 / 用例生成"] },
    ],
    decisions: [
      {
        title: "为什么坚持文件格式优先",
        detail:
          "开发者不想为了调试再部署一套服务。能用 cat 看、能进 git 的格式，接受度远高于一个 SaaS。",
      },
    ],
    pitfalls: [
      {
        title: "过早做了收费计划",
        detail:
          "花了两个月做计费，结果没人需要。砍掉之后精力回到格式兼容，Star 反而涨得更快。",
      },
    ],
  },
];

export const stackGroups: { group: string; items: string[] }[] = [
  {
    group: "Agent / LLM",
    items: ["LangGraph", "AutoGen", "CrewAI", "LlamaIndex", "MCP", "Function Calling", "RAG", "结构化输出"],
  },
  {
    group: "语言 / 后端",
    items: ["Python", "TypeScript", "Node.js", "FastAPI", "Django", "Go（可读）"],
  },
  {
    group: "数据 / 中间件",
    items: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "Elasticsearch", "Celery"],
  },
  {
    group: "模型",
    items: ["Claude", "GPT 系列", "Qwen / DeepSeek 私有部署", "vLLM", "量化与推理加速"],
  },
  {
    group: "工程化",
    items: ["Docker", "Kubernetes", "OpenTelemetry", "Langfuse", "Grafana", "pytest", "GitHub Actions"],
  },
];

export const method = [
  {
    step: "01",
    title: "先复现，再动手",
    body: "把失败会话冻成可重放的用例。不能复现的问题，先解决复现，否则所有修改都只是猜。",
  },
  {
    step: "02",
    title: "一次只改一个变量",
    body: "用 20 条最小样本跑对照实验，确认因果再扩大范围。同时改提示词、模型和工具，等于什么也没学到。",
  },
  {
    step: "03",
    title: "给系统装闸门",
    body: "步数、Token、工具次数、墙钟时间四道预算，加上状态指纹去重。复杂系统允许失败，但不允许失控。",
  },
  {
    step: "04",
    title: "把经验写成断言",
    body: "每个修好的 bug 都换成一条回归用例。调试的终点不是这一单恢复，而是它不会再回来。",
  },
];

export const education = {
  school: "杭州电子科技大学",
  degree: "计算机科学与技术 · 工学学士",
  period: "2015.09 — 2019.06",
  extras: [
    "CET-6；技术博客累计 60+ 篇，集中在 Agent 调试与评测方向",
    "校内 ACM 队成员，省级程序设计竞赛三等奖",
    "英语可读论文与官方文档，能直接跟进 MCP / Agent 框架的更新",
  ],
};
