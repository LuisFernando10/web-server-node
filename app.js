const express = require('express')
const app = express();
const port = 8080;

// Servir contenido estático
app.use(express.static('public') );

app.get('/inicio', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
});

app.get('/elementos', (req, res) => {
    res.sendFile(__dirname + '/public/views/elements.html')
});

app.get('/genericos', (req, res) => {
    res.sendFile(__dirname + '/public/views/generic.html')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/views/404.html')
});
 
app.listen( port, () => {
    console.log(`Página escuchándose en http://localhost:${ port }`);
});