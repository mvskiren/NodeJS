var request = require('request'); // use of request method
request(
    {
    url: 'https://api.darksky.net/forecast/8b9bd9588bdbb550822c22490a3db9d3/37.8267,-122.4233',
    json:true
},(error,response,body)=> {
 console.log(error);
 console.log('statusCode:', response && response.statusCode);
});