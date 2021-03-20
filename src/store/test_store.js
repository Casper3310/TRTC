import axios from "axios";
export default {
    namespace: true,
    state: {
        day: 0,
        header: {
            src: "1111",
            title: "集中數據管理"
        },
        list: []

    },
    mutations: {
        setday(state, day) {
            //console.log(state);
            state.day = day
        },
        setlist(state, list) {
            //console.log(state);
            state.list = list
        }
    },
    actions: {
        getlist(contact, day) {
            //console.log(contact)
            contact.commit('setday', day)
            return axios.get('/list.json').then((res) => {
                contact.commit('setlist', res.data)
            })
        }
    },
    modules: {
    }
}