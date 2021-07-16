
    const http = require('http');

    http.createServer( (request, response) => {

        response.write( 'Hola munidollo' );
        response.end();
    })
    .listen( 8080 );

    console.log('Escuchando desde:', 8080);