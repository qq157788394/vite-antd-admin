import Antd from './antd'
import copyText from './copyText'

const plugins = [Antd, copyText]

const install = (app, options) => {
  plugins.forEach((item) => {
    app.use(item)
  })
}

export default install
