import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());

const publicKey = '45198836fc7ba50e9fc8013b17615ea7';
const privateKey = '76706385bbd4e8b795fd52f047673e2fb86ae29e';

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params:{
        ts,
        apikey: publicKey,
        hash,
    },
});

export default api;