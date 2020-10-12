import axios from 'axios';
import key from "./key";

// Go to https://console.developers.google.com/apis/dashboard.
const KEY = key;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});