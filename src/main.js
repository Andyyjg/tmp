import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import global from "./lib/global";
import ElementUI from 'element-ui';
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import filter from './utils/filter.js'//管道注册
Vue.prototype.$api = api
Vue.prototype.$global = global
Vue.use(ElementUI);
Vue.config.productionTip = false
// 定义全局点击函数
Vue.prototype.$globalClick = function (cb) {
    document.getElementsByTagName('body')[0].onclick = function () {
        cb();
    };
};
//注册过滤器
Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
