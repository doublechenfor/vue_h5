import login from '../components/login'
import home from '../components/home'
import VueRouter from 'vue-router'
import my from '../components/my.vue'
import blog from '../components/blog.vue'
import imgbox from '../components/imgbox.vue'
import register from '../components/register.vue'
import chat from '../components/chat.vue'
import Vue from 'vue'

Vue.use(VueRouter)

let routerPath = [
    {
        path: '/',
        component: login
    },
    {
        path: '/login',
        name:'login',
        component:login
    },
    {
        path: '/register',
        name:'register',
        component:register
    },
    {
        path: '/home',
        name:'home',
        component: home,
        children: [
            {path: '', component:home},
            {path: 'my', component: my},
            {path: 'blog', component: blog},
            {path: 'chat', component: chat},
            {path: 'imgbox', component: imgbox}
          ]
    }
]
const routerContext = require.context('./', true, /\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  routerPath = routerPath.concat(routerModule.default || routerModule)
})
const router = new VueRouter({
    // mode: 'history',
    routes: routerPath,
})

router.beforeEach((to, from, next) => {
    next()
})
export default router