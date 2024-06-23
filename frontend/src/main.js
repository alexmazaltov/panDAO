import { createApp } from "vue"
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
// import Profile from './views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    // { path: '/profile', component: Profile }
  ]
})

createApp(App).use(router).mount('#app')