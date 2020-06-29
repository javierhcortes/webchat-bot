var axios = require('axios');

var config = {
  method: 'GET',
  url: 'http://127.0.0.1:3000/api/info',
  headers: {},
  //data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data, null, 4));
})
.catch(function (error) {
  console.log(error);
});



// respuesta
// {
//     "version": "3.2.2",
//     "success": true
// }
