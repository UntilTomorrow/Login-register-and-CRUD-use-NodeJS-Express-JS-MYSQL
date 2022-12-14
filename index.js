// Definisi Library yang digunakan
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();

// Definisi lokasi file router
const loginRoutes = require('./src/routes/router-login');
const registerRoutes = require('./src/routes/router-register');
const appRoutes = require('./src/routes/router-app');
const storeRoutes = require('./src/routes/router-store');
const absensiRoutes = require('./src/routes/router-absensi');
const tambahRoutes = require('./src/routes/router-tambah');
const editRoutes = require('./src/routes/router-edit');

// Configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 't@1k0ch3ng',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 60000
    },
}))

// Configurasi dan  library
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash());

app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});

//  folder views
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');


// Routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', appRoutes);
app.use('/store', storeRoutes);
app.use('/absensi', absensiRoutes);
app.use('/tambah',tambahRoutes);
app.use('/edit', editRoutes);


//  port server
app.listen(5050, ()=>{
    console.log('Server Berjalan di Port : '+5050);
});
