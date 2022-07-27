import axios from 'axios';

export const baseUrl = axios.create({
    baseURL: 'https://codewrite-api.herokuapp.com/' || process.env.REACT_APP_SERVER
  });