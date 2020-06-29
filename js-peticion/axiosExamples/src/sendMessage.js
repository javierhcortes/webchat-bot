var axios = require('axios');
var data = JSON.stringify({"channel":"#general","text":"Hola buenos dias"});

var config = {
  method: 'POST',
  url: 'http://127.0.0.1:3000/api/v1/chat.postMessage',
  headers: { 
    'Content-type': 'application/json', 
    'X-Auth-Token': 'YBQgTvSVSIKrSSkKIHtH4WOQYUZ8hL4P3_GJOJU9Ifh', 
    'X-User-Id': 'FuSstne5wx92LmRKF'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data, null, 4));
})
.catch(function (error) {
  console.log(error);
});



