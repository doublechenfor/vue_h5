import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './basecss/init.scss'
import MIntUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false

Vue.use(MIntUI)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
