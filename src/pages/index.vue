<template>
  <a-button type="primary" @click="currency">index pages</a-button>
  <div class="text">我是绿色的</div>

  <a-button type="primary" @click="yuan2fen">元转分</a-button>
  <a-button type="primary" @click="fen2yuan">分转元</a-button>
  <a-button type="primary" @click="CNY">人民币</a-button>
  <a-button type="primary" @click="isMobile">手机号</a-button>
</template>

<script>
export default {
  data() {
    return {
      amount: '120000000',
      mobile: '1662873919'
    }
  },
  mounted() {},
  methods: {
    copy() {
      this.$copyText('Text to copy')
        .then(() => {
          console.log('copied!')
        })
        .catch(() => {
          console.log(`can't copy`)
        })
    },
    currency() {
      // console.log(this.$CNY(this.amount).format())
      console.log(this.$currency(this.amount, 'fen').cny())
    },

    yuan2fen() {
      console.log(this.$yuan2fen(this.amount))
    },

    fen2yuan() {
      console.log(this.$fen2yuan(this.amount))
    },

    CNY() {
      console.log(this.$CNY(this.amount, 3, null))
    },

    isMobile() {
      this.$isMobile(this.mobile)
        .then(() => {
          console.log('手机号对了')
        })
        .catch(() => {
          console.log('错')
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
