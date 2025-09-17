import Vue from "vue";
import VueI18n from "vue-i18n";
import zhCN from "./zh-CN.js";
import enUS from "./en-US.js";
import viVN from "./vi-VN.js";
import ptBR from "./pt-br.js";
import jaJA from "./ja-JA.js";
import deDE from "./de-DE.js";
import itIT from "./it-IT.js";

Vue.use(VueI18n);

const messages = {
  "ja-ja": jaJA,
  "zh-cn": zhCN,
  "en-us": enUS,
  "vi-vn": viVN,
  "pt-br": ptBR,
  "de-de": deDE,
  "it-it": itIT
};

let userLang = localStorage.getItem('Lang');
// if (!userLang) {
//  const browserLang = navigator.language || navigator.userLanguage; 
// let formattedLang = browserLang.toLowerCase();
// console.log(formattedLang)
//  userLang = Object.prototype.hasOwnProperty.call(messages, formattedLang) 
//            ? formattedLang 
//            : 'vi-vn';
userLang = 'de-de';
localStorage.setItem('Lang', userLang);

// }

const i18n = new VueI18n({
  locale: userLang,
  messages,
});

export default i18n;
const languageList = [
  {
    text:'Deutsch',
    value:'de-de',
  },
  {
    text:'Italiano',
    value:'it-it',
  }
]
export { languageList}
