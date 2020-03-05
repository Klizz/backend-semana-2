import http from 'http';
import express from 'express';

const ROUTES = require('./online_store/adminRoutes');

const APP = express();

APP.use(ROUTES);


const SERVER = http.createServer(APP);

SERVER.listen(4000)