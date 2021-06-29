<template>
  <a-select v-model:value="value" allowClear showSearch optionFilterProp="label" :placeholder="placeholder">
    <a-select-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label">
      {{ item.label }}
      <span class="desc">{{ item.desc }}</span>
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: 'SmSelectWeekday',
  data() {
    return {
      value: null,
      placeholder: '请选择周中的某天',
      options: [
        {
          value: 1,
          label: '周一',
          desc: 'MON'
        },
        {
          value: 2,
          label: '周二',
          desc: 'TUE'
        },
        {
          value: 3,
          label: '周三',
          desc: 'WED'
        },
        {
          value: 4,
          label: '周四',
          desc: 'THU'
        },
        {
          value: 5,
          label: '周五',
          desc: 'FRI'
        },
        {
          value: 6,
          label: '周六',
          desc: 'SAT'
        },
        {
          value: 7,
          label: '周日',
          desc: 'SUN'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.desc {
  float: right;
  font-size: @font-size-sm;
  color: @text-color-secondary;
}
</style>
