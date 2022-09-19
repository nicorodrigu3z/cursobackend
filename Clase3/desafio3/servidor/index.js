const express = require('express');

const PORT  = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) =>{
    res.sernd('Esta es la pagina de inicio');
})

app.get('/login', (req, res) =>{
    res.status(404).sernd('Esta es la pagina de login')
});

app.get('*', (req, res) =>{
    res.send('<h1>La pagina que busca no existe</h1>')
})

const connectedServer = app.listen(PORT,() => {
    console.log(`Server is up running on port ${PORT}`);

});

connectedServer.on('error', (error) => {
    console.log(error.message);
});