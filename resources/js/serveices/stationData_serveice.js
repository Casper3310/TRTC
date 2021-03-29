import { http, httpFile } from "./http_serveice";

export function createStationData(data) {
    return httpFile().post('/Station', data);
}

export function LoadStationData() {
    return http().get('/Station');
}