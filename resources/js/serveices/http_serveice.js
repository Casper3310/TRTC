import axios from 'axios';
import store from "../store";

export function http() {
    return axios.create({
        baseURL: store.state.apiURL,
    })
}

export function httpFile() {
    const Token = JSON.parse(localStorage.getItem("TRTC"));
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: "Bearer " + Token.accessToken
        }
    })
}

export function httpToken() {
    const Token = JSON.parse(localStorage.getItem("TRTC"));
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            Authorization: "Bearer " + Token.accessToken
        }
    })
}