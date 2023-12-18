import axios from 'axios';

const AxiosApi = axios.create({
  baseURL: 'https://mikhail-sergeevjs20-default-rtdb.europe-west1.firebasedatabase.app'
});

export default AxiosApi;