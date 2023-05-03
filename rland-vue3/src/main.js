import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from './components/inc/Layout.vue'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
// import './assets/main.css'

const routes = [

{path: '/', component : Layout, children:[
    {path: 'index', component: Index},
    {path: 'login', component: Login}
]},

// {path: '/admin', component : AdminLayout, children:[
//     {path: 'lomenusgin', component: MenuLayout, children:[
//         {path: 'list', component:MenuList },
//         {path: 'detail', component: MenuDetail}
//     ]}
// ]},

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});


createApp(App)
.use(router)
.mount('#app');
