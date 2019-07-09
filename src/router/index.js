
//导入router组件
import VueRouter from 'vue-router'
//注册：
import Vue from 'vue'
//导入登录组件
import Login from '@/views/login'
//需要vue对象   导入vue
Vue.use(VueRouter);

//初始化router 对象（配置路由规则）
const router = new VueRouter({
    //规则
    routes:[
        {name:'login',path:'/login',component:Login}
    ]
})
//导出
export default router

