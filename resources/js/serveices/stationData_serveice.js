import { http } from "./http_serveice";

export function createStationData(data) {
    return http().post('/Station', data);
}

export function LoadStationData() {
    return http().get('/Station');
}

export function DeleteStaionData(id) {
    return http().delete(`/Station/${id}`);
}

export function UpdataStationData(id, data) {
    return http().post(`/Station/${id}`, data);
}

export function LoadStationList() {
    return http().get('Circleline_Station')
}

export function LoadDeviceList(stationID) {
    return http().get('Circleline_Station/stationID', { params: { id: stationID } })
}
