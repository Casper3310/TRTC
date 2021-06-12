import { http, httpFile } from "./http_serveice";

export function Register(RegisterData) {
    return http().post('auth/register', RegisterData);
}

export function Login(LoginData) {
    return http().post('auth/login', LoginData);
}

export function Logout() {
    return http().get('auth/logout');
}
