import { http, httpFile } from "./http_serveice";
let userlist = [{ "name": "aaa", "revoke": 0 }, { "name": "bbb", "revoke": 1 }, { "name": "ccc", "revoke": 1 }, { "name": "aaa", "revoke": 1 }, { "name": "bbb", "revoke": 0 }, { "name": "ccc", "revoke": 1 }, { "name": "aaa", "revoke": 0 }, { "name": "bbb", "revoke": 1 }, { "name": "ccc", "revoke": 0 }
]
export function GetUserList() {
    return userlist;
    return http().get(`Device}`)
}

export function createDeviceData(data, DeviceName) {
    return httpFile().post(`/Device/${DeviceName}`, data);
}

export function DeleteDeviceData(DeviceId, DeviceName) {
    return httpFile().delete(`/Device/${DeviceName}/${DeviceId}`);
}

