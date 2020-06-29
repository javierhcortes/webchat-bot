// Error de cors
var myHeaders = new Headers();
myHeaders.append("Content-type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");

var raw = JSON.stringify({"user":"myusername","password":"mypassword"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:3000/api/v1/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); 
