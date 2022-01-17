const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Servir contenido estatico 
app.use( express.static('public'));


app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Andres',
        titulo: 'Curso Node'
    });
});

app.get('/index', function (req, res) {
    res.sendFile( __dirname + '/public/index.html');
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Andres',
        titulo: 'Curso Node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Andres',
        titulo: 'Curso Node'
    });
});

app.get('*', function (req, res) {
  res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });