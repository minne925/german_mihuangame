
import request from '@/utils/request.js'

//获取自有货币市场价格
export const obtain_data = (data = {}) => {
    return request({
        url: '/Ajaxtrade/obtain_data',
        method: 'post',
        data,
    })
}
//获取市场交易对
export const getallcoin = () => {
    return request({
        url: '/Ajaxtrade/getallcoin',
        method: 'get',
    })
}
//获取交易网站首页
export const getTradelist = () => {
    return request({
        url: '/Trade/tradelist',
        method: 'get',
    })
}
//获取最近成交数据
export const getTransactionlist = (params) => {
    return request({
        url: '/Ajaxtrade/gettradlist',
        method: 'post',
        params,
    })
}
//获取最近成交数据
export const getCoinPrice = (data) => {
    return request({
        url: '/Ajaxtrade/getcoinprice',
        method: 'post',
        data,
    })
}
//获取市场深度数据
export const getCoinDepth = (data) => {
    return request({
        url: '/Ajaxtrade/coindepth',
        method: 'post',
        data,
    })
}
//购买数字币
export const buyCoin = (data) => {
    return request({
        url: '/Trade/upbbbuy',
        method: 'post',
        data,
    })
}
//购买数字币
export const sellCoin = (data) => {
    return request({
        url: '/Trade/upbbsell',
        method: 'post',
        data,
    })
}
//取消委托订单
export const cancelOrder = (data) => {
    return request({
        url: '/Trade/clearorder',
        method: 'post',
        data,
    })
}
//获取委托订单
export const getOrder = (params) => {
    return request({
        url: '/Trade/bborder',
        method: 'get',
        params,
    })
}
//获取委托订单历史
export const getHistoryOrder = (params) => {
    return request({
        url: '/Trade/bbhistoryorder',
        method: 'get',
        params,
    })
}
//获取委托订单历史
export const getOrderInfo = (params) => {
    return request({
        url: '/Trade/billinfo',
        method: 'get',
        params,
    })
}










