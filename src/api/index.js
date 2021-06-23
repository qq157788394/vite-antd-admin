import axios from './axios'

const apis = []

const install = (app, options) => {
  apis.forEach((item) => {
    app.use(item)
  })
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.axios = axios
  app.config.globalProperties.$http = axios
}

export default install
