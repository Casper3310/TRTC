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
        User: {},
    },
    mutations: {
        SetUser(state, playload) {
            state.User = playload;
        }
    },
    actions: {
        SetUser(context, playload) {
            context.commit('SetUser', playload);
        }
    }
})
