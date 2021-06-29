import { createApp } from 'vue'
import Router from './routers'
import store from './store'
import Plugin from './plugins'
import Utili from './utilis'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(Router)
app.use(Plugin)
app.use(Utili)

app.mount('#app')
