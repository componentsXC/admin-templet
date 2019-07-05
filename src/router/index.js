import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";
Vue.use(Router);

// 初始路由
let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: () => import("@/pages/login/login.vue")
    },
  ]
});

// 准备动态添加路由
export const DynamicRoutes = [
  {
    path: '',
    component: () => import("@/pages/layout/index"),
    name: 'container',
    redirect: '/home',
    meta: {
      // requiresAuth: true,
      name: '首页',
      icom: 'el-icon-user'
    },
    children: [
      {
        path: '/home',
        component: () => import("@/pages/home/index"),
        name: 'home',
        meta: {
          name: '首页',
          icom: 'icon-order-manage'
        }
      }
    ]
  },
  
  {
    path: '/404',
    name: 'Forbidden',
    component: () => import("@/pages/errorPage/404"),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import("@/pages/errorPage/404"),
  },
]




// 全局守卫
router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    if (
      to.matched.length > 0 &&
      !to.matched.some(record => record.meta.requiresAuth)
    ) next()
    else next({ path: '/login' })
  } else {
    if (!store.state.permission.permissionList) {
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        next({ path: to.path })
      })
    } else {
      if (to.path !== '/login') next()
      else next(from.fullPath)
    }
  }
})

router.afterEach((to, from, next) => {
  var routerList = to.matched
  store.commit('setCrumbList', routerList)
  store.commit('permission/SET_CURRENT_MENU', to.name)
})

export default router