import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:80/api/'
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("user")
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default api