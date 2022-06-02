<template><div><div class="home">
  <h1 class="title">VFast-UI</h1>
  <h1 class="subtitle">Vue3 移动端组件库。</h1>
  <p class="content">
    <strong>🎨 vfast-ui</strong> 是一款灵活、优质的
    <strong>vue3</strong>
    移动端组件库。
  </p>
  <div class="action">
    <a href="/guide/introduce">
      <button type="primary" size="large">开始使用</button>
    </a>
  </div>
  <div class="footer">
    <div class="footer_item">
      <div class="list">
        <ul v-for="(lists, index) in bottomList" :key="index">
          <h4>{{ lists.title }}</h4>
          <li v-for="(list, i) in lists.item" :key="i">
            <a class="home_link" target="_back" :href="list.link">
              {{ list.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div></template>

<script setup>
const bottomList = [
  {
    title: '社区',
    item: [
      { text: 'Github', link: 'https://github.com/asasugar/vfast' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/vfast' }
    ]
  },
  {
    title: '关于我',
    item: [
      { text: 'asasugar', link: 'https://github.com/asasugar' },
      { text: 'Blog', link: 'http://blog.jxxj.top/' }
    ]
  },
  {
    title: '其它开源',
    item: [
      { text: 'custom-json2excel', link: 'https://github.com/asasugar/custom-json2excel' },
      { text: 'vite-element-plus-admin', link: 'https://github.com/asasugar/vite-element-plus-admin' },
    ]
  },
  {
    title: '帮助',
    item: [
      {
        text: 'Issues',
        link: 'https://github.com/asasugar/vfast/issues'
      }
    ]
  }
];
</script>

<style lang="less" scoped>
.home {
  transition: 0.2s;
  max-width: 1350px;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
  right: 0;
  left: 0;
  margin: auto;
  .title {
    font-size: 32px;
    line-height: 43px;
    text-align: left;
    letter-spacing: -1.2px;
    font-weight: bold;
    word-break: normal;
    display: inline-block;
    margin-top: 20px;
    background: -webkit-linear-gradient(55deg, rgb(57, 92, 227) 10%, rgb(94, 224, 221));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subtitle {
    margin-top: 10px;
    font-size: 33px;
    font-weight: 700;
    transition: 0.3s;
    font-weight: 500;
    line-height: 50px;
    transition: 0.3s;
  }
  .content {
    transition: 0.3s;
    max-width: 700px;
    margin-top: 30px;
  }
  .action {
    margin: 30px 0;
    display: flex;
    align-items: center;
    button {
      font-size: 18px;
      color: #fff;
      background-color: #1989fa;
      border-radius: 6px;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
    }
  }
  .footer {
    border-top: 1px solid #eee;
    width: 100%;
    margin: auto;
    padding: 40px 0;
    box-sizing: border-box;
    .footer_item {
      .title {
        margin: 30px 0 10px 0;
        font-weight: 600;
      }
      .list {
        display: flex;
        justify-content: space-between;
        user-select: none;
        ul {
          h4 {
            font-weight: 600;
            line-height: 36px;
            font-size: 15px;
          }
          li {
            line-height: 36px;
            cursor: pointer;
            font-size: 14px;
            list-style: none;
            .home_link {
              color: #333;
            }
          }
        }
      }
      .collaborator {
        width: 150px;
        height: 50px;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .myPhoto {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        .userName {
          font-size: 20px;
          margin-left: 10px;
          color: #333;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  #content {
    top: 200px !important;
  }
}
</style>
