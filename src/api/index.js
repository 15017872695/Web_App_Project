import request from '@/utils/request'

// 根据具体需要分类。主要是方便团队开发，容易归类
export default {    //业务中需要进行请求可以用import后，进行传参即可。
    
    // 登录
    login(data){
        return request({
            url:'/login',
            method:'POST',
            data
        })
    },

    // 获取用户信息
    getUserInfo(){
        return request({
            url:'/userinfo',
            metohd:'GET',
        })
    },

    // 获取周围信息
    getLocalStion(){
        return request({
            url:'http://restapi.amap.com/v3/batch?key=7168593a2164a8afa9599b39d46ba18d'
        })
    }
}