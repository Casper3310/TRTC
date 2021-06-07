import { http, httpFile } from "./http_serveice";

export function LoadStationList() {
    return http().get('Circleline_Station')
}


export function LoadDeviceData(stationID, DeviceName) {
    return http().get(`Device/${DeviceName}/${stationID}`, { params: { stationID: stationID } })
}

export function createDeviceData(data, DeviceName) {
    return httpFile().post(`/Device/${DeviceName}`, data);
}

export function DeleteDeviceData(DeviceId, DeviceName) {
    return http().delete(`/Device/${DeviceName}/${DeviceId}`);
}

export function UpdataDeviceData(DeviceId, data, DeviceName) {
    return http().post(`/Device/${DeviceName}/${DeviceId}`, data);
}