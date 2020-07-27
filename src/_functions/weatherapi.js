const axios = require('axios');

exports.handler = async function(event, _, callback) {
  const { WEATHER_API_URL, WEATHER_API_KEY } = process.env;
  const { lat, long } = event.queryStringParameters;

  const url = `${WEATHER_API_URL}?lat=${lat}&lon=${long}&units=metric&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data),
  });
};
