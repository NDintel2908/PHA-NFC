import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Layout from './layout.vue'
import router from './router'

const app = createApp(Layout)

app.use(createPinia()) // Use Pinia for state management
app.use(router) // Use the router
const vuetify = createVuetify({
  components,
  directives
})
app.use(vuetify) 

app.mount('#layout')
