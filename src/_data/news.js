const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  const { API_NEWS_KEY: apiKey, API_NEWS_URL: url } = process.env;
  const args = `?apiKey=${apiKey}&country=fr&pageSize=5`;
  
  try {
    const response = await axios.get(`${url}${args}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
