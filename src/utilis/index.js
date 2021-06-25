import currency from './currency'

const Utilis = [currency]

const install = (app, options) => {
  Utilis.forEach((item) => {
    app.use(item)
  })
}

export default install
