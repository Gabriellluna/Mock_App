import axios from "axios";

const api = axios.create({
    baseURL: 'https://6acec205f338359cf1c3a973.mockapi.io',
    timeout: 5000,
    headers: {
        "Content-Type" : "application/json"
    }
})

export default api