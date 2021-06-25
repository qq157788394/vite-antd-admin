import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import Plugins from './plugins'
import Utilis from './utilis'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    if (savedPosition) {
      return savedPosition
    } else {
      // 始终滚动到顶部
      return {
        top: 0,
        // 流畅滚动
        behavior: 'smooth'
      }
    }
  },
  routes
})

const app = createApp(App)

app.use(router)
app.use(Plugins)
app.use(Utilis)

app.mount('#app')
