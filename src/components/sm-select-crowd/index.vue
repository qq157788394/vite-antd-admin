<template>
  <a-cascader
    v-model:value="value"
    :options="options"
    allowClear
    expandTrigger="hover"
    showSearch
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'SmSelectCrowd',
  data() {
    return {
      value: '',
      placeholder: '请选择智能分群',
      options: [
        {
          value: 'recommended',
          label: '推荐人群',
          children: [
            {
              value: 'r1',
              label: '推荐人群1'
            },
            {
              value: 'r2',
              label: '推荐人群2'
            },
            {
              value: 'r3',
              label: '推荐人群3'
            }
          ]
        },
        {
          value: 'rfm',
          label: 'RFM分群',
          children: [
            {
              value: 'rfm1',
              label: '重要价值客户'
            },
            {
              value: 'rfm2',
              label: '重要唤回客户'
            },
            {
              value: 'rfm3',
              label: '重要深耕客户'
            },
            {
              value: 'rfm4',
              label: '重要挽留客户'
            },
            {
              value: 'rfm5',
              label: '潜力客户'
            },
            {
              value: 'rfm6',
              label: '新客户'
            },
            {
              value: 'rfm7',
              label: '一般维持客户'
            },
            {
              value: 'rfm8',
              label: '流失客户'
            }
          ]
        },
        {
          value: 'customized',
          label: '自定义人群',
          children: [
            {
              value: 'c1',
              label: '自定义人群1'
            },
            {
              value: 'c2',
              label: '自定义人群2'
            },
            {
              value: 'c3',
              label: '自定义人群3'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style></style>
