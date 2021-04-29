import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/apexcharts'
import Axios from 'axios'
import store from './store/store'
import Embed from 'v-video-embed'

import axios from 'axios'

Vue.use(axios);
// global register
Vue.use(Embed);

import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD-MM-YYYY')
    }
});


// import "@/plugins/echarts";
import titleMixin from './js/title'


Vue.mixin(titleMixin)

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // js,
  render: h => h(App),
}).$mount('#app')
