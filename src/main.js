import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/tailwind.css'
import { registerModules } from './register-module'

registerModules()

createApp(App).use(router).use(store).mount('#app')
