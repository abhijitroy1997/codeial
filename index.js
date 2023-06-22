const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'))
//use layout before router

app.use(expressLayouts);
//extract style and script from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes'));

//setting up view engine
app.set('view engine', 'ejs');
app.set('views','./views');
app.listen(port, function(err){
    if(err){
        console.log('Error:',err);
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server in running on port: ${port}`);
});

