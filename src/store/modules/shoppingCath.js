import { getToken, setToken } from '@/utils/auth';
import api from '@/api/index';

const shoppingCart = {
    state: {
        shoppingData: window.localStorage.getItem('vuex') ? window.localStorage.getItem('vuex') : [],
    },
    mutations: {
        COMMODITY: (state, newData) => {
            state.shoppingData = newData;
            window.localStorage.setItem('vuex', state.shoppingData)
        }
    },
    actions: {
        ADD_COMMODITY({ commit }, Data) {
            commit('COMMODITY', Data)
        }
    }
}

export default shoppingCart;