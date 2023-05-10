import Layout from './inc/Layout.vue'
import List from './menu/list.vue'
import Detail from './menu/Detail.vue'
import Index from './Index.vue'
import { UseUserDetailsStore } from "../../stores/UseUserDetailsStore.js";
const admin =
{
    path: '/admin', component: Layout, children: [
        { path: "index", component: Index },
        {
            path: 'menu', children: [
                { path: 'list', component: List },
                { path: ':id', component: Detail }
            ]
  
        },
    ],
    beforeEnter(to, from, next) {
        console.log("라우터 필터");

        let userDetails = UseUserDetailsStore();

        let url = `/login?returnURL=${to.path}`;

        if (!userDetails.isAuthenticated) {
            next(url);
        } else if (!userDetails.hasRole("ADMIN")) {
            next("/error/403");
        } else {
            next();
        }
    }
}

export default admin;