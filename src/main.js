// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
import { Subject } from 'rxjs/Subject' // required for domStreams option
import axios from 'axios'
import VueRx from 'vue-rx'
import lodash from 'lodash'
import AV from 'leancloud-storage'
import 'iview/dist/styles/iview.css'    // 使用 CSS
import leancloud from '@/utils/leancloud'

import App from './app'
import router from './router'
import store from './store'

const appId = 'zLRQWvW53abdgU6i5fPFf0xk-gzGzoHsz'
const appKey = 'Lz4DlYueowfaPctkzc1olYAC'
AV.init({ appId, appKey })

// RxJS config
Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
})
Vue.use(iView)

Vue.config.productionTip = false

// clone axios to Vue.$http
Vue.prototype.$http = axios
Vue.prototype.$leancloud = leancloud
Vue.prototype._ = lodash

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})