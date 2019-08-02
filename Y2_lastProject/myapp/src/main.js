// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button, 
  Cell,
  NavBar,
  Toast,
  Row,
  Col,Image ,Field ,CellGroup,
} from 'vant'
import 'vant/lib/index.css'
Vue.use(Button)
Vue.use(Cell)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Field)
Vue.use(CellGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
