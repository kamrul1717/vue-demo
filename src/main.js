import Vue from 'vue'
import App from './App.vue'
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
import Toasted from 'vue-toasted';
Vue.use(Toasted)
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);


Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')