<template>
  <a-layout class="menu1-layout">
    <a-layout-header class="menu1-layout-header">
      <a-avatar class="menu1-layout-avatar" :size="70" :src="user.src" :alt="user.alt">{{ user.alt }}</a-avatar>
      <a-typography-text ellipsis strong :content="`@ ${user.brandName}`" class="menu1-layout-name"></a-typography-text>
    </a-layout-header>

    <a-layout-content>
      <el-scrollbar noresize>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" @click="handleClick">
          <a-menu-item v-for="item in options" :key="item.key">
            <icon-park :type="item.icon" />
            {{ `一级标题${item.key}` }}
          </a-menu-item>
        </a-menu>
      </el-scrollbar>
    </a-layout-content>

    <a-layout-footer class="menu1-layout-footer">
      <a-menu theme="dark">
        <a-menu-item key="change">
          <icon-park type="outbound" />
          切换店铺
        </a-menu-item>
        <a-menu-item key="logout">
          <icon-park type="logout" />
          退出登录
        </a-menu-item>
      </a-menu>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'SmMenu1',
  data() {
    return {
      user: {
        src: '',
        alt: '黄悠悠',
        brandName: '店铺名称店铺名称店铺名称店铺名称'
      },
      options: [],
      selectedKeys: [0]
    }
  },
  mounted() {
    this.mockMenu()
  },
  methods: {
    handleClick(e) {
      const currentPath = this.options.find((item) => item.key === e.key)
      this.$router.push(currentPath)
    },

    // mock menu
    mockMenu() {
      const options = []
      let i = 0
      while (i < 10) {
        options.push({
          title: `一级导航${i}`,
          key: i,
          icon: 'tiktok',
          path: '/utils'
        })
        i++
      }
      this.options = options
    }
  }
}
</script>

<style scoped lang="less">
.menu1-layout {
  height: 100vh;
  background-color: @primary-10;
}

.menu1-layout-header {
  height: auto;
  padding: 32px 16px;
  line-height: inherit;
  text-align: center;
  box-shadow: @box-shadow-base;
  z-index: @zindex-badge;
}
.menu1-layout-avatar {
  background-color: @primary-2;
}
.menu1-layout-name {
  display: block;
  color: @text-color-dark;
  margin-top: 16px;
}

.menu1-layout-footer {
  z-index: @zindex-badge;
  padding: unset;
  background: @primary-10;
  box-shadow: @shadow-1-up;
}
</style>
