import { http } from "./http_serveice";

export function LoadStationList() {
    return http().get('/Circleline_Station');
}