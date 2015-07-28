var app = require('express').createServer();
app.get('/',function(req,res){
	res.send('hello,world!');
});
app.listen(8125);
console.log("listening to http://localhost:8125");