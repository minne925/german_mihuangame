import axios from "axios"
import { getToken } from "@/utils/auth.js"
// import { showToast } from "vant"
import { Toast } from 'vant'
// import { useUserStore } from "@/stores"
import storage from "@/utils/storage"
// import $gt from "@/hooks/getI18nData"
import BASE_URL from "@/api/url"
import i18n from "@/lang";
let Base64 = require("js-base64").Base64;
const service = axios.create({
  baseURL:BASE_URL,

  // baseURL: window.location.origin + "/api",
  timeout: 60 * 1000, // 请求超时时间
  headers: {
    "Content-Type": "multipart/form-data",
    // Accept: 'application/json',
    // 'Content-Type': 'application/octet-stream',
    // Accept: 'application/*',
  },
})

service.interceptors.request.use(
  async (config) => {
    // let token = storage.get('token')
    // // config.headers['Lang'] = storage.get('Lang')?.toLowerCase()
    // if (config.method !== "get") {
    //   let formData = new FormData()
    //   let hasData = false
    //   if (config.data) {
    //     for (let k in config.data) {
    //       formData.append(k, config.data[k])
    //       hasData = true
    //     }
    //   }
    //   if (token && token != "undefined") {
    //     // formData.append("token", token)
    //     hasData = true
    //   }
    //   if (hasData) {
    //     config.data = formData
    //   }
    // } else {
    //   if (token && token != "undefined") {
    //     if (!config.params) {
    //       config.params = {}
    //     }
    //     // config.params["token"] = token
    //   }
    // }
    // if (config.method === "post") {
    //   if (config.data instanceof FormData) {
    //     // 如果是 FormData 类型（文件上传），设置为 "multipart/form-data"
    //     config.headers = {
    //       "content-type": "multipart/form-data",
    //     };
    //   } else {
    //     // 否则，默认为 "application/x-www-form-urlencoded;charset=UTF-8"
    //     config.headers = {
    //       "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    //     };
    //   }
    // }
    config.headers = {
      "content-type": "multipart/form-data",
    };
    let token = storage.get('token')
    if (config.method !== "get") {
      let formData = new FormData()
      let hasData = false
      if (config.data) {
        for (let k in config.data) {
          formData.append(k, config.data[k])
          hasData = true
        }
      }
      if (token && token != "undefined") {
        formData.append("token", token)
        hasData = true
      }
      if (hasData) {
        config.data = formData
      }
    } else {
      if (token && token != "undefined") {
        if (!config.params) {
          config.params = {}
        }
        config.params["token"] = token
      }
    }
    if (localStorage.getItem("Lang")) {
      config.headers.language = localStorage.getItem("Lang");
}
if (localStorage.getItem("token")) {
   config.headers.token = localStorage.getItem("token");
}


    // console.log(config.data,'request')
    return config
  },
  (error) => {
    console.log(error, "err===>")
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (response) => {
    // console.log('ccccc========>',response)
    const { data } = response
    
    let resData = data
    resData.data = JSON.parse(Base64.decode(data.data));
    // console.log('response：',resData)
    if (!resData) return
    // const userStore = useUserStore()
    if (resData.code === 1000 || resData.code === 200) {
      return resData
    } else if (resData.code === 100) {
      Toast(resData.msg)
      // userStore.logout()
      return Promise.reject(resData)
    } else {
      switch (resData.msg) {
        case "Insufficient account balance":
          return Toast(i18n.t("账户余额不足"))
        case "Cannot be less than the minimum subscription amount":
          return Toast(i18n.t("不能小于最低认购量"))
        case "Subscription closed":
          return Toast(i18n.t("暂时没有认购项目"))
        default:
         Toast(resData.msg)
          break
      }
      return Promise.reject(resData)
    }
  },
  async (err) => {
    console.log(err, "err-----------------")
    if (err.code === "ERR_NETWORK") {
      Toast(err.msg)
      return Promise.reject(err.msg)
    }

    const response = err?.response
    const { config, data, status } = response
    let resData = data
    // const userStore = useUserStore()
    switch (status) {
      case 401: // token失效
        if (resData.code === 4010) {
          // userStore.logout()
        }
        break
      case 403: // 单点登录，返回500
        if (resData.code === 4005) {
          // userStore.logout()
        }
        break
      case 500:
        if (resData.code === 4000) {
          // userStore.logout()
        }
        break
    }
    Toast(resData.msg || response.msg)
    return Promise.reject(resData)
  }
)

export default service
