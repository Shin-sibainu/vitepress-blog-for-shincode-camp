import { createContentLoader } from "vitepress";

export default createContentLoader("posts/**/*.md", {
  includeSrc: false,
  transform(rawData) {
    const filteredData = rawData.filter((page) => page.url !== "/posts/");

    const sortedData = filteredData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date);
    });

    const mappedData = sortedData.map((page) => {
      page.relativePath =
        page.url.replace(/^\/docs\/posts\/[0-9]+\/[0-9]+\//g, "posts/") + ".md";
      page.url = page.url
        .replace(/^\/docs\/posts\/[0-9]+\/[0-9]+\//g, "/posts/")
        .replace(/index$/g, "");
      return page;
    });

    return mappedData;
  },
});
