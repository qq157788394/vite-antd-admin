// 身份证号校验

const idCardVerification =
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

const errText = '请输入正确的身份证号'

// 常规的方法
const isIdCard = async (value) => {
  if (!idCardVerification.test(value)) {
    return Promise.reject(new Error(errText))
  } else {
    return Promise.resolve()
  }
}

// 在 async-validator 表单校验中的自定义方法 https://github.com/yiminghe/async-validator
const isIdCardValidate = async (rule, value) => {
  if (!idCardVerification.test(value)) {
    return Promise.reject(new Error(errText))
  } else {
    return Promise.resolve()
  }
}

const install = (app, options) => {
  app.config.globalProperties.$isIdCard = isIdCard
  app.config.globalProperties.$isIdCardValidate = isIdCardValidate
}

export default install
