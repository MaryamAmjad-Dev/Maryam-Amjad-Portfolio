import type { TranslationOverrides } from "@/types";

export const jaOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "AI による多言語体験" },
  language: { label: "言語", selectLanguage: "言語を選択" },
  theme: {
    current: "現在のテーマ: {theme}",
    switchTo: "{theme}テーマに切り替える",
    light: "ライト",
    dark: "ダーク",
  },
  nav: {
    home: "ホーム",
    about: "About",
    achievements: "実績",
    education: "学歴",
    experience: "経歴",
    projects: "プロジェクト",
    hackathons: "ハッカソン",
    volunteer: "ボランティア",
    certifications: "資格・認定",
    contact: "連絡",
    hireMe: "採用する",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    menu: "メニュー",
  },
  hero: {
    availability: "新しい機会を受け付けています",
    hireMe: "採用する",
    downloadResume: "履歴書をダウンロード",
    viewProjects: "プロジェクトを見る",
    contactMe: "お問い合わせ",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "プロジェクト", hackathons: "ハッカソン", aiTools: "AI ツール" },
    roles: ["フルスタック開発者", "トレーナー", "ゲスト講演者", "モデレーター"],
  },
  about: {
    label: "About",
    title: "AI エンジニアリング、教育、コミュニティリーダーシップ",
    description:
      "AI 駆動のアプリケーションを構築し、技術知識を共有し、教育とコミュニティ活動を通じて他の人の成長を支えます。",
    summary:
      "Government College University Faisalabad（ファイサラーバード政府大学）で情報技術を学び卒業。フルスタック Web アプリケーションと AI 駆動のソリューションを構築してきました。\n\n現在は Stanford University Code in Place X の Section Leader を務めています。並行して、トレーナー、ゲスト講演者、ウェビナーモデレーター、ボランティア講師として技術コミュニティに貢献しています。\n\nプロジェクトは AI アプリケーション開発、多言語の音声ベース検証、コスト最適化 AI システムにわたります。国内外のハッカソンに参加し、チームを率い、実践的なソリューションづくりに取り組んできました。",
  },
  achievements: {
    label: "実績",
    title: "実績と評価",
    description:
      "国内外のプログラムによる検証済みの大会結果、リーダーシップの節目、そして評価。",
  },
  education: {
    label: "学歴",
    title: "学歴",
    description: "学位、学業成績、そして仕事の土台となる履修科目。",
    cgpa: "GPA",
    coursework: "履修科目",
  },
  skills: {
    label: "スキル",
    title: "AI スキルダッシュボード",
    description: "本番アプリケーションと AI 統合を支える技術とツール。",
    technologies: "{count} 件の技術",
  },
  experience: {
    label: "経歴",
    title: "プロフェッショナル経験",
    description:
      "本番プロダクト、バーチャルシミュレーション、コンサルティング案件におけるインターンシップと職務経験。",
    simulation: "バーチャルシミュレーション",
    certificate: "証明書",
  },
  projects: {
    label: "プロジェクト",
    title: "学術プロジェクト",
    description:
      "AI アプリケーション、自動化、フルスタックエンジニアリングにわたる卒業制作・学術・ハッカソンの各プロジェクト。",
    featured: "Featured",
    problem: "課題",
    solution: "ソリューション",
    github: "リポジトリを見る",
    liveDemo: "ライブデモ",
  },
  hackathons: {
    label: "ハッカソン",
    title: "国際ハッカソン",
    description:
      "国内外の AI・開発者ハッカソンでの参加とチームリーダー経験。CodeSprint LA では上位 25 位に入りました。",
  },
  volunteer: {
    label: "コミュニティ",
    title: "ボランティア経験",
    description: "クライアントやハッカソンに加えて、教育・指導とコミュニティ貢献。",
  },
  certifications: {
    label: "資格・認定",
    title: "研修と認定資格",
    description:
      "プロフェッショナルな成長、リーダーシップ研修、そして各種認定。いずれも検証済みの書類にリンクしています。",
  },
  contact: {
    label: "連絡",
    title: "インテリジェントなものを一緒に作りましょう",
    description:
      "フルスタックおよび AI エンジニアリングの機会、コラボレーション、AI プロジェクトを歓迎します。",
    aiPoweredContact: "AI パワードコンタクト",
    getInTouch: "お問い合わせ",
    intro: "採用、フリーランス、ハッカソンコラボのご連絡をお待ちしています。",
    linkedinProfile: "LinkedIn プロフィール",
    githubProfile: "GitHub プロフィール",
    form: {
      name: "お名前",
      namePlaceholder: "お名前",
      email: "メール",
      emailPlaceholder: "you@example.com",
      message: "メッセージ",
      messagePlaceholder: "プロジェクトや機会について教えてください...",
      sending: "送信中...",
      send: "メッセージを送信",
    },
    toast: { success: "メッセージを送信しました", error: "エラーが発生しました" },
  },
  footer: { email: "メール", rights: "All rights reserved." },
  resume: { unavailable: "履歴書はまだ利用できません。直接ご連絡ください。" },
};
