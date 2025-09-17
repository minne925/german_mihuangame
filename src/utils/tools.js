import router from '@/router'
import i18n from "@/lang";
export function handleBack() {
    // const home = '/Home';//'/home'
    // const state = window.history.state
    // const { back, current } = state
    // console.log('current:', current, 'back:', back)
    // if (back === current || current === home) return
    // console.log(back, 'xx')
    // if (back) {
    //     router.go(-1)
    // } else {
    //     router.replace(home)
    // }
    window.history.back();
}
export function fContractTime(s) {
    if (!s) {
        return '';
    }
    if (s < 60 * 60) {
        return s + "s";
    } else if (s < 60 * 60 * 24 * 7) {
        let h = Math.floor(s / (60 * 60));
        return h + "h";
    } else {
        let d = Math.floor(s / (60 * 60 * 24));
        return d + "d";
    }
}
export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
    // return Object.getOwnPropertyNames(obj).length === 0
  }
  //usdt 转日文的
  export const covertCoin = (name) => {
    if (!name){
        return '';
    }
    return name.replace('USDT', i18n.t('认证'))
   
    // return Object.getOwnPropertyNames(obj).length === 0
  }


//   图片
  export const getImg=(url,type)=>{
    if(type=='footer'){
        return require(`@/assets/footer/${url}`)
    }else if(type=='user'){
        return require(`@/assets/user/${url}`)
    }else{
        return require(`@/assets/${url}`)
    }
  }