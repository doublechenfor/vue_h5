## vue-router
#### 1.npm vue-router
#### 2.引入vue-router并用Vue.use()明确安装vue-router功能
#### 3.创建路由映射关系routeMap
#### 4.新建路由对象const router = new VueRouter({routeMap}),将路由映射对象赋值给路由对象
#### 5.增加[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB),检测路由的改变,可在此根据业务对路由情况进行判断
```
router.beforeEach((to,from,next)=>{
    // ToDo
})
// to & from 均为字面意思,即当前url及将要进入的url
// next函数一定要调用,不然钩子无法resolve,路由无法启用,用以结束当前的钩子,进入下一个钩子
```
#### 6.在模版中添加router-link/this.$router.push({})和router-view,设置路由跳转入口及渲染位置
#### 7.可以在一个页面中添加多个router-view实现多个组件资源的渲染,需要修改:
 + 在路由映射对象routeMap中将component改为components,值为key-value形式,key为组件name,value为组件
```
    path: '/',
    name: 'slide',
    components: {
        default:slide,
        home: home,
        login:login,
    }
```
 + 模版中
```
// 其中name为路由映射中components的name值
<router-view name="home"></router-view>
<router-view name="login"></router-view>
```
