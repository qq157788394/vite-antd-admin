<template>
  <a-row type="flex" :gutter="16" align="middle">
    <a-col v-if="avatar" flex="none">
      <a-avatar :size="avatarSize" shape="square" class="panel-avatar" :src="src">
        {{ title || '图' }}
      </a-avatar>
    </a-col>
    <a-col flex="auto">
      <div>
        <a-typography-text v-if="tag" :type="tag.color">{{ `[${tag.text}]` }}</a-typography-text>
        <a-typography-text ellipsis class="panel-title" :content="title"></a-typography-text>
      </div>
      <div v-for="(item, index) in desc" :key="index" class="panel-desc">
        <a-typography-text
          ellipsis
          type="secondary"
          :content="item.label ? `${item.label}：${item.value}` : `${item.value}`"
        ></a-typography-text>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'SmPanel',
  props: {
    title: [String, Number],
    tag: [Object, Boolean],
    avatar: Boolean,
    avatarSize: {
      type: [String, Number],
      default: 72
    },
    src: {
      type: [String],
      default: ''
    },
    desc: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.panel-avatar {
  background-color: @primary-2;
}

.panel-title {
  font-weight: 500;
}

.panel-desc {
  font-size: @font-size-sm;
}
</style>
