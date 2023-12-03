import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VeeValidatePlugin from './plugins/validation'

const app = createApp(App)

app.use(VeeValidatePlugin)

app.mount('#app')
