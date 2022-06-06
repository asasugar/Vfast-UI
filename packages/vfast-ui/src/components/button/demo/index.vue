<script setup lang="ts">
import VButton from '..';

const t = {
  type: '按钮类型',
  size: '按钮尺寸',
  icon: '图标按钮',
  loading: '加载状态',
  shape: '按钮形状',
  default: '默认按钮',
  primary: '主要按钮',
  success: '成功按钮',
  danger: '危险按钮',
  warning: '警告按钮',
  large: '大号按钮',
  normal: '普通按钮',
  small: '小型按钮',
  mini: '迷你按钮',
  plain: '朴素按钮',
  square: '方形按钮',
  round: '圆形按钮',
  hairline: '细边框',
  hairlineButton: '细边框按钮',
  loadingText: '加载中...',
  router: '页面导航',
  urlRoute: 'URL 跳转',
  vueRoute: '路由跳转',
  customColor: '自定义颜色',
  pure: '单色按钮',
  gradient: '渐变色按钮',
  blockElement: '块级元素'
};
</script>

<template>
  <demo-block :title="t.type">
    <div class="demo-button-row">
      <v-button type="primary">{{ t.primary }}</v-button>
      <v-button type="success">{{ t.success }}</v-button>
      <v-button type="default">{{ t.default }}</v-button>
    </div>
    <v-button type="danger">{{ t.danger }}</v-button>
    <v-button type="warning">{{ t.warning }}</v-button>
  </demo-block>

  <demo-block :title="t.plain">
    <v-button plain type="primary" :text="t.plain" />
    <v-button plain type="success" :text="t.plain" />
  </demo-block>

  <demo-block :title="t.hairline">
    <v-button plain hairline type="primary" :text="t.hairlineButton" />
    <v-button plain hairline type="success" :text="t.hairlineButton" />
  </demo-block>

  <demo-block :title="t.shape">
    <v-button type="primary" square :text="t.square" />
    <v-button type="success" round :text="t.round" />
  </demo-block>

  <demo-block :title="t.size">
    <v-button type="primary" size="large">{{ t.large }}</v-button>
    <v-button type="primary" size="normal">{{ t.normal }}</v-button>
    <v-button type="primary" size="small">{{ t.small }}</v-button>
    <v-button type="primary" size="mini">{{ t.mini }}</v-button>
  </demo-block>

  <demo-block :title="t.blockElement">
    <v-button type="primary" block>{{ t.blockElement }}</v-button>
  </demo-block>

</template>

<style lang="less">
.demo-button {
  background: var(--v-background-color-light);

  .v-button {
    &--large {
      margin-bottom: var(--v-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--v-padding-md);
    }
  }

  .v-doc-demo-block {
    padding: 0 var(--v-padding-md);
  }

  .v-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--v-padding-sm);
  }
}
</style>
