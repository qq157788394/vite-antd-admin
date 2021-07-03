<route lang="yaml">
meta:
  layout: home
  menu2: true
  menu3: true
</route>
<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <h4 class="mt-1">周中日期选择器</h4>
      <sm-select-weekday class="w-100"></sm-select-weekday>
    </a-col>

    <a-col :span="12">
      <h4 class="mt-1">月中日期选择器</h4>
      <sm-select-day class="w-100"></sm-select-day>
    </a-col>

    <a-col :span="12">
      <h4 class="mt-1">门店选择器</h4>
      <sm-select-branch class="w-100"></sm-select-branch>
    </a-col>

    <a-col :span="12">
      <h4 class="mt-1">会员等级选择器</h4>
      <sm-select-member-level class="w-100"></sm-select-member-level>
    </a-col>

    <a-col :span="12">
      <h4 class="mt-1">智能分群级联选择器</h4>
      <sm-select-crowd class="w-100"></sm-select-crowd>
    </a-col>

    <a-col :span="12">
      <h4 class="mt-1">icon-park图标</h4>
      <icon-park type="bill" theme="filled" />
      <icon-park-bill theme="outline" />
      <icon-park-bill theme="filled" />
    </a-col>

    <a-col :span="12">
      <h4 class="mt-1">门店及分支机构选择器</h4>
      <sm-tree-branch></sm-tree-branch>
    </a-col>
  </a-row>
</template>

<script>
export default {}
</script>

<style lang="less">
.mt-1 {
  padding-top: 1rem;
}

.w-100 {
  width: 100%;
}
</style>
