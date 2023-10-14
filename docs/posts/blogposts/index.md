---
theme: page
title: VitePressを使ってブログを構築してみた
next: false
prev: false
---

# VitePress を使ってブログを構築してみた

こちらのブログは[VitePress](https://vitepress.dev/)を利用して構築したものです。

今回は VitePress を使ってブログ構築した流れを紹介します

<!-- ::: info 参考サイト 📝

- [ブログサイトを VitePress へ移行した](https://nshmura.com/posts/migration-to-vitepress/)

- [ブログを書くための MarkDown リスト](https://vitepress.dev/guide/markdown)
  ::: -->

::: danger 【広告】月額 2500 円でフルスタックエンジニアになろう :dog:
[ShinCode_Camp の詳細を見る](https://code-s-school-5bc2.thinkific.com/bundles/shincode-camp)
:::

## まずは環境セットアップ

ディレクトリ作成から行います。

```cmd
mkdir vitepress-blog
cd vitepres-blog
```

そして初期化しましょう。

```cmd
npm init -y
npm i -D vitepress
```

1 からセットアップを行います。

## ファイル構造

以下のようなファイル構成にしてみてください。
