<template>
  <a-select
    v-model:value="value"
    allowClear
    showSearch
    showArrow
    optionFilterProp="branchCode"
    :placeholder="placeholder"
  >
    <a-select-option v-for="item in options" :key="item.id" :value="item.id" :label="item.branchName">
      {{ item.branchName }}
      <span class="desc">{{ item.branchCode }}</span>
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: 'SmSelectBranch',
  data() {
    return {
      value: '',
      placeholder: '请选择门店',
      options: [
        {
          id: '1',
          branchName: '门店名称1',
          branchCode: '商家自定义编号1'
        },
        {
          id: '2',
          branchName: '门店名称2',
          branchCode: '商家自定义编号2'
        },
        {
          id: '3',
          branchName: '门店名称3',
          branchCode: '商家自定义编号3'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.desc {
  float: right;
  font-size: @font-size-sm;
  color: @text-color-secondary;
}
</style>
