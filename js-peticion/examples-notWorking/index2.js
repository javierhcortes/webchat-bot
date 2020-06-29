var myHeaders = new Headers();
myHeaders.append("Content-type", "application/json");
myHeaders.append("X-Auth-Token", "");
myHeaders.append("X-User-Id", "");

var raw = JSON.stringify({"user":"javier","password":"admin123"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
  mode: 'no-cors'
};

fetch("http://127.0.0.1:3000/api/v1/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));