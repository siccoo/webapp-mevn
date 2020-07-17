import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
};

const getters = {
    // isLoggedIn: function(state) {
    //     if(state.token != '') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user
};

const actions = {
// LOGIN ACTION
async login({ commit }, user){
    commit('auth_request');
    let res = await axios.post('https://localhost:5000/api/users/login')
    if(res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        
        // Store the token into the localStorage
        localStorage.setItem('token', token);
        
        // SETTING AXIOS DEFAULT
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
    }
    return res;
}
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};