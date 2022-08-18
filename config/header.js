export const baseUrl = 'http://localhost:5000/api/';

export const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization, x-access-token",
        "Access-Control-Expose-Headers": "Content-Length, X-JSON",
        // 'x-access-token': localStorage.token
    }
};