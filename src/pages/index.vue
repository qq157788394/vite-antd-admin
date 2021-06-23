<template>
  <a-button type="primary" @click="copy">index pages</a-button>
  <div class="text">我是绿色的</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    copy() {
      this.$copyText('Text to copy')
        .then(() => {
          console.log('copied!')
        })
        .catch(() => {
          console.log(`can't copy`)
        })
    }
  }
}
</script>

<style lang="less">
.text {
  color: @primary-color;
}
</style>
