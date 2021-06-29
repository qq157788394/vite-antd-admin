<template>
  <a-select
    v-model:value="value"
    mode="multiple"
    allowClear
    showSearch
    showArrow
    optionFilterProp="label"
    :maxTagCount="5"
    :placeholder="placeholder"
  >
    <a-select-option v-for="item in 31" :key="item" :value="item" :label="item">{{ item }} 日</a-select-option>
  </a-select>
</template>

<script>
export default {
  name: 'SmSelectDay',
  data() {
    return {
      value: [],
      placeholder: '请选择月中的某天'
    }
  }
}
</script>

<style lang="less"></style>
