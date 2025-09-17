import request from "@/utils/request.js"
// 获取合约首页
export function getContract  (params)  {
  return request({
    url: "/Contract/index",
    method: "get",
    params
  })
}
//创建合约订单
export function creatContractOrder (data)  {
    return request({
      url: "/Contract/creatorder",
      method: "post",
      data
    })
  }
  //购买合约订单列表
export function getContractOrder ()  {
    return request({
      url: "/Contract/ctbill",
      method: "get",
    })
  }
    //购买合约订单详情
export function getContractOrderInfo (params)  {
    return request({
      url: "/Contract/cbillinfo",
      method: "get",
      params
    })
  }
      //购买合约订单详情
export function refeshContractOrderInfo (params)  {
  return request({
    url: "/Contract/gethyorder",
    method: "get",
    params
  })
}

//购买合约倒计时详情
export function getContractTimer(data)  {
  return request({
    url: "/Contract/get_hyorder_one",
    method: "post",
    data
  })
}

//获取市场交易对
export function getallcoin  () {
  return request({
      url: '/Ajaxtrade/getallcoin',
      method: 'get',
  })
}


 
  
  


