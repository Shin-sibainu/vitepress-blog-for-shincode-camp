---
theme: page
title: Page
next: false
prev: false
---

<script setup>
import { data as posts } from "../.vitepress/posts.data.js"
</script>

# ブログ記事一覧

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
  </li>
</ul>
