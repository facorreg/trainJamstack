const axios = require('axios');
const countries = require('./countries.json')
require('dotenv').config();

async function getNews(country) {
  const { API_NEWS_KEY: apiKey, API_NEWS_URL: url } = process.env;
  const args = `?apiKey=${apiKey}&country=${country}&pageSize=5`;
  
  try {
    const response = await axios.get(`${url}${args}`);
    return { country, articles: response.data.articles };
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function() {
  const newsPromises = countries.map(getNews);
  return Promise.all(newsPromises)
    .then(newsObjects => [].concat.apply([], newsObjects));
};
