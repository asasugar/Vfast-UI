export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "darkMode": true,
  "repo": "https://github.com/asasugar/vfast",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    }
  ],
  "sidebar": [
    {
      "text": "开发指南",
      "children": [
        {
          "text": "介绍",
          "link": "/guide/introduce"
        },
        {
          "text": "快速开始",
          "link": "getting-started"
        }
      ]
    },
    {
      "text": "基础组件",
      "children": []
    },
    {
      "text": "表单组件",
      "children": []
    },
    {
      "text": "导航组件",
      "children": []
    },
    {
      "text": "业务组件",
      "children": []
    },
    {
      "text": "组合式API",
      "children": []
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
