import { http, httpFile } from "./http_serveice";

export function LoadStationList() {
    return http().get('Circleline_Station')
}

export function LoadDeviceList(stationID) {
    return http().get('Circleline_Station/stationID', { params: { id: stationID } })
}

export function LoadDeviceData(selectData) {
    return http().get('/Device/DeviceData', { params: { Circleline_Station_id: selectData.stationID, device_types_id: selectData.deviceID } });
}

export function createDeviceData(data) {
    return httpFile().post('/Device', data);
}

export function DeleteDeviceData(DeviceId) {
    return http().delete(`/Device/${DeviceId}`);
}

export function UpdataDeviceData(DeviceId, data) {
    return http().post(`/Device/${DeviceId}`, data);
}