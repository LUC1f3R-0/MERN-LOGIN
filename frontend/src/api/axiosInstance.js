import axios from 'axios'

const port = import.meta.env.VITE_BACKEND_PORT
const host = import.meta.env.VITE_BACKEND_HOST

const axiosInstance = axios.create({
    baseURL: `http://${host}:${port}`,
    timeout: 5000,
    header: { 'Content-Type': 'application/json' }
})

export default axiosInstance