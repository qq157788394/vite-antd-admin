<template>
  <a-layout class="menu2-layout">
    <a-layout-header class="menu2-layout-header">
      <a-typography-text ellipsis strong :content="currentMenu1"></a-typography-text>
    </a-layout-header>

    <a-layout-content class="menu2-layout-content">
      <el-scrollbar noresize>
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="light">
          <a-menu-item v-for="item in 20" :key="item">{{ `二级导航${item}` }}</a-menu-item>
        </a-menu>
      </el-scrollbar>
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
  position: relative;
  overflow: hidden;

  // &::-webkit-scrollbar {
  //   width: 6px;
  //   height: 6px;
  // }

  // &::-webkit-scrollbar-thumb {
  //   // background: hsla(0, 0%, 100%, 0.2);
  //   // border-radius: 3px;
  //   // box-shadow: inset 0 0 5px hsl(0deg 0% 100% / 5%);
  //   background-color: rgba(0, 0, 0, 0.06);
  //   border-radius: 0.5rem;
  //   box-shadow: rgba(0, 0, 0, 0.04) 0 0 0 1px inset;
  // }

  // &::-webkit-scrollbar-track {
  //   // background: hsla(0, 0%, 100%, 0.15);
  //   background-color: rgba(0, 0, 0, 0.04);
  //   border-radius: 3px;
  //   box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
  // }
}

.scrollbar {
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0 0 0 1px inset;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.04);
  }
}
</style>
