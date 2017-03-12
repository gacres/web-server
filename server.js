var express = require("express");
var middleware = require('./middleware.js');
var PORT = process.env.PORT || 3000;
var app = express();

// order is important - this needs to be first
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send("About Us!");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server started on port ' + PORT + '...')
});