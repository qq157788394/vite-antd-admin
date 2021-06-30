<template>
  <a-menu theme="dark">
    <a-menu-item v-for="item in options" :title="item.title" :key="item.key">
      {{ item.title }}
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'SmMenu1',
  data() {
    return {
      options: [
        {
          title: '一级1',
          key: '1'
        },
        {
          title: '一级2',
          key: '2'
        }
      ]
    }
  }
}
</script>

<style></style>
