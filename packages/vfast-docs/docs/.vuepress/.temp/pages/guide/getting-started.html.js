export const data = {
  "key": "v-fb0f0066",
  "path": "/guide/getting-started.html",
  "title": "快速上手",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": [
        {
          "level": 3,
          "title": "通过npm安装",
          "slug": "通过npm安装",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1654187519000,
    "contributors": [
      {
        "name": "xiongjie.xue",
        "email": "xiongjie.xue@luckincoffee.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/getting-started.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
