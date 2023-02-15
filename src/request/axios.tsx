const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://realtor.p.rapidapi.com/locations/v2/auto-complete',
  params: {input: 'new york', limit: '10'},
  headers: {
    'X-RapidAPI-Key': '2c5a025cc6mshf1d33dcc5f6ed23p1b80adjsnd0d7944b2147',
    'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});