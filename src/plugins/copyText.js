// https://github.com/MeForma/vue-copy-to-clipboard#readme
// 复制剪贴板

import copyText from '@meforma/vue-copy-to-clipboard'

const install = (app, options) => {
  app.use(copyText)
}

export default install
