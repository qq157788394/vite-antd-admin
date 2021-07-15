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

  <a-table :dataSource="dataSource" rowKey="goodsId" bordered>
    <a-table-column title="商品">
      <template #default="{ record }">
        <sm-panel
          :tag="record.status ? false : { color: 'warning', text: '禁售' }"
          :avatar="true"
          :title="record.goodsName"
          :src="record.goodsImg"
          :desc="[
            { label: '统计分类', value: record.classification },
            { label: '自定义编号', value: record.goodsCode },
            { label: '商品ID', value: record.goodsId }
          ]"
        ></sm-panel>
      </template>
    </a-table-column>
    <a-table-column title="参考价格">
      <template #default="{ record }">
        <span class="strong">
          {{ $CNY($fen2yuan(record.price)) }}
        </span>
      </template>
    </a-table-column>
    <!-- <a-table-column title="统计分类" data-index="classification"></a-table-column> -->
    <a-table-column title="售卖状态">
      <template #default="{ record }">
        <a-switch checked-children="可售" un-checked-children="禁售" v-model:checked="record.status" />
      </template>
    </a-table-column>
    <a-table-column title="最后操作人">
      <template #default="{ record }">
        <div>{{ record.updateUser }}</div>
        <div class="goodsDesc">{{ record.updateTime }}</div>
      </template>
    </a-table-column>
    <a-table-column title="操作">
      <template #default="{ record }">
        <a-typography-link>详情</a-typography-link>
      </template>
    </a-table-column>
  </a-table>
</template>

<script>
export default {
  data() {
    return {
      dataSource: [
        {
          goodsName: '商品名称1',
          goodsCode: 'goodsCode1',
          goodsId: 'goodsId1',
          goodsImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          status: true,
          price: 29900,
          classification: '分类1/分类2/分类3',
          updateUser: '用户昵称1',
          updateTime: '2021-7-15 22:15:40'
        },
        {
          goodsName: '商品名称2',
          goodsCode: 'goodsCode2',
          goodsId: 'goodsId2',
          status: false,
          price: 11100,
          classification: '分类1/分类2/分类3',
          updateUser: '用户昵称1',
          updateTime: '2021-7-15 22:15:40'
        }
      ],

      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.mt-1 {
  padding-top: 1rem;
}

.w-100 {
  width: 100%;
}

.strong {
  font-weight: 500;
}

.goodsDesc {
  font-size: @font-size-sm;
  color: @text-color-secondary;
}

.goodsAvatar {
  background-color: @primary-2;
}
</style>
