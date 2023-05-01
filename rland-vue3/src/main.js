import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from  'vue-router'
import App from './App.vue'

// import './assets/main.css'

const routes = [
{path: '/index', component: Home},
{path: '/', component : Layout, children:[
    {path: 'login', component: Login}
]},

{path: '/admin', component : AdminLayout, children:[
    {path: 'lomenusgin', component: MenuLayout, children:[
        {path: 'list', component:MenuList },
        {path: 'detail', component: MenuDetail}
    ]}
]},




]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App).mount('#app')
