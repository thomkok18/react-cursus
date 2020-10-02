import axios from 'axios';

const KEY = 'AIzaSyBGHqx-nBgbkmqL7wU6Zj-jrKQZazmTLKY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});