import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import router from './router/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.min.css"
import store from './store/store'


Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
