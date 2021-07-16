
    const http = require('http');

    http.createServer( (request, response) => { 
        
        // request => Lo que se solicita desde cualquier cliente (mobiles, celular, pc)
        // response => Lo que retornará mi servidor al cliente

        //response.setHeader('Content-Disposition', 'attachment; filename=test_file.csv')
        //response.writeHead(200, { 'Content-Type': 'application/csv' });

        response.write( 'Hola Mundo' );
        response.end(); // Con .end() decimos a Node que ya terminamos nuestros procesos y no debe haber más flujo
    })
    .listen( 8080 );