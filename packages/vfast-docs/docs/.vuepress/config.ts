import { defineUserConfig, defaultTheme } from 'vuepress';
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'vfast-ui',
  description: '基于 Vue3 的移动端组件库',
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    darkMode: true,
    repo: 'https://github.com/asasugar/vfast',
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: [
      {
        text: '开发指南',
        children: [
          {
            text: '介绍',
            link: '/guide/introduce'
          },
          {
            text: '快速开始',
            link: 'getting-started'
          }
        ]
      },
      {
        text: '基础组件',
        children: []
      },
      {
        text: '表单组件',
        children: []
      },
      {
        text: '导航组件',
        children: []
      },
      {
        text: '业务组件',
        children: []
      },
      {
        text: '组合式API',
        children: []
      }
    ]
  })
});
