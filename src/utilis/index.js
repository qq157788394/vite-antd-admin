import currency from './currency'
import mobile from './mobile'

const Utilis = [currency, mobile]

const install = (app, options) => {
  Utilis.forEach((item) => {
    app.use(item)
  })
}

export default install
