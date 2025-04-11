import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '127.0.0.1',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})

export default axiosInstance