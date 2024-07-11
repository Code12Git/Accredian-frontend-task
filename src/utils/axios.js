import axios from 'axios'

const baseURL = 'https://accredian-backend-task-uo3e.onrender.com/api/v1'

const instance = axios.create({
    baseURL: baseURL
})

export default instance;