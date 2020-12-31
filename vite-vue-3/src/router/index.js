import {createWebHashHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/", component: () => import('../views/home.vue'),
    },
    {
        path: "/doc", component: () => import('../views/doc.vue'), children: [
            {path:"",component:() => import('../components/DocDemo.vue')},
            {path: "switch", component: () => import('../components/SwitchDemo.vue')},
            {path: "button", component: () => import('../components/ButtonDemo.vue')},
            {path: "dialog", component: () => import('../components/DialogDemo.vue')},
            {path: "tabs", component: () => import('../components/TabsDemo.vue')},
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
