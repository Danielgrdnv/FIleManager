import axios from "axios";

//   baseURL: 'https://affilate.lettobet.dev.bet4skill.com/api',
//https://api.lettobet.dev.bet4skill.com/api
export const apiInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // changeAuth(false)
        }
        return Promise.reject(error);
    },
);