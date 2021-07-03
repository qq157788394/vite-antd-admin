/** 使用示例，在page页面里面，进行如下声明，可接收menu2、menu3两个参数
<route lang="yaml">
meta:
  layout: home
  menu2: true
  menu3: false
</route>
*/

<template>
  <a-layout class="home-layout">
    <a-layout-sider :width="144">
      <sm-menu-1></sm-menu-1>
    </a-layout-sider>

    <a-layout-sider :width="144" v-if="useRouter().currentRoute.value.meta.menu2">
      <sm-menu-2></sm-menu-2>
    </a-layout-sider>

    <a-layout class="home-layout home-layout-scroll">
      <a-layout-header class="home-layout-header">
        <a-breadcrumb separator=">" class="home-layout-breadcrumb">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout-header>

      <a-layout-content>
        <a-layout-content class="home-layout-page">
          <sm-menu-3 v-if="useRouter().currentRoute.value.meta.menu3"></sm-menu-3>
          <router-view />
        </a-layout-content>

        <sm-footer></sm-footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { useRouter } from 'vue-router'
</script>

<style scoped lang="less">
.home-layout {
  height: 100vh;
}

.home-layout-scroll {
  overflow: auto;
}

.home-layout-header {
  background-color: @layout-body-background;
  padding: 0 1rem;
  border-bottom: @border-width-base @border-style-base @divider-color;
}

.home-layout-breadcrumb {
  line-height: unset;
}

.home-layout-page {
  min-height: calc(100% - 70px);
  background-color: @layout-trigger-color;
  padding: 1.5rem;
}
</style>
