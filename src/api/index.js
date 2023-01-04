import http from '../utils/request'
export const getData = () => {
    return http.get('./home/getData')
    // 返回一个promise 对象
}