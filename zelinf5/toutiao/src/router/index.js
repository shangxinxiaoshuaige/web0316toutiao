// 1. 引入Vue
import Vue from "vue"

// 2. 引入路由组件
import VueRouter from "vue-router"

Vue.use(VueRouter)
    // 4. 引入组件
import Index from "../components/Index"
import UserLogin from "../components/login/UserLogin"
import UserRegister from "../components/login/UserRegister"
// 3. 路由配置文件
let routes = [{
    path: "/",
    name: "index",
    component: Index
}, {
    path: "/userLogin",
    name: "userLogin",
    component: UserLogin
}, {
    path: "/userRegister",
    name: "userRegister",
    component: UserRegister
}]

// 5. 新建一个VueRouter 实例 将 routes 作为参数传进去, 同时将路由导出
export default new VueRouter({
    routes
})