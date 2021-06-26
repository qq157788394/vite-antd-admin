// 手机号校验

const mobileVerification = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
const errText = '请输入中国大陆手机号'

// 常规的方法用法
const isMobile = async (value) => {
  if (!mobileVerification.test(value)) {
    return Promise.reject(new Error(errText))
  } else {
    return Promise.resolve()
  }
}

// 在 async-validator 表单校验中的自定义方法 https://github.com/yiminghe/async-validator
const isMobileValidate = async (rule, value) => {
  if (!mobileVerification.test(value)) {
    return Promise.reject(new Error(errText))
  } else {
    return Promise.resolve()
  }
}

const install = (app, options) => {
  app.config.globalProperties.$isMobileValidate = isMobileValidate
  app.config.globalProperties.$isMobile = isMobile
}

export default install
