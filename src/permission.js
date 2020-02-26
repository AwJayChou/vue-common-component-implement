import router from './router'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    // 获取token
    const hasToken = localStorage.getItem('token')

    if (hasToken) {
        // 已登录
        if (to.path === '/login') {
            next({path: '/'})
        } else {
            next()
            // 角色过滤逻辑，todo
        }
    } else {
        // 白名单直接过
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            // 重定向去登录
            next({path: `/login?redirect=${to.path}`})
        }
    }
})