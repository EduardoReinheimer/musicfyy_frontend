import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Make axios good with django csrf
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
    state: {
        authuser: {},
        isAuthenticated: false,
        jwt: localStorage.getItem('token'),
        APIData: '',
        endpoints: {
            obtainJWT: 'https://musicfyy.herokuapp.com/api/v1/auth/obtain_token/',
            refreshJWT: 'https://musicfyy.herokuapp.com/auth/refresh_token/',
            baseUrl: 'https://musicfyy.herokuapp.com/'
        }
    },
    mutations: {
        setAuthUser(state, {
            authUser,
            isAuthenticated
        }) {
            Vue.set(state, 'authUser', authUser)
            Vue.set(state, 'isAuthenticated', isAuthenticated)
        },
        updateToken(state, newToken){
            localStorage.setItem('token', newToken);
            state.jwt = newToken;
        },
        removeToken(state) {
            localStorage.removeItem('token');
            state.jwt = null;
        }
    }
})