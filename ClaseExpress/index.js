const express = require('express');

const { products } = require('./data')

const PORT = process.env.PORT || 8080;

const app = express();

// RUTAS

app.get('/', (req, res, next) => {
   // res.send({ name: "Jorge"});
    res.json({ name: "Jorge"});
});

app.get('/products', (req, res, next) =>{
    console.log(req.query);
    const { precio = 999999999 } = req.query;
    const precioNumber = +(precio);
    const resProducts = products.filter((product) =>   product.precio < precioNumber);
    res.json(resProducts);
});

app.post('/products', (req, res, next) => {
    console.log(req.body);
    res.send('OK');
})

app.get('/products/:id', (req, res, next) => {
    //path params
    console.log(req.params);
    const { id } =req.params;
    const product = products.find((product) => product.id === +(id));
    res.json(product);
});

const connectedServer = app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) =>{
    console.log(error.message);
});