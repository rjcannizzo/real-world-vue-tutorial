import axios from 'axios'

const BASE_URL = 'https://my-json-server.typicode.com/rjcannizzo/real-world-vue-tutorial'

const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        // /events is added to the baseURL
        return apiClient.get('/events')
    },

    getEvent(id) {
        // /events is added to the baseURL
        return apiClient.get(`/events/${id}`)
    }
}
