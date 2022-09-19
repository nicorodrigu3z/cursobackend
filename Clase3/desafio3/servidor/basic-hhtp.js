const http = require('http');

const PORT = process.env.PORT || 8080;

// createServer
const server = http.createServer((req, rest) => {
    console.log("El cliente realizo una peticion");
    console.log(req.url, req.method);
    if ( req.url === '/' && req.method === 'GET'){
        res.end('Soy la pagina de inicio')
    }
    else if(req.url === '/login') {
       res.end('Soy la pagina de login')
    }
    else{
        res.write('Hola a todos');
        res.end('Chau')
    }
    
    res.write('Hola mundo');
    res.end();
});

//listen
const connectedServer = server.listen(PORT, () => {
     console.log('Servidor activo y escuchando en el puerto' + PORT);
});

