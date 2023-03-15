import axios from 'axios'

import { apiUrl } from './variables'

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

export default api