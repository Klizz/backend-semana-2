const http = require('http');
const path = require('path');
const express = require('express');

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/homepage.html'));
});

APP.get('/download/:img', (req, res) => {
    const image = req.params.img 
    const file = path.join(__dirname + `/images/${image}.gif`);
    res.download(file);
});

SERVER.listen(3000);