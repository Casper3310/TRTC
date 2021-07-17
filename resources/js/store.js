import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);
/*
function http() {
    return axios.create({
        baseURL: "http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com/api"
    })
}
*/
function http() {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/api"
    })
}
export default new Vuex.Store({
    state: {
        apiURL: 'http://127.0.0.1:8000/api',
        serverPath: 'http://127.0.0.1:8000',
        isLogin: false,
        role: ""
    },
    /*
        state: {
            apiURL: 'http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com/api',
            serverPath: 'http://ec2-18-181-184-3.ap-northeast-1.compute.amazonaws.com',
            isLogin: false,
            role: "",
        },*/

    mutations: {
        SetLogin(state, playload) {

            state.isLogin = false
            state.role = "vistor";
            if (localStorage.getItem('TRTC')) {
                const userdata = JSON.parse(localStorage.getItem("TRTC"))
                state.isLogin = true;
                state.role = userdata.token_scopes;
            }

        }
    },
    actions: {
        SetLogin(context, playload) {
            context.commit('SetLogin', playload);
        }
    }
})
