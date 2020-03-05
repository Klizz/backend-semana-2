const express = require('express');
const bodyParser = require("body-parser");
const uuid = require('uuid');
const APP = express();
import products from './products';



APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const adminrouter = express.Router();

adminrouter.get('/', (req, res) => {
    console.log('GET request in places')
    res.json({ message: 'It works!' })
});

adminrouter.get('/prods', (req, res) => {
    res.json(products)
});

adminrouter.post('/newproduct', (req, res) => {
    let newProduct = req.body;
    console.log(newProduct);
    res.send(200, {message: 'El producto se ha recibido'})
});

adminrouter.delete('/delete/:id', (req, res) => {
    res.json({ message: 'delete products' })
});

adminrouter.put('/update/:id', (req, res) => {
    res.json({ message: 'update products' })
});

adminrouter.get('/allproducts', (req, res) => {
    res.json({ message: 'see all products' })
});

module.exports = adminrouter;