var axios = require('axios');
var data = JSON.stringify({"user":"javier","password":"admin123"});

var config = {
  method: 'post',
  url: 'http://127.0.0.1:3000/api/v1/login',
  headers: { 
    'Content-type': 'application/json', 
    'X-Auth-Token': '', 
    'X-User-Id': ''
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
