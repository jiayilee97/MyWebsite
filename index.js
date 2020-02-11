/*const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})

app.listen(3000, () => console.log('Server running on port 3000'))
*/

/*
const express = require('express')
const app = express()

app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))*/




var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/letsencrypt/live/www.leejiayi.net/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/www.leejiayi.net/fullchain.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here
app.use(express.static('public'))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => console.log('Server running on port 8080'));
httpsServer.listen(8443);
