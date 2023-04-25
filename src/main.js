import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'
import '@/assets/css/reset.css'

import { Router } from '@service/router'

const isProd = process.env.NODE_ENV
const app = createApp(App)

// 注入路由
app.use(Router)

app.mount('#app')
