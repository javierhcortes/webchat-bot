module.exports = require("./lib/rocketChat").RocketChatClient;

const config = {
    protocol: "http",
    host: "127.0.0.1",
    port: "3000",
    username: "javier",
    password: "admin123"
};

const rocketChatClient = new RocketChatApi(config);

rocketChatClient.login(config.user, config.password)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error)); 
