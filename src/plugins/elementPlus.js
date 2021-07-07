// https://element-plus.gitee.io/#/zh-CN
// element-plus

import { ElScrollbar } from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'

const components = [ElScrollbar]

const install = (app, options) => {
  components.forEach((item) => {
    app.use(item)
  })
}

export default install
