//作为侧边栏显示的路由
export const appRouter = [
    {
        path: '/menu1',
        component: resolve => require(['../components/page/Test.vue'], resolve),
    }
]

export const routers = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/readme',
        component: resolve => require(['../components/common/Home.vue'], resolve),//布局页面Layout
        children:[
            {
                path: '/',
                component: resolve => require(['../components/page/Readme.vue'], resolve)
            },
            {
                path: '/upload',
                component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
            },         
            {
                path: '/userCenter',
                component: resolve => require(['../components/page/UserCenter.vue'], resolve),    // 拖拽列表组件 
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/modifyUser',
                component: resolve => require(['../components/page/ModifyUser.vue'], resolve)
            },
            {
                path: '/modifyPassword',
                component: resolve => require(['../components/page/ModifyPassword.vue'], resolve)
            },
            {
                path: '/success',
                component: resolve => require(['../components/page/Success.vue'], resolve)
            }
        ]
    },
    {
        path: '/test',
        component: resolve => require(['../components/page/Test.vue'], resolve),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        component: resolve => require(['../components/page/Register.vue'], resolve)
    },
    {
        path: '/register-success',
        component: resolve => require(['../components/page/RegisterSuccess.vue'], resolve)
    },
    {
        path: '/login',
        component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
        path: '/notFound',
        component: resolve => require(['../components/page/NotFound.vue'], resolve)
    }
]