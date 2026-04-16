# 🦷 歯科情報サイト

歯の悩みを解決するための総合情報サイトです。React + Viteで構築されたSPA（Single Page Application）です。

## ✨ 主な機能

### 📋 症状別治療期間ガイド
- 虫歯、歯周病、口内炎など8種類の症状の治療期間目安
- 症状の詳細説明と治療の必要性

### 🏥 歯医者に行くべき判断基準
- 症状別の受診緊急度（緊急・高・中・低）
- 受診前のアドバイス

### 🔍 近所の歯医者検索
- 名前や住所での検索機能
- 専門分野でのフィルタリング
- 距離、評価、レビュー数でのソート

### ⭐ おすすめの歯医者
- 評価の高い歯医者の紹介
- 詳細な診療情報とアクセス情報

## 🚀 技術スタック

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS Modules
- **Package Manager**: npm

## 🛠️ 開発環境のセットアップ

### 必要条件
- Node.js 18+
- npm

### インストールと実行

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 📁 プロジェクト構造

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── Navigation.jsx
│   ├── SymptomGuide.jsx
│   ├── WhenToVisitDoctor.jsx
│   ├── DentistSearch.jsx
│   └── RecommendedDentists.jsx
├── pages/              # ページコンポーネント
│   └── Home.jsx
├── data/               # ダミーデータ
│   ├── symptoms.js
│   └── dentists.js
├── styles/             # CSSファイル
└── assets/             # 画像などのアセット
```

## 🌐 デプロイ

このプロジェクトはGitHub PagesやVercel、Netlifyなどのプラットフォームに簡単にデプロイできます。

### Vercelへのデプロイ例

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

## 📝 ライセンス

MIT License

## 🤝 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成
