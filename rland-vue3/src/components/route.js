import Layout from './inc/Layout.vue'
import Index from './Index.vue'
import Login from './Login.vue'
// import Err403 from './error/403.vue'
import NotFound from './error/404.vue'

const root = {path: '/', component : Layout, children:[
    {path: 'index', component: Index},
    {path: 'login', component: Login},
    {path: 'error', children:[
        // {path: "403", component: Err403}
        {path: "403", component: ()=>import('./error/403.vue')}
        //lazyload 호출할때 import / 자주사용되지않는 페이지

    ]},
    {path: '/:pathMatch(.*)*', component: NotFound}
]}

export default root;