import Cookies from 'js-cookie'

// token
const TokenKey = 'token'
// 获取令牌
export function getToken() {
    return localStorage.getItem(TokenKey)
}
// 设置令牌
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}
// 删除令牌
export function removeToken() {
    return Cookies.remove(TokenKey)
}

// userID
const userIDKey = 'TRADE_WEB_UID'
// 获取id
export function getUid() {
    return Cookies.get(userIDKey)
}
// 设置id
export function setUid(id) {
    return Cookies.set(userIDKey, id)
}
// 删除id
export function removeUid() {
    return Cookies.remove(userIDKey)
}