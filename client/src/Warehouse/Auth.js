import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
// LOGIN ACTION
async login({ commit }, user){
    commit('auth_request');
    try {
        let res = await axios.post('https://localhost:5000/api/users/login', user);
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
    } catch(err) {
        commit('auth_error', err);
    }
},

// REGISTER USER
async register({ commit }, userData){
    try {
        commit('register_request');
            let res = await axios.post('https://localhost:5000/api/users/register', userData)
            if(res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
    } catch(err) {
        commit('register_error', err)
    }
},

//  GETTING USER PROFILE
async getProfile({ commit }) {
    commit('profile_request');
    let res = await axios.get('http://localhost:5000/api/users/profile')
    commit('user_profile', res.data.user)
    return res;
},

// LOGGING OUT USER
async logout ({ commit }) {
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
    return 
}

};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
       state.error = err.response.data.msg 
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.status = 'success'
        state.error = null
    },
    register_error(state, err) {
        state.error = err.response.data.msg 
    }, 
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = ''
        state.error = null
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};