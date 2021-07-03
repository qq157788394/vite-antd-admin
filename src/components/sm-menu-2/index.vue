<template>
  <a-layout class="menu2-layout">
    <a-layout-header class="menu2-layout-header">
      <a-typography-text ellipsis strong :content="currentMenu1"></a-typography-text>
    </a-layout-header>

    <a-layout-content class="menu2-layout-content">
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="light">
        <a-menu-item v-for="item in 20" :key="item">{{ `二级导航${item}` }}</a-menu-item>
      </a-menu>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'SmMenu2',
  data() {
    return {
      currentMenu1: '选中的一级导航',
      selectedKeys: [1]
    }
  }
}
</script>

<style scoped lang="less">
.menu2-layout {
  height: 100vh;
  background-color: @layout-body-background;
  border-right: @border-width-base @border-style-base @divider-color;
}

.menu2-layout-header {
  background-color: @layout-body-background;
  padding: 0 1rem;
  text-align: center;
  border-bottom: @border-width-base @border-style-base @divider-color;
}

.menu2-layout-content {
  overflow-y: auto;
}
</style>
