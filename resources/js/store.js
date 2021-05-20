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
        station: [],
        StationID: 1,
        DeviceList: []
    },
    mutations: {
        SetStaion(state, station) {
            state.station = station;
        },
        SetStationID(state, StationID) {
            state.StationID = StationID
        }
    },
    actions: {
        Loadstation(context) {
            return http().get('/Circleline_Station').then(res => {
                context.commit('SetStaion', res.data);
            })
        },
        LoadDeviceList(context) {
            return http().get('/Circleline_Station').then(res => {
                context.commit('SetStaion', res.data);
            })
        }
    }
})
