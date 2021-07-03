<template>
  <a-layout-footer class="sm-footer">
    <a-typography-link href="https://www.linkedcare.cn/" target="_blank">
      © 2015 - {{ year }} 上海领健信息技术有限公司
    </a-typography-link>
    <a-divider type="vertical" />
    <a-typography-link href="http://www.beian.miit.gov.cn/" target="_blank">沪ICP备15030071号-1</a-typography-link>
  </a-layout-footer>
</template>

<script>
export default {
  name: 'SmFooter',
  data() {
    return {
      year: ''
    }
  },
  created() {
    this.getFullYear()
  },
  methods: {
    getFullYear() {
      const date = new Date()
      const _year = date.getFullYear() || '2021'
      this.year = _year
    }
  }
}
</script>

<style scoped lang="less">
.sm-footer {
  text-align: center;
}
</style>
