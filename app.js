
    const http = require('http');

    http.createServer( (request, response) => { 
        
        // request => Lo que se solicita desde cualquier cliente (mobiles, celular, pc)
        // response => Lo que retornará mi servidor al cliente

        response.writeHead(200, { 'Content-Type': 'application/json' });

        const persona = {
            id: 1,
            nombre: 'Fernando'
        };

        response.write( JSON.stringify(persona));
        response.end(); // Con .end() decimos a Node que ya terminamos nuestros procesos y no debe haber más flujo
    })
    .listen( 8080 );