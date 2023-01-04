import Mock from 'mockjs'

// 定义mock 请求拦截
Mock.mock('/api/home/getData', function () {
    // 拦截到请求后的逻辑
    console.log('拦截到了');
})