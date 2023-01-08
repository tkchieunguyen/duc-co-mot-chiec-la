const express = require('express');
const path = require('path');
const handlebars = require(`express-handlebars`);
const { Console } = require('console');
const { pathToFileURL } = require('url');
const { dirname } = require('path');
const app = express();
const initWebRoute = require('./route/route');
require(`dotenv`).config();
const sql = require('./connectDB');
const port = process.env.port || 3000;

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//webRoute
initWebRoute(app); //route.js

app.listen(port, () => {
    console.log(`server dang chay tai http://localhost:${port}`)
});

