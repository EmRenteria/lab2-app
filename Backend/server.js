const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //creates a new application to build server
const port = 8000; //creating a variable port that server will run on

//running a method on app, telling what port to use, shorthand to writing a function in JS
require('./app/routes')(app, {});
app.listen(port, () => { 
    console.log('We are live on ' + port);
});