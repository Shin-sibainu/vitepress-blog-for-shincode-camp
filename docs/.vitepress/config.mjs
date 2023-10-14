/* https://github.com/taka1156/fe-beginner-doc/blob/master/src/0_docs/index.md */
/* https://creators.members.co.jp/2021/09/knowledge_051/ */
/* https://nshmura.com/posts/migration-to-vitepress/ */

export default {
  lang: "ja",
  title: "ShinCode_Camp_Blog",
  description: "作りたいアプリが作れるフルスタックエンジニアになろう🚀",
  // head: [
  //   [
  //     "meta",
  //     { property: "og:image", content: "/fe-beginner-doc/site/logo.png" },
  //   ],
  //   [
  //     "link",
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       // href: "/fe-beginner-doc/site/logo.png",
  //     },
  //   ],
  // ],
  base: "/",
  themeConfig: {
    repo: "Shin-sibainu",
    // logo: "/site/logo.png",
    editLinks: true,
    // editLinkText: "このページをgithubで編集",
    // lastUpdated: "最終更新",
    docsDir: "docs",
    docsBranch: "main",
    nav: [
      {
        text: "無料ではじめる",
        items: [
          {
            text: "ShinCode_Campで学ぶ🚀",
            link: "https://code-s-school-5bc2.thinkific.com/bundles/shincode-camp",
          },
        ],
      },

      {
        text: "Udemyクーポン",
        items: [
          {
            text: "お得な90%割引クーポン",
            link: "http://shincode.info/2021/12/31/udemy-discount-coupon/",
          },
        ],
      },
    ],

    sidebar: [
      {
        items: [
          { text: "ShinCode_Campについて", link: "/shincode_camp/" },
          { text: "ブログ記事一覧", link: "/posts/" },
          { text: "タグ一覧", link: "/tags/" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Shin-sibainu" },
      { icon: "twitter", link: "https://twitter.com/Shin_Engineer" },
      {
        icon: "youtube",
        link: "https://www.youtube.com/channel/UCNTxclE0N4qsUuirssL_D8w",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © present shincode",
    },
  },
};
