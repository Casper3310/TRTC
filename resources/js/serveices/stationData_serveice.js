import { http, httpFile, httpToken } from "./http_serveice";

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
    return httpFile().delete(`/Device/${DeviceName}/${DeviceId}`);
}

export function UpdataDeviceData(DeviceId, data, DeviceName) {
    return httpFile().post(`/Device/${DeviceName}/${DeviceId}`, data);
}

export function LoadTempeData(dateStart) {
    return http().get(`Device/TempSenser/111`, { params: { "dateStart": dateStart } })
}
