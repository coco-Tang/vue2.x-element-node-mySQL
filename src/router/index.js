import Vue from 'vue';
import Router from 'vue-router';
import { routers, otherRouter, appRouter } from './router';

Vue.use(Router);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export default new Router(RouterConfig);