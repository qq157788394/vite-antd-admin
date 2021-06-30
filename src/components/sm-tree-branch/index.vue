<template>
  <a-input-search v-model:value="searchValue" style="margin-bottom: 8px" placeholder="请输入分支机构 / 分店名称" />
  <a-tree
    checkable
    multiple
    :selectable="false"
    :tree-data="treeData"
    defaultExpandAll
    v-model:selectedKeys="selectedKeys"
    showLine
  ></a-tree>
</template>

<script>
export default {
  name: 'SmTreeBranch',
  data() {
    return {
      selectedKeys: [],
      searchValue: '',
      treeData: [
        {
          title: '分支机构1',
          key: '1',
          children: [
            {
              title: '分支机构1-1',
              key: '1-1',
              children: [
                {
                  title: '分店1-1-1',
                  key: '1-1-1'
                },
                {
                  title: '分店1-1-2',
                  key: '1-1-2'
                }
              ]
            },
            {
              title: '分支机构1-2',
              key: '1-2',
              children: [
                {
                  title: '分支机构1-2-1',
                  key: '1-2-1',
                  children: [
                    {
                      title: '门店1-2-1-1',
                      key: '1-2-1-1'
                    },
                    {
                      title: '门店1-2-1-2',
                      key: '1-2-1-2'
                    }
                  ]
                },
                {
                  title: '分支机构1-2-2',
                  key: '1-2-2',
                  children: [
                    {
                      title: '分店1-2-2-1',
                      key: '1-2-2-1'
                    },
                    {
                      title: '分店1-2-2-2',
                      key: '1-2-2-2'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '分支机构2',
          key: '2',
          children: [
            {
              title: '分店2-1',
              key: '2-1'
            },
            {
              title: '分店2-2',
              key: '2-2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
