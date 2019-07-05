import http from '@/config/httpConfig.js'
export function fetchPermission() {
    return http.get('/api/static/permission.json')
}

export function login() {
    return http.get('/api/static/login.json')
}

