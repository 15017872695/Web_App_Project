// 该文件为与业务相关
import {getToken,setToken} from '@/utils/auth';
import api from '@/api/index';

const user = {
    //存放状态的地方(数据)
    state: {
        token:getToken(),
    },
    //Vuex中唯一可处理状态的地方
    mutations: {
        SET_TOKEN:(state,newToken) => {
            state.token = newToken;
        },
    },
    // 为了解决mutations不能异步的问题
    actions: {
        // 登录
        LOGIN({commit},userInfo){
            return new Promise((resolve, reject) => {
                api.login(userInfo).then(res => {
                    if(res.code === 200){
                        setToken(res.data)
                        // 提交mutations，并且异步获取到的数据传递到mutations中
                        commit('SET_TOKEN',res.data)
                    }
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user;