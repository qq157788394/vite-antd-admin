import Antd from './antd'
import copyText from './copyText'
import iconPark from './iconPark'

const plugins = [Antd, copyText, iconPark]

const install = (app, options) => {
  plugins.forEach((item) => {
    app.use(item)
  })
}

export default install
