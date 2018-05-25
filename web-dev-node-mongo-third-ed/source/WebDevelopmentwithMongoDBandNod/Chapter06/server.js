const express = require('express'),
    config = require('./server/configure');

var app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

const server = app.listen(app.get('port'), ()=>{
    console.log(`Server up: http://localhost: ${app.get('port')}`);
});

