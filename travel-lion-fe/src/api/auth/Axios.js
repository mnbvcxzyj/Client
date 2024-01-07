import axios from 'axios';

export const createAxiosInstance = (refreshAccessToken) => {
    const instance = axios.create({
        baseURL: 'http://13.125.174.198',
    });

    instance.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                try {
                    const newAccessToken = await refreshAccessToken(); // 토큰 새로고침
                    if (newAccessToken) {
                        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken.accessToken}`;
                        return axios(originalRequest);
                    }
                } catch (e) {
                    console.error('토큰 새로고침 실패', e);
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};