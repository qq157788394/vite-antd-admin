<template>
  <a-layout>
    <a-layout-content class="default-layout">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style lang="less" scoped>
.default-layout {
  padding: 20px;
  background-color: @layout-trigger-color;
}
</style>
