// https://iconpark.oceanengine.com/home 字节跳动开源icon
// https://github.com/bytedance/IconPark/tree/master/packages/vue-next
// <icon-park type="bill" theme="filled" />
// <icon-park-bill theme="filled" />
// 上述两种引用方法均可

import { IconPark, install } from '@icon-park/vue-next/es/all'
import '@icon-park/vue-next/styles/index.css'

const installIconPark = (app, options) => {
  app.component('IconPark', IconPark)
  install(app, 'icon-park')
}

export default installIconPark
