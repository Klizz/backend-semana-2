const http = require('http');
const path = require('path');
const express = require('express');

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
    res.send('<h2  style="color: crimson">Hello world </h2>');
});

APP.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

APP.get('/cookies', (req, res) => {
    res.cookie('i-follow-you', 'hello', { expires: new Date(Date.now() + 10000) });
    res.end();
});

APP.get('/headers', (req, res) => {
    res.set({
        a: 1,
        b: 2,
        c: 3
    });
    res.end();
});

APP.get('/redirect', (req, res) => {
    res.redirect('/hello');
});

APP.get('/users/:id', (req, res) =>{
    if (req.params.id === "x") {
        res.send('user found')
    } else {
        res.sendStatus(404);
    }
});

APP.get('/download', (req, res) => {
    const file = path.join(__dirname + '/images/img1.gif');
    res.download(file);
});

SERVER.listen(3000);