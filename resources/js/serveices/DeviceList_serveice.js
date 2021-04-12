import { http } from "./http_serveice";

export function LoadDeviceList() {
    return http().get('/DeviceList');
}

export function DeviceType() {
    return http().get('/DeviceList');
}