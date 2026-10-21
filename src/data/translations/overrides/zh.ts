import type { TranslationOverrides } from "@/types";

export const zhOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "AI 驱动的多语言体验" },
  language: { label: "语言", selectLanguage: "选择语言" },
  theme: {
    current: "当前主题：{theme}",
    switchTo: "切换到{theme}主题",
    light: "浅色",
    dark: "深色",
  },
  nav: {
    home: "首页",
    about: "关于",
    achievements: "成就",
    education: "教育",
    experience: "经历",
    projects: "项目",
    hackathons: "黑客松",
    volunteer: "志愿",
    certifications: "证书",
    contact: "联系",
    hireMe: "雇佣我",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    menu: "菜单",
  },
  hero: {
    availability: "开放机会中",
    tagline: "使用现代全栈技术，构建可扩展的 AI 驱动 Web 应用。",
    headline: "SL @ Stanford Code in Place X • 培训师 • 客座演讲人 • 主持人",
    primaryRole: "拟申请研究生候选人",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: ["Aspire Leaders 校友", "参加 8 次黑客松", "带领 3 支团队"],
    hireMe: "雇佣我",
    downloadResume: "下载简历",
    viewProjects: "查看项目",
    contactMe: "联系我",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "项目", hackathons: "黑客松", aiTools: "AI 工具" },
    roles: [
      "黑客松团队负责人",
      "培训师与导师",
      "客座演讲人",
      "网络研讨会主持人",
      "技术撰稿人",
    ],
  },
  about: {
    label: "关于",
    title: "工程、教育与社区领导力",
    description:
      "构建 Web 应用，分享技术知识，并通过教学和社区参与帮助他人成长。",
    summary:
      "毕业于巴基斯坦政府法扎拉巴德学院大学 Government College University Faisalabad 信息技术专业，拥有构建全栈 Web 应用的经验。\n\n目前担任斯坦福大学 Code in Place X 的 Section Leader。同时以培训师、客座演讲人和网络研讨会主持人的身份参与技术社区，并担任志愿者讲师。\n\n我的项目涵盖多语言语音验证、自动化平台以及成本优化的软件系统。我参加过国内和国际黑客松，带领过团队，也与技术社区协作打造实用的解决方案。",
  },
  achievements: {
    label: "成就",
    title: "成就与认可",
    description: "国内外项目认证的竞赛结果、领导力里程碑与认可。",
    cards: {
      "ach-participant": { label: "国内与国际黑客松", subtitle: "AI 与网页竞赛" },
      "ach-lead": { label: "团队负责人", subtitle: "生成式 AI 黑客松" },
      "ach-codesprint": { label: "CodeSprint LA 排名" },
      "ach-stanford": {
        label: "Stanford Code in Place X 课程组长",
        subtitle: "一次申请即入选",
      },
      "ach-quizoff": { label: "QuizOff", subtitle: "来自 35 个以上国家的学生" },
      "ach-linkedin": { label: "LinkedIn 社区" },
    },
  },
  education: {
    label: "教育",
    title: "教育背景",
    description: "学位、学业表现，以及支撑这些工作的课程。",
    cgpa: "绩点",
    coursework: "课程",
  },
  skills: {
    label: "技能",
    title: "AI 技能面板",
    description: "支撑生产应用与 AI 集成的技术与工具。",
    technologies: "{count} 项技术",
  },
  experience: {
    label: "经历",
    title: "职业经历",
    description: "在生产产品、虚拟实习与咨询项目中的实习和岗位经历。",
    simulation: "虚拟实习",
    certificate: "证书",
  },
  projects: {
    label: "项目",
    title: "学术与黑客松项目",
    description: "涵盖 AI 应用、自动化与全栈工程的毕业设计、学术与黑客松项目。",
    featured: "精选",
    teamProject: "团队项目",
    myRole: "我的角色",
    github: "查看仓库",
    liveDemo: "在线演示",
    items: {
      "proj-feature-kit": {
        description:
          "把文字生成图像、文字转语音、语音转换、摘要与背景移除集中在同一个界面的模块化 AI 平台。作为毕业设计构建，各功能彼此独立，替换模型或接口时无需改动应用其余部分。",
        role: "毕业设计",
      },
      "proj-verivoice": {
        description:
          "为 UNESCO 青年黑客松 2026 打造的语音优先多语言验证助手。语音进、语音出的循环可用乌尔都语、西班牙语、印度尼西亚语和英语作答，同时主张分类、来自机构来源的证据检索与引用保障机制让回答始终贴合已检索到的来源。我构建了音频可视化、免提语音模式和证据抽屉。",
        role: "前端开发者",
      },
      "proj-amd-zerotoken": {
        description:
          "面向 AMD 开发者黑客松赛道 1 的资源感知 AI 推理路由器。确定性求解器以零 token 成本处理结构化问题，本地量化的 Qwen 2.5 3B 模型负责低复杂度任务，云端升级仅限于允许列表内的模型。token 上限与超时设置让运行始终处于 4 GB 内存、2 vCPU、无 GPU 的容器限制之内。",
      },
      "proj-autovance": {
        description:
          "把邮件发送、安全 Webhook 执行、定时任务与自定义表单动作整合到同一个面板的 AI 自动化平台。作为团队参加 HEC 生成式 AI 第 3 期的参赛作品构建，它加入了一个以研究原型形式呈现、支持试运行预览的可解释 AI 工作流构建器，并如实报告供应商失败而不是宣称成功。",
        role: "团队负责人",
      },
      "proj-hiregen": {
        description:
          "自动生成面试问题、为候选人回答打分并产出招聘报告的招聘平台。我带领团队为 HEC 生成式 AI 第 2 期交付了它，让招聘团队获得一致且可重复的技术面试与打分流程。",
        role: "团队负责人",
      },
      "proj-mira-ai": {
        description:
          "结合心情日记、习惯追踪与目标分析的个人成长平台。JWT 与 Google OAuth 让每个账号的记录只对其所有者可见。",
      },
      "proj-lakki-marwat": {
        description:
          "人机交互课程期中学术项目：对 Lakki Marwat 大学网站做完整的启发式与可用性评估，以书面报告和演示文稿交付，并通过 Hirestive 评审。",
      },
      "proj-portfolio": {
        description:
          "基于 Next.js、TypeScript 与 Tailwind CSS 的作品集，内置 AI 助手与动效界面，旨在现场展示其他项目所使用的同一套全栈与生成式 AI 技术栈。",
      },
    },
  },
  hackathons: {
    label: "黑客松",
    title: "国内与国际黑客松",
    description:
      "参与国内外 AI 与开发者黑客松并担任团队负责人，在 CodeSprint LA 中跻身前 25 名。",
  },
  volunteer: {
    label: "社区",
    title: "志愿服务经历",
    description: "在客户项目和黑客松之外的教学、指导与社区贡献。",
  },
  certifications: {
    label: "资质",
    title: "培训与证书",
    description: "职业发展、领导力培训与各类证书，每项均链接至已核实的文件。",
  },
  contact: {
    label: "联系",
    title: "一起构建智能产品",
    description: "开放全栈与 AI 工程机会、合作以及 AI 驱动项目。",
    aiPoweredContact: "AI 驱动联系",
    getInTouch: "取得联系",
    intro: "欢迎就招聘、自由职业项目或黑客松合作联系我。",
    linkedinProfile: "LinkedIn 主页",
    githubProfile: "GitHub 主页",
    form: {
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "邮箱",
      emailPlaceholder: "you@example.com",
      message: "留言",
      messagePlaceholder: "介绍您的项目或机会...",
      sending: "发送中...",
      send: "发送消息",
    },
    toast: { success: "消息发送成功", error: "出现错误" },
  },
  footer: { email: "邮箱", rights: "保留所有权利。" },
  resume: { unavailable: "简历暂不可用，请直接联系我。" },
};
