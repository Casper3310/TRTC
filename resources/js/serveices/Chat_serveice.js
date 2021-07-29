import { http, httpFile } from "./http_serveice";

export function GetUserList() {
    return http().get(`Chat/LoadChatUser`);
}

export function GetChatRoom() {
    return http().get(`Chat/Room`);
}

export function GetMessage(roomId) {
    return http().get(`Chat/Room/${roomId}/messages/`);
}

export function SendMessage(roomId, data) {
    return http().post(`Chat/Room/${roomId}/message`, data);
}

