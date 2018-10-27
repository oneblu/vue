// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layoutPrivate from './layouts/private-layout'
import layoutPublic from './layouts/public-layout'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import msg from './components/mensaje'
import selectRoles from './components/select-roles'
// import VueGoogleCharts from 'vue-google-charts'
import * as VueGoogleMaps from 'vue2-google-maps'
import auth from './assets/auth'
import vueKanban from 'vue-kanban'
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDDgplgZbeip3gMim82FC8H8HMWIr0M5lU',
  authDomain: 'invoice-ninja-7acbf.firebaseapp.com',
  databaseURL: 'https://invoice-ninja-7acbf.firebaseio.com',
  projectId: 'invoice-ninja-7acbf',
  storageBucket: 'invoice-ninja-7acbf.appspot.com',
  messagingSenderId: '495753981656'
}
firebase.initializeApp(config)
Vue.use(vueKanban)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9vKjJHwcWqtSjaGRaOegV19xH9_B7dos',
    libraries: 'places'
  }
})
Vue.component('google-map', VueGoogleMaps.Map)
Vue.component('google-marker', VueGoogleMaps.Marker)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false
// Vue.component('GmapMarker', GmapMarker)
// LAYOUTS
Vue.component('private-layout', layoutPrivate)
Vue.component('public-layout', layoutPublic)
Vue.component('mi-mensaje', msg)
Vue.component('select-roles', selectRoles)
/* eslint-disable no-new */
Vue.http.options.root = 'http://186.31.68.74:3000/WatchmanService/api/'
Vue.http.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')

router.beforeEach((to, from, next) => {
  document.title = 'Kame - ' + to.meta.title
  next()
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  beforeCreate () {
    auth.init(this)
  },
  components: { App }
})
