<template>
  <div id="home">
    <div id="banner">
      <div class="logo_box">
        <img
          class="logo"
          draggable="false"
          src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg"
        />
      </div>
    </div>

    <div id="content">
      <div id="title">
        <img
          class="logo"
          draggable="false"
          src="https://tianyuhao.cn/fighting/imgs/FightingDesign.svg"
        />
        <h1 class="title">VFast-UI</h1>

        <h1 class="subtitle">Vue3 移动端组件库。</h1>
        <p class="content">
          <strong>🎨 VFast-UI</strong> 是一款灵活、优质的
          <strong>vue3</strong>
          移动端组件库，为开发者、设计师准备。希望开发者可以借用
          <strong>VFast-UI</strong>
          的设计，在不久的将来，孕育出更高阶的组件库。
        </p>

        <div class="action">
          <a href="/docs/install">
            <f-button type="primary" size="large">开始使用</f-button>
          </a>
        </div>
      </div>

      <div id="footer">
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

        <p class="code">
          <!-- <a target="_back" href="https://beian.miit.gov.cn">
            FightingDesign | 浙ICP备2021024540号-2
          </a> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
    item: []
  },
  {
    title: '帮助',
    item: [
      {
        text: '报告问题',
        link: 'https://github.com/asasugar/vfast/issues'
      }
    ]
  }
] as const;
</script>

<style lang="less" scoped>
#home {
  position: relative;
  #banner {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 100;
    min-height: 370px;
    padding-bottom: 30px;
    .logo_box {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      max-width: 1368px;
      z-index: -1;
      overflow: hidden;
      background: -webkit-linear-gradient(815deg, rgb(57, 92, 227) 10%, rgb(94, 224, 221));
      -webkit-mask: url('./images/banner.svg') 100% -150px / cover no-repeat;
      .logo {
        width: 500px;
        height: 500px;
        top: 0px;
        right: 0px;
        position: absolute;
        transform: translate(-155px, -77px) scale(1);
        user-select: none;
      }
    }
  }
  #content {
    transition: 0.2s;
    max-width: 1350px;
    height: 500px;
    padding: 30px;
    box-sizing: border-box;
    right: 0;
    left: 0;
    margin: auto;
    top: 140px;
    position: absolute;
    #title {
      .logo {
        width: 120px;
        height: 120px;
        user-select: none;
      }
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
        margin-top: 30px;
        display: flex;
        align-items: center;
        .code {
          margin-left: 17px;
          font-size: 21px;
        }
      }
    }
    #introduce {
      margin-bottom: 40px;
      .advantage {
        margin-top: 80px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        user-select: none;
        .advantage_item {
          width: 50%;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .img_box {
            width: 70%;
            overflow: hidden;
            height: 12rem;
            img {
              width: 100%;
              height: 200px;
              transition: 0.3s;
            }
          }
          .text {
            margin-top: 30px;
            font-size: 20px;
          }
        }
      }
    }
    #footer {
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
      .code {
        margin-top: 30px;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        a {
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
