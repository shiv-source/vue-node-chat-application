import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketIO from 'vue-socket.io'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:3000' //options object is Optional
  // vuex: {
  //   store,
  //   actionPrefix: "SOCKET_",
  //   mutationPrefix: "SOCKET_"
  // }
})
);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
