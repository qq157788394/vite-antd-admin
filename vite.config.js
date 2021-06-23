import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        // 使用 less 提供的 modifyVars 的方式进行覆盖变量，改变antd的主题
        modifyVars: {
          'primary-color': '#00b9b2'
        },
        // 全局通用样式变量也可以写在这里
        globalVars: {
          // 'primary-color': '#00b9b2'
        },
        javascriptEnabled: true,
        // vite内置方法，引入全局样式变量
        additionalData: '@import "./src/style/variables";'
      }
    }
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [Vue(), Pages(), Layouts(), ViteComponents()]
})
