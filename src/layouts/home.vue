<template>
  <a-layout style="height: 100vh">
    <a-layout-sider class="sm-layout-sider">
      <sm-menu-1></sm-menu-1>
    </a-layout-sider>
    <a-layout class="sm-layout-content">
      <a-layout-header>header</a-layout-header>
      <a-layout-content>
        <router-view style="min-height: calc(100% - 70px)" />
        <a-layout-footer :style="{ textAlign: 'center' }">Ant Design ©2018 Created by Ant UED</a-layout-footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {}
</script>

<style lang="less">
.sm-layout-sider {
  overflow: auto;
  height: 100vh;
}

.sm-layout-content {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
