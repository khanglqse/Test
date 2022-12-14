export const baseUrl = process.env.ENDPOINT_PROD;

export const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization, x-access-token",
        "Access-Control-Expose-Headers": "*, Content-Length, X-JSON",
        "Cache-Control": "public, max-age=86400"
        // "Content-Type": "multipart/form-data"
        // 'x-access-token': localStorage.token
    }
};