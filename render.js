const http = require('http');
const express = require('express');

const APP = express();

APP.set('views', './views');

APP.set('view engine', 'pug');

const SERVER = http.createServer(APP);

APP.get("/", (req, res) => {
    const data = { title: 'Home',
    home: 'This is home page' };
    res.render('index', data)
})

SERVER.listen(5000);