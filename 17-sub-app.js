import http from 'http';
import express from 'express';
import productsRoutes from './online_store/productsRoutes';

const APP = express();
const PRODUCTS = express();

APP.use('/products', PRODUCTS)

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
    res.send('API HOME');
})

productsRoutes(PRODUCTS)

SERVER.listen(5000)