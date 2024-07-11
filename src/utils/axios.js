import axios from 'axios'

const baseURL = 'http://localhost:3002/api/v1'

const instance = axios.create({
    baseURL: baseURL
})

export default instance;