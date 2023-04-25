import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'
import '@/assets/css/reset.css'

const isProd = process.env.NODE_ENV
console.log('isProd', isProd)
const app = createApp(App)
app.mount('#app')
