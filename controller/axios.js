const axios = require("axios");

const AXIOS_CONFIG = {
  baseURL: "https://ancient-spire-15588.herokuapp.com",
  timeout: 5000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Authorization',
    'Authorization' : 'Bearer '
  },
};

const public_instance = axios.create(AXIOS_CONFIG);

const getInstance = () => {
  const token = window.localStorage.getItem("usertoken");
  if (token === null) {
    return public_instance;
  }
  return axios.create({
    ...AXIOS_CONFIG,
    headers: {
      ...AXIOS_CONFIG.headers,
      Authorization: token
    }
  });
}

module.exports = getInstance;