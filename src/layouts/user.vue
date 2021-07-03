<template>
  <a-layout class="user-layout">
    <a-layout-header class="user-layout-header">
      <a-row type="flex" justify="center">
        <a-col flex="0 1 1200px">
          <a-row type="flex" justify="space-between">
            <a-col>
              <a-space size="middle">
                <a-avatar class="logo" :size="40" :src="logoUrl">领健</a-avatar>
                <a-typography-text class="title">领健生美商家后台</a-typography-text>
              </a-space>
            </a-col>
            <a-col>
              <a-button type="link">{{ `${userName}，退出登录` }}</a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-layout-header>

    <a-layout-content class="user-layout-content">
      <a-row type="flex" justify="center">
        <a-col flex="0 1 1200px">
          <router-view />
        </a-col>
      </a-row>
    </a-layout-content>

    <sm-footer></sm-footer>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      logoUrl: '',
      userName: '黄优优'
    }
  }
}
</script>

<style lang="less" scoped>
.user-layout {
  min-height: 100vh;
}

.user-layout-header {
  position: fixed;
  z-index: @zindex-table-fixed;
  left: 0;
  right: 0;
  background-color: @layout-body-background;
  border-bottom: @border-width-base @border-style-base @divider-color;
}

.user-layout-content {
  margin-top: @layout-header-height;
  padding: 16px 50px;
  background-color: @body-background;
}

.logo {
  background-color: @primary-2;
}

.title {
  font-size: @font-size-lg;
  font-weight: @pagination-font-weight-active;
}
</style>
