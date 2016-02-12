var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('example app listening on port 3000');
});

app.use('/', express.static(__dirname + '/app'));