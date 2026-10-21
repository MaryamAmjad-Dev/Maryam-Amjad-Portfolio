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
    tagline:
      "最新のフルスタック技術で、スケーラブルな AI 搭載 Web アプリケーションを構築します。",
    headline:
      "SL @ Stanford Code in Place X • トレーナー • ゲスト講演者 • モデレーター",
    primaryRole: "大学院進学を目指す候補者",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: ["Aspire Leaders 修了生", "ハッカソン 8 回参加", "チーム 3 回率いた"],
    hireMe: "採用する",
    downloadResume: "履歴書をダウンロード",
    viewProjects: "プロジェクトを見る",
    contactMe: "お問い合わせ",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "プロジェクト", hackathons: "ハッカソン", aiTools: "AI ツール" },
    roles: [
      "ハッカソンのチームリード",
      "トレーナー＆メンター",
      "ゲスト講演者",
      "ウェビナーモデレーター",
      "技術ライター",
    ],
  },
  about: {
    label: "About",
    title: "エンジニアリング、教育、コミュニティリーダーシップ",
    description:
      "Web アプリケーションを構築し、技術知識を共有し、教育とコミュニティ活動を通じて他の人の成長を支えます。",
    summary:
      "Government College University Faisalabad（ファイサラーバード政府大学）で情報技術を学び卒業。フルスタック Web アプリケーションを構築してきました。\n\n現在は Stanford University Code in Place X の Section Leader を務めています。並行して、トレーナー、ゲスト講演者、ウェビナーモデレーター、ボランティア講師として技術コミュニティに貢献しています。\n\nプロジェクトは多言語の音声ベース検証、自動化プラットフォーム、コスト最適化されたソフトウェアシステムにわたります。国内外のハッカソンに参加し、チームを率い、実践的なソリューションづくりに取り組んできました。",
  },
  achievements: {
    label: "実績",
    title: "実績と評価",
    description:
      "国内外のプログラムによる検証済みの大会結果、リーダーシップの節目、そして評価。",
    cards: {
      "ach-participant": { label: "国内・国際ハッカソン", subtitle: "AI・Web の大会" },
      "ach-lead": { label: "チームリード", subtitle: "生成 AI ハッカソン" },
      "ach-codesprint": { label: "CodeSprint LA 順位" },
      "ach-stanford": {
        label: "Stanford Code in Place X セクションリーダー",
        subtitle: "一発で選出",
      },
      "ach-quizoff": { label: "QuizOff", subtitle: "35 か国以上の学生" },
      "ach-linkedin": { label: "LinkedIn コミュニティ" },
    },
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
    teamProject: "チームプロジェクト",
    myRole: "担当",
    github: "リポジトリを見る",
    liveDemo: "ライブデモ",
    items: {
      "proj-feature-kit": {
        description:
          "テキスト画像変換、テキスト音声変換、音声変換、要約、背景除去をひとつの画面にまとめたモジュール型 AI プラットフォーム。卒業制作として構築し、各機能を独立させたため、モデルやエンドポイントを差し替えてもアプリ本体に手を入れずに済みます。",
        role: "卒業制作",
      },
      "proj-verivoice": {
        description:
          "UNESCO ユースハッカソン 2026 向けに作られた音声中心の多言語検証アシスタント。音声で入力するとウルドゥー語・スペイン語・インドネシア語・英語で応答し、主張の分類、公的機関からの証拠収集、引用の保護措置によって回答を取得した出典に結びつけます。音声ビジュアライザー、ハンズフリー音声モード、Evidence Drawer を構築しました。",
        role: "フロントエンド開発者",
      },
      "proj-amd-zerotoken": {
        description:
          "AMD Developer Hackathon Track 1 向けのリソース考慮型 AI 推論ルーター。決定的ソルバーが構造化された問題をトークンコストゼロで処理し、量子化したローカル Qwen 2.5 3B モデルが低複雑度のタスクを担当し、クラウドへの昇格は許可リスト内に限定されます。トークン上限とタイムアウトにより、実行は 4 GB RAM・2 vCPU・GPU なしのコンテナ内に収まります。",
      },
      "proj-autovance": {
        description:
          "メール送信、安全な Webhook 実行、cron 予約、カスタムフォームアクションをひとつのダッシュボードにまとめた AI 搭載自動化プラットフォーム。HEC 生成 AI コホート 3 のチーム提出物として構築し、ドライランのプレビュー付きで研究試作として提示される説明可能な AI ワークフロービルダーを追加しています。プロバイダーの失敗は成功と称さずに報告します。",
        role: "チームリード",
      },
      "proj-hiregen": {
        description:
          "面接質問を自動生成し、候補者の回答を採点し、採用レポートを出力する採用プラットフォーム。HEC 生成 AI コホート 2 のために納品したチームを率い、採用チームに一貫して繰り返せる技術面接と採点の流れを提供しました。",
        role: "チームリード",
      },
      "proj-mira-ai": {
        description:
          "気分の日記、習慣トラッキング、目標分析を組み合わせた個人成長プラットフォーム。JWT と Google OAuth の認証により、各アカウントの記録はその所有者だけに公開されます。",
      },
      "proj-lakki-marwat": {
        description:
          "ヒューマンコンピュータインタラクションの中間課題による学術プロジェクト。University of Lakki Marwat の Web サイトをヒューリスティックとユーザビリティの両面から全面評価し、レポートとプレゼンテーションとして提出、Hirestive で評価されました。",
      },
      "proj-portfolio": {
        description:
          "Next.js、TypeScript、Tailwind CSS で作られたポートフォリオ。内蔵の AI アシスタントとアニメーション付き UI を備え、他のプロジェクトと同じフルスタック・生成 AI スタックの実演を意図しています。",
      },
    },
  },
  hackathons: {
    label: "ハッカソン",
    title: "国内・国際ハッカソン",
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
