import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    day: 0,
    header: {
      src: "",
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
})
