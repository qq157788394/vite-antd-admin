<template>
  <div style="width: 350px">
    <h4 class="mt-1">周中日期选择器</h4>
    <sm-select-weekday class="w-100"></sm-select-weekday>

    <h4 class="mt-1">月中日期选择器</h4>
    <sm-select-day class="w-100"></sm-select-day>

    <h4 class="mt-1">门店选择器</h4>
    <sm-select-branch class="w-100"></sm-select-branch>

    <h4 class="mt-1">会员等级选择器</h4>
    <sm-select-member-level class="w-100"></sm-select-member-level>

    <h4 class="mt-1">智能分群级联选择器</h4>
    <sm-select-crowd class="w-100"></sm-select-crowd>

    <h4 class="mt-1">门店及分支机构选择器</h4>
    <sm-tree-branch></sm-tree-branch>

    <h4 class="mt-1">一级导航</h4>
    <sm-menu-1></sm-menu-1>
  </div>
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
