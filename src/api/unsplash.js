import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID YOUR_API_ACCESS'
    }
});

export default unsplash;