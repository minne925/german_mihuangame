import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import 'vant/lib/index.less';
import router from "./router";
import http from "./http";
import VueAwesomeSwiper from "vue-awesome-swiper";
import common from "./common/function";
import "swiper/swiper-bundle.css";
import store from "./store";
import i18n from "./lang";
import VueClipboard from 'vue-clipboard2';
import { Locale, Toast } from 'vant';
// import jaJP from 'vant/es/locale/lang/ja-JP';
// Locale.use('ja-JP', jaJP);
import deDE from 'vant/es/locale/lang/de-DE';
Locale.use('de-DE', deDE);
// import zhCN from 'vant/es/locale/lang/zh-CN';
// Locale.use('zh-CN', zhCN);


import "video.js/dist/video-js.css";

Vue.prototype.$http = http;
Vue.prototype.common = common;
Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(Vant);
Toast.setDefaultOptions({ duration: 5000 })
new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
