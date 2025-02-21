import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */'./components/Intro.vue'),
        meta: {hideNavbar: false}
    },

    {
        path: '/game',
        name: 'Game',
        component: () => import(/* webpackChunkName: "Home" */'./components/MemoryCard.vue'),
        meta: {hideNavbar: false}
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});



export default router;