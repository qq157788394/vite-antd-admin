<template>
  <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys">
    <a-menu-item v-for="item in 5" :key="item">{{ `三级导航${item}` }}</a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'SmMenu3',
  data() {
    return {
      selectedKeys: [1]
    }
  }
}
</script>

<style scoped lang="less"></style>
