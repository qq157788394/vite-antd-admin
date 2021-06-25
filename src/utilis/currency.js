// 封装金额处理

// 元转分
const yuan2fen = (value) => {
  return new Intl.NumberFormat('zh-CN', { useGrouping: false }).format(value * 100)
}

// 分转元
const fen2yuan = (value) => {
  return new Intl.NumberFormat('zh-CN', { useGrouping: false }).format(value * 0.01)
}

// 人民币金额显示，默认显示两位小数，带人民币符号
const CNY = (value, decimal = 2) => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
    useGrouping: true
  }).format(value)
}

// 人民币金额显示，默认显示两位小数，不带人民币符号
const cny = (value, decimal = 2) => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'decimal',
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
    useGrouping: true
  }).format(value)
}

const install = (app, options) => {
  app.config.globalProperties.$yuan2fen = yuan2fen
  app.config.globalProperties.$fen2yuan = fen2yuan
  app.config.globalProperties.$CNY = CNY
  app.config.globalProperties.$cny = cny
}

export default install
