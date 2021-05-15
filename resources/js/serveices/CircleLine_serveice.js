import { http } from "./http_serveice";

export function LoadStationList() {
    return http().get('/Circleline_Station');
}
export function LoadDeviceList($station_id) {
    return http().get('/Circleline_Station/Device_type', { params: { station_id: $station_id } });
}