import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080/file/upload',
    headers: {
        'content-type': 'application/json',
    }
});