import App from "./App.vue";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
import rootRoute from './components/route.js';
import adminRoute from './components/admin/route.js';



// import './assets/main.css'

const routes = [
rootRoute,
adminRoute

// {path: '/admin', component : AdminLayout, children:[
//     {path: 'lomenusgin', component: MenuLayout, children:[
//         {path: 'list', component:MenuList },
//         {path: 'detail', component: MenuDetail}
//     ]}
// ]},
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
const pinia = createPinia();

createApp(App)
.use(router)
.use(pinia)
.mount('#app');                         
