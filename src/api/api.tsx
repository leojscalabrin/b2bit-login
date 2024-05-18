import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br',
  headers: {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 400) {
      alert('Bad Request: ' + error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export default api;