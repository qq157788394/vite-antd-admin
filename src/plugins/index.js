import Antd from './antd'
import elementPlus from './elementPlus'
import copyText from './copyText'
import iconPark from './iconPark'

const plugins = [Antd, elementPlus, copyText, iconPark]

const install = (app, options) => {
  plugins.forEach((item) => {
    app.use(item)
  })
}

export default install
