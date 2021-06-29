<template>
  <a-select
    v-model:value="value"
    mode="multiple"
    allowClear
    showSearch
    showArrow
    optionFilterProp="levelName"
    :maxTagCount="5"
    :placeholder="placeholder"
  >
    <a-select-option v-for="item in options" :key="item.id" :value="item.id" :label="item.levelName">
      {{ item.levelName }}
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: 'SmSelectMemberLevel',
  data() {
    return {
      value: [],
      placeholder: '请选择会员等级',
      options: [
        {
          id: '1',
          levelName: '会员等级1'
        },
        {
          id: '2',
          levelName: '会员等级2'
        },
        {
          id: '3',
          levelName: '会员等级3'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
