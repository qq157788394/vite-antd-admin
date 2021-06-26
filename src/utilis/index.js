import currency from './currency'
import mobile from './mobile'
import idCard from './idCard'

const Utilis = [currency, mobile, idCard]

const install = (app, options) => {
  Utilis.forEach((item) => {
    app.use(item)
  })
}

export default install
