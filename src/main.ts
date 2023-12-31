import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import gloalComponent from '@/components/index.ts'
import { createPinia } from 'pinia'



const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(gloalComponent)
app.use(pinia)
app.mount('#app')
