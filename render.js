const http = require('http');
const express = require('express');
import getImages from './getImages';

const APP = express();

APP.set('views', path.join(__dirname, 'views'));

APP.set('view engine', 'pug');

const SERVER = http.createServer(APP);

APP.get("/", (req, res) => {
    const data = { title: 'Home',
    home: 'This is home page' };
    res.render('render', data)
});

APP.get("/images", (req, res) => {
    const images = getImages();
    res.render('images', { images });
});