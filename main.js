import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 全局组件注册
import noThing from '@/components/no-thing.vue';
Vue.component('noThing',noThing);

import divider from '@/components/divider.vue';
Vue.component('divider',divider);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
