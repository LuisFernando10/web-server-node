const express = require('express')
const app = express();
const port = 8080;

// Servir contenido estático
app.use(express.static('public') );

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde la ruta correcta')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});
 
app.listen( port, () => {
    console.log(`Página escuchándose en http://localhost:${ port }`);
});