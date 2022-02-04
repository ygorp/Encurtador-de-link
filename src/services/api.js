
import axios from 'axios';

export const key = "e89d46bb05603847969c4d3060e69a78a62c9f6a"

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;

//minha chave e89d46bb05603847969c4d3060e69a78a62c9f6a
