import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Layout from './layout.vue'
import router from './router'

const layout = createApp(Layout)

layout.use(createPinia())
layout.use(router)

layout.mount('#layout')
