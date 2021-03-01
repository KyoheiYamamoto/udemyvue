import Vue from 'vue';
import App from './App.vue';
import LIkeNumber from './LikeNumber.vue';

Vue.config.productionTip = false;
Vue.component('LIkeNumber', LIkeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app');
