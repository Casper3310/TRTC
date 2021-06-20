import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

function http() {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/api"
    })
}

export default new Vuex.Store({
    strict: true,
    state: {
        apiURL: 'http://127.0.0.1:8000/api',
        serverPath: 'http://127.0.0.1:8000',
        isLogin: false,
        role: ""
    },
    mutations: {
        SetLogin(state, playload) {
            const userdata = JSON.parse(localStorage.getItem("TRTC"))
            state.isLogin = false
            state.role = "vistor";
            if (localStorage.getItem('TRTC')) {
                state.isLogin = true;
                state.role = userdata.name;
            }

        }
    },
    actions: {
        SetLogin(context, playload) {
            context.commit('SetLogin', playload);
        }
    }
})
