require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// HandleBars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials/');

// Servir contenido estático
app.use(express.static('public') );

app.get('/', (req, res) => {
    res.render( 'home', {
        nombre: 'Luis Fernando',
        titulo: 'Curso Node.js'
    });
});

app.get('/genericos/', (req, res) => {
    res.render( 'generics', {
        nombre: 'Luis Fernando',
        titulo: 'Curso Node.js'
    });
});

app.get('/elementos/', (req, res) => {
    res.render( 'elements', {
        nombre: 'Luis Fernando',
        titulo: 'Curso Node.js'
    });
});

app.get('*', (req, res) => {
    res.render( '404' );
});
 
app.listen( port, () => {
    console.log(`Página escuchándose en http://localhost:${ port }`);
});