
    const http = require('http');

    http.createServer( (request, response) => { 
        
        // request => Lo que se solicita desde cualquier cliente (mobiles, celular, pc)
        // response => Lo que retornará mi servidor al cliente

        response.setHeader('Content-Disposition', 'attachment; filename=test_file.csv')
        response.writeHead(200, { 'Content-Type': 'application/csv' });

        response.write('id, nombre\n');
        response.write('1, Fernando\n');
        response.write('2, Juan\n');
        response.write('3, Pedro\n');
        response.write('4, Manuel\n');
        response.end(); // Con .end() decimos a Node que ya terminamos nuestros procesos y no debe haber más flujo
    })
    .listen( 8080 );