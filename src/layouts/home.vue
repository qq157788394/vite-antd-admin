<template>
  <a-layout class="home-layout">
    <a-layout-sider :width="144">
      <sm-menu-1></sm-menu-1>
    </a-layout-sider>

    <a-layout-sider :width="144">
      <sm-menu-2></sm-menu-2>
    </a-layout-sider>

    <a-layout class="home-layout-content">
      <a-layout-header class="home-layout-header">
        <a-breadcrumb separator=">" class="home-layout-breadcrumb">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout-header>

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

<style scoped lang="less">
.home-layout {
  height: 100vh;
}

.home-layout-header {
  background-color: @layout-body-background;
  padding: 0 1rem;
  border-bottom: @border-width-base @border-style-base @divider-color;
}

.home-layout-breadcrumb {
  line-height: unset;
}

.home-layout-content {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
