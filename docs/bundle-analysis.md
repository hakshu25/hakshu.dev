# Bundle Analysis Guide

このプロジェクトでは`@next/bundle-analyzer`を使用してバンドルサイズの分析と最適化を行います。

## 使用方法

### 基本分析

```bash
# 全体のバンドル分析（クライアント + サーバー）
pnpm analyze

# サーバーサイドバンドルのみ分析
pnpm analyze:server

# クライアントサイドバンドルのみ分析
pnpm analyze:browser
```

### 分析結果の見方

分析実行後、ブラウザが自動で開き、以下の情報が視覚化されます：

1. **Bundle Size**: 各チャンクのサイズ
2. **Module Distribution**: どのモジュールがどの程度のサイズを占めているか
3. **Dependencies**: 外部依存関係のサイズ影響
4. **Tree Shaking**: 使用されていないコードの特定

## 最適化のポイント

### 1. 大きなライブラリの特定

- highlight.js や その他の大きなライブラリを特定
- Dynamic Import の検討

### 2. 重複モジュールの確認

- 同じ機能のライブラリが複数含まれていないか
- lodash など部分的にインポートできるライブラリの最適化

### 3. コードスプリッティング

- ページごとのバンドル分離状況
- Dynamic Import の効果測定

## 推奨される改善アクション

### 現在の状況（Next.js 15最適化後）

- `optimizePackageImports` でhighlight.jsとmicrocms-js-sdkを最適化済み
- Tree shakingが適切に動作しているか確認

### 継続的な監視

```bash
# 新機能追加後の影響確認
pnpm analyze

# CI/CDでのサイズ監視（例）
# バンドルサイズが10%以上増加した場合の警告設定
```

## 目標指標

- **First Load JS**: 100KB以下を維持
- **Individual Pages**: 追加JSは20KB以下
- **Shared by all**: Core機能は50KB以下

## トラブルシューティング

### 分析が起動しない場合

```bash
# 明示的にブラウザを指定
ANALYZE=true BROWSER=chrome pnpm build
```

### ポート競合の場合

Bundle analyzerのデフォルトポート（8888）が使用中の場合は自動で別ポートが選択されます。
