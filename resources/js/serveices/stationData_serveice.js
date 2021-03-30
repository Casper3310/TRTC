import { http } from "./http_serveice";
import axios from 'axios';

export function createStationData(data) {
    return http().post('/Station', data);
}

export function LoadStationData() {
    return http().get('/Station');
}

export function DeleteStaionData(id) {
    return http().delete(`/Station/${id}`);
}