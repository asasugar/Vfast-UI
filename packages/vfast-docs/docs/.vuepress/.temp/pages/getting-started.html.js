export const data = {
  "key": "v-5dc4b15a",
  "path": "/getting-started.html",
  "title": "Hello VitePressdd",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1654167183000,
    "contributors": [
      {
        "name": "xiongjie.xue",
        "email": "xiongjie.xue@lkcoffee.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "getting-started.md"
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
